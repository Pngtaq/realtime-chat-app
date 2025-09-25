import express from "express";
import dotenv from "dotenv";
import path from "path";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";

dotenv.config();
const app = express();
const __dirname = path.resolve();
const port = process.env.PORT || 3000;

app.use(express.json()); // req.body
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.get("/", (_, res) => {
  res.send("API is running 🚀");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});
