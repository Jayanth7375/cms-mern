import express from "express";
import {
  createDepartment,
  getDepartments,
  updateDepartment,
  deleteDepartment
} from "../controllers/department.controller.js";
import { verifyAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", verifyAdmin, createDepartment);
router.get("/", getDepartments); // public
router.put("/:id", verifyAdmin, updateDepartment);
router.delete("/:id", verifyAdmin, deleteDepartment);

export default router;
