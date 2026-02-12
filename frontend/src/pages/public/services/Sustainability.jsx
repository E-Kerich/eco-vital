import ServiceLayout from "./ServiceLayout";
import { useEffect } from "react";
import { 
  ArrowRight, 
  Leaf, 
  Globe, 
  Shield, 
  BarChart, 
  CheckCircle, 
  TrendingUp,
  Users,
  Building2,
  Scale,
  Sparkles,
  Target,
  Heart,
  FileText
} from "lucide-react";

export default function SustainabilityESGAdvisory() {
    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);
  const deliverables = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "ESG Framework Development",
      description: "Custom environmental, social, and governance frameworks aligned with your industry, scale, and strategic objectives."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Sustainability Reporting",
      description: "Comprehensive reporting in accordance with GRI, SASB, TCFD, and other global standards to communicate your impact."
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Regulatory Compliance Advisory",
      description: "Navigate evolving ESG regulations and disclosure requirements across African and international markets."
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Impact Measurement Systems",
      description: "Data-driven frameworks to track, measure, and communicate your environmental and social impact."
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Governance Structuring",
      description: "Strengthen board oversight, ethical practices, and accountability mechanisms for long-term resilience."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Stakeholder Engagement",
      description: "Strategies to identify, prioritize, and engage stakeholders in your sustainability journey."
    }
  ];

  return (
    <ServiceLayout
      title="Sustainability & ESG Advisory"
      subtitle="Integrating sustainability and ESG compliance into core business strategy."
      heroImage="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    >
      {/* The Challenge Section - With Stats */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-200 mb-6">
            <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">The Challenge</span>
          </div>
          <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">
            Integrating Sustainability into{' '}
            <span className="font-medium text-emerald-700">Core Strategy</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Organizations face mounting pressure from investors, regulators, and consumers to demonstrate 
            authentic ESG commitment. Yet many struggle to move beyond compliance toward true integration, 
            missing opportunities for value creation and risk mitigation.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <span className="text-emerald-700 font-bold text-xl">90%</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">of institutional investors</p>
                <p className="text-sm text-gray-600">now consider ESG performance in investment decisions</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-amber-700 font-bold text-xl">65%</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">of companies</p>
                <p className="text-sm text-gray-600">lack integrated ESG reporting frameworks</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="sticky top-24">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Sustainability strategy"
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 text-white">
                  <Globe className="w-5 h-5" />
                  <span className="text-sm font-medium">ESG integrated for 50+ organizations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Deliver - Grid Layout with Icons */}
      <div className="mb-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-200 mb-6">
            <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">Our Approach</span>
          </div>
          
          <p className="text-lg text-gray-600">
            Comprehensive ESG solutions tailored to your industry and sustainability maturity
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

      {/* ESG Pillars Section */}
      <div className="mb-10 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 rounded-3xl p-5">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
            The Three <span className="font-medium text-emerald-700">Pillars</span>
          </h2>
          <p className="text-lg text-gray-600">
            A balanced approach to environmental stewardship, social responsibility, and governance excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Environmental */}
          <div className="bg-white rounded-2xl p-8 border border-emerald-100 shadow-sm hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Environmental</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Carbon footprint measurement & reduction</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Climate risk assessment</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Resource efficiency & circular economy</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="bg-white rounded-2xl p-8 border border-amber-100 shadow-sm hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Social</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Labor practices & human rights</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">DEI strategy & implementation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Community engagement & impact</span>
              </li>
            </ul>
          </div>

          {/* Governance */}
          <div className="bg-white rounded-2xl p-8 border border-emerald-100 shadow-sm hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Governance</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Board oversight & accountability</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Ethics & compliance programs</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Transparency & disclosure</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Process Timeline */}
      <div className="mb-10 bg-gray-50 rounded-3xl p-5">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">
            Our ESG{' '}
            <span className="font-medium text-emerald-700">Integration Process</span>
          </h2>
          <p className="text-lg text-gray-600">
            A phased approach to embedding sustainability into your organization
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-emerald-200 -translate-y-1/2 hidden lg:block"></div>
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", desc: "Baseline ESG maturity evaluation and materiality assessment" },
              { step: "02", title: "Strategy", desc: "Custom ESG framework and roadmap development" },
              { step: "03", title: "Implementation", desc: "Systems, policies, and reporting mechanisms deployment" },
              { step: "04", title: "Reporting", desc: "Disclosure alignment and stakeholder communication" }
            ].map((phase, index) => (
              <div key={index} className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">{phase.step}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{phase.title}</h4>
                <p className="text-sm text-gray-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Outcome Section - With Image and Benefits */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <div className="order-2 lg:order-1">
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 lg:p-10 border border-emerald-100 h-full flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-full mb-6 w-fit">
              <Leaf className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">The Outcome</span>
            </div>
            
            <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">
              Responsible Growth.{' '}
              <span className="font-medium text-emerald-700">Global Standards.</span>
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our clients achieve authentic ESG integration that satisfies investor demands, 
              meets regulatory requirements, and creates lasting value for all stakeholders.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Enhanced investor confidence and access to capital",
                "Improved regulatory compliance and risk management",
                "Stronger brand reputation and stakeholder trust",
                "Measurable environmental and social impact",
                "Long-term business resilience"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-emerald-200">
              <div>
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-xs text-gray-600">GRI aligned reporting</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">40%</div>
                <div className="text-xs text-gray-600">Avg. carbon reduction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-xs text-gray-600">ESG frameworks</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="relative h-full">
            <img 
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Sustainable future"
              className="w-full h-full object-cover rounded-3xl shadow-xl aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">ESG Integration</p>
                  <p className="font-semibold text-gray-900">UNPRI Signatory</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {/* Client Types */}
      <div className="mb-10 bg-white border border-gray-200 rounded-3xl p-5">
        <div className="text-center max-w-2xl mx-auto mb-5">
          <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
            Who We <span className="font-medium text-emerald-700">Serve</span>
          </h2>
          <p className="text-lg text-gray-600">
            Organizations committed to responsible business practices
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: <Building2 className="w-6 h-6" />, title: "Corporates", desc: "ESG strategy & reporting" },
            { icon: <TrendingUp className="w-6 h-6" />, title: "Investment Firms", desc: "ESG integration & due diligence" },
            { icon: <Users className="w-6 h-6" />, title: "SMEs", desc: "Sustainability roadmaps" },
            { icon: <Globe className="w-6 h-6" />, title: "Development Orgs", desc: "Impact measurement" }
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