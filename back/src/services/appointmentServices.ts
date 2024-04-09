import IAppointment from "../Interfaces/IAppointment";
import AppointmentDto from "../dto/AppointmentDto";
import UserDto from "../dto/UserDto";
import { createCredentialsService } from "./credentialServices";

export const appointments: IAppointment[] = [{
  id:1,
  date: new Date("2024/05/01"),
  time: "10:00",
  status: "active",
  userId: 1
}
];

let id: number = 2;


export const getAppointmentsService = async ():Promise<IAppointment[]> => {
  return appointments;
};

export const getAppointmentsByIdService = async (id:number):Promise<IAppointment | undefined> => {
  const appointmentWanted: IAppointment | undefined = appointments.find((appointment: IAppointment) => appointment.id === id);
  return appointmentWanted;
};

export const createAppointmentService = async (appointmentData: AppointmentDto):Promise<IAppointment> => {
  const newAppointment: IAppointment = {
    id,
    date: appointmentData.date,
    time: appointmentData.time,
    status: "active",
    userId: appointmentData.userId
  };
  appointments.push(newAppointment);
  id++;
  return newAppointment;
};

export const cancelAppointmentService = async (id:number):Promise<void> => {
  const index: number = appointments.findIndex(appointment => appointment.id === id);
  appointments[index].status = "cancelled";
};