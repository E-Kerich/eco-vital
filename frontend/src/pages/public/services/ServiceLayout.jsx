import { ArrowRight, ChevronRight } from "lucide-react";

export default function ServiceLayout({
  title,
  subtitle,
  children,
  heroImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
}) {
  return (
    <div className="bg-white">
      {/* HERO - Full width with image overlay */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-300 mb-6">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <ChevronRight className="w-4 h-4" />
              <a href="/services" className="hover:text-white transition-colors">Services</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">{title}</span>
            </div>
            
            {/* Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-6 tracking-tight">
              {title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          </div>
        </div>
        
        
      </section>

      {/* CONTENT */}
      <section className="py-10 md:py-15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 md:space-y-24">
            {children}
          </div>
        </div>
      </section>

      {/* CTA - Premium Gradient */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
       
       
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-15">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              
              <span className="text-sm font-medium text-white/90 uppercase tracking-wider">
                Ready to Begin?
              </span>
            </div>
            
            {/* Headline */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-6 tracking-tight">
              Let's Build a Strategy That{' '}
              <span className="relative">
                <span className="relative z-10 text-emerald-400 font-medium">Works.</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-emerald-500/20 -z-0"></span>
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a complimentary consultation with our team to discuss your goals and challenges.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all font-medium shadow-lg hover:shadow-xl"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/services"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl hover:bg-white/20 transition-all font-medium"
              >
                Explore All Services
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            {/* Trust Signal */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Free initial consultation
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  No obligation
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  24-hour response
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}