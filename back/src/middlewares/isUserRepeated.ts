import { Request, Response, NextFunction } from "express";
import { credentialEntity } from "../config/data-source";

export const isUserRepeated = async (req:Request, res: Response, next: NextFunction):Promise<void> => {

  const verifyUserName = await credentialEntity.findOne({
    where: {userName:req.body.userName}
  });
  if (verifyUserName) res.status(400).json({message:"Ya existe este usuario"});
  else next();
};