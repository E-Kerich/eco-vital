const Lead = require("../models/Lead");



// @desc   Create lead (public)
// @route  POST /api/leads
// @access Public
exports.createLead = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const lead = await Lead.create({
      name,
      email,
      phone,
      message
    });

    res.status(201).json({
      message: "Message received. We'll get back to you shortly.",
      leadId: lead._id
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to submit message" });
  }
};

// @desc   Get all leads (admin)
// @route  GET /api/leads
// @access Private
exports.getLeads = async (req, res) => {
  const leads = await Lead.find().sort({ createdAt: -1 });
  res.json(leads);
};

// @desc   Update lead status
// @route  PUT /api/leads/:id
// @access Private
exports.updateLeadStatus = async (req, res) => {
  const { status } = req.body;

  const lead = await Lead.findById(req.params.id);
  if (!lead) {
    return res.status(404).json({ message: "Lead not found" });
  }

  lead.status = status || lead.status;
  await lead.save();

  res.json({ message: "Lead updated", lead });
};

// @desc   Delete lead
// @route  DELETE /api/leads/:id
// @access Private
exports.deleteLead = async (req, res) => {
  await Lead.findByIdAndDelete(req.params.id);
  res.json({ message: "Lead deleted" });
};
