import express from "express";
import { getPage, savePage } from "../controllers/cms.controller.js";
import { verifyAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/:slug", getPage);           // public
router.post("/", verifyAdmin, savePage); // admin

export default router;
