// Admin gets notified when someone submits contact form
exports.contactAdminTemplate = ({ name, email, message }) => `
  <h2>New Contact Lead</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Message:</strong></p>
  <p>${message}</p>
  <hr />
  <p>Eco-Vital Consulting Dashboard</p>
`;

// Admin gets notified when a booking is paid
exports.bookingAdminTemplate = ({ name, email, service, amount }) => `
  <h2>New Paid Booking</h2>
  <p><strong>Client:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Service:</strong> ${service}</p>
  <p><strong>Amount:</strong> ${amount}</p>
  <hr />
  <p>Eco-Vital Consulting</p>
`;

// Client confirmation email after successful booking
exports.bookingClientTemplate = ({ name, service }) => `
  <h2>Booking Confirmed 🎉</h2>
  <p>Hi ${name},</p>
  <p>Your consultation for <strong>${service}</strong> has been successfully confirmed.</p>
  <p>Our team will contact you shortly with next steps.</p>
  <br />
  <p>Warm regards,<br />Eco-Vital Consulting</p>
`;
