import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DisasterSection from "@/components/DisasterSection";
import CampusPlanSection from "@/components/CampusPlanSection";
import EmergencyKitSection from "@/components/EmergencyKitSection";
import GameSection from "@/components/GameSection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DisasterSection />
      <CampusPlanSection />
      <EmergencyKitSection />
      <GameSection />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default Index;
