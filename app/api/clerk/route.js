import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { auth } from "@clerk/nextjs/server";

//--------------------------------------
// 🔌 CONNECT TO MONGO (REQUIRED)
//--------------------------------------
const connectDB = async () => {
  if (mongoose.connection.readyState === 1) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "YourDatabaseName",
    });
    console.log("MongoDB Connected (API)");
  } catch (error) {
    console.error("MongoDB Error:", error);
  }
};

//--------------------------------------
// 🛡️ AUTH CHECK (REQUIRED)
//--------------------------------------
const requireAuth = () => {
  const { userId } = auth();

  if (!userId) {
    return { error: "Unauthorized", code: 401 };
  }

  return { userId };
};

//--------------------------------------
// 📌 POST REQUEST HANDLER (EMPTY LOGIC)
//--------------------------------------
export async function POST(req) {
  await connectDB();

  const authCheck = requireAuth();
  if (authCheck.error) {
    return NextResponse.json(
      { error: authCheck.error },
      { status: authCheck.code }
    );
  }

  // Body parser (REQUIRED)
  let body;
  try {
    body = await req.json();
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // 👇 Yahan tum apna logic add karna
  // const { name, email } = body;

  return NextResponse.json({
    message: "Clerk API Ready",
    authUser: authCheck.userId,
    received: body,
  });
}
