import IAppointment from "../Interfaces/IAppointment";
import { appointmentEntity, userEntity } from "../config/data-source";
import AppointmentDto from "../dto/AppointmentDto";
import UserDto from "../dto/UserDto";
import { Appointment, AppointmentStatus } from "../entities/Appointment";
import { User } from "../entities/User";
import { httpError } from "../utils/httpError";
import { createCredentialsService } from "./credentialServices";
import { getUserByIdService } from "./userServices";



const id: number = 2;

export const getAppointmentsService = async ():Promise<Appointment[]> => {
  const appointments: Appointment[] = await appointmentEntity.find();
  if (appointments.length > 0) return appointments;
  throw new httpError("No se encontraron appointments", 404);
};

export const getAppointmentsByIdService = async (id:number):Promise<Appointment> => {

  const verifyAppointmentID: Appointment | null = await appointmentEntity.findOne({
    where:{id:id}
  });
  if (verifyAppointmentID) return verifyAppointmentID;
  else throw new httpError("No existe un appointment con este id",404);

};

export const createAppointmentService = async (appointmentData: AppointmentDto):Promise<Appointment|undefined> => {

  const user: User =  await getUserByIdService(appointmentData.userId);

  const addAppointment =  {
    date: new Date(appointmentData.date),
    time: appointmentData.time,
    status: AppointmentStatus.Active,
    user: user
  };
  const newAppointment: Appointment = appointmentEntity.create(addAppointment);
  await appointmentEntity.save(newAppointment);
  return newAppointment;
};



export const cancelAppointmentService = async (id:number):Promise<Appointment> => {
  const appointiment = await appointmentEntity.findOne({
    where:{id:id}
  });
  if (!appointiment) throw new httpError ("No existe un appointment con ese id", 404);
  if (appointiment){
    appointiment.status = AppointmentStatus.Cancelled;
    appointmentEntity.save(appointiment);
  }
  return appointiment;
};
