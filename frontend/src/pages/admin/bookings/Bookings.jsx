import { useEffect, useState } from "react";
import api from "../../../api/axios";
import DashboardLayout from "../../../components/admin/DashboardLayout";
import KpiCard from "../../../components/admin/KpiCard";
import { Calendar, DollarSign, TrendingUp, Package } from "lucide-react";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    topService: "-",
    averageValue: 0
  });

  useEffect(() => {
    api.get("/analytics/bookings").then(res => {
      const { recentBookings, revenueByService } = res.data;

      setBookings(recentBookings);

      // Compute summary
      const totalBookings = revenueByService.reduce(
        (acc, item) => acc + item.count,
        0
      );

      const totalRevenue = revenueByService.reduce(
        (acc, item) => acc + item.totalRevenue,
        0
      );

      const topService =
        revenueByService.sort(
          (a, b) => b.totalRevenue - a.totalRevenue
        )[0]?. _id || "-";

      const averageValue =
        totalBookings > 0
          ? Math.round(totalRevenue / totalBookings)
          : 0;

      setSummary({
        totalBookings,
        totalRevenue,
        topService,
        averageValue
      });
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
            <p className="text-white">Loading bookings...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Bookings</h2>
        <p className="text-gray-400">Manage and track customer reservations</p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <KpiCard 
          label="Total Bookings" 
          value={summary.totalBookings}
          icon="default"
          color="emerald"
        />
        <KpiCard 
          label="Total Revenue" 
          value={`$${summary.totalRevenue}`}
          icon="revenue"
          color="gold"
        />
        <KpiCard 
          label="Top Service" 
          value={summary.topService}
          icon="conversion"
          color="emerald"
        />
        <KpiCard 
          label="Avg Booking" 
          value={`$${summary.averageValue}`}
          icon="revenue"
          color="gold"
        />
      </div>

      {/* BOOKINGS TABLE */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <div className="border-b border-gray-800 p-6">
          <h3 className="text-lg font-semibold text-white">Recent Paid Bookings</h3>
          <p className="text-sm text-gray-400 mt-1">Latest customer reservations and payments</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-4 px-6 text-left">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Client
                  </div>
                </th>
                <th className="py-4 px-6 text-left">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Service
                  </div>
                </th>
                <th className="py-4 px-6 text-left">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Amount
                  </div>
                </th>
                <th className="py-4 px-6 text-left">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Date
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(b => (
                <tr 
                  key={b._id} 
                  className="border-b border-gray-800 last:border-none hover:bg-gray-800/50 transition-colors"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-900 to-green-900 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-white">
                          {b.name?.charAt(0) || 'C'}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-white">{b.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-emerald-900/20 text-emerald-400 text-xs font-medium rounded-full">
                        {b.service}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-amber-900 to-yellow-900 rounded flex items-center justify-center">
                        <DollarSign className="w-3 h-3 text-amber-400" />
                      </div>
                      <span className="font-semibold text-white">${b.amount}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex flex-col">
                      <span className="text-white">
                        {new Date(b.createdAt).toLocaleDateString()}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(b.createdAt).toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {!bookings.length && (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-emerald-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-emerald-500" />
              </div>
              <p className="text-gray-400">No bookings yet</p>
              <p className="text-sm text-gray-500 mt-2">Bookings will appear here once they're made</p>
            </div>
          )}
        </div>

        {bookings.length > 0 && (
          <div className="border-t border-gray-800 p-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
              <span className="text-gray-500">
                Showing {bookings.length} bookings
              </span>
              <div className="flex items-center gap-4">
                <span className="text-emerald-400 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Active bookings
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}