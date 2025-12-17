import express from "express";
import { getPage, savePage } from "../controllers/cms.controller.js";
import { verifyToken, verifyAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

// PUBLIC
router.get("/:slug", getPage);

// 🔐 ADMIN (TOKEN → ADMIN)
router.post("/", verifyToken, verifyAdmin, savePage);

export default router;
