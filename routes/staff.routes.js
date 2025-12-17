import express from "express";
import {
  getStaffs,
  addStaff,
  updateStaff,
  deleteStaff
} from "../controllers/staff.controller.js";

import { verifyToken, verifyAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", verifyToken, verifyAdmin, getStaffs);
router.post("/", verifyToken, verifyAdmin, addStaff);
router.put("/:id", verifyToken, verifyAdmin, updateStaff);
router.delete("/:id", verifyToken, verifyAdmin, deleteStaff);

export default router;
