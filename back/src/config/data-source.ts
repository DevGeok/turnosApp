import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { Appointment } from "../entities/Appointment";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "parangaricutirimicuaro",
  database: "demo_sql",
  dropSchema: true,
  synchronize: true,
  logging: ["error","info","log","schema"],
  entities: [User,Credential, Appointment],
  subscribers: [],
  migrations: [],
});

export const userEntity = AppDataSource.getRepository(User);
export const credentialEntity = AppDataSource.getRepository(Credential);
export const appointmentEntity = AppDataSource.getRepository(Appointment);