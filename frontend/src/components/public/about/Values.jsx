import { Shield, Target, Eye, Users, Heart, Sparkles, ArrowRight } from "lucide-react";

export default function OurValues() {
  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integrity",
      description: "Transparency, ethics, and accountability in every engagement.",
      accent: "emerald-600",
      gradient: "from-emerald-900 to-emerald-800"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Impact",
      description: "Measured by positive, lasting outcomes beyond financial returns.",
      accent: "#B3785A",
      gradient: "from-amber-700 to-amber-600"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Clarity",
      description: "Simplifying complexity for confident, informed decisions.",
      accent: "#3C637B",
      gradient: "from-emerald-900 to-emerald-800"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Partnerships that deliver the best outcomes through shared expertise.",
      accent: "#A97862",
      gradient: "from-amber-600 to-amber-500"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Inclusivity",
      description: "Advancing economic participation for women and youth.",
      accent: "#194C63",
      gradient: "from-emerald-900 to-emerald-800"
    }
  ];

  return (
    <div className="py-5 md:py-10 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
           
            <span className="text-sm font-semibold text-emerald-700">Our Foundation</span>
          </div>
          
         
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The values that define our approach and shape every partnership
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Card */}
              <div className="h-full bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group-hover:border-blue-100 relative overflow-hidden">
                {/* Subtle background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"
                  style={{ 
                    backgroundColor: `${value.accent}15`,
                    color: value.accent
                  }}
                >
                  {value.icon}
                </div>

                {/* Title with Accent */}
                <div className="mb-4">
                  <div className="inline-flex items-center gap-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  </div>
                  {/* Accent line */}
                  <div 
                    className="w-12 h-1 rounded-full mt-2 transition-all duration-500 group-hover:w-16"
                    style={{ backgroundColor: value.accent }}
                  ></div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center relative">
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 p-6 sm:p-8 bg-white rounded-2xl border border-gray-100 shadow-lg max-w-3xl mx-auto">
            <div className="text-left">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Want to work with values that matter?
              </h3>
              <p className="text-gray-600">
                Discover how our principled approach can transform your journey
              </p>
            </div>
            <button 
              className="px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-90 active:scale-[0.98] whitespace-nowrap shadow-md hover:shadow-lg"
              style={{ 
                backgroundColor: "#194C63",
                color: "white"
              }}
            >
              Start Your Journey
            </button>
          </div>
          
          {/* Decorative Element */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500 font-medium">
              <span className="text-blue-600">✓</span> Trusted by 200+ professionals and organizations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}