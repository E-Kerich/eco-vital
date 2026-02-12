import { useEffect } from "react";
import ServiceLayout from "./ServiceLayout";
import { 
  ArrowRight, 
  TrendingUp, 
  BarChart, 
  Shield, 
  DollarSign, 
  PieChart,
  LineChart,
  Briefcase,
  CheckCircle,
  Users,
  Clock,
  Building2,
  ChevronRight,
  Scale,
  Sparkles
} from "lucide-react";

export default function InvestmentFinancialConsulting() {
    useEffect (() => {
        window.scrollTo(0, 0);
        }, []);
  const deliverables = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Investment Structuring",
      description: "Tailored capital structures that optimize returns while managing risk exposure across diverse asset classes."
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Financial Modeling",
      description: "Sophisticated, scenario-based models that provide clarity on valuation, cash flows, and growth trajectories."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk Assessment",
      description: "Comprehensive identification, analysis, and mitigation of financial, operational, and market risks."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Capital Raising Advisory",
      description: "Strategic guidance on fundraising, investor targeting, and capital optimization across debt and equity."
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Due Diligence Support",
      description: "Rigorous financial, legal, and operational due diligence for mergers, acquisitions, and investments."
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Portfolio Optimization",
      description: "Data-driven asset allocation and rebalancing strategies to maximize returns and minimize volatility."
    }
  ];

  return (
    <ServiceLayout
      title="Investment & Financial Consulting"
      subtitle="Structuring investments and financial strategies that deliver measurable impact and long-term value."
      heroImage="https://res.cloudinary.com/durfnwa3k/image/upload/v1770879888/business-objects-with-executives-discussing-blueprint-meeting_an1vjv.jpg"
    >
      {/* The Challenge Section - With Stats (matching Strategic Advisory) */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-200 mb-6">
            <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">Key Positioning</span>
          </div>
          <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">
            Capital Discipline +{' '}
            <span className="font-medium text-emerald-700">Risk Management</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Many organizations struggle with capital inefficiency, inadequate risk frameworks, 
            and difficulty accessing investment. Without disciplined financial strategy, growth 
            opportunities remain untapped and investor confidence erodes.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <span className="text-emerald-700 font-bold text-xl">67%</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">of companies</p>
                <p className="text-sm text-gray-600">lack formal investment readiness frameworks</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-amber-700 font-bold text-xl">52%</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">of investment opportunities</p>
                <p className="text-sm text-gray-600">fail due to poor structuring</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="sticky top-24">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://res.cloudinary.com/durfnwa3k/image/upload/v1770879888/business-objects-with-executives-discussing-blueprint-meeting_an1vjv.jpg"
                alt="Investment strategy session"
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 text-white">
                  <Users className="w-5 h-5" />
                  <span className="text-sm font-medium">$500M+ capital raised for clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Deliver - Grid Layout with Icons (matching Strategic Advisory) */}
      <div className="mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-200 mb-6">
            <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">Our Approach</span>
          </div>
          <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
            Core <span className="font-medium text-emerald-700">Deliverables</span>
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive financial solutions tailored to your investment objectives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                  <div className="text-emerald-600">
                    {item.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      

      {/* Outcome Section - With Image and Benefits (matching Strategic Advisory) */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <div className="order-2 lg:order-1">
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 lg:p-10 border border-emerald-100 h-full flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-full mb-6 w-fit">
              <BarChart className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">The Outcome</span>
            </div>
            
            <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">
              Stronger Financial Positioning.{' '}
              <span className="font-medium text-emerald-700">Investor Confidence.</span>
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our clients achieve enhanced capital efficiency, reduced risk exposure, and the credibility 
              needed to attract and retain institutional investors.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Optimized capital structure and cost of capital",
                "Enhanced risk management frameworks",
                "Improved investor confidence and valuation",
                "Sustainable long-term financial performance"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-emerald-200">
              <div>
                <div className="text-2xl font-bold text-gray-900">$10M+</div>
                <div className="text-xs text-gray-600">Capital raised</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-xs text-gray-600">Client retention</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">150+</div>
                <div className="text-xs text-gray-600">Transactions</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="relative h-full">
            <img 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Financial success"
              className="w-full h-full object-cover rounded-3xl shadow-xl aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Average ROI</p>
                  <p className="font-semibold text-gray-900">22.4% above benchmark</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Types - Matching style from Strategic Advisory */}
      <div className="mb-20 bg-white border border-gray-200 rounded-3xl p-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
            Who We <span className="font-medium text-emerald-700">Serve</span>
          </h2>
          <p className="text-lg text-gray-600">
            Institutional investors, corporations, and high-growth enterprises
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: <Building2 className="w-6 h-6" />, title: "Private Equity", desc: "Fund structuring & deal advisory" },
            { icon: <Briefcase className="w-6 h-6" />, title: "Corporate Finance", desc: "Capital raising & M&A" },
            { icon: <Users className="w-6 h-6" />, title: "Family Offices", desc: "Portfolio management" },
            { icon: <TrendingUp className="w-6 h-6" />, title: "Growth Companies", desc: "Investment readiness" }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-4 text-emerald-600">
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </ServiceLayout>
  );
}