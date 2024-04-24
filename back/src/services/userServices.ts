import { AppDataSource, userEntity } from "../config/data-source";
import UserDto from "../dto/UserDto";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import { httpError } from "../utils/httpError";
import { createCredentialsService } from "./credentialServices";



const id: number = 2;

export const getUsersService = async ():Promise<User[]> => {
  const user: User[] = await userEntity.find();
  return user;
};

export const getUserByIdService = async (id: number): Promise<User> => {
  const verifyUser: User | null = await userEntity.findOne({
    where: { id: id },
    relations: { appointments: true }
  });
  if (verifyUser) return verifyUser;
  else throw new httpError ("No existe un usuario con este id",404);
};

export const createUserService = async (userData:UserDto):Promise<User> => {
  const newCredId:Credential = await createCredentialsService({userName: userData.userName, password:userData.password});
  const addUser =  {
    name:userData.name,
    email: userData.email,
    birthdate: new Date(userData.birthdate),
    nDni: userData.nDni,
    credentials:newCredId
  };
  const newUser: User = await userEntity.create(addUser);
  await userEntity.save(newUser);
  return newUser;
};