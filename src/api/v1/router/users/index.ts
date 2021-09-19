import { Router } from "express";
import { users } from "../../controller";

async function userRoutes(router: Router) {
  router.get("/setUserCache", users.setUserCache);
  router.get("/getUserCache", users.getUserCache);
}

export default userRoutes;
