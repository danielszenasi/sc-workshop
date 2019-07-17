const Redis = require('ioredis');
const redis = new Redis({
  port: 11592, // Redis port
  host: 'redis-11592.c24.us-east-mz-1.ec2.cloud.redislabs.com', // Redis host
  password: process.env.REDIS_PASSWORD
});

exports.handler = async (event, context) => {
  try {
    const type = event.queryStringParameters.type;
    const neighborhood = event.queryStringParameters.neighborhood;

    if (Array.isArray(neighborhood)) {
      redis.sunionstore('neighborhoodUnion', ...neighborhood);
    }

    const neighbourhoodSet = Array.isArray(neighborhood) ? 'neighborhoodUnion' : neighborhood;
    let sets = [neighbourhoodSet, type];

    const minPrice = event.queryStringParameters.minprice;
    const maxPrice = event.queryStringParameters.maxprice;

    const minBedrooms = event.queryStringParameters.minbedrooms;
    const maxBedrooms = event.queryStringParameters.maxbedrooms;

    redis.defineCommand('zstorebyscore', {
      numberOfKeys: 2,
      lua: `local t = redis.call('zrangebyscore', KEYS[1], ARGV[1], ARGV[2], 'withscores')
local i = 1
for i=1, #t-1, 2 do
    t[i],t[i+1] = t[i+1],t[i]
end
if #t > 0 then redis.call('sadd', KEYS[2], unpack(t)) end`
    });

    if (minPrice && maxPrice) {
      const min = minPrice * 1000000;
      const max = maxPrice * 1000000;
      await redis.zstorebyscore('price', 'priceSet', min, max);
      sets = [...sets, 'priceSet'];
    }

    if (minBedrooms && maxBedrooms) {
      await redis.zstorebyscore('bedrooms', 'bedroomsSet', minBedrooms, maxBedrooms);
      sets = [...sets, 'bedroomsSet'];
    }

    const result = await redis.sinter(...sets);

    const listings$ = result.map(async slug => {
      const data = await redis.hgetall(slug);
      return { ...data, slug };
    });

    const listings = await Promise.all(listings$);

    return {
      statusCode: 200,
      body: JSON.stringify(listings)
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
