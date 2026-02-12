import ServiceLayout from "./ServiceLayout";
import { useEffect } from "react";
import { 
  ArrowRight, 
  Users, 
  Target, 
  Shield, 
  BarChart, 
  CheckCircle, 
  TrendingUp,
  User,
  Building2,
  Sparkles,
  GraduationCap,
  BookOpen,
  Award,
  Briefcase,
  Heart,
  Star
} from "lucide-react";

export default function TrainingCapacityBuilding() {
    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);
  const deliverables = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Executive Leadership Training",
      description: "Immersive programs designed to sharpen strategic thinking, decision-making, and influential leadership capabilities at the highest levels."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Governance Workshops",
      description: "Practical training on board oversight, regulatory compliance, ethical frameworks, and accountable decision-making structures."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Corporate Mentorship",
      description: "Structured mentorship programs that pair emerging leaders with seasoned executives to accelerate professional growth and knowledge transfer."
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "One-on-One Coaching",
      description: "Personalized coaching sessions focused on individual leadership challenges, career transitions, and performance optimization."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Operational Efficiency Programs",
      description: "Hands-on training to streamline processes, eliminate waste, and build a culture of continuous improvement across teams."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certification Programs",
      description: "Industry-recognized certification pathways that validate expertise and enhance professional credibility."
    }
  ];

  const programs = [
    {
      level: "Executive",
      audience: "C-suite, Board Members, Senior Leaders",
      modules: ["Strategic Leadership", "Change Management", "Board Governance", "Crisis Decision-Making"],
      color: "emerald"
    },
    {
      level: "Mid-Management",
      audience: "Department Heads, Team Leaders, Managers",
      modules: ["Team Development", "Performance Management", "Effective Communication", "Project Leadership"],
      color: "amber"
    },
    {
      level: "Emerging Talent",
      audience: "High-potential employees, New Managers",
      modules: ["Foundational Leadership", "Professional Skills", "Mentorship Readiness", "Career Planning"],
      color: "emerald"
    }
  ];

  const mentorshipFeatures = [
    {
      icon: <Star className="w-5 h-5" />,
      title: "Structured Pairing",
      description: "Thoughtful mentor-mentee matching based on experience, goals, and industry context"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Curricular Framework",
      description: "Guided learning pathways with clear milestones and development objectives"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Ongoing Support",
      description: "Regular check-ins, progress tracking, and program adjustments"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Impact Measurement",
      description: "Quantifiable metrics to track mentorship ROI and career progression"
    }
  ];

  return (
    <ServiceLayout
      title="Training, Mentorship & Capacity Building"
      subtitle="Building leadership capability and operational excellence within organizations."
      heroImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    >
      {/* The Challenge Section - With Stats */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-200 mb-6">
            <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">The Challenge</span>
          </div>
          <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">
            Bridging the{' '}
            <span className="font-medium text-emerald-700">Leadership Gap</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Organizations across Africa face a critical shortage of skilled leadership talent. 
            Without deliberate investment in capacity building, companies struggle with weak 
            governance, operational inefficiencies, and an inability to scale. The cost of 
            unprepared leadership is measured in missed opportunities and stunted growth.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <span className="text-emerald-700 font-bold text-xl">77%</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">of organizations</p>
                <p className="text-sm text-gray-600">report significant leadership gaps</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-amber-700 font-bold text-xl">83%</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">of companies</p>
                <p className="text-sm text-gray-600">say leadership development is their top priority</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="sticky top-24">
            <div className="relative overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Leadership training session"
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 text-white">
                  <Users className="w-5 h-5" />
                  <span className="text-sm font-medium">500+ leaders trained across Africa</span>
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
            Comprehensive training solutions tailored to your organizational maturity and leadership pipeline
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

      {/* Leadership Development Tracks */}
      <div className="mb-10 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 rounded-3xl p-5">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">
            Leadership Development{' '}
            <span className="font-medium text-emerald-700">Tracks</span>
          </h2>
          <p className="text-lg text-gray-600">
            Targeted programs designed for every stage of the leadership journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 border ${
                program.color === 'emerald' ? 'border-emerald-100' : 'border-amber-100'
              } shadow-sm hover:shadow-lg transition-all`}
            >
              <div className={`w-16 h-16 ${
                program.color === 'emerald' 
                  ? 'bg-gradient-to-br from-emerald-500 to-emerald-600' 
                  : 'bg-gradient-to-br from-amber-500 to-amber-600'
              } rounded-2xl flex items-center justify-center mb-6`}>
                {program.level === "Executive" ? (
                  <Briefcase className="w-8 h-8 text-white" />
                ) : program.level === "Mid-Management" ? (
                  <Users className="w-8 h-8 text-white" />
                ) : (
                  <User className="w-8 h-8 text-white" />
                )}
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{program.level}</h3>
              <p className="text-sm text-gray-500 mb-6">{program.audience}</p>
              
              <div className="space-y-3">
                {program.modules.map((module, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className={`w-4 h-4 ${
                      program.color === 'emerald' ? 'text-emerald-600' : 'text-amber-600'
                    } flex-shrink-0`} />
                    <span className="text-sm text-gray-700">{module}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mentorship Program Section */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <div className="order-2 lg:order-1">
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 lg:p-10 border border-amber-100 h-full flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-full mb-6 w-fit">
              <Heart className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Corporate Mentorship</span>
            </div>
            
            <h2 className="text-2xl font-light text-gray-900 mb-6 tracking-tight">
              Accelerating Growth Through{' '}
              <span className="font-medium text-amber-700">Guided Mentorship</span>
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our structured mentorship programs connect emerging talent with experienced leaders, 
              creating intentional pathways for knowledge transfer, skill development, and career acceleration.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {mentorshipFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-amber-600">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-5 rounded-xl border border-amber-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Mentorship Impact</p>
                  <p className="text-xl font-bold text-gray-900">89% retention rate</p>
                  <p className="text-xs text-gray-600">among program participants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="relative h-full">
            <img 
              src="/assets/md.jpeg"
              alt="Mentorship session"
              className="w-full h-full object-cover shadow-xl aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Mentor Network</p>
                  <p className="font-semibold text-gray-900">50+ Industry Leaders</p>
                </div>
              </div>
            </div>
          </div>
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
            
            <h2 className="text-2xl font-light text-gray-900 mb-6 tracking-tight">
              Stronger Teams.{' '}
              <span className="font-medium text-emerald-700">Improved Execution.</span>
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Organizations that invest in capacity building see measurable improvements in 
              leadership effectiveness, operational efficiency, and employee retention. Our 
              clients build pipelines of capable leaders ready to drive sustainable growth.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Enhanced leadership capabilities at every level",
                "Improved governance and decision-making",
                "Higher employee engagement and retention",
                "Accelerated career progression for high-potentials",
                "Sustainable organizational performance"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-3 border-t border-emerald-200">
              <div>
                <div className="text-2xl font-bold text-gray-900">94%</div>
                <div className="text-xs text-gray-600">Leadership readiness</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">3.2x</div>
                <div className="text-xs text-gray-600">Internal promotion rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">87%</div>
                <div className="text-xs text-gray-600">Employee retention</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="relative h-full">
            <img 
              src="/assets/training.jpg"
              alt="Team collaboration"
              className="w-full h-full object-cover  shadow-xl aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Training Impact</p>
                  <p className="font-semibold text-gray-900">5,000+ leaders trained</p>
                </div>
              </div>
            </div>
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
            Organizations committed to building internal capability
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: <Building2 className="w-6 h-6" />, title: "Corporates", desc: "Executive development & succession planning" },
            { icon: <Users className="w-6 h-6" />, title: "SMEs", desc: "Management training & team building" },
            { icon: <Heart className="w-6 h-6" />, title: "Non-Profits", desc: "Governance & leadership programs" },
            { icon: <GraduationCap className="w-6 h-6" />, title: "Public Sector", desc: "Capacity building & institutional strengthening" }
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