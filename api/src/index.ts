import "dotenv/config";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/healthcheck", (_req, res) => {
  res.status(200).json({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
