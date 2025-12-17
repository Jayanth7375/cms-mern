import express from "express";
import {
  createDepartment,
  getDepartments,
  updateDepartment,
  deleteDepartment
} from "../controllers/department.controller.js";

import { verifyToken, verifyAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

// 🔐 ADMIN PROTECTED
router.post("/", verifyToken, verifyAdmin, createDepartment);
router.put("/:id", verifyToken, verifyAdmin, updateDepartment);
router.delete("/:id", verifyToken, verifyAdmin, deleteDepartment);

// 🌍 PUBLIC (needed for dropdowns etc.)
router.get("/", getDepartments);

export default router;
