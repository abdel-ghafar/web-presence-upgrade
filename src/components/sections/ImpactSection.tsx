import { Card, CardContent } from "@/components/ui/card";

export const ImpactSection = () => {
  return (
    <section id="impact" className="scroll-mt-20 animate-slide-up">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 pb-4 border-b-4 border-primary flex items-center gap-3 transition-transform hover:translate-x-2">
        <span>🏆</span> Value & Strategic Impact
      </h2>
      <Card className="bg-gradient-subtle hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-primary mb-4">
            As a Market Research Analyst & Data Professional:
          </h3>
          <ul className="space-y-3 list-disc list-inside text-foreground/90 mb-6">
            <li>
              Drive executive decision-making—connecting market signals to
              business action
            </li>
            <li>
              Deliver savings by optimizing targeting, logistics, and marketing
              spend
            </li>
            <li>
              Build forecasting models and market share analyses for expansion
              planning
            </li>
            <li>
              Bridge technical data with actionable recommendations for
              non-technical leaders
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-primary mb-4">
            Recent Highlights:
          </h3>
          <ul className="space-y-3 list-disc list-inside text-foreground/90">
            <li>Built global cement market databases for 100+ countries</li>
            <li>Coordinated cross-functional analytics workflows</li>
            <li>
              Enabled C-levels to make profitable, data-driven export decisions
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};
