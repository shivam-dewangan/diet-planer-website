// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db.js";
import dietRoutes from "./routes/diet.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json()); // for JSON body parsing


connectDB();

app.use("/api/diet", dietRoutes);

app.get("/", (req, res) => res.send("API running..."));

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
