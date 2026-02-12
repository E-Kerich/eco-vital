import { useEffect, useState } from "react";
import api from "../../api/axios";
import { Mail, Globe, Send, CheckCircle, AlertCircle, Phone } from "lucide-react";

export default function ContactSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await api.post("/leads", form);

      setSuccess("Thank you! We'll get back to you within 24 hours.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section - 30vh with Image */}
      <div className="relative min-h-[30vh] bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/durfnwa3k/image/upload/v1769672541/ChatGPT_Image_Jan_29_2026_10_41_56_AM_a9fdrg.png"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[30vh] flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl  font-light text-white mb-3 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-base md:text-lg text-gray-200 max-w-2xl leading-relaxed">
              Ready to start a conversation? Our team is here to help.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Section Header - Centered */}
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 tracking-tight">
              Let's Start the Conversation
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Whether you're exploring new markets, structuring investments, or strengthening 
              sustainability practices, our team is ready to support your next move.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Contact Information */}
            <div className="order-2 lg:order-1">
              {/* Contact Details */}
              <div className="space-y-6 md:space-y-8 mb-8 md:mb-10">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-emerald-50 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider font-medium">Email</p>
                    <a 
                      href="mailto:info@ecovitalconsulting.com" 
                      className="text-base md:text-lg text-gray-900 font-medium hover:text-emerald-600 transition-colors break-words"
                    >
                      info@ecovitalconsulting.com
                    </a>
                    <br/>
                    <a 
                      className="text-sm md:text-base text-gray-600 hover:text-emerald-600 transition-colors"
                      href="mailto:ecovitalconsulting@gmail.com"
                    >
                      ecovitalconsulting@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-emerald-50 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider font-medium">Location</p>
                    <p className="text-base md:text-lg text-gray-900 font-medium">Nairobi | Global Reach</p>
                    <p className="text-gray-600 text-xs md:text-sm mt-1">Serving clients across Africa and internationally</p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-emerald-50 to-white  p-6 md:p-8 border border-emerald-100">
                <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-4 md:mb-6">What You'll Get</h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm md:text-base text-gray-600">Free initial consultation to understand your needs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm md:text-base text-gray-600">Tailored strategy recommendations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm md:text-base text-gray-600">Clear next steps and implementation plan</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm md:text-base text-gray-600">Confidential and professional service</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="order-1 lg:order-2">
              <div className="bg-white  p-6 md:p-8 border border-gray-200 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm md:text-base"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm md:text-base"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                      Phone Number <span className="text-gray-500">(optional)</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="+123 456 7890"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm md:text-base"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                      How can we help? *
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell us about your project, challenges, or how we can help..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none text-sm md:text-base"
                    />
                  </div>

                  {/* Messages */}
                  {success && (
                    <div className="p-3 md:p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                      <div className="flex items-center gap-2 md:gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
                        <p className="text-sm md:text-base font-medium text-emerald-800">{success}</p>
                      </div>
                    </div>
                  )}

                  {error && (
                    <div className="p-3 md:p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center gap-2 md:gap-3">
                        <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
                        <p className="text-sm md:text-base font-medium text-red-800">{error}</p>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 md:gap-3 px-4 py-3 md:px-6 md:py-4 bg-emerald-600 text-white  hover:bg-emerald-700 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 md:w-5 md:h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Privacy Note */}
                  <p className="text-xs text-gray-500 text-center pt-3 md:pt-4 border-t border-gray-100">
                    We respect your privacy. No spam — just meaningful conversations.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}