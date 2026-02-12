import { Search, Target, TrendingUp, BarChart, ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState("01");

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Assessment",
      description: "We begin by understanding your unique goals, challenges, and market context through in-depth consultations.",
      icon: <Search className="w-6 h-6" />,
      color: "emerald",
      deliverables: [
        "Stakeholder interviews & workshops",
        "Market analysis & opportunity assessment",
        "Goal alignment & expectation setting"
      ],
      outcomes: [
        "Clear understanding of current state",
        "Identified opportunities & gaps",
        "Aligned stakeholder expectations"
      ],
      duration: "2-3 weeks"
    },
    {
      number: "02",
      title: "Strategy Design",
      description: "Based on insights gathered, we craft a tailored strategy aligned with your objectives and market realities.",
      icon: <Target className="w-6 h-6" />,
      color: "amber",
      deliverables: [
        "Custom strategy development",
        "Risk assessment & mitigation planning",
        "Roadmap creation & resource planning"
      ],
      outcomes: [
        "Comprehensive strategic roadmap",
        "Risk mitigation framework",
        "Resource allocation plan"
      ],
      duration: "3-4 weeks"
    },
    {
      number: "03",
      title: "Implementation Support",
      description: "We provide hands-on guidance throughout execution, ensuring seamless deployment of your strategy.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "emerald",
      deliverables: [
        "Project management & coordination",
        "Regular progress reviews & adjustments",
        "Stakeholder communication & alignment"
      ],
      outcomes: [
        "Successful strategy deployment",
        "Real-time issue resolution",
        "Team capability building"
      ],
      duration: "6-8 weeks"
    },
    {
      number: "04",
      title: "Impact Measurement",
      description: "We track progress, measure outcomes, and refine approaches to ensure sustainable success.",
      icon: <BarChart className="w-6 h-6" />,
      color: "amber",
      deliverables: [
        "Performance tracking & analytics",
        "ROI calculation & impact assessment",
        "Continuous improvement recommendations"
      ],
      outcomes: [
        "Quantifiable business impact",
        "Clear ROI demonstration",
        "Sustainable growth framework"
      ],
      duration: "Ongoing"
    }
  ];

  const activeStepData = processSteps.find(step => step.number === activeStep);

  return (
    <section className="relative py-5 bg-gray-700 overflow-hidden">
      {/* Background Elements */}
      
      

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm mb-6">
            
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Our Methodology
            </span>
          </div>
          
          
          
          <p className="text-sm md:text-xl text-gray-100 leading-relaxed">
            A transparent, structured approach that removes uncertainty and ensures 
            clarity at every stage of our partnership.
          </p>
        </div>

        {/* Desktop: Grid Navigation - Hidden on mobile */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-4 mb-16">
          {processSteps.map((step) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(step.number)}
              className={`group relative p-6  border-2 transition-all duration-300 ${
                activeStep === step.number
                  ? step.color === 'emerald'
                    ? 'border-emerald-500 bg-gray-100 shadow-lg'
                    : 'border-emerald-500 bg-gray-50 shadow-lg'
                  : 'border-gray-50 bg-white '
              }`}
            >
              {/* Step Number */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-sm font-bold ${
                  activeStep === step.number
                    ? step.color === 'emerald' ? 'text-emerald-600' : 'text-amber-600'
                    : 'text-gray-400'
                }`}>
                  Step {step.number}
                </span>
                
              </div>
              
              {/* Title */}
              <h3 className={`text-left font-bold mb-2 ${
                activeStep === step.number ? 'text-gray-900' : 'text-gray-700'
              }`}>
                {step.title}
              </h3>
              
              {/* Duration Badge */}
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <span className="w-1.5 h-1.5  bg-gray-400 rounded-full"></span>
                {step.duration}
              </div>

              {/* Active Indicator */}
              {activeStep === step.number && (
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                  <div className="w-2 h-2 rotate-45 bg-white border-r-2 border-b-2 border-emerald-500"></div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Mobile: Step Indicators */}
        <div className="lg:hidden flex overflow-x-auto pb-4 mb-8 gap-2 hide-scrollbar">
          {processSteps.map((step) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(step.number)}
              className={`flex-shrink-0 px-4 py-2 rounded-full border transition-all ${
                activeStep === step.number
                  ? step.color === 'emerald'
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-amber-600 text-white border-amber-600'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
              }`}
            >
              {step.title.split(' ')[0]} {step.number}
            </button>
          ))}
        </div>

        {/* Active Step Detailed View */}
        {activeStepData && (
          <div 
            key={activeStepData.number}
            className="bg-white  shadow-xl border border-gray-100 overflow-hidden transition-all duration-500 animate-fadeIn"
          >
            <div className="grid lg:grid-cols-5">
              {/* Left Panel - Step Overview */}
              <div className={`lg:col-span-2 p-8 lg:p-10 ${
                activeStepData.color === 'emerald' 
                  ? 'lg:bg-gradient-to-br lg:from-emerald-50 lg:to-white' 
                  : 'lg:bg-gradient-to-br lg:from-amber-50 lg:to-white'
              }`}>
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className={`w-16 h-16  flex items-center justify-center shadow-lg ${
                      activeStepData.color === 'emerald' 
                        ? 'bg-gradient-to-br from-emerald-600 to-emerald-700' 
                        : 'bg-gradient-to-br from-amber-600 to-amber-700'
                    }`}
                  >
                    <span className="text-white font-bold text-2xl">
                      {activeStepData.number}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Current Step
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {activeStepData.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {activeStepData.description}
                </p>

                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      Duration: <span className="font-semibold text-gray-900">{activeStepData.duration}</span>
                    </span>
                  </div>
                </div>

                {/* Key Outcomes */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Key Outcomes
                  </h4>
                  <ul className="space-y-3">
                    {activeStepData.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          activeStepData.color === 'emerald' 
                            ? 'bg-emerald-100 text-emerald-600' 
                            : 'bg-amber-100 text-amber-600'
                        }`}>
                          <span className="text-xs font-bold">✓</span>
                        </div>
                        <span className="text-gray-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Panel - Deliverables & Next Steps */}
              <div className="lg:col-span-3 p-8 lg:p-10">
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                    Detailed Deliverables
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {activeStepData.deliverables.map((item, i) => (
                      <div 
                        key={i} 
                        className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-all"
                      >
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 ${
                          activeStepData.color === 'emerald' ? 'text-emerald-500' : 'text-amber-500'
                        }`} />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Methodology Note */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      activeStepData.color === 'emerald' 
                        ? 'bg-emerald-100 text-emerald-600' 
                        : 'bg-amber-100 text-amber-600'
                    }`}>
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">
                        Why this matters
                      </h5>
                      <p className="text-gray-600 text-sm">
                        {activeStepData.number === "01" && "Thorough discovery prevents costly missteps and ensures our strategy is built on a foundation of truth, not assumptions."}
                        {activeStepData.number === "02" && "A well-designed strategy acts as your North Star, aligning resources and efforts toward clearly defined outcomes."}
                        {activeStepData.number === "03" && "Implementation support bridges the gap between strategy and execution, turning plans into tangible results."}
                        {activeStepData.number === "04" && "Continuous measurement and refinement ensure your success is sustainable and your ROI is maximized."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Next Step Suggestion */}
                {activeStepData.number !== "04" && (
                  <div className="mt-8 flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        Next: <span className="font-semibold text-gray-900">
                          {processSteps[parseInt(activeStepData.number) + 1]?.title}
                        </span>
                      </span>
                    </div>
                    <button
                      onClick={() => setActiveStep(processSteps[parseInt(activeStepData.number) + 1]?.number)}
                      className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                    >
                      View Step
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        
        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-white border border-gray-200 shadow-lg max-w-3xl mx-auto">
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ready to begin your journey?
              </h3>
              <p className="text-gray-600">
                Let's start with a discovery conversation about your goals
              </p>
            </div>
            <a 
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl hover:shadow-xl transition-all font-semibold group"
            >
              Schedule Discovery Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}

// Add Clock icon import
import { Clock } from "lucide-react";