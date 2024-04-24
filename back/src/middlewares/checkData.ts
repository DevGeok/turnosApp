import { Request, Response, NextFunction } from "express";

export const checkData = async (req:Request, res: Response, next: NextFunction):Promise<void> => {
  const {name, email, birthdate, userName, password } = req.body;
  if (!name || ! email || !birthdate || !userName || !password) res.status(400).json({message:"Datos incorrectos o faltan datos"});
  else next();
};

