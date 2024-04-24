import express from "express";
import router from "./routes";
import { errorHandler } from "./middlewares/errorHandler";



const server = express();

server.use(express.json());
server.use(router);
server.use(errorHandler);


export default server;