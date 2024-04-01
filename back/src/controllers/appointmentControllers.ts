import { Request, Response } from "express";

export const getAppointments = async (req:Request , res:Response) => {
  res.status(201).json({message:"Estas son todas las citas"});
};

export const getAppointmentsById = async (req:Request , res:Response) => {
  res.status(201).json({message:"Esta es la cita de ese ID"});
};

export const createAppointment = async (req:Request , res:Response) => {
  res.status(201).json({message:"Cita reservada con éxito"});
};

export const cancelAppointment = async (req:Request , res:Response) => {
  res.status(201).json({message:"La cita ha sido cancelada"});
};


