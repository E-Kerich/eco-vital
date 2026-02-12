import { Users, Target, ChevronRight, Shield, Heart, Eye, CheckCircle, Globe, Briefcase, TrendingUp } from "lucide-react";

export default function WhoWeAre() {
  const principles = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Integrity",
      description: "Transparency, ethics, and accountability in every engagement.",
      color: "emerald"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Impact",
      description: "Measured by positive, lasting outcomes beyond financial returns.",
      color: "amber"
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Clarity",
      description: "Simplifying complexity for confident, informed decisions.",
      color: "emerald"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Collaboration",
      description: "Partnerships that deliver the best outcomes.",
      color: "amber"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Inclusivity",
      description: "Advancing economic participation for women and youth.",
      color: "emerald"
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full border border-gray-200 mb-6">
            <span className="text-xs font-medium text-gray-700 uppercase tracking-wider">Who We Are</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
            Your trusted partner in <span className="font-medium text-emerald-700">African markets</span>
          </h2>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            We combine deep local expertise with global standards to deliver sustainable, impactful solutions.
          </p>
        </div>

        {/* Mission & Vision Grid - Clean, professional cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {/* Mission */}
          <div className="p-8 bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300">
            <div className="w-10 h-10 flex items-center justify-center mb-6 text-emerald-700 border-b border-emerald-200 pb-4">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Our Mission</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To be the foremost catalyst for sustainable business transformation and impact-driven investment in Africa. 
              We envision a future where businesses thrive through responsible and innovative practices, creating lasting 
              economic, social, and environmental value.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300">
            <div className="w-10 h-10 flex items-center justify-center mb-6 text-amber-700 border-b border-amber-200 pb-4">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Our Vision</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To empower enterprises, investors, and organizations by providing cutting-edge advisory services that 
              integrate sustainability, investment facilitation, and business transformation. Through strategic 
              partnerships, tailored solutions, and knowledge-sharing.
            </p>
          </div>
        </div>

        {/* Core Principles - Compact grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Our Core Principles</h3>
            <p className="text-sm text-gray-500">Values that guide every decision and shape every partnership</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {principles.map((item, index) => (
              <div
                key={index}
                className="p-5 bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300"
              >
                <div className={`w-8 h-8 flex items-center justify-center mb-3 ${
                  item.color === 'emerald' ? 'text-emerald-700' : 'text-amber-700'
                }`}>
                  {item.icon}
                </div>
                <h4 className={`text-xs font-medium uppercase tracking-wider mb-2 ${
                  item.color === 'emerald' ? 'text-emerald-700' : 'text-amber-700'
                }`}>
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Differentiators - Clean two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <div className="mb-6">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">What Sets Us Apart</span>
              <h3 className="text-2xl font-light text-gray-900 mt-3 mb-4">
                Bridging local expertise with global standards
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We combine deep on-the-ground knowledge of African markets with international best practices,
                delivering solutions that are both contextually relevant and globally competitive.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-700 text-xs font-bold">✓</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">4+ Years</div>
                  <div className="text-xs text-gray-500">Experience</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-700 text-xs font-bold">✓</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">10+ Countries</div>
                  <div className="text-xs text-gray-500">Across Africa</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-700 text-xs font-bold">✓</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">100+ Projects</div>
                  <div className="text-xs text-gray-500">Delivered</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-700 text-xs font-bold">✓</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">98%</div>
                  <div className="text-xs text-gray-500">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="border border-gray-200 bg-gray-50">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="w-full h-[250px] md:h-[300px] object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>

        {/* CTA - Clean, minimal */}
        <div className="border-t border-gray-200 pt-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Ready to work with us?</h3>
              <p className="text-sm text-gray-500">Let's discuss how we can help you achieve your goals</p>
            </div>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Contact Our Team
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom - Simple metric */}
        <div className="mt-12 pt-6 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span className="text-xs text-gray-600">Trusted partner since 2020</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-400">100+ clients</span>
              <span className="text-xs text-gray-400">10 countries</span>
              <span className="text-xs text-gray-400">98% retention</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}