import { Play, Trophy, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
const GameSection = () => {
  return <section id="game" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-safety-warning/20 rounded-full blur-xl animate-bounce-gentle" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-safety-success/15 rounded-full blur-lg animate-bounce-gentle" style={{
        animationDelay: "2s"
      }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Section Header */}
        <div className="animate-fade-in-up">
          
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up" style={{
          animationDelay: "0.2s"
        }}>
            Learn Through Play!
          </h2>
          
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{
          animationDelay: "0.4s"
        }}>
            Test your disaster preparedness knowledge with our interactive safety challenge. 
            Make smart choices, learn from scenarios, and become a safety expert through engaging gameplay.
          </p>
        </div>

        {/* Game Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          {[{
          icon: Trophy,
          title: "Score & Compete",
          description: "Earn points and climb the leaderboard",
          delay: "0.6s"
        }, {
          icon: Users,
          title: "Real Scenarios",
          description: "Face situations you might encounter",
          delay: "0.8s"
        }, {
          icon: Clock,
          title: "Quick Learning",
          description: "Learn essential skills in minutes",
          delay: "1s"
        }].map((feature, index) => <div key={feature.title} className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 animate-fade-in-up" style={{
          animationDelay: feature.delay
        }}>
              <div className="bg-primary-foreground/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-primary-foreground mb-2">{feature.title}</h3>
              <p className="text-primary-foreground/80 text-sm">{feature.description}</p>
            </div>)}
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in-up" style={{
        animationDelay: "1.2s"
      }}>
          <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold px-12 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 group text-lg">
            <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
            Play the Safety Challenge
          </Button>
          
          <p className="text-primary-foreground/70 mt-4 text-sm">
            Free to play • No registration required • Available now
          </p>
        </div>

        {/* Game Preview Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 text-left animate-slide-in-right" style={{
          animationDelay: "1.4s"
        }}>
            <h4 className="font-bold text-primary-foreground mb-3"> Fire Emergency Scenario</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">
              "You smell smoke in your dormitory hallway. What's your first action?"
            </p>
            <div className="flex space-x-2">
              <div className="px-3 py-1 bg-primary-foreground/20 rounded text-xs text-primary-foreground">Multiple Choice</div>
              <div className="px-3 py-1 bg-safety-warning/20 rounded text-xs text-primary-foreground">Timed</div>
            </div>
          </div>
          
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 text-left animate-slide-in-right" style={{
          animationDelay: "1.6s"
        }}>
            <h4 className="font-bold text-primary-foreground mb-3"> Flood Preparation Challenge</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">
              "Weather alerts warn of severe flooding. How do you prepare your emergency kit?"
            </p>
            <div className="flex space-x-2">
              <div className="px-3 py-1 bg-primary-foreground/20 rounded text-xs text-primary-foreground">Interactive</div>
              <div className="px-3 py-1 bg-safety-info/20 rounded text-xs text-primary-foreground">Educational</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default GameSection;