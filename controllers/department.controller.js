import Department from "../models/Department.js";

// CREATE
export const createDepartment = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Department name is required" });
    }

    const exists = await Department.findOne({ name: name.trim() });
    if (exists) {
      return res.status(400).json({ message: "Department already exists" });
    }

    const dept = await Department.create({ name: name.trim() });
    res.status(201).json(dept);
  } catch (err) {
    console.error("Create Department Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// READ
export const getDepartments = async (req, res) => {
  try {
    const depts = await Department.find().sort({ createdAt: -1 });
    res.json(depts);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch departments" });
  }
};

// UPDATE
export const updateDepartment = async (req, res) => {
  try {
    const { name } = req.body;

    const dept = await Department.findByIdAndUpdate(
      req.params.id,
      { name: name.trim() },
      { new: true }
    );

    res.json(dept);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
};

// DELETE
export const deleteDepartment = async (req, res) => {
  try {
    await Department.findByIdAndDelete(req.params.id);
    res.json({ message: "Department deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
};
