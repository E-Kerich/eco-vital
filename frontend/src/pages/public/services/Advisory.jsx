import ServiceLayout from "./ServiceLayout";
import { useEffect } from "react";
import { 
  ArrowRight, 
  Target, 
  TrendingUp, 
  Shield, 
  BarChart, 
  CheckCircle, 
  Briefcase,
  Users,
  Clock,
  Building2,
  ChevronRight
} from "lucide-react";

export default function StrategicAdvisory() {
    useEffect(() => {
window.scrollTo(0, 0);
}, []);
  const deliverables = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Planning & Roadmap",
      description: "Comprehensive strategy development with clear milestones and actionable steps."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Operational Optimization",
      description: "Streamline processes, reduce costs, and improve efficiency across your organization."
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Growth & Scalability",
      description: "Frameworks designed to scale your business sustainably and effectively."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk Mitigation",
      description: "Identify potential threats and develop robust mitigation strategies."
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Executive-level strategic guidance"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Data-driven decision frameworks"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Market-validated growth strategies"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Sustainable competitive advantage"
    }
  ];

  return (
    <ServiceLayout
      title="Strategic Business Advisory"
      subtitle="Clarity, direction, and structured growth strategies for organizations navigating complex markets."
    >
      

      {/* The Challenge Section - With Stats */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full border border-amber-200 mb-6">
            <span className="text-sm font-semibold text-amber-700 uppercase tracking-wider">The Challenge</span>
          </div>
          <h2 className="text-2xl font-light text-gray-900 mb-6 tracking-tight">
            Navigating Complexity in <span className="font-medium text-emerald-700">Uncertain Markets</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Many organizations struggle with unclear strategic direction, inefficient operations, 
            or misaligned growth plans. Without a structured strategy, expansion efforts can become 
            costly, risky, and ultimately unsustainable.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <span className="text-emerald-700 font-bold text-xl">78%</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">of executives</p>
                <p className="text-sm text-gray-600">report strategic misalignment as a top barrier to growth</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-amber-700 font-bold text-xl">63%</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">of companies</p>
                <p className="text-sm text-gray-600">fail to execute strategies effectively</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="sticky top-24">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Strategic planning session"
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 text-white">
                  <Users className="w-5 h-5" />
                  <span className="text-sm font-medium">200+ strategic engagements delivered</span>
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
          <h2 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">
            Comprehensive Strategic <span className="font-medium text-emerald-700">Solutions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Tailored frameworks designed to address your unique challenges and opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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

      
      {/* Outcome Section - With Image and Benefits */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <div className="order-2 lg:order-1">
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 lg:p-10 border border-emerald-100 h-full flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-full mb-6 w-fit">
              <BarChart className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">The Outcome</span>
            </div>
            
            <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">
              Sustainable Growth. <span className="font-medium text-emerald-700">Measurable Impact.</span>
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Clear direction, stronger performance, and sustainable long-term growth. 
              Our clients achieve:
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-emerald-600">
                    {benefit.icon}
                  </div>
                  <span className="text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-emerald-200">
              <div>
                <div className="text-2xl font-bold text-gray-900">85%</div>
                <div className="text-xs text-gray-600">Strategy execution success rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">3.2x</div>
                <div className="text-xs text-gray-600">Average ROI</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-xs text-gray-600">Projects delivered</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="relative h-full">
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Business success"
              className="w-full h-full object-cover rounded-3xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Client Success</p>
                  <p className="font-semibold text-gray-900">98% satisfaction rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
            Ready to transform your strategic direction?
          </h3>
          <p className="text-gray-300 text-lg mb-8">
            Let's discuss how our strategic advisory services can help you achieve sustainable growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all font-medium shadow-lg hover:shadow-xl group"
            >
             Talk to an Expert
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/services"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl hover:bg-white/20 transition-all font-medium"
            >
              Explore Other Services
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}