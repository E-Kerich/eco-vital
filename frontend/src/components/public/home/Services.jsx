import { ArrowRight } from "lucide-react";

export default function ServicesPreview() {
  const services = [
    {
      id: 1,
      image: "https://res.cloudinary.com/durfnwa3k/image/upload/v1770879884/warehouse-worker-hand-pointing-inventory-statistics-tablet_zkzdcz.jpg",
      title: "Strategic Business Advisory",
      description: "We help organizations define clear strategies, optimize operations, and build sustainable growth models aligned with market realities. Our approach combines local expertise with global best practices to deliver measurable results.",
      color: "gold",
      category: "Strategy",
      slug: "advisory"
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/durfnwa3k/image/upload/v1770879888/business-objects-with-executives-discussing-blueprint-meeting_an1vjv.jpg",
      title: "Investment & Financial Consulting",
      description: "From capital structuring to investment planning, we guide clients in making informed financial decisions while managing risk and maximizing impact. We specialize in emerging market opportunities.",
      color: "emerald",
      category: "Finance",
      slug: "investment-financial-consulting"
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/durfnwa3k/image/upload/v1770879871/close-up-man-writing-notebook_n2izmj.jpg",
      title: "Sustainability & ESG Advisory",
      description: "We support businesses in integrating ESG principles, ensuring compliance, resilience, and long-term value creation. Our frameworks align profitability with purpose.",
      color: "gold",
      category: "ESG",
      slug: "sustainability-esg-advisory"
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/durfnwa3k/image/upload/v1770879879/development-knowledge-study-education-concept_xe495f.jpg",
      title: "Training, Mentorship & Capacity Building",
      description: "Tailored training programs designed to strengthen leadership, governance, and operational efficiency across teams. We build capabilities that last beyond the classroom.",
      color: "emerald",
      category: "Development",
      slug: "training-mentorship-capacity-building"
    },
    {
      id: 5,
      image: "/assets/fn.jpg",
      title: "Market Entry & Expansion Strategy",
      description: "We help organizations assess opportunities, navigate regulations, and enter new markets with confidence and clarity. Our network opens doors across Africa.",
      color: "gold",
      category: "Strategy",
      slug: "market-entry-expansion-strategy"
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/durfnwa3k/image/upload/v1770879876/hand-holding-megaphone-protest_clg52g.jpg",
      title: "Advocacy Services (Women & Youth)",
      description: "Empowering women and youth through advocacy, capacity building, and access to resources that drive inclusive economic growth. We create pathways to opportunity.",
      color: "emerald",
      category: "Social Impact",
      slug: "advocacy-services-women-youth"
    }
  ];

  const handleCardClick = (slug) => {
    window.location.href = `/services/${slug}`;
  };

  return (
    <div className="relative py-5 bg-white overflow-hidden">
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-full border border-emerald-100 mb-6">
            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-700 to-amber-700 bg-clip-text text-transparent uppercase tracking-wider">
              What We Offer
            </span>
          </div>
          
          
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We partner with businesses, investors, and organizations to navigate growth, 
            investment, and sustainability challenges across African markets.
          </p>
        </div>

        {/* Services Grid - Clickable Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => (
            <div 
              key={service.id}
              onClick={() => handleCardClick(service.slug)}
              className="group relative bg-white  border border-gray-200 overflow-hidden hover:border-emerald-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500 z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-sm ${
                    service.color === 'emerald' 
                      ? 'bg-emerald-600/90 text-white' 
                      : 'bg-amber-600/90 text-white'
                  }`}>
                    {service.category}
                  </span>
                </div>

                {/* View Details Indicator */}
                <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                    <span className="text-sm font-semibold text-gray-900">View Details</span>
                    <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* Explore Indicator (Mobile) */}
                <div className="mt-6 flex items-center gap-2 text-emerald-600 font-semibold md:hidden">
                  <span className="text-sm">View service</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Decorative Corner */}
              <div className={`absolute bottom-0 right-0 w-20 h-20 rounded-tl-2xl ${
                service.color === 'emerald' 
                  ? 'bg-emerald-50/50' 
                  : 'bg-amber-50/50'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Trust Indicator */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            100+ Projects Delivered
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
            1+ Countries
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            98% Client Satisfaction
          </span>
        </div>
      </div>
    </div>
  );
}