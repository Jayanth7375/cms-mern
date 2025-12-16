import express from "express";
import {
  createCourse,
  getCourses,
  updateCourse,
  deleteCourse
} from "../controllers/course.controller.js";
import { verifyAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", verifyAdmin, createCourse);
router.get("/", getCourses);
router.put("/:id", verifyAdmin, updateCourse);
router.delete("/:id", verifyAdmin, deleteCourse);

export default router;
