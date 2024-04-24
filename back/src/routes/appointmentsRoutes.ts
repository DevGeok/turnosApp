import { Router } from "express";
import { getAppointments, getAppointmentsById, createAppointment, cancelAppointment } from "../controllers/appointmentControllers";
import { appointmentDataCheck } from "../middlewares/appointmentDataCheck";

const appointmentsRoutes: Router = Router();

appointmentsRoutes.get("/", getAppointments);
appointmentsRoutes.get("/:id", getAppointmentsById);
appointmentsRoutes.post("/schedule", appointmentDataCheck, createAppointment);
appointmentsRoutes.put("/cancel/:id", cancelAppointment);

export default appointmentsRoutes;