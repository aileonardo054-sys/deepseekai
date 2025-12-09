import mongoose from "mongoose";

let isConnected = false; // Track connection state (important for Next.js)

export const connectDB = async () => {
  if (isConnected) {
    console.log("⚡ MongoDB already connected");
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "deepseek", // optional: apna database name dal do
    });

    isConnected = true;
    console.log("📦 MongoDB Connected:", conn.connection.host);

  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};
