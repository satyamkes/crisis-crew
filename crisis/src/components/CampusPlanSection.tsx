import { useState } from "react";
import { ChevronDown, MapPin, Users, Phone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const CampusPlanSection = () => {
  const planItems = [{
    id: "routes",
    icon: MapPin,
    title: "Know Your Evacuation Routes",
    content: "Familiarize yourself with the primary and secondary evacuation routes for every building you frequent. These should be clearly marked on maps posted throughout the campus. Practice walking these routes during non-emergency times.",
    tips: ["Identify at least two different exit routes from each building", "Note the location of emergency stairwells", "Check for any accessibility features needed", "Be aware of routes that may be blocked during emergencies"]
  }, {
    id: "assembly",
    icon: Users,
    title: "Identify Assembly Points",
    content: "Your campus will have designated assembly points—safe, open areas away from buildings. Know where these are located and report there after an evacuation for a head count.",
    tips: ["Assembly points are usually in open areas like parking lots or sports fields", "Stay with your class or group at the assembly point", "Wait for further instructions from emergency personnel", "Don't leave the assembly point without permission"]
  }, {
    id: "contacts",
    icon: Phone,
    title: "Emergency Contacts",
    content: "Save the campus security and local emergency service numbers in your phone. Also, establish an out-of-state contact for your family to check in with.",
    tips: ["Program 112 (emergency services) in your phone", "Save campus security number", "Have a family emergency contact plan", "Keep a written list of important numbers"]
  }];
  return <section id="campus-plan" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your Campus Safety Plan
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Every campus has a comprehensive emergency plan. Here's what you need to know 
            to stay safe and help others during an emergency situation.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {planItems.map((item, index) => <AccordionItem key={item.id} value={item.id} className="bg-card border border-neutral-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <AccordionTrigger className="px-6 py-6 hover:no-underline group">
                  <div className="flex items-center space-x-4 text-left">
                    
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="pl-16">
                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      {item.content}
                    </p>
                    
                    <div className="bg-background-secondary rounded-lg p-4">
                      <h4 className="font-semibold text-card-foreground mb-3">Key Points to Remember:</h4>
                      <ul className="space-y-2">
                        {item.tips.map((tip, tipIndex) => <li key={tipIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-neutral-600 text-sm">{tip}</span>
                          </li>)}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>

          {/* Additional CTA */}
          <div className="mt-12 text-center animate-fade-in-up" style={{
          animationDelay: "0.8s"
        }}>
            <div className="bg-gradient-to-r from-primary/5 to-safety-info/5 rounded-xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Practice Makes Perfect
              </h3>
              <p className="text-neutral-600 mb-6">
                Participate in regular fire drills and emergency evacuation exercises. 
                The more you practice, the more prepared you'll be during a real emergency.
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <span className="font-medium">Speak to your safety coordinator today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CampusPlanSection;