import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  BarChart3, 
  FileText, 
  Users, 
  CalendarCheck,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Settings,
  HelpCircle,
  LogOut
} from "lucide-react";

const navLinks = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Blogs", path: "/blog", icon: FileText },
  { name: "Leads", path: "/leads", icon: Users },
  { name: "Bookings", path: "/bookings", icon: CalendarCheck }
];

const supportLinks = [
  { name: "Settings", path: "/settings", icon: Settings },
  { name: "Help", path: "/help", icon: HelpCircle }
];

export default function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const closeMobileSidebar = () => {
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-emerald-900 text-white shadow-lg"
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={closeMobileSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`
          fixed lg:sticky top-0 h-screen bg-gray-900 border-r border-gray-800 
          transition-all duration-300 ease-in-out z-40
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          ${isCollapsed ? "w-20" : "w-64"}
        `}
      >
        {/* Header Section */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          {!isCollapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-emerald-900 to-green-900 flex items-center justify-center">
                <LayoutDashboard className="w-5 h-5 text-gold-500" />
              </div>
              <h1 className="text-xl font-bold text-white">Eco-Vital</h1>
            </div>
          )}
          
          {isCollapsed && (
            <div className="flex justify-center w-full">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-900 to-green-900 flex items-center justify-center">
                <LayoutDashboard className="w-6 h-6 text-gold-500" />
              </div>
            </div>
          )}

          {/* Collapse Toggle Button (Desktop) */}
          <button
            onClick={toggleCollapse}
            className="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>

          {/* Close Button (Mobile) */}
          <button
            onClick={closeMobileSidebar}
            className="lg:hidden p-1 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Section */}
        <nav className="p-4 space-y-1">
          <div className="px-3 py-2">
            {!isCollapsed && (
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Navigation
              </span>
            )}
          </div>
          
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMobileSidebar}
                className={({ isActive }) => `
                  flex items-center rounded-lg px-3 py-3 transition-all duration-200
                  ${isActive 
                    ? "bg-gradient-to-r from-emerald-900/80 to-green-900/80 text-white shadow-lg" 
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                  }
                `}
              >
                <Icon className={`${isCollapsed ? "mx-auto" : "mr-3"} w-5 h-5`} />
                {!isCollapsed && (
                  <span className="font-medium">{link.name}</span>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Support Section */}
        <nav className="p-4 mt-auto space-y-1">
          <div className="px-3 py-2">
            {!isCollapsed && (
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Support
              </span>
            )}
          </div>
          
          {supportLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMobileSidebar}
                className={({ isActive }) => `
                  flex items-center rounded-lg px-3 py-3 transition-all duration-200
                  ${isActive 
                    ? "bg-gray-800 text-white" 
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                  }
                `}
              >
                <Icon className={`${isCollapsed ? "mx-auto" : "mr-3"} w-5 h-5`} />
                {!isCollapsed && <span className="font-medium">{link.name}</span>}
              </NavLink>
            );
          })}
        </nav>

        {/* User Profile & Logout */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center px-3 py-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-900 to-green-900 flex items-center justify-center">
              <span className="text-sm font-semibold text-white">EV</span>
            </div>
            
            {!isCollapsed && (
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-white">Admin User</p>
                <p className="text-xs text-gray-500">admin@eco-vital.com</p>
              </div>
            )}

            <button
              className={`
                p-1.5 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors
                ${isCollapsed ? "mx-auto" : ""}
              `}
              aria-label="Logout"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </aside>

      {/* Collapse Indicator for Desktop */}
      {!isCollapsed && (
        <div className="hidden lg:block fixed top-1/2 left-64 transform -translate-y-1/2 z-30">
          <div className="w-3 h-16 bg-gradient-to-r from-emerald-900/20 to-transparent rounded-r-lg" />
        </div>
      )}
    </>
  );
}