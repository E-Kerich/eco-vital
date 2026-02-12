import { Link } from "react-router-dom";
import { Mail, MapPin, Calendar, ArrowRight, Globe, Shield, Target } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Insights", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Strategic Business Advisory" },
    { name: "Investment & Financial Consulting" },
    { name: "Sustainability & ESG Advisory" },
    { name: "Market Entry & Expansion" },
    { name: "Training & Capacity Building" },
  ];

  return (
    <>
      {/* Trust / Positioning Strip */}
      

      {/* Main Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1 - Brand */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                
                <div>
                  <h3 className="text-xl font-bold">Eco-Vital Group</h3>
                  <p className="text-sm text-gray-400">Consulting Group</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Helping businesses, investors, and organizations unlock Africa's economic 
                potential through strategic advisory, investment facilitation, and sustainability consulting.
              </p>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="w-3 h-3" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <div className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 cursor-default">
                      <Target className="w-3 h-3" />
                      {service.name}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Contact & Action */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Let's Talk Strategy</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5" />
                  <a 
                    href="mailto:info@ecovitalconsulting.com" 
                    className="hover:text-emerald-400 transition-colors"
                  >
                    info@ecovitalconsulting.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>Africa | Global Reach</span>
                </div>
                
                <div className="pt-4">
                  <Link
                    to="/book-session"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg hover:opacity-90 transition-all font-semibold w-full justify-center"
                  >
                    <Calendar className="w-4 h-4" />
                    Book a Session
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Base */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-500 text-sm text-center md:text-left">
                © 2026 Eco-Vital Consulting Group. All rights reserved.
              </div>
              <div className="text-gray-500 text-sm">
                Designed & Maintained by <span className="text-yellow-400 font-medium">Emmanuel Kerich</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}