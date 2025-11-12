import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  sections: { id: string; label: string }[];
}

export const Navigation = ({ sections }: NavigationProps) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        isSticky ? "bg-background/80 shadow-md" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-center gap-2">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant="outline"
              size="sm"
              onClick={() => scrollToSection(section.id)}
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-elegant transition-all duration-300 hover:scale-105 border-0"
            >
              {section.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};
