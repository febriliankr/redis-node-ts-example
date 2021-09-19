import { Request, Response } from "express";
import express from "express";
import userRoutes from "./users";

var router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  res.send({
    message: "You are at the root directory",
    routes: ["/api/product", "/api/user"],
  });
});

function activateRoutes() {
  userRoutes(router);
}

activateRoutes();

export default router;
