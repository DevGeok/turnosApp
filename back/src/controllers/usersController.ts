import { getUsersService, createUserService, getUserByIdService } from "../services/userServices";
import { Request, Response } from "express";
import { verifyUserCredentials } from "../services/credentialServices";
import { User } from "../entities/User";
import catchAsync from "../utils/catshAsync";
import { userRepo } from "../repositories/userRepo";


export const createUser = async (req:Request , res:Response) => {
  const newUser: User = await createUserService(req.body);
  res.status(201).json({message:"User created successfully", newUser:newUser});
};

export const getUsers = async (req:Request , res:Response) => {
  const users:User[] = await getUsersService();
  res.status(201).json(users);
};

export const getUserById =  catchAsync(async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.id);
  const userWanted: User | undefined = await getUserByIdService(userId);
  res.status(200).json({ message: "Usuario Encontrado", userWanted: userWanted });
});


export const userLogin =  catchAsync(async (req:Request , res:Response) => {
  const credentialsID: number | undefined = await verifyUserCredentials(req.body);
  res.status(200).json({
    login:true,
    user: await userRepo.findCredentialsUser(credentialsID)
  });
});

