import express from "express";
import { register, login } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register); // student
router.post("/login", login);       // admin + student

export default router;
