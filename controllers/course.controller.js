import Course from "../models/Course.js";

// CREATE
export const createCourse = async (req, res) => {
  try {
    const { name, departmentId } = req.body;

    const course = await Course.create({ name, departmentId });
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ ALL
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find()
      .populate("departmentId", "name")
      .sort({ createdAt: -1 });

    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE
export const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, departmentId } = req.body;

    const course = await Course.findByIdAndUpdate(
      id,
      { name, departmentId },
      { new: true }
    );

    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    await Course.findByIdAndDelete(id);
    res.json({ message: "Course deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
