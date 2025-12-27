export const createStaff = async (req, res) => {
  try {
    const { name, role, department, email, phone } = req.body;

    if (!name || !role || !department || !email || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const exists = await Staff.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Staff already exists" });
    }

    const staff = await Staff.create({
      name,
      role,
      department, // ✅ STRING PASSED DIRECTLY
      email,
      phone,
    });

    res.status(201).json(staff);
  } catch (err) {
    console.error("CREATE STAFF ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};
