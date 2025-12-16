import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import departmentRoutes from "./routes/department.routes.js";
import courseRoutes from "./routes/course.routes.js";
import staffRoutes from "./routes/staff.routes.js";
import cmsRoutes from "./routes/cms.routes.js";



dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/staffs", staffRoutes);
app.use("/api/pages", cmsRoutes);
app.use("/api/auth", authRoutes);


// test route
app.get("/", (req, res) => {
  res.send("CMS Backend is running 🚀");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Atlas connected"))
  .catch((err) => console.log("❌ MongoDB error:", err.message));

// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
