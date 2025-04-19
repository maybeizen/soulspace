import "dotenv/config";
import express, { type Express } from "express";
import cors from "cors";
import appRoutes from "./routes/index";

const app: Express = express();
const allowedOrigins = ["http://localhost:5173", "http://localhost:3000"];

app.use(express.json());

app.use("/api", appRoutes);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.get("/healthcheck", (_req, res) => {
  res.status(200).json({ status: "OK" });
});

export default app;
