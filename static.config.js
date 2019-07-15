const fs = require('fs');
const klaw = require('klaw');
const path = require('path');
const matter = require('gray-matter');
const remark = require('remark');
const recommended = require('remark-preset-lint-recommended');
const html = require('remark-html');

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
  getRoutes: async () => {
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
      }
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
