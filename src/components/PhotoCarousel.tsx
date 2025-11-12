import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Placeholder images - you can replace these with actual image URLs
const photos = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
];

export const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <div className="relative max-w-3xl mx-auto my-8 rounded-2xl overflow-hidden shadow-elegant group">
      <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-primary to-accent">
        <img
          src={photos[currentIndex]}
          alt="Mostafa Abdelghafar"
          className="w-full h-full object-cover transition-opacity duration-500"
        />
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 h-12 w-12 rounded-lg"
        aria-label="Previous photo"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 h-12 w-12 rounded-lg"
        aria-label="Next photo"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary-foreground w-8"
                : "bg-primary-foreground/50"
            }`}
            aria-label={`Go to photo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
