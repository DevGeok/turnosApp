import { getUsersService, createUserService, getUserByIdService } from "../services/userServices";
import { Request, Response } from "express";
import IUser from "../Interfaces/IUser";


export const createUser = async (req:Request , res:Response) => {
  const newUser: IUser = await createUserService(req.body);
  res.status(201).json({message:"User created successfully", newUser:newUser});
};

export const getUsers = async (req:Request , res:Response) => {
  const users:IUser[] = await getUsersService();
  res.status(201).json(users);
};

export const getUserById = async (req:Request , res:Response) => {
  const userId:number = parseInt(req.params.id);
  console.log(req.params.id);

  const userWanted:IUser | undefined = await getUserByIdService(userId);
  res.status(201).json({message:"Usuario Encontrado", userWanted:userWanted});
};

export const userLogin = async (req:Request , res:Response) => {
  res.status(201).json({message:"Inicio de sesión Exitosa"});
};