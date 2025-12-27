import express from "express";
import {
  register,
  login,
  createFaculty,
} from "../controllers/auth.controller.js";

import { verifyToken, verifyAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

// STUDENT
router.post("/register", register);

// ALL ROLES
router.post("/login", login);

// ADMIN → CREATE FACULTY
router.post(
  "/create-faculty",
  verifyToken,
  verifyAdmin,
  createFaculty
);

export default router;
