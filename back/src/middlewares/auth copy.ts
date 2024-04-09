import { Request, Response, NextFunction } from "express";
import { credentials } from "../services/credentialServices";
import ICredential from "../Interfaces/ICredential";



export const checkCredentials = async (req: Request, res: Response, next: NextFunction):Promise<number | undefined> => {
  const credentialsWanted: ICredential | undefined = credentials.find((credentials: ICredential) => credentials.userName === req.body.userName);

  if (credentialsWanted === undefined) return undefined;

  if (credentialsWanted.password === req.body.password) {
    console.log("Usuario y Contraseña correctos, el id de las credenciales es", credentialsWanted.id);
    next();
    return credentialsWanted.id;
  }
  else return undefined;
};