import { Router } from "express";
import authRoutes from "./auth.routes";

const appRoutes: Router = Router();

appRoutes.use("/auth", authRoutes);

export default appRoutes;
