import { useEffect } from "react";
import ServiceLayout from "./ServiceLayout";
import { 
  ArrowRight, 
  Heart, 
  Users, 
  Shield, 
  BarChart, 
  CheckCircle, 
  TrendingUp,
  User,
  Building2,
  Sparkles,
  GraduationCap,
  Briefcase,
  Star,
  HandHeart,
  Target,
  Globe
} from "lucide-react";

export default function AdvocacyServices() {
    useEffect(() => {
window.scrollTo(0, 0);
}, []);
  const deliverables = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Policy Advisory",
      description: "Strategic guidance on policies that promote gender equality, youth employment, and inclusive economic development at institutional and governmental levels."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Capacity-Building Programs",
      description: "Tailored training and mentorship initiatives that equip women and youth with leadership, entrepreneurial, and technical skills."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Women & Youth Entrepreneurship Support",
      description: "Access to networks, markets, and financing opportunities for women-led and youth-owned enterprises."
    },
    {
      icon: <HandHeart className="w-6 h-6" />,
      title: "Strategic Partnerships",
      description: "Brokering collaborations between public, private, and development sectors to amplify advocacy impact."
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Impact Reporting",
      description: "Rigorous measurement and communication of social, economic, and developmental outcomes."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Engagement",
      description: "Grassroots mobilization and stakeholder convening to ensure inclusive and representative advocacy."
    }
  ];

  const impactAreas = [
    {
      area: "Economic Participation",
      description: "Increasing access to markets, capital, and enterprise opportunities",
      metric: "65%",
      metricLabel: "increase in business revenue",
      color: "emerald"
    },
    {
      area: "Leadership Representation",
      description: "Advancing women and youth into decision-making roles",
      metric: "42%",
      metricLabel: "leadership positions secured",
      color: "amber"
    },
    {
      area: "Policy Influence",
      description: "Shaping inclusive regulations and institutional frameworks",
      metric: "15+",
      metricLabel: "policies influenced",
      color: "emerald"
    },
    {
      area: "Skills Development",
      description: "Building capabilities for long-term economic resilience",
      metric: "5,000+",
      metricLabel: "individuals trained",
      color: "amber"
    }
  ];

  const programs = [
    {
      title: "Women in Leadership",
      audience: "Mid-to-senior level professionals",
      features: ["Executive mentorship", "Board readiness training", "Network access"],
      color: "emerald"
    },
    {
      title: "Youth Enterprise Accelerator",
      audience: "Young entrepreneurs (18–35)",
      features: ["Business incubation", "Seed funding linkages", "Peer learning"],
      color: "amber"
    },
    {
      title: "Advocacy Fellowship",
      audience: "Emerging policy champions",
      features: ["Policy training", "Stakeholder engagement", "Campaign design"],
      color: "emerald"
    }
  ];

  const partnershipTypes = [
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Government Agencies",
      description: "Policy formulation and implementation support"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Development Partners",
      description: "Program design and impact scaling"
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Corporate Foundations",
      description: "CSR alignment and employee engagement"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Civil Society",
      description: "Grassroots mobilization and advocacy coalitions"
    }
  ];

  return (
    <ServiceLayout
      title="Advocacy Services (Women & Youth)"
      subtitle="Empowering inclusive economic participation through structured advocacy and support programs."
      heroImage="https://res.cloudinary.com/durfnwa3k/image/upload/v1770879876/hand-holding-megaphone-protest_clg52g.jpg"
    >
      {/* The Challenge Section - With Stats */}
      <div className="grid lg:grid-cols-2 gap-12 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-200 mb-6">
            <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">The Challenge</span>
          </div>
          <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">
            Unlocking{' '}
            <span className="font-medium text-emerald-700">Inclusive Potential</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Women and youth across Africa face systemic barriers to full economic participation,limited access 
            to capital, underrepresentation in leadership, and exclusion from policy dialogues. These gaps 
            not only constrain individual potential but also deprive economies of their full productive capacity. 
            Structured advocacy is essential to shift systems, not just symptoms.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <span className="text-emerald-700 font-bold text-sm">$42B</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Annual financing gap</p>
                <p className="text-sm text-gray-600">for women-owned SMEs in Africa</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-amber-700 font-bold text-sm">65%</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">of Africa's population</p>
                <p className="text-sm text-gray-600">is under 25, yet youth are underrepresented in leadership</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="sticky top-24">
            <div className="relative overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Women and youth empowerment"
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 text-white">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm font-medium">100+ women and youth empowered</span>
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
            Comprehensive advocacy solutions that drive systemic and sustainable change
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

      
      {/* Programs Section */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <div className="order-2 lg:order-1">
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 lg:p-10 border border-amber-100 h-full flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-full mb-6 w-fit">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Signature Programs</span>
            </div>
            
            <h2 className="text-2xl font-light text-gray-900 mb-6 tracking-tight">
              Building Pathways to{' '}
              <span className="font-medium text-amber-700">Leadership & Enterprise</span>
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our programs are designed not just to train, but to transform. We combine skill-building 
              with network access, mentorship with market linkages, and advocacy with accountability.
            </p>

            <div className="space-y-6">
              {programs.map((program, index) => (
                <div key={index} className="bg-white rounded-xl p-5 border border-amber-100">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-900">{program.title}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      program.color === 'emerald' 
                        ? 'bg-emerald-100 text-emerald-700' 
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      {program.audience}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {program.features.map((feature, idx) => (
                      <span key={idx} className="text-xs text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="relative h-full">
            <img 
              src="https://res.cloudinary.com/durfnwa3k/image/upload/v1770897146/lifestyle-scene-from-community-showing-care-support-from-people_amzhlr.jpg"
              alt="Women leadership program"
              className="w-full h-full object-cover shadow-xl aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Program Reach</p>
                  <p className="font-semibold text-gray-900">5,000+ graduates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Partnerships Section */}
      <div className="mb-10 bg-white border border-gray-200 rounded-3xl p-5">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">
            Strategic{' '}
            <span className="font-medium text-emerald-700">Partnerships</span>
          </h2>
          <p className="text-lg text-gray-600">
            Collaborating across sectors to amplify advocacy impact
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {partnershipTypes.map((partner, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-4 text-emerald-600">
                {partner.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{partner.title}</h4>
              <p className="text-sm text-gray-500">{partner.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <span className="text-sm font-medium text-gray-400">UNDP</span>
            <span className="text-sm font-medium text-gray-400">UN Women</span>
            <span className="text-sm font-medium text-gray-400">Mastercard Foundation</span>
            <span className="text-sm font-medium text-gray-400">African Development Bank</span>
            <span className="text-sm font-medium text-gray-400">Ford Foundation</span>
          </div>
        </div>
      </div>

      

      {/* Outcome Section - With Image and Benefits */}
      <div className="grid lg:grid-cols-2 gap-12 mb-10">
        <div className="order-2 lg:order-1">
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 lg:p-10 border border-emerald-100 h-full flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-full mb-6 w-fit">
              
              <span className="text-xs font-semibold uppercase tracking-wider">The Outcome</span>
            </div>
            
            <h2 className="text-2xl font-light text-gray-900 mb-6 tracking-tight">
              Inclusive Growth.{' '}
              <span className="font-medium text-emerald-700">Measurable Social Impact.</span>
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our advocacy creates lasting change—not just awareness. We measure success in policies 
              passed, enterprises launched, leaders placed, and communities strengthened. Every program 
              is designed with clear metrics and accountability to our beneficiaries.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Increased economic participation for women and youth",
                "Stronger representation in public and private leadership",
                "More inclusive policies and institutional practices",
                "Sustainable enterprises with growth trajectories",
                "Dignified livelihoods and intergenerational impact"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="relative h-full">
            <img 
              src="https://res.cloudinary.com/durfnwa3k/image/upload/v1770897729/group-happy-african-volunteers-planting-tree-park-africa-volunteering-charity-people-ecology-concept_l4l9u7.jpg"
              alt="Community empowerment"
              className="w-full h-full object-cover shadow-xl aspect-[4/3]"
            />
            
           
          </div>
        </div>
      </div>

      {/* Client Types */}
      <div className="mb-10 bg-white border border-gray-200 rounded-3xl p-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
            Who We <span className="font-medium text-emerald-700">Partner With</span>
          </h2>
          <p className="text-lg text-gray-600">
            Organizations committed to advancing inclusive economic development
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: <Building2 className="w-6 h-6" />, title: "Government", desc: "Policy design & implementation" },
            { icon: <Heart className="w-6 h-6" />, title: "Foundations", desc: "Program funding & scaling" },
            { icon: <Briefcase className="w-6 h-6" />, title: "Corporates", desc: "Inclusive supply chains & CSR" },
            { icon: <Users className="w-6 h-6" />, title: "Civil Society", desc: "Advocacy coalitions" }
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