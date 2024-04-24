import { credentialEntity } from "../config/data-source";
import CredentialsDto from "../dto/CredentialsDto";
import { Credential } from "../entities/Credential";
import { httpError } from "../utils/httpError";



const id: number = 11;


export const createCredentialsService = async (credentials:CredentialsDto):Promise<Credential> => {

  await credentialEntity.create(credentials);
  const result = await credentialEntity.save(credentials);

  return result;
};

export const verifyUserCredentials = async (loginData:CredentialsDto):Promise<number> => {
  const verifyLoginData = await credentialEntity.findOne({
    where:{userName:loginData.userName, password:loginData.password}
  });

  if (verifyLoginData) return verifyLoginData.id;
  else throw new httpError ("Inicio de sesión fallido, no coinciden Usuario y Contraseña", 400);
};