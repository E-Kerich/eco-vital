import { useEffect, useState } from "react";
import api from "../../../api/axios";
import DashboardLayout from "../../../components/admin/DashboardLayout";
import KpiCard from "../../../components/admin/KpiCard";
import { User, Mail, Globe, Clock, CheckCircle, Phone, Target } from "lucide-react";

export default function Leads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    contacted: 0,
    closed: 0
  });

  useEffect(() => {
    api.get("/leads").then(res => {
      setLeads(res.data);

      const counts = {
        total: res.data.length,
        new: 0,
        contacted: 0,
        closed: 0
      };

      res.data.forEach(l => {
        counts[l.status]++;
      });

      setStats(counts);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);

  const getStatusColor = (status) => {
    switch(status) {
      case 'new': return 'bg-emerald-900/20 text-emerald-400';
      case 'contacted': return 'bg-amber-900/20 text-amber-400';
      case 'closed': return 'bg-gray-800 text-gray-400';
      default: return 'bg-gray-800 text-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'new': return <Clock className="w-4 h-4" />;
      case 'contacted': return <Phone className="w-4 h-4" />;
      case 'closed': return <CheckCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="text-center">
            <div className="w-12 h-12 border-2 border-emerald-900 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white">Loading leads...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-2">Leads</h2>
        <p className="text-gray-400">Track and manage your sales pipeline</p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <KpiCard 
          label="Total Leads" 
          value={stats.total}
          icon="users"
          color="emerald"
        />
        <KpiCard 
          label="New" 
          value={stats.new}
          icon="default"
          color="emerald"
        />
        <KpiCard 
          label="Contacted" 
          value={stats.contacted}
          icon="default"
          color="gold"
        />
        <KpiCard 
          label="Closed" 
          value={stats.closed}
          icon="default"
          color="gold"
        />
      </div>

      {/* PIPELINE */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-white">Lead Pipeline</h3>
            <p className="text-sm text-gray-400 mt-1">Conversion progress and status distribution</p>
          </div>
          <div className="flex items-center gap-2 text-emerald-400">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">Pipeline View</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PipelineCard 
            title="New" 
            value={stats.new}
            color="emerald"
            icon={<Clock className="w-5 h-5" />}
          />
          <PipelineCard 
            title="Contacted" 
            value={stats.contacted}
            color="gold"
            icon={<Phone className="w-5 h-5" />}
          />
          <PipelineCard 
            title="Closed" 
            value={stats.closed}
            color="gray"
            icon={<CheckCircle className="w-5 h-5" />}
          />
        </div>
      </div>

      {/* LEADS TABLE */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <div className="border-b border-gray-800 p-6">
          <h3 className="text-lg font-semibold text-white">All Leads</h3>
          <p className="text-sm text-gray-400 mt-1">Complete lead database</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-4 px-6 text-left">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    <User className="w-4 h-4" />
                    Name
                  </div>
                </th>
                <th className="py-4 px-6 text-left">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    <Mail className="w-4 h-4" />
                    Email
                  </div>
                </th>
                <th className="py-4 px-6 text-left">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    <Globe className="w-4 h-4" />
                    Source
                  </div>
                </th>
                <th className="py-4 px-6 text-left">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Status
                  </div>
                </th>
                <th className="py-4 px-6 text-left">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    <Clock className="w-4 h-4" />
                    Date
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {leads.map(l => (
                <tr 
                  key={l._id} 
                  className="border-b border-gray-800 last:border-none hover:bg-gray-800/50 transition-colors"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-900 to-green-900 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-white">
                          {l.name?.charAt(0) || 'L'}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-white">{l.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span className="text-white">{l.email}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-gray-800 text-gray-400 text-xs font-medium rounded-full capitalize">
                        {l.source}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2 ${getStatusColor(l.status)}`}>
                        {getStatusIcon(l.status)}
                        <span className="capitalize">{l.status}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex flex-col">
                      <span className="text-white">
                        {new Date(l.createdAt).toLocaleDateString()}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(l.createdAt).toLocaleTimeString([], { 
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

          {!leads.length && (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-emerald-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-emerald-500" />
              </div>
              <p className="text-gray-400">No leads yet</p>
              <p className="text-sm text-gray-500 mt-2">Leads will appear here once they're captured</p>
            </div>
          )}
        </div>

        {leads.length > 0 && (
          <div className="border-t border-gray-800 p-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
              <span className="text-gray-500">
                Showing {leads.length} leads
              </span>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-gray-400">New: {stats.new}</span>
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-gray-400">Contacted: {stats.contacted}</span>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

/* Enhanced Pipeline Card */
function PipelineCard({ title, value, color, icon }) {
  const getColorClasses = () => {
    switch(color) {
      case 'emerald': return {
        bg: 'bg-gradient-to-br from-emerald-900/20 to-green-900/10',
        border: 'border-emerald-800/30',
        text: 'text-emerald-400'
      };
      case 'gold': return {
        bg: 'bg-gradient-to-br from-amber-900/20 to-yellow-900/10',
        border: 'border-amber-800/30',
        text: 'text-amber-400'
      };
      default: return {
        bg: 'bg-gray-900',
        border: 'border-gray-800',
        text: 'text-gray-400'
      };
    }
  };

  const colors = getColorClasses();

  return (
    <div className={`${colors.bg} border ${colors.border} rounded-xl p-6`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colors.bg}`}>
          <div className={colors.text}>
            {icon}
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-400">{title}</p>
      <p className="text-2xl font-bold text-white mt-2">{value}</p>
      <div className="mt-4 pt-4 border-t border-gray-800">
        <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full ${
              color === 'emerald' ? 'bg-emerald-500' :
              color === 'gold' ? 'bg-amber-500' :
              'bg-gray-500'
            }`}
            style={{ width: `${Math.min((value / 100) * 100, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}