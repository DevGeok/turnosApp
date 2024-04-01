"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
const auth_1 = __importDefault(require("../middlewares/auth"));
const userRouter = (0, express_1.Router)();
userRouter.get("/", auth_1.default, usersController_1.getUsers);
userRouter.get("/users:id", auth_1.default, getUserById);
userRouter.post("/register", usersController_1.createUser);
userRouter.delete("/login", userLogin);
exports.default = userRouter;
