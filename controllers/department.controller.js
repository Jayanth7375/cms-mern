import Department from "../models/Department.js";

// CREATE
export const createDepartment = async (req, res) => {
  try {
    const { name, description } = req.body;

    const exists = await Department.findOne({ name });
    if (exists) {
      return res.status(400).json({ message: "Department already exists" });
    }

    const dept = await Department.create({ name, description });
    res.status(201).json(dept);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ ALL
export const getDepartments = async (req, res) => {
  try {
    const depts = await Department.find().sort({ createdAt: -1 });
    res.json(depts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE
export const updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const dept = await Department.findByIdAndUpdate(
      id,
      { name, description },
      { new: true }
    );

    res.json(dept);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
export const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    await Department.findByIdAndDelete(id);
    res.json({ message: "Department deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
