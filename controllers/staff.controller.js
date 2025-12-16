import Staff from "../models/Staff.js";

export const getStaffs = async (req, res) => {
  try {
    const staffs = await Staff.find().populate("departmentId", "name");
    res.json(staffs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addStaff = async (req, res) => {
  try {
    const staff = await Staff.create(req.body);
    res.status(201).json(staff);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateStaff = async (req, res) => {
  try {
    const staff = await Staff.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.json(staff);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteStaff = async (req, res) => {
  try {
    await Staff.findByIdAndDelete(req.params.id);
    res.json({ message: "Staff deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
