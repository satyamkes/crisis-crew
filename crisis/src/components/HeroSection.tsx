import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-banner.jpg";
const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Students learning disaster preparedness" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-disaster-cyclone/80 to-primary-dark/90" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-foreground/10 rounded-full blur-xl animate-bounce-gentle" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-safety-warning/20 rounded-full blur-2xl animate-pulse-glow" />
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-safety-success/20 rounded-full blur-lg animate-bounce-gentle" style={{
        animationDelay: "1s"
      }} />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Badge */}
          

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block animate-fade-in-up" style={{
            animationDelay: "0.2s"
          }}>
              Be Prepared,
            </span>
            <span className="block bg-gradient-to-r from-primary-foreground to-safety-warning bg-clip-text text-transparent animate-fade-in-up" style={{
            animationDelay: "0.4s"
          }}>
              Stay Safe.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{
          animationDelay: "0.6s"
        }}>
            A comprehensive guide for students in schools and colleges to effectively handle natural disasters and emergency situations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{
          animationDelay: "0.8s"
        }}>
            <Button size="lg" onClick={() => scrollToSection("disasters")} className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-4 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 group">
              Start Learning
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button size="lg" variant="outline" onClick={() => scrollToSection("game")} className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300 group">
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Play Safety Game
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-fade-in-up" style={{
          animationDelay: "1s"
        }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">4</div>
              <div className="text-sm text-primary-foreground/80 uppercase tracking-wide">Disaster Types</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">24/7</div>
              <div className="text-sm text-primary-foreground/80 uppercase tracking-wide">Emergency Help</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">100%</div>
              <div className="text-sm text-primary-foreground/80 uppercase tracking-wide">Prepared</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce-gentle">
        
      </div>
    </section>;
};
export default HeroSection;