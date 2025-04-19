import { Router } from "express";
import { login, register, me } from "../controllers/AuthController";
import { authenticateToken } from "../middleware/AuthMiddleware";

const authRoutes: Router = Router();

authRoutes.post("/login", login);
authRoutes.post("/register", register);

authRoutes.get("/me", authenticateToken, me);

export default authRoutes;
