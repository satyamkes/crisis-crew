import { ComponentType, SVGProps } from "react";

interface DisasterCardProps {
  title: string;
  description: string;
  image: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>; // ✅ Correct type for lucide-react icons
  color: string;
  delay?: number;
}

const DisasterCard = ({ title, description, image, icon: Icon, color, delay = 0 }: DisasterCardProps) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl bg-card border border-neutral-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 ease-out animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Background Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-br opacity-60 group-hover:opacity-40 transition-opacity duration-300`} 
             style={{ background: `linear-gradient(135deg, ${color}88, ${color}cc)` }} />
        
        {/* Icon */}
        <div className="absolute top-4 right-4 p-3 bg-card/80 backdrop-blur-sm rounded-full shadow-lg">
          <Icon className="w-6 h-6" style={{ color }} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors duration-300">
          {description}
        </p>
        
        {/* Hover Indicator */}
        <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span className="text-sm font-medium">Learn more</span>
          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
           style={{ boxShadow: `0 0 30px ${color}40` }} />
    </div>
  );
};

export default DisasterCard;