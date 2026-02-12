const Lead = require("../models/Lead");
const Booking = require("../models/Booking");
const Blog = require("../models/Blog");

// @desc   Dashboard overview
// @route  GET /api/analytics/overview
// @access Private
exports.getOverview = async (req, res) => {
  const [leads, bookings, blogs] = await Promise.all([
    Lead.countDocuments(),
    Booking.countDocuments({ paymentStatus: "paid" }),
    Blog.countDocuments({ status: "published" })
  ]);

  const revenue = await Booking.aggregate([
    { $match: { paymentStatus: "paid" } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);

  res.json({
    totalLeads: leads,
    totalBookings: bookings,
    totalBlogs: blogs,
    totalRevenue: revenue[0]?.total || 0
  });
};


// @desc   Lead funnel
// @route  GET /api/analytics/leads
// @access Private
exports.getLeadStats = async (req, res) => {
    const stats = await Lead.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 }
        }
      }
    ]);
  
    res.json(stats);
  };

  
  // @desc   Booking stats
// @route  GET /api/analytics/bookings
// @access Private
exports.getBookingStats = async (req, res) => {
    const bookings = await Booking.find({ paymentStatus: "paid" })
      .sort({ createdAt: -1 })
      .limit(5);
  
    const revenueByService = await Booking.aggregate([
      { $match: { paymentStatus: "paid" } },
      {
        $group: {
          _id: "$service",
          totalRevenue: { $sum: "$amount" },
          count: { $sum: 1 }
        }
      }
    ]);
  
    res.json({
      recentBookings: bookings,
      revenueByService
    });
  };
  