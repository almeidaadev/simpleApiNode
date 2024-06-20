// import infoPerson from "../controllers/userController";
import { Router } from "express";

const routerUser = Router();

routerUser.post("/users", (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
});

export default routerUser