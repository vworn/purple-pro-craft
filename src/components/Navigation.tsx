import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { User, GraduationCap, Code, Briefcase, FolderOpen, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: <User className="w-4 h-4" /> },
    { id: "education", label: "Education", icon: <GraduationCap className="w-4 h-4" /> },
    { id: "skills", label: "Skills", icon: <Code className="w-4 h-4" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
    { id: "projects", label: "Projects", icon: <FolderOpen className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <Card className="bg-card/90 backdrop-blur-md border-border/50 shadow-elevated p-2 hover-glow">
          <div className="flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-smooth button-magic ${
                  activeSection === item.id
                    ? "gradient-primary text-primary-foreground shadow-glow"
                    : "hover:bg-muted/50 text-muted-foreground hover:text-foreground hover-lift"
                }`}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </Card>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-glow button-magic hover-bounce"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-primary-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-primary-foreground" />
          )}
        </button>

        {isMenuOpen && (
          <div className="absolute top-16 right-0 w-48 animate-slide-up">
            <Card className="bg-card/90 backdrop-blur-md border-border/50 shadow-elevated p-2 hover-glow">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-smooth text-left button-magic ${
                      activeSection === item.id
                        ? "gradient-primary text-primary-foreground shadow-glow"
                        : "hover:bg-muted/50 text-muted-foreground hover:text-foreground hover-lift"
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </Card>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;