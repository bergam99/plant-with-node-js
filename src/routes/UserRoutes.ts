import { Router } from "express";
import { UserController } from "../controllers/UserControllers";

const userController = new UserController();
const userRouter = Router();

userRouter.post("/signup", (req, res) => {
  console.log("UserRouter");
  userController.signup(req, res);
});

userRouter.post("/login", (req, res) => {
  console.log("UserRouterLogin");
  userController.login(req, res);
});

export default userRouter;
