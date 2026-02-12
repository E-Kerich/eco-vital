import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import RecentBookings from "./pages/admin/bookings/Bookings";
import Leads from "./pages/admin/leads/Leads";
import Blogs from "./pages/admin/blogs/ListBlog";
import BlogPreview from "./pages/admin/blogs/BlogPreview";
import PublicBlogs from "./pages/public/PublicBlog";
import PublicBlogDetail from "./pages/public/BlogDetails";
import PublicLayout from "./components/layout/HomeLaout";
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import ContactSection from "./pages/public/Contact";
import StrategicAdvisory from "./pages/public/services/Advisory";
import InvestmentFinancialConsulting from "./pages/public/services/Investment";
import SustainabilityESGAdvisory from "./pages/public/services/Sustainability";
import TrainingCapacityBuilding from "./pages/public/services/Training";
import MarketEntryExpansionStrategy from "./pages/public/services/Market";
import AdvocacyServices from "./pages/public/services/Advocacy";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blogs" element={<PublicBlogs/>}/>
          <Route path="/blogs/:slug" element={<PublicBlogDetail />} />
          <Route path="/contact" element={<ContactSection/>}/>
          <Route path="/services/strategic-business-advisory" element={<StrategicAdvisory/>}/>
          <Route path="/services/investment-financial-consulting" element={<InvestmentFinancialConsulting/>}/>
          <Route path="/services/sustainability-esg-advisory" element={<SustainabilityESGAdvisory />}/>
          <Route path="/services/training-mentorship-capacity-building" element={<TrainingCapacityBuilding />}/>
          <Route path="/services/market-entry-expansion-strategy" element={<MarketEntryExpansionStrategy/>}/>
          <Route path="/services/advocacy-services-women-youth" element={<AdvocacyServices/>}/>

        </Route>

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/bookings" element={<ProtectedRoute><RecentBookings /></ProtectedRoute>} />
        <Route path="/leads" element={<ProtectedRoute><Leads /></ProtectedRoute>} />
        <Route path="/blog" element={<ProtectedRoute><Blogs /></ProtectedRoute>} />
        <Route path="/blog/preview/:slug" element={<ProtectedRoute><BlogPreview /></ProtectedRoute>} />
       
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
