import { ExternalLink, Phone, AlertTriangle, Cloud, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
const ResourcesSection = () => {
  const resources = [{
    title: "NDMA",
    subtitle: "National Disaster Management Authority",
    description: "Official guidelines and disaster management policies for India",
    url: "https://ndma.gov.in/",
    icon: Shield,
    color: "hsl(0, 84%, 60%)"
  }, {
    title: "IMD",
    subtitle: "India Meteorological Department",
    description: "Weather forecasts, warnings, and climate information",
    url: "https://mausam.imd.gov.in/",
    icon: Cloud,
    color: "hsl(199, 89%, 48%)"
  }, {
    title: "Emergency Helplines",
    subtitle: "24/7 Emergency Services",
    description: "Immediate assistance for all types of emergencies",
    url: "tel:112",
    icon: Phone,
    color: "hsl(142, 71%, 45%)",
    isPhone: true
  }];
  const additionalContacts = [{
    service: "Fire Emergency",
    number: "101"
  }, {
    service: "Police",
    number: "100"
  }, {
    service: "Medical Emergency",
    number: "102"
  }, {
    service: "Women Helpline",
    number: "1091"
  }, {
    service: "Child Helpline",
    number: "1098"
  }, {
    service: "Disaster Management",
    number: "108"
  }];
  return <section id="resources" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Official Resources & Helplines
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with reliable information from official sources. 
            Save these important contacts and resources for quick access during emergencies.
          </p>
        </div>

        {/* Main Resources Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {resources.map((resource, index) => <div key={resource.title} className="group bg-card rounded-xl shadow-lg border border-neutral-200 overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <div className="p-8 text-center">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300" style={{
              backgroundColor: `${resource.color}20`
            }}>
                  <resource.icon className="w-8 h-8" style={{
                color: resource.color
              }} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {resource.title}
                </h3>
                <h4 className="text-lg font-medium text-primary mb-4">
                  {resource.subtitle}
                </h4>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {resource.description}
                </p>

                {/* Action Button */}
                {resource.isPhone ? <div className="space-y-4">
                    <div className="text-4xl font-bold text-safety-emergency">112</div>
                    <Button size="lg" className="w-full bg-safety-emergency hover:bg-safety-emergency/90 text-white font-semibold" onClick={() => window.open(resource.url)}>
                      <Phone className="mr-2 w-5 h-5" />
                      Call Now
                    </Button>
                  </div> : <Button variant="outline" size="lg" className="w-full border-2 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300" onClick={() => window.open(resource.url, '_blank')}>
                    Visit Website
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>}
              </div>
            </div>)}
        </div>

        {/* Additional Emergency Numbers */}
        <div className="max-w-4xl mx-auto animate-fade-in-up" style={{
        animationDelay: "0.8s"
      }}>
          <div className="bg-card rounded-xl shadow-lg border border-neutral-200 p-8">
            <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center flex items-center justify-center">
              <AlertTriangle className="mr-3 w-6 h-6 text-safety-warning" />
              Additional Emergency Contacts
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalContacts.map((contact, index) => <div key={contact.service} className="flex items-center justify-between p-4 bg-background-secondary rounded-lg hover:bg-neutral-100 transition-colors duration-300">
                  <span className="font-medium text-card-foreground">{contact.service}</span>
                  <a href={`tel:${contact.number}`} className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors duration-300">
                    {contact.number}
                  </a>
                </div>)}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-safety-warning/10 to-safety-emergency/10 rounded-lg border border-safety-warning/20">
              <h4 className="font-bold text-card-foreground mb-3 flex items-center">
                <AlertTriangle className="mr-2 w-5 h-5 text-safety-warning" />
                Important Reminder
              </h4>
              <p className="text-neutral-600 text-sm leading-relaxed">
                In any emergency situation, call <strong className="text-safety-emergency">112</strong> first. 
                This unified emergency number will connect you to the appropriate service (police, fire, or medical) 
                and ensures the fastest response time. Save these numbers in your phone and share them with family and friends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ResourcesSection;