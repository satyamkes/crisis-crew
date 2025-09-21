import { useState, useEffect } from "react";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navItems = [{
    id: "home",
    label: "Home"
  }, {
    id: "disasters",
    label: "Disasters"
  }, {
    id: "campus-plan",
    label: "Campus Plan"
  }, {
    id: "kit",
    label: "Emergency Kit"
  }, {
    id: "game",
    label: "Game"
  }, {
    id: "resources",
    label: "Resources"
  }];
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-glass border-b border-neutral-200/50 shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-fade-in-up">
            
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-disaster-cyclone bg-clip-text text-transparent mx-0">Crisis Crew</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => <Button key={item.id} variant="ghost" onClick={() => scrollToSection(item.id)} className={`
                  px-4 py-2 rounded-lg transition-all duration-300 font-medium
                  ${activeSection === item.id ? "bg-primary/10 text-primary shadow-md" : "text-neutral-600 hover:text-primary hover:bg-primary/5"}
                `} style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {item.label}
              </Button>)}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6 text-neutral-700" /> : <Menu className="w-6 h-6 text-neutral-700" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-4 animate-scale-in">
            <div className="bg-card rounded-xl shadow-lg border border-neutral-200 p-2">
              {navItems.map(item => <Button key={item.id} variant="ghost" onClick={() => scrollToSection(item.id)} className={`
                    w-full justify-start px-4 py-3 rounded-lg mb-1 font-medium transition-all duration-300
                    ${activeSection === item.id ? "bg-primary/10 text-primary" : "text-neutral-600 hover:text-primary hover:bg-primary/5"}
                  `}>
                  {item.label}
                </Button>)}
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;