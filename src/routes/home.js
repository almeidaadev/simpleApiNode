import { Router } from "express";

const routerHome = Router();

routerHome.get("/", (req, res) => {
  res.send("Hello world;");
});

export default routerHome;
