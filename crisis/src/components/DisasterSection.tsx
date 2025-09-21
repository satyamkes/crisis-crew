import { Zap, Waves, Flame, Wind } from "lucide-react";
import DisasterCard from "./DisasterCard";
import earthquakeImg from "@/assets/earthquake-illustration.jpg";
import floodImg from "@/assets/flood-illustration.jpg";
import fireImg from "@/assets/fire-illustration.jpg";
import cycloneImg from "@/assets/cyclone-illustration.jpg";

const DisasterSection = () => {
  const disasters = [
    {
      title: "Earthquakes",
      description:
        "Sudden shaking of the ground. Always remember to Drop, Cover, and Hold On during an earthquake.",
      image: earthquakeImg,
      icon: Zap,
      color: "hsl(14, 100%, 57%)",
    },
    {
      title: "Floods",
      description:
        "An overflow of water onto normally dry land. Know your evacuation routes and seek higher ground immediately.",
      image: floodImg,
      icon: Waves,
      color: "hsl(199, 89%, 48%)",
    },
    {
      title: "Fires",
      description:
        "Know your building's evacuation plan, the location of fire extinguishers, and emergency exits.",
      image: fireImg,
      icon: Flame,
      color: "hsl(0, 84%, 60%)",
    },
    {
      title: "Cyclones",
      description:
        "Intense rotating storms. Stay informed through official channels and move to a designated safe shelter.",
      image: cycloneImg,
      icon: Wind,
      color: "hsl(262, 83%, 58%)",
    },
  ];

  return (
    <section id="disasters" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Understanding Natural Disasters
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Knowledge is your first line of defense. Learn about different types of natural disasters
            and how to respond effectively to each situation.
          </p>
        </div>

        {/* Disaster Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {disasters.map((disaster, index) => (
            <DisasterCard
              key={disaster.title}
              title={disaster.title}
              description={disaster.description}
              image={disaster.image}
              icon={disaster.icon}
              color={disaster.color}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "1s" }}>
          {/* Add additional info if needed */}
        </div>
      </div>
    </section>
  );
};

export default DisasterSection;