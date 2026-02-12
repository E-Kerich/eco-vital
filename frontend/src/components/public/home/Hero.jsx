import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Linear Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
                             url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80&blend=000000&blend-mode=normal&blend-alpha=50')`,
            backgroundBlendMode: 'overlay'
          }}
        />
        
        {/* Primary Linear Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-90"
          style={{
            background: 'linear-gradient(135deg, rgba(6, 78, 59, 0.9) 0%, rgba(0, 0, 0, 0.85) 40%, rgba(212, 175, 55, 0.7) 100%)'
          }}
        />
        
        {/* Secondary Gradient for Highlights */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(212, 175, 55, 0.2) 50%, transparent 70%)',
            mixBlendMode: 'screen'
          }}
        />
        
        {/* Gradient Orbs for Depth */}
        <div 
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(6, 78, 59, 0.6) 0%, transparent 70%)'
          }}
        />
        <div 
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.5) 0%, transparent 70%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-10 lg:py-15 w-full">
          <div className="max-w-2xl">
            {/* Premium Badge with Gradient */}
            <div 
              className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full backdrop-blur-sm border"
              style={{
                background: 'linear-gradient(90deg, rgba(6, 78, 59, 0.4) 0%, rgba(212, 175, 55, 0.3) 100%)',
                borderColor: 'rgba(212, 175, 55, 0.3)'
              }}
            >
              <div className="flex items-center gap-2">
             
                <span 
                  className="font-medium text-sm uppercase tracking-wider"
                  style={{
                    background: 'linear-gradient(90deg, #10b981, #d4af37)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Strategic Investment Advisory
                </span>
              </div>
              
              
            </div>

            {/* Headline with Multi-color Gradient */}
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="block text-white">Eco-Vital Group,</span>
              <span className="block">
                <span 
                  className="inline-block"
                  style={{
                    background: 'linear-gradient(90deg, #d4af37, #10b981, #ffffff, #10b981, #d4af37)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundSize: '200% auto',
                    animation: 'gradient 3s ease infinite'
                  }}
                >
                  Where Strategy Meets
                </span>
                <br />
                <span 
                  className="inline-block mt-2"
                  style={{
                    background: 'linear-gradient(90deg, #10b981, #ffffff, #d4af37, #ffffff, #10b981)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundSize: '200% auto',
                    animation: 'gradient 3s ease infinite 0.5s'
                  }}
                >
                  Sustainable Investment
                </span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl mb-10 max-w-xl leading-relaxed">
              <span 
                className="font-light"
                style={{
                  background: 'linear-gradient(90deg, #a7f3d0, #fde68a)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Eco-Vital Group partners with organizations to structure investments, 
                enter new markets, and build sustainable ventures across Africa.
              </span>
            </p>

            {/* CTA Buttons with Gradients */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact" 
                className="group relative overflow-hidden flex items-center justify-center gap-3 px-8 py-4  transition-all duration-300 font-semibold text-lg"
                style={{
                  background: 'linear-gradient(90deg, #059669, #10b981)',
                  boxShadow: '0 10px 30px rgba(6, 78, 59, 0.3)'
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(90deg, #d4af37, transparent)'
                  }}
                />
                <span className="relative text-white">Start a Conversation</span>
                <ArrowRight className="w-5 h-5 relative text-white group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link to="/blogs" 
                className="group relative overflow-hidden flex items-center justify-center gap-3 px-8 py-4  backdrop-blur-sm border transition-all duration-300 font-semibold text-lg"
                style={{
                  background: 'linear-gradient(90deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.1))',
                  borderColor: 'rgba(212, 175, 55, 0.4)',
                  boxShadow: '0 10px 30px rgba(212, 175, 55, 0.1)'
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.2), transparent)'
                  }}
                />
                
                
                <span className="relative"
                  style={{
                    background: 'linear-gradient(90deg, #fde68a, #a7f3d0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  View Our Impact
                </span>
                <ArrowRight className="w-5 h-5 relative text-white"
                  style={{
                    background: 'linear-gradient(90deg, #d4af37, #fde68a)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                />
              </Link>
            </div>

           
              
              
              
              
              
           
          </div>
        </div>

        {/* Animated Gradient Circles */}
        <div 
          className="absolute top-20 right-20 w-64 h-64 rounded-full animate-spin-slow opacity-20"
          style={{
            background: 'conic-gradient(from 0deg, transparent, #10b981, #d4af37, transparent)'
          }}
        />
        
        <div 
          className="absolute bottom-20 left-20 w-32 h-32 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, #d4af37, transparent 70%)',
            animation: 'pulse 2s ease-in-out infinite'
          }}
        />
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div 
              className="w-6 h-10 rounded-full flex justify-center backdrop-blur-sm border"
              style={{
                borderColor: 'rgba(212, 175, 55, 0.3)',
                background: 'linear-gradient(180deg, rgba(6, 78, 59, 0.3), rgba(212, 175, 55, 0.1))'
              }}
            >
              <div 
                className="w-0.5 h-3 rounded-full mt-2"
                style={{
                  background: 'linear-gradient(180deg, #10b981, #d4af37)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
