import express from "express";
import {
  createStaff,
  getStaffs,
  updateStaff,
  deleteStaff,
} from "../controllers/staff.controller.js";
import { verifyAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", verifyAdmin, getStaffs);
router.post("/", verifyAdmin, createStaff);
router.put("/:id", verifyAdmin, updateStaff);
router.delete("/:id", verifyAdmin, deleteStaff);

export default router;
