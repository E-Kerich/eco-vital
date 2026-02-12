import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Calendar, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { 
      name: "About Us", 
      path: "/about",
     
    },
    { 
      name: "Services", 
      path: "/services",
      dropdown: [
        { name: "Strategic Business Advisory", path: "/services/strategic-business-advisory" },
        { name: "Investment & Financial Consulting", path: "/services/investment-financial-consulting" },
        { name: "Sustainability & ESG Advisory", path: "/services/sustainability-esg-advisory" },
        { name: "Market Entry & Expansion", path: "/services/training-mentorship-capacity-building" },
        { name: "Training & Capacity Building", path: "/services/market-entry-expansion-strategy" },
        { name: "Advocacy (Women & Youth)", path: "/services/advocacy-services-women-youth" },
      ]
    },
    { name: "Insights", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <Link to="/" className="flex items-center gap-3">
            
            <div className="md:block">
              <img src="/assets/ecologo.png" alt="Eco Logo" className="h-8" />

            </div>
          </Link>

          {/* Desktop Navigation - Center/Right */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className={`flex items-center gap-1 px-2 py-2 text-sm font-medium transition-colors ${
                      isActive(link.path) 
                        ? "text-emerald-600" 
                        : "text-gray-700 hover:text-emerald-600"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${
                      activeDropdown === link.name ? "rotate-180" : ""
                    }`} />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-2 py-2 text-sm font-medium transition-colors ${
                      isActive(link.path) 
                        ? "text-emerald-600" 
                        : "text-gray-700 hover:text-emerald-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {link.dropdown && (
                  <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Primary CTA - Far Right */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-yellow-600 text-white rounded-lg hover:opacity-90 transition-all font-semibold"
            >
              <Calendar className="w-4 h-4" />
              Book a Session
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-yellow-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <div className="py-2">
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className={`flex items-center justify-between w-full px-3 py-2 text-base font-medium rounded-lg ${
                        isActive(link.path) 
                          ? "bg-emerald-50 text-emerald-700" 
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        activeDropdown === link.name ? "rotate-180" : ""
                      }`} />
                    </button>
                    
                    {/* Mobile Dropdown */}
                    {activeDropdown === link.name && (
                      <div className="ml-4 mt-2 space-y-1 border-l-2 border-emerald-100 pl-4">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 text-base font-medium rounded-lg ${
                      isActive(link.path) 
                        ? "bg-emerald-50 text-emerald-700" 
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 mt-4 border-t border-gray-100">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-emerald-600 text-white rounded-lg hover:opacity-90 transition-all font-semibold"
              >
                <Calendar className="w-4 h-4" />
                Book a Session
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}