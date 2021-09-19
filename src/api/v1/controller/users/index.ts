import { Request, Response } from "express";
import { redisClient } from "../../config/redisConfig";

async function setUserCache(req: Request, res: Response) {
  const exampleData = {
    user_id: 55,
    balance: 1200000,
  };

  const setCache = await redisClient.set(
    `user_id:55`,
    JSON.stringify(exampleData)
  );

  res.json(setCache);
}

async function getUserCache(req: Request, res: Response) {
  redisClient.get(`user_id:55`, (err, data) => {
    if (data) {
      const parsedData = JSON.parse(data);
      res.json(parsedData);
    }
  });
}

export { setUserCache, getUserCache };
