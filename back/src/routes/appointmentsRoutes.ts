import { Router } from "express";
import auth from "../middlewares/auth";
import { getAppointments, getAppointmentsById, createAppointment, cancelAppointment } from "../controllers/appointmentControllers";

const appointmentsRoutes: Router = Router();

appointmentsRoutes.get("/", getAppointments);
appointmentsRoutes.get("/appointment", getAppointmentsById);
appointmentsRoutes.post("/schedule", createAppointment);
appointmentsRoutes.put("/cancel", cancelAppointment);

export default appointmentsRoutes;