import express from "express";
import { signup } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/signup", signup);

router.get("/signin", (req, res) => {
  res.send("signin endpoint");
});

router.get("/logout", (req, res) => {
  res.send("logout endpoint");
});

export default router;
