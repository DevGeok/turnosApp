import { Request, Response } from "express";
import { cancelAppointmentService, createAppointmentService, getAppointmentsByIdService, getAppointmentsService } from "../services/appointmentServices";

export const getAppointments = async (req:Request , res:Response) => {
  res.status(201).json(await getAppointmentsService());
};

export const getAppointmentsById = async (req:Request , res:Response) => {
  res.status(201).json(await getAppointmentsByIdService(req.body.id));
};

export const createAppointment = async (req:Request , res:Response) => {
  try {
    await createAppointmentService(req.body);
    res.status(201).json({message:"Cita reservada con éxito"});
  } catch (error) {
    res.status(500).json({message:"Sucedió un error al generar su cita"});
  }

};

export const cancelAppointment = async (req:Request , res:Response) => {
  await cancelAppointmentService(req.body.id);
  res.status(201).json({message:"La cita ha sido cancelada"});
};