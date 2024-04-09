import ICredential from "../Interfaces/ICredential";

export const credentials: ICredential[] = [{
  id:10,
  userName:"admin",
  password:"admin"
}
];

let id: number = 11;

export const createCredentialsService = async (userName: string, password: string):Promise<number> => {

  const newCredentials: ICredential = {
    id,
    userName: userName,
    password: password,

  };
  credentials.push(newCredentials);
  id++;
  return id - 1;
};

export const verifyUserCredentials = async (userName:string, password:string):Promise<number | undefined> => {
  const credentialsWanted: ICredential | undefined = credentials.find((credentials: ICredential) => credentials.userName === userName);

  if (credentialsWanted === undefined) return undefined;

  if (credentialsWanted.password === password) {
    console.log("Usuario y Contraseña correctos, el id de las credenciales es", credentialsWanted.id);
    return credentialsWanted.id;
  }
  else return undefined;
};