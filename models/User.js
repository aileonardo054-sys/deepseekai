import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: false,
    },

    email: {
      type: String,
      required: false,
      unique: true,
    },

    avatar: {
      type: String,
      required: false,
    },

    // Future proofing — chats, preferences, etc.
    credits: {
      type: Number,
      default: 10,
    },

    plan: {
      type: String,
      default: "free",
    },
  },
  { timestamps: true }
);

// Prevent model overwrite when Next.js hot reloads
export default mongoose.models.User || mongoose.model("User", UserSchema);
