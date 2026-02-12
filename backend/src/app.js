// src/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const leadRoutes = require("./routes/leadRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const analyticsRoutes = require("./routes/analyticRoutes");
const webhookRoutes = require("./routes/webhookRoutes");
const uploadRoutes = require("./routes/uploadRoutes");





















const app = express();

const connectDB = require('./config/db');

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.FRONTEND_URL
        : "http://localhost:5173",
    credentials: true,
  })
);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: process.env.NODE_ENV === "production"
      ? "Server Error"
      : err.message
  });
});

connectDB();

app.use(cors());

app.use(
    "/api/payments/webhook",
    express.raw({ type: "application/json" })
  );
  
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/payments", webhookRoutes);
app.use("/api/uploads", uploadRoutes);



module.exports = app;
