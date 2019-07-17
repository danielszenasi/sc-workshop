const fs = require('fs');
const klaw = require('klaw');
const path = require('path');
const matter = require('gray-matter');
const remark = require('remark');
const recommended = require('remark-preset-lint-recommended');
const html = require('remark-html');
const React = require('react');
const axios = require('axios');
const _ = require('lodash');
const slugify = require('slugify');
import querystring from 'query-string';
import { makePageRoutes } from 'react-static/node';
const Redis = require('ioredis');
const redis = new Redis({
  port: 11592, // Redis port
  host: 'redis-11592.c24.us-east-mz-1.ec2.cloud.redislabs.com', // Redis host
  password: process.env.REDIS_PASSWORD
});

function getPosts() {
  const items = [];
  // Walk ("klaw") through posts directory and push file paths into items array //
  const getFiles = () =>
    new Promise(resolve => {
      // Check if posts directory exists //
      if (fs.existsSync('./src/pages/blog')) {
        klaw('./src/pages/blog')
          .on('data', async item => {
            // Filter function to retrieve .md files //
            if (path.extname(item.path) === '.md') {
              // If markdown file, read contents //
              const data = fs.readFileSync(item.path, 'utf8');
              // Convert to frontmatter object and markdown content //
              const dataObj = matter(data);
              // Create slug for URL //
              dataObj.data.slug = dataObj.data.title
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '');

              const htmlContent = await new Promise(resolve => {
                remark()
                  .use(recommended)
                  .use(html)
                  .process(dataObj.content, function(err, file) {
                    resolve(String(file));
                  });
              });

              // Remove unused key //
              delete dataObj.orig;
              delete dataObj.content;
              // Push object into items array //
              items.push({ ...dataObj, html: htmlContent });
            }
          })
          .on('error', e => {
            console.log(e);
          })
          .on('end', () => {
            // Resolve promise for async getRoutes request //
            // posts = items for below routes //
            resolve(items);
          });
      } else {
        // If src/posts directory doesn't exist, return items as empty array //
        resolve(items);
      }
    });
  return getFiles();
}

export default {
  Document: ({ Html, Head, Body, children, state: { siteData, renderMeta } }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <script
          type="text/javascript"
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        />
      </Head>

      <Body>{children}</Body>
    </Html>
  ),
  getRoutes: async ({ incremental }) => {
    if (incremental) {
      return buildIncremental();
    }
    let maxPages = 200;
    let currentPage = 1;
    let listingsCamelCase = [];
    while (currentPage <= maxPages + 1) {
      const params = {
        apikey: process.env.RLS_API,
        page: currentPage,
        limit: 20,
        order: 'date',
        sort: 'desc',
        includeContacts: true,
        status: `1`
      };
      const query = querystring.stringify(params);
      const response = await axios.get(`http://dataapi.realtymx.com/listings/?${query}`);

      const { LISTINGS, TOTAL_COUNT } = response.data;

      listingsCamelCase = listingsCamelCase.concat(
        LISTINGS.map(l => _.mapKeys(l, (v, k) => _.camelCase(k))).map(li => ({
          ...li,
          slug: slugify(li.address)
        }))
      );

      if (maxPages === 0) {
        // maxPages = Math.ceil(TOTAL_COUNT / 20);
      }

      currentPage++;
    }

    addToRedis(listingsCamelCase);

    const posts = await getPosts();
    return [
      {
        path: '/blog',
        getData: () => ({
          posts
        }),
        children: posts.map(post => ({
          path: `/post/${post.data.slug}`,
          template: 'src/containers/Post',
          getData: () => ({
            post
          })
        }))
      },
      // Make an index route for every 5 blog posts
      ...makePageRoutes({
        items: listingsCamelCase,
        pageSize: 5,
        pageToken: 'page', // use page for the prefix, eg. blog/page/3
        route: {
          // Use this route as the base route
          path: 'listings',
          template: 'src/sites/listings'
        },
        decorate: (listings, i, totalPages) => ({
          // For each page, supply the posts, page and totalPages
          getData: () => ({
            listings,
            currentPage: i,
            totalPages
          })
        })
      }),
      // Make the routes for each blog post
      ...listingsCamelCase.map(listing => ({
        path: `/listings/${listing.slug}`,
        template: 'src/containers/Listing',
        getData: () => ({
          listing
        })
      }))
    ];
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/sites')
      }
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap')
  ]
};

async function buildIncremental() {
  const params = {
    apikey: '314b36474e78364f',
    page: currentPage,
    limit: 20,
    order: 'date',
    sort: 'desc',
    includeContacts: true,
    status: `1`,
    updated_since: '07/10/2019T12:00'
  };
  const query = querystring.stringify(params);
  const response = await axios.get(`http://dataapi.realtymx.com/listings/?${query}`);

  const { LISTINGS, TOTAL_COUNT } = response.data;

  const listingsCamelCase = LISTINGS.map(l => _.mapKeys(l, (v, k) => _.camelCase(k))).map(li => ({
    ...li,
    slug: slugify(li.address)
  }));

  addToRedis(listingsCamelCase);

  return [
    ...listingsCamelCase.map(listing => ({
      path: `/listings/${listing.slug}`,
      template: 'src/containers/Listing',
      getData: () => ({
        listing
      })
    }))
  ];
}

function addToRedis(listingsCamelCase) {
  listingsCamelCase.forEach(listing => {
    redis.sadd(listing.propertyType, listing.slug);
    redis.sadd(listing.neighborhoods, listing.slug);
    redis.zadd('bedrooms', listing.bedrooms, listing.slug);
    redis.zadd('price', listing.price, listing.slug);

    const photo = listing.photos && listing.photos.length > 0 ? listing.photos[0].PHOTO_URL : null;

    redis.hmset(
      listing.slug,
      'propertyType',
      listing.propertyType,
      'neighborhoods',
      listing.neighborhoods,
      'bedrooms',
      listing.bedrooms,
      'bathrooms',
      listing.bathrooms,
      'price',
      listing.price,
      'address',
      listing.address,
      'photo',
      photo,
      'latitude',
      listing.latitude,
      'longitude',
      listing.longitude
    );
  });
}
