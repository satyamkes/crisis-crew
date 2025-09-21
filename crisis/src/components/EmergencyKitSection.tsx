import { Droplets, Heart, Zap, Phone, FileText, Sparkles, CheckCircle } from "lucide-react";
const EmergencyKitSection = () => {
  const kitItems = [{
    icon: Droplets,
    title: "Water & Food",
    description: "3-day supply of non-perishable food and water (1 gallon per person per day).",
    color: "hsl(199, 89%, 48%)",
    items: ["Bottled water", "Energy bars", "Canned food", "Manual can opener"]
  }, {
    icon: Heart,
    title: "First Aid Kit",
    description: "Bandages, wipes, pain relievers, and personal medications.",
    color: "hsl(0, 84%, 60%)",
    items: ["Adhesive bandages", "Antiseptic wipes", "Pain relievers", "Prescription medications"]
  }, {
    icon: Zap,
    title: "Tools & Light",
    description: "Flashlight, extra batteries, whistle, and multi-tool.",
    color: "hsl(43, 96%, 56%)",
    items: ["LED flashlight", "Extra batteries", "Emergency whistle", "Multi-purpose tool"]
  }, {
    icon: Phone,
    title: "Communication",
    description: "Battery-powered radio and a power bank for your devices.",
    color: "hsl(142, 71%, 45%)",
    items: ["Portable radio", "Power bank", "Emergency phone charger", "Two-way radios"]
  }, {
    icon: FileText,
    title: "Important Documents",
    description: "Copies of IDs and contact lists in a waterproof bag.",
    color: "hsl(262, 83%, 58%)",
    items: ["ID copies", "Insurance papers", "Emergency contacts", "Cash in small bills"]
  }, {
    icon: Sparkles,
    title: "Sanitation & Comfort",
    description: "Hand sanitizer, soap, and other personal hygiene items.",
    color: "hsl(14, 100%, 57%)",
    items: ["Hand sanitizer", "Wet wipes", "Personal hygiene items", "Comfort items"]
  }];
  return <section id="kit" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Build Your Emergency Kit
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            A well-prepared emergency kit can make all the difference during a crisis. 
            Here's everything you need to stay safe and comfortable for at least 72 hours.
          </p>
        </div>

        {/* Main Kit Container */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl border border-neutral-200 p-8 md:p-12 animate-scale-in">
            
            {/* Kit Items Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {kitItems.map((item, index) => <div key={item.title} className="group animate-fade-in-up" style={{
              animationDelay: `${index * 0.15}s`
            }}>
                  <div className="flex items-start space-x-4 p-6 rounded-xl bg-background hover:bg-card-hover transition-all duration-300 border border-neutral-100 hover:border-neutral-200 hover:shadow-md">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300" style={{
                  backgroundColor: `${item.color}20`
                }}>
                      <item.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" style={{
                    color: item.color
                  }} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Item List */}
                      <ul className="space-y-1">
                        {item.items.map((subItem, subIndex) => (
                          <li key={subIndex} className="flex items-center text-sm text-neutral-600">
                            <CheckCircle className="w-3 h-3 mr-2 text-primary flex-shrink-0" />
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>)}
            </div>

            {/* Additional Tips */}
            
          </div>
        </div>
      </div>
    </section>;
};
export default EmergencyKitSection;