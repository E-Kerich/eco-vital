import { Network, Briefcase, TrendingUp, Heart, Leaf, ArrowRight, CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Network className="w-5 h-5" />,
      title: "Pan-African Network",
      description: "We leverage extensive regional connections to create meaningful business opportunities across the continent.",
      color: "emerald",
      metric: "15+ Countries"
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Deep Industry Expertise",
      description: "Our team has decades of combined experience across diverse industries and sectors.",
      color: "amber",
      metric: "25+ Years"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Proven Impact & Success",
      description: "We have a track record of delivering transformative results for businesses and investors.",
      color: "emerald",
      metric: "200+ Projects"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Impact-Driven Approach",
      description: "We ensure every strategy delivers measurable economic and social benefits.",
      color: "amber",
      metric: "98% Satisfaction"
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      title: "Commitment to Sustainability",
      description: "Sustainability is at the core of everything we do, ensuring long-term value for all stakeholders.",
      color: "emerald",
      metric: "ESG First"
    }
  ];

  return (
    <section className="py-5 bg-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full border border-gray-200 mb-6">
            <span className="text-xs font-medium text-gray-700 uppercase tracking-wider">Why Choose Us</span>
          </div>
          
          <p className="text-lg text-gray-50 font-light leading-relaxed">
            What sets us apart is not just what we do, but how we do it.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="group p-6 bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center ${
                  item.color === 'emerald' ? 'text-emerald-700' : 'text-amber-700'
                }`}>
                  {item.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-medium text-gray-900">
                      {item.title}
                    </h3>
                    <span className={`text-xs font-medium px-2 py-0.5 ${
                      item.color === 'emerald' 
                        ? 'bg-emerald-50 text-emerald-700' 
                        : 'bg-amber-50 text-amber-700'
                    }`}>
                      {item.metric}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Last card - Contact CTA */}
          <div className="p-6 bg-gray-50 border border-gray-200 flex items-center justify-between group">
            <div>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Ready to begin?</span>
              <h3 className="text-base font-medium text-gray-900 mt-1">Let's talk</h3>
            </div>
            <a 
              href="/contact"
              className="w-8 h-8 bg-white border border-gray-200 flex items-center justify-center hover:border-gray-300 transition-colors group-hover:translate-x-0.5 duration-300"
            >
              <ArrowRight className="w-4 h-4 text-gray-600" />
            </a>
          </div>
        </div>

        {/* Bottom - Simple metric */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex justify-between items-center">
            
          </div>
        </div>
      </div>
    </section>
  );
}