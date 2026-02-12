require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/User");

const MONGO_URI = process.env.MONGO_URI;

async function createAdmin() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");

    const exists = await User.findOne({ email: "admin@ecovital.com" });
    if (exists) {
      console.log("⚠️ Admin already exists");
      process.exit();
    }

    await User.create({
      name: "Eco Vital",
      email: "Liz@ecovitalconsulting.com",
      password: "Admin123!Eliz",
      role: "admin"
    });

    console.log("✅ Admin created successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Error creating admin:", err);
    process.exit(1);
  }
}

createAdmin();
