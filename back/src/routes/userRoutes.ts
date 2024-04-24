import { Router } from "express";
import { createUser, getUsers, getUserById, userLogin } from "../controllers/usersController";
import { isUserRepeated } from "../middlewares/isUserRepeated";
import { checkData } from "../middlewares/checkData";


const userRouter: Router = Router();



userRouter.get("/", getUsers);
userRouter.get("/user/:id", getUserById);
userRouter.post("/register", checkData, isUserRepeated, createUser);
userRouter.post("/login", userLogin);

export default userRouter;