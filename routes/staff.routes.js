import express from "express";
import {
  createStaff,
  getStaffs,
  updateStaff,
  deleteStaff,
} from "../controllers/staff.controller.js";

import {
  verifyToken,
  verifyAdmin,
} from "../middleware/auth.middleware.js";

const router = express.Router();

// ✅ MUST HAVE verifyToken FIRST
router.get("/", verifyToken, verifyAdmin, getStaffs);
router.post("/", verifyToken, verifyAdmin, createStaff);
router.put("/:id", verifyToken, verifyAdmin, updateStaff);
router.delete("/:id", verifyToken, verifyAdmin, deleteStaff);

export default router;
