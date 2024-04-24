import { Request, Response, NextFunction } from "express";
import { httpError } from "../utils/httpError";
import { getUserByIdService } from "../services/userServices";

export const appointmentDataCheck = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { date, time, userId } = req.body;

  if (date && time && userId) {
    try {
      dateCheck(date);
      timeCheck(time);
      await checkAppointmentsInDate(userId, date);
      next(); // Solo llamar a next() si todo ha pasado sin errores
    } catch (error) {
      next(error); // Pasar el error al siguiente middleware de error
    }
  } else next(new httpError("Todos los campos son necesarios.", 400));

};

function dateCheck(date:Date):void {
  //Convertimos a instancia de Fecha
  date = new Date(date);
  const currentDate = new Date();

  //Verificamos que sea una fecha correcta
  if (isNaN(date.getTime())) throw new httpError ("Formato de fecha incorrecto",400);

  // Verificamos si la fecha cae entre lunes y viernes
  const dayOfWeek = date.getDay();
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    throw new httpError("La fecha debe ser un día laborable (lunes a viernes).",400);
  }

  // Verifica que la fecha sea posterior a la fecha actual
  if (date <= currentDate) {
    throw new httpError("La fecha debe ser posterior a la fecha actual.",400);
  }
}

function timeCheck(time:string):void{

  const [hour, minute] = time.split(":").map(Number);  // Convierte "HH:MM" a números

  if ((hour < 9 || hour > 17) || (hour === 17 && minute > 0))
    throw new httpError ("El horario debe ser entre 9 AM y 5 PM", 400);
}


async function checkAppointmentsInDate(userId:number, date:Date):Promise<void>{

  const user = await getUserByIdService(userId);

  const parsedDate = new Date(date);
  parsedDate.setHours(0,0,0,0);//Ajustamos la hora a la media noche

  // Filtrar las citas que coincidan con la fecha de interés
  const count = user.appointments.filter(appointment => {
    const appointmentDate = new Date(appointment.date);
    appointmentDate.setHours(0, 0, 0, 0);  // Ajusta la hora a medianoche
    return (appointmentDate.getTime() === parsedDate.getTime() && appointment.status === "active");
  }).length;

  if (count >= 2) throw new httpError ("Ya cuenta con 2 citas activas para el día seleccionado para esa fecha", 400);

}