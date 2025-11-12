import { Card, CardContent } from "@/components/ui/card";

export const VisionSection = () => {
  return (
    <section id="vision" className="scroll-mt-20 animate-slide-up">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 pb-4 border-b-4 border-primary flex items-center gap-3 transition-transform hover:translate-x-2">
        <span>📈</span> Professional Vision
      </h2>
      <Card className="bg-gradient-subtle hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]">
        <CardContent className="p-6">
          <ul className="space-y-3 list-disc list-inside text-foreground/90">
            <li>
              Specialize further in predictive analytics & AI-driven market
              research
            </li>
            <li>
              Continue delivering strategies that multiply business value via data
            </li>
            <li>
              Build tools and dashboards that help teams see the "big picture" and
              act faster
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};
