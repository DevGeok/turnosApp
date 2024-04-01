import {Router} from "express";
import userRouter from "./userRoutes";
import appointmentsRoutes from "./appointmentsRoutes";



const router: Router = Router();

router.use("/users", userRouter);
router.use("/appointments", appointmentsRoutes);

export default router;