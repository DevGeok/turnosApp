import IUser from "../Interfaces/IUser";
import UserDto from "../dto/UserDto";

const users: IUser[] = [{
  id:1,
  name:"Jorge V",
  email: "jorge@mail.com",
  active: true
}
];

let id: number = 2;

export const createUserService = async (userData: UserDto):Promise<IUser> => {

  const newUser: IUser = {
    id,
    name: userData.name,
    email: userData.email,
    active:userData.active,
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

