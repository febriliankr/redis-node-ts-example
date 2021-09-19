import redis from "redis";
import dotenv from "dotenv";
dotenv.config();
const redis_url = process.env.redis_heroku_url;
const redisClient = redis.createClient(redis_url);

async function getCachedAPI(req, res, next) {
  const { redis_key } = req.headers;
  redisClient.get(redis_key, function (err, reply) {
    if (err) {
      res.status(500).json({
        message: "Somethin Went Wrong",
      });
    }
    if (reply == null) {
      next();
    } else {
      res.status(200).json({
        message: `Success Read ${redis_key}`,
        data: JSON.parse(reply),
      });
    }
  });
}

async function getCached(key) {
  redisClient.get(key, async (err, jobs) => {
    if (err) throw err;
  });
}

async function redisSetSellerBalance(seller_id, balance) {
  const set = await redisClient.HSET(`seller:${seller_id}`, "balance", balance);
  return set;
}
async function setCache(key, data) {
  const set = await redisClient.set(key, JSON.stringify(data), {
    EX: 10,
    NX: true,
  });
  return set;
}

async function deleteCache(key) {
  const del = redisClient.del(key);
  return del;
}

export { getCached, setCache, deleteCache, redisSetSellerBalance, redisClient };
