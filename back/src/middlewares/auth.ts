import { Request, Response, NextFunction } from "express";

const auth = (req: Request, res: Response, next: NextFunction):void => {
  const {token} = req.headers;
  if (token === "autenticado") next();
  else res.status(400).send({message:"Usuario no autenticado"});

};

export default auth;