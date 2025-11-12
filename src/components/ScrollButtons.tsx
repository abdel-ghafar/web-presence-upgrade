import { ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const ScrollButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-40 animate-fade-in">
      <Button
        onClick={scrollToTop}
        size="icon"
        className="rounded-full bg-gradient-to-r from-primary to-accent shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-110 h-12 w-12"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
      <Button
        onClick={scrollToBottom}
        size="icon"
        className="rounded-full bg-gradient-to-r from-primary to-accent shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-110 h-12 w-12"
        aria-label="Scroll to bottom"
      >
        <ArrowDown className="h-6 w-6" />
      </Button>
    </div>
  );
};
