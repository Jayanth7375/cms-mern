import Course from "../models/Course.js";

/* GET ALL COURSES */
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find()
      .select("name department description createdAt")
      .sort({ createdAt: -1 });

    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch courses" });
  }
};

/* ADD COURSE (ADMIN ONLY) */
export const addCourse = async (req, res) => {
  try {
    const { name, department, description } = req.body;

    if (!name || !department) {
      return res.status(400).json({ message: "Name and department required" });
    }

    const exists = await Course.findOne({ name, department });
    if (exists) {
      return res.status(400).json({ message: "Course already exists" });
    }

    const course = await Course.create({
      name,
      department,      // ✅ STRING (department name)
      description: description || "",
    });

    res.status(201).json(course);
  } catch (err) {
    console.error("ADD COURSE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

/* UPDATE COURSE */
export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(course);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
};

/* DELETE COURSE */
export const deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Course deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
};
