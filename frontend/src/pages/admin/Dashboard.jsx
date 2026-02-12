import { useEffect, useState } from "react";
import api from "../../api/axios";
import DashboardLayout from "../../components/admin/DashboardLayout";
import KpiCard from "../../components/admin/KpiCard";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.get("/analytics/overview").then(res => {
      setData(res.data);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="text-center">
            <div className="w-12 h-12 border-2 border-emerald-900 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white">Loading dashboard...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  if (!data) {
    return (
      <DashboardLayout>
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <p className="text-white">Failed to load dashboard data</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-2 bg-emerald-900 text-white rounded-lg hover:bg-emerald-800 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-2">Dashboard</h2>
        <p className="text-gray-400">Performance overview and key metrics</p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <KpiCard 
          label="Total Leads" 
          value={data.totalLeads} 
          icon="users"
          color="emerald"
        />
        <KpiCard 
          label="Paid Bookings" 
          value={data.totalBookings} 
          icon="conversion"
          color="gold"
        />
        <KpiCard 
          label="Published Blogs" 
          value={data.totalBlogs} 
          icon="default"
          color="emerald"
        />
        <KpiCard 
          label="Total Revenue" 
          value={`$${data.totalRevenue}`} 
          icon="revenue"
          color="gold"
        />
      </div>

      {/* Data Status Section */}
      <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Data Status</h3>
          <span className="text-xs px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full">
            Live
          </span>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Last Updated</span>
            <span className="text-white">{new Date().toLocaleTimeString()}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Data Range</span>
            <span className="text-white">Current Month</span>
          </div>
          <div className="pt-4 border-t border-gray-800">
            <p className="text-sm text-gray-400">
              Dashboard data is pulled from your analytics API endpoint. 
              The metrics above represent your current business performance.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}