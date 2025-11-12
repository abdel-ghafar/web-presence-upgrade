import { Card, CardContent } from "@/components/ui/card";
import { PhotoCarousel } from "@/components/PhotoCarousel";

export const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-20 animate-slide-up">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 pb-4 border-b-4 border-primary flex items-center gap-3 transition-transform hover:translate-x-2">
        <span>👤</span> About Me
      </h2>

      <PhotoCarousel />

      <p className="text-lg text-center my-8 text-foreground/90">
        Data Analyst & Market Research Analyst passionate about transforming raw
        data and business needs into actionable insights, strategies, and tangible
        results. I build clarity out of complexity and always focus on business
        impact.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-4">
            <strong className="text-primary">Based in:</strong> Cairo, Egypt
          </CardContent>
        </Card>
        <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-4">
            <strong className="text-primary">Email:</strong>{" "}
            <a
              href="mailto:mostafaabdelghafar7@gmail.com"
              className="text-primary hover:underline"
            >
              mostafaabdelghafar7@gmail.com
            </a>
          </CardContent>
        </Card>
        <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-4">
            <strong className="text-primary">Languages:</strong> Arabic (Native),
            English (Professional)
          </CardContent>
        </Card>
        <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-4">
            <strong className="text-primary">Born:</strong> 1998
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
