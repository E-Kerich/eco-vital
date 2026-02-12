const crypto = require("crypto");
const Booking = require("../models/Booking");
const Lead = require("../models/Lead");
const sendEmail = require("../services/emailService");
const {
  bookingAdminTemplate,
  bookingClientTemplate
} = require("../utils/emailTemplates");

exports.handlePaystackWebhook = async (req, res) => {
  const secret = process.env.PAYSTACK_SECRET_KEY;

  const hash = crypto
    .createHmac("sha512", secret)
    .update(req.body)
    .digest("hex");

  if (hash !== req.headers["x-paystack-signature"]) {
    return res.status(401).send("Invalid signature");
  }

  const event = JSON.parse(req.body);

  // Only care about successful charges
  if (event.event === "charge.success") {
    const reference = event.data.reference;

    const booking = await Booking.findOne({ paystackRef: reference });

    // Idempotency check
    if (!booking || booking.paymentStatus === "paid") {
      return res.sendStatus(200);
    }

    booking.paymentStatus = "paid";
    await booking.save();

    // Save as lead (if not exists)
    await Lead.create({
      name: booking.name,
      email: booking.email,
      message: `Booking for ${booking.service}`,
      source: "booking"
    });

    // Emails
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: "New Paid Booking (Webhook)",
      html: bookingAdminTemplate({
        name: booking.name,
        email: booking.email,
        service: booking.service,
        amount: booking.amount
      })
    });

    await sendEmail({
      to: booking.email,
      subject: "Your Eco-Vital Booking is Confirmed",
      html: bookingClientTemplate({
        name: booking.name,
        service: booking.service
      })
    });
  }

  res.sendStatus(200);
};
