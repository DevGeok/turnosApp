import IUser from "../Interfaces/IUser";
import UserDto from "../dto/UserDto";
import { createCredentialsService } from "./credentialServices";

export const users: IUser[] = [{
  id:1,
  name:"Jorge V",
  email: "jorge@mail.com",
  birthdate: new Date("1988/08/04"),
  nDni: 1065597444,
  credentialsId:10
}
];

let id: number = 2;

export const createUserService = async (userData: UserDto):Promise<IUser> => {

  const newUser: IUser = {
    id,
    name: userData.name,
    email: userData.email,
    birthdate:userData.birthdate,
    nDni: userData.nDni,
    credentialsId: await createCredentialsService(userData.userName,userData.password),
  };

  users.push(newUser);
  id++;
  return newUser;
};

export const getUsersService = async ():Promise<IUser[]> => {
  return users;
};

export const getUserByIdService = async (id:number):Promise<IUser | undefined> => {
  const userWanted: IUser | undefined = users.find((user: IUser) => user.id === id);
  return userWanted;
};

