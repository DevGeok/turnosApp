import { Request, Response } from "express";
import { cancelAppointmentService, createAppointmentService, getAppointmentsByIdService, getAppointmentsService } from "../services/appointmentServices";
import catchAsync from "../utils/catshAsync";

export const getAppointments = catchAsync(async (req:Request , res:Response) => {
  res.status(200).json(await getAppointmentsService());
});

export const getAppointmentsById = catchAsync(async (req:Request , res:Response) => {
  const appointmentId: number = parseInt(req.params.id);
  res.status(200).json(await getAppointmentsByIdService(appointmentId));
});

export const createAppointment = async (req:Request , res:Response) => {
  try {
    await createAppointmentService(req.body);
    res.status(201).json({message:"Cita reservada con éxito"});
  } catch (error) {
    res.status(500).json({message:"Sucedió un error al generar su cita"});
  }

};

export const cancelAppointment = catchAsync (async (req:Request , res:Response) => {
  const appointmentId: number = parseInt(req.params.id);
  await cancelAppointmentService(appointmentId);
  res.status(201).json({message:"La cita ha sido cancelada"});
});


