import mongoose from "mongoose";

const staffSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    role: {
      type: String,
      required: true,
      trim: true
    },

    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true
    },

    email: {
      type: String,
      lowercase: true,
      trim: true
    },

    phone: {
      type: String,
      trim: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Staff", staffSchema);
