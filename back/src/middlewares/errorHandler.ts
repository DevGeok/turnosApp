import { Request, Response, NextFunction } from "express";
import { httpError } from "../utils/httpError";

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction):void => {

  if (err instanceof httpError) {
    // Aquí usa el statusCode de la instancia httpError para enviar la respuesta.
    res.status(err.statusCode).send({ error: err.message });
  }
  console.error(err.message); // Aquí se registra el error
  res.status(err.status || 500).json({ error: err.message });
};