import { Router } from "express";
import { createUser, getUsers, getUserById, userLogin } from "../controllers/usersController";
import auth from "../middlewares/auth";


const userRouter: Router = Router();



userRouter.get("/", getUsers);
userRouter.get("/user/:id", auth, getUserById);
userRouter.post("/register", createUser);
userRouter.post("/login", userLogin);

export default userRouter;