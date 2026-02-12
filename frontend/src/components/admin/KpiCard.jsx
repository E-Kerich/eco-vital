import { useState, useEffect } from "react";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  Info,
  ChevronRight,
  Calendar,
  Target,
  Users,
  DollarSign,
  BarChart3,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const iconMap = {
  revenue: DollarSign,
  users: Users,
  conversion: Target,
  traffic: BarChart3,
  time: Clock,
  completion: CheckCircle,
  alerts: AlertCircle,
  default: BarChart3
};

export default function KpiCard({ 
  label, 
  value, 
  change, 
  period = "vs last month",
  icon = "default",
  color = "emerald",
  loading = false,
  showTrend = true,
  showDetails = true,
  onClick,
  size = "medium"
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0);
  const [displayValue, setDisplayValue] = useState(value);
  
  const IconComponent = iconMap[icon] || iconMap.default;
  
  const colorClasses = {
    emerald: {
      bg: "bg-gradient-to-br from-emerald-50 to-green-50",
      border: "border-emerald-100",
      iconBg: "bg-gradient-to-br from-emerald-900 to-green-900",
      text: "text-emerald-700",
      accent: "text-emerald-600",
      hover: "hover:shadow-emerald/10 hover:border-emerald-200"
    },
    gold: {
      bg: "bg-gradient-to-br from-amber-50 to-yellow-50",
      border: "border-amber-100",
      iconBg: "bg-gradient-to-br from-amber-700 to-yellow-600",
      text: "text-amber-700",
      accent: "text-amber-600",
      hover: "hover:shadow-amber/10 hover:border-amber-200"
    },
    slate: {
      bg: "bg-gradient-to-br from-slate-50 to-gray-50",
      border: "border-slate-100",
      iconBg: "bg-gradient-to-br from-slate-700 to-gray-600",
      text: "text-slate-700",
      accent: "text-slate-600",
      hover: "hover:shadow-slate/10 hover:border-slate-200"
    },
    blue: {
      bg: "bg-gradient-to-br from-blue-50 to-cyan-50",
      border: "border-blue-100",
      iconBg: "bg-gradient-to-br from-blue-900 to-cyan-800",
      text: "text-blue-700",
      accent: "text-blue-600",
      hover: "hover:shadow-blue/10 hover:border-blue-200"
    }
  };

  const selectedColor = colorClasses[color] || colorClasses.emerald;
  
  const sizeClasses = {
    small: {
      padding: "p-4",
      iconSize: "w-8 h-8",
      valueSize: "text-lg",
      labelSize: "text-xs"
    },
    medium: {
      padding: "p-6",
      iconSize: "w-10 h-10",
      valueSize: "text-2xl",
      labelSize: "text-sm"
    },
    large: {
      padding: "p-8",
      iconSize: "w-12 h-12",
      valueSize: "text-3xl",
      labelSize: "text-base"
    }
  };

  const selectedSize = sizeClasses[size];

  // Number animation effect
  useEffect(() => {
    if (typeof value === 'number') {
      const startValue = animatedValue;
      const endValue = value;
      const duration = 1000;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = startValue + (endValue - startValue) * easeOutQuart;
        
        setAnimatedValue(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(value);
        }
      };

      animate();
    } else {
      setDisplayValue(value);
    }
  }, [value]);

  // Format number with commas
  const formatNumber = (num) => {
    if (typeof num === 'number') {
      return Math.round(num).toLocaleString();
    }
    return num;
  };

  const getTrendIcon = () => {
    if (!change || !showTrend) return null;
    
    if (change > 0) {
      return <TrendingUp className="w-4 h-4 text-emerald-600" />;
    } else if (change < 0) {
      return <TrendingDown className="w-4 h-4 text-rose-600" />;
    } else {
      return <Minus className="w-4 h-4 text-gray-400" />;
    }
  };

  const formatChange = () => {
    if (!change) return null;
    const formatted = change > 0 ? `+${change}%` : `${change}%`;
    return (
      <span className={`inline-flex items-center gap-1 ${change > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
        {getTrendIcon()}
        <span className="font-medium">{formatted}</span>
      </span>
    );
  };

  return (
    <div
      className={`
        ${selectedColor.bg}
        border ${selectedColor.border}
        rounded-xl shadow-sm
        transition-all duration-300
        ${selectedColor.hover}
        ${onClick ? 'cursor-pointer' : ''}
        ${isHovered && onClick ? 'transform -translate-y-1 shadow-md' : ''}
        ${selectedSize.padding}
        relative overflow-hidden
        group
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
      </div>

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`${selectedColor.iconBg} ${selectedSize.iconSize} rounded-xl flex items-center justify-center shadow-sm`}>
          <IconComponent className="w-5 h-5 text-white" />
        </div>
        
        {showDetails && (
          <button className="p-1.5 -mt-1 -mr-1 text-gray-400 hover:text-gray-600 rounded-lg transition-colors">
            <Info className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Content */}
      <div className="space-y-2">
        <p className={`${selectedColor.text} ${selectedSize.labelSize} font-medium tracking-wide uppercase`}>
          {label}
        </p>
        
        {loading ? (
          <div className="space-y-2">
            <div className="h-8 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
          </div>
        ) : (
          <>
            <p className={`${selectedSize.valueSize} font-bold text-gray-900`}>
              {typeof value === 'number' ? formatNumber(animatedValue) : displayValue}
            </p>
            
            {(change || period) && (
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-3">
                  {change && showTrend && formatChange()}
                  <span className={`text-sm ${selectedColor.accent} font-medium flex items-center gap-1`}>
                    <Calendar className="w-3 h-3" />
                    {period}
                  </span>
                </div>
                
                {onClick && (
                  <ChevronRight className={`w-5 h-5 ${selectedColor.accent} transform transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
                )}
              </div>
            )}
          </>
        )}
      </div>

      {/* Progress bar for trends (optional) */}
      {change && showTrend && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span>Progress</span>
            <span>{change > 0 ? `+${change}%` : `${change}%`}</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-700 ${
                change > 0 ? 'bg-emerald-500' : 'bg-rose-500'
              }`}
              style={{ 
                width: `${Math.min(Math.abs(change), 100)}%`,
                transform: `translateX(${change > 0 ? '0' : '100'}%)`,
                transformOrigin: change > 0 ? 'left' : 'right'
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

// Example usage in a grid layout
export function KpiGrid() {
  const kpiData = [
    {
      label: "Total Revenue",
      value: 124560,
      change: 12.5,
      icon: "revenue",
      color: "emerald"
    },
    {
      label: "Active Users",
      value: 8432,
      change: 8.2,
      icon: "users",
      color: "gold"
    },
    {
      label: "Conversion Rate",
      value: 4.7,
      change: -2.1,
      icon: "conversion",
      color: "blue",
      period: "vs last week"
    },
    {
      label: "Avg. Session Time",
      value: "4m 32s",
      icon: "time",
      color: "slate",
      showTrend: false
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-gray-50 min-h-screen">
      {kpiData.map((kpi, index) => (
        <KpiCard key={index} {...kpi} />
      ))}
    </div>
  );
}