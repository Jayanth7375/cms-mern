import Staff from "../models/Staff.js";

export const getStaffs = async (req, res) => {
  try {
    const staffs = await Staff.find()
      .populate("department", "name")
      .sort({ createdAt: -1 });

    res.json(staffs);
  } catch (err) {
    console.error("GET STAFF ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

export const addStaff = async (req, res) => {
  try {
    console.log("ADD STAFF PAYLOAD:", req.body);

    const staff = new Staff({
      name: req.body.name,
      role: req.body.role,
      department: req.body.department, // 🔥 ObjectId REQUIRED
      email: req.body.email,
      phone: req.body.phone
    });

    await staff.save();
    res.status(201).json(staff);
  } catch (err) {
    console.error("ADD STAFF ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

export const updateStaff = async (req, res) => {
  try {
    const staff = await Staff.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        role: req.body.role,
        department: req.body.department,
        email: req.body.email,
        phone: req.body.phone
      },
      { new: true }
    );

    res.json(staff);
  } catch (err) {
    console.error("UPDATE STAFF ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

export const deleteStaff = async (req, res) => {
  try {
    await Staff.findByIdAndDelete(req.params.id);
    res.json({ message: "Staff deleted successfully" });
  } catch (err) {
    console.error("DELETE STAFF ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};
