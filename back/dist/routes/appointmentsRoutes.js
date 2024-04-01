"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentControllers_1 = require("../controllers/appointmentControllers");
const appointmentsRoutes = (0, express_1.Router)();
appointmentsRoutes.get("/", appointmentControllers_1.getAppointments);
appointmentsRoutes.get("/appointment", appointmentControllers_1.getAppointmentsById);
appointmentsRoutes.post("/schedule", appointmentControllers_1.createAppointment);
appointmentsRoutes.put("/cancel", appointmentControllers_1.cancelAppointment);
exports.default = appointmentsRoutes;
