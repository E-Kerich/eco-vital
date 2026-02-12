import { useEffect } from "react";
import ServiceLayout from "./ServiceLayout";
import { 
  ArrowRight, 
  Globe, 
  Map, 
  Shield, 
  BarChart, 
  CheckCircle, 
  TrendingUp,
  Users,
  Building2,
  Scale,
  Compass,
  Target,
  Network,
  Briefcase,
  DollarSign
} from "lucide-react";

export default function MarketEntryExpansionStrategy() {
    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);
  const deliverables = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Market Feasibility Analysis",
      description: "In-depth assessment of market size, growth potential, customer segments, and entry barriers to validate opportunity viability."
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "Regulatory Mapping",
      description: "Comprehensive analysis of legal, licensing, tax, and compliance requirements across target jurisdictions."
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Competitive Landscape Assessment",
      description: "Detailed benchmarking of existing players, market share analysis, and identification of competitive advantages."
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Partnership Strategy",
      description: "Identification, evaluation, and structuring of strategic partnerships, joint ventures, and distribution agreements."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Expansion Risk Mitigation",
      description: "Proactive identification of political, operational, financial, and reputational risks with tailored mitigation frameworks."
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Entry Mode Selection",
      description: "Strategic guidance on optimal entry modes—greenfield, acquisition, partnership, or franchising—aligned with your objectives."
    }
  ];

  const entryModes = [
    {
      mode: "Greenfield",
      description: "Build operations from the ground up",
      bestFor: "Full control, long-term commitment",
      color: "emerald"
    },
    {
      mode: "Joint Venture",
      description: "Partner with local established entities",
      bestFor: "Shared risk, local expertise",
      color: "amber"
    },
    {
      mode: "Acquisition",
      description: "Purchase existing market players",
      bestFor: "Immediate scale, established presence",
      color: "emerald"
    },
    {
      mode: "Franchising",
      description: "License business model to local operators",
      bestFor: "Rapid expansion, capital efficiency",
      color: "amber"
    },
    {
      mode: "Strategic Alliance",
      description: "Non-equity collaboration agreements",
      bestFor: "Flexibility, low commitment",
      color: "emerald"
    },
    {
      mode: "Export",
      description: "Direct or indirect product distribution",
      bestFor: "Testing markets, minimal investment",
      color: "amber"
    }
  ];

  const successFactors = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Local Market Intelligence",
      description: "On-the-ground insights from our pan-African network"
    },
    {
      icon: <Scale className="w-5 h-5" />,
      title: "Regulatory Navigation",
      description: "Proven expertise in complex licensing and compliance"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Partner Identification",
      description: "Access to vetted local partners and distributors"
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Cost Optimization",
      description: "Efficient entry strategies that preserve capital"
    }
  ];

  return (
    <ServiceLayout
      title="Market Entry & Expansion Strategy"
      subtitle="Structured market analysis and regulatory navigation for confident expansion."
      heroImage="/assets/fn.jpg"
    >
      {/* The Challenge Section - With Stats */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-200 mb-6">
            <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">The Challenge</span>
          </div>
          <h2 className="text-2xl font-light text-gray-900 mb-6 tracking-tight">
            Navigating Complexity in{' '}
            <span className="font-medium text-emerald-700">New Markets</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Expanding into African markets presents immense opportunity, but also significant complexity. 
            Unfamiliar regulatory environments, fragmented distribution channels, and nuanced cultural dynamics 
            can derail even the most well-resourced entry strategies. Without structured analysis and local 
            intelligence, companies face costly delays, compliance failures, and missed opportunities.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <span className="text-emerald-700 font-bold text-xl">60%</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">of market entries</p>
                <p className="text-sm text-gray-600">fail within the first two years</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-amber-700 font-bold text-xl">73%</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">of executives</p>
                <p className="text-sm text-gray-600">cite regulatory uncertainty as top barrier</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="sticky top-24">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Market expansion strategy"
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 text-white">
                  <Globe className="w-5 h-5" />
                  <span className="text-sm font-medium">15+ African markets accessed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Deliver - Grid Layout with Icons */}
      <div className="mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-200 mb-6">
            <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">Our Approach</span>
          </div>
          
          <p className="text-lg text-gray-600">
            Comprehensive market entry solutions tailored to your industry and target geographies
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

      {/* Entry Modes Section */}
      <div className="mb-10 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 rounded-3xl p-5">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">
            Entry Mode{' '}
            <span className="font-medium text-emerald-700">Selection</span>
          </h2>
          <p className="text-lg text-gray-600">
            Strategic guidance on the optimal pathway for your expansion objectives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entryModes.map((mode, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-6 border ${
                mode.color === 'emerald' ? 'border-emerald-100' : 'border-amber-100'
              } shadow-sm hover:shadow-md transition-all`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{mode.mode}</h3>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  mode.color === 'emerald' 
                    ? 'bg-emerald-100 text-emerald-700' 
                    : 'bg-amber-100 text-amber-700'
                }`}>
                  {mode.color === 'emerald' ? 'Recommended' : 'Strategic'}
                </div>
              </div>
              <p className="text-gray-600 mb-3">{mode.description}</p>
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <span className="font-medium">Best for:</span> {mode.bestFor}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Success Factors Section */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <div className="order-2 lg:order-1">
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 lg:p-10 border border-amber-100 h-full flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-full mb-6 w-fit">
             
              <span className="text-xs font-semibold uppercase tracking-wider">Success Factors</span>
            </div>
            
            <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">
              What Sets Successful{' '}
              <span className="font-medium text-amber-700">Market Entries Apart</span>
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Companies that successfully enter African markets don't just adapt, they integrate. 
              They combine rigorous analysis with on-the-ground intelligence, build authentic local 
              partnerships, and maintain flexibility in their execution approach.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {successFactors.map((factor, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-amber-600">
                      {factor.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">{factor.title}</h4>
                    <p className="text-xs text-gray-600">{factor.description}</p>
                  </div>
                </div>
              ))}
            </div>

            
            
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="relative h-full">
            <img 
              src="/assets/fn.jpg"
              alt="Global partnership"
              className="w-full h-[300px] md:h-[500px] object-cover rounded-3xl shadow-xl aspect-[4/3]"
            />
            
            
          </div>
        </div>
      </div>

      
      {/* Outcome Section - With Image and Benefits */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <div className="order-2 lg:order-1">
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 lg:p-10 border border-emerald-100 h-full flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-full mb-6 w-fit">
              <Compass className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">The Outcome</span>
            </div>
            
            <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">
              Confident Entry.{' '}
              <span className="font-medium text-emerald-700">Reduced Uncertainty.</span>
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our clients enter new markets with clarity, confidence, and a clear roadmap. 
              They avoid costly missteps, accelerate time-to-revenue, and establish sustainable 
              footholds that position them for long-term success.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Validated market opportunities with clear ROI projections",
                "Complete regulatory roadmap with licensing timelines",
                "Vetted local partners and distribution channels",
                "Comprehensive risk mitigation strategies",
                "Accelerated path to profitability"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-emerald-200">
              <div>
                <div className="text-2xl font-bold text-gray-900">40%</div>
                <div className="text-xs text-gray-600">Faster market entry</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">65%</div>
                <div className="text-xs text-gray-600">Lower entry costs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">85%</div>
                <div className="text-xs text-gray-600">5-year success rate</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="relative h-full">
            <img 
              src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Global business expansion"
              className="w-full h-full object-cover rounded-3xl shadow-xl aspect-[4/3]"
            />
            
          </div>
        </div>
      </div>

      {/* Client Types */}
      <div className="mb-20 bg-white border border-gray-200 rounded-3xl p-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
            Who We <span className="font-medium text-emerald-700">Serve</span>
          </h2>
          <p className="text-lg text-gray-600">
            Organizations seeking strategic entry and expansion across African markets
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: <Building2 className="w-6 h-6" />, title: "Multinationals", desc: "First-time entry & regional expansion" },
            { icon: <Briefcase className="w-6 h-6" />, title: "Investors", desc: "Market opportunity assessment" },
            { icon: <TrendingUp className="w-6 h-6" />, title: "SMEs", desc: "Cross-border growth strategies" },
            { icon: <Globe className="w-6 h-6" />, title: "Exporters", desc: "Distribution partner identification" }
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