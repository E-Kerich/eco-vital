const axios = require("axios");
const Booking = require("../models/Booking");
const Lead = require("../models/Lead");
const { v4: uuidv4 } = require("uuid");
const sendEmail = require("../services/emailService");


// @desc   Initialize Paystack payment
// @route  POST /api/payments/initiate
// @access Public
exports.initiatePayment = async (req, res) => {
  const { name, email, service, amount } = req.body;

  if (!name || !email || !service || !amount) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const reference = uuidv4();

  try {
    // Create pending booking
    await Booking.create({
      name,
      email,
      service,
      amount,
      paystackRef: reference
    });

    // Initialize Paystack
    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      {
        email,
        amount: amount * 100,
        reference
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.json(response.data.data);
  } catch (error) {
    res.status(500).json({ message: "Payment initialization failed" });
  }
};


// @desc   Verify Paystack payment
// @route  GET /api/payments/verify/:reference
// @access Public
exports.verifyPayment = async (req, res) => {
    const { reference } = req.params;
  
    try {
      const response = await axios.get(
        `https://api.paystack.co/transaction/verify/${reference}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
          }
        }
      );
  
      if (response.data.data.status === "success") {
        const booking = await Booking.findOne({ paystackRef: reference });
  
        if (!booking) {
          return res.status(404).json({ message: "Booking not found" });
        }
  
        booking.paymentStatus = "paid";
        await booking.save();
  
        // Save as lead
        await Lead.create({
          name: booking.name,
          email: booking.email,
          message: `Booking for ${booking.service}`,
          source: "booking"
        });
  
        return res.json({ message: "Payment verified", booking });
      }
  
      res.status(400).json({ message: "Payment not successful" });
    } catch (error) {
      res.status(500).json({ message: "Verification failed" });
    }
  };
  