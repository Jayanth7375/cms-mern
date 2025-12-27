import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import { createFaculty } from "../controllers/auth.controller.js";
import { verifyToken, verifyAdmin } from "../middleware/auth.middleware.js";

router.post("/create-faculty", verifyToken, verifyAdmin, createFaculty);


const router = express.Router();

router.post("/register", register); // student
router.post("/login", login);       // admin + student

router.post("/create-faculty", verifyToken, verifyAdmin, createFaculty);

export default router;
