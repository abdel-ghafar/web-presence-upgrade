import { Card, CardContent } from "@/components/ui/card";

export const SummarySection = () => {
  return (
    <section id="summary" className="scroll-mt-20 animate-slide-up">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 pb-4 border-b-4 border-primary flex items-center gap-3 transition-transform hover:translate-x-2">
        <span>🚀</span> Professional Summary
      </h2>
      <Card className="bg-gradient-subtle border-l-4 border-l-primary hover:shadow-elegant transition-all duration-300">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-primary mb-4">
            Senior Market Research Analyst (Royal Cement, Egypt)
          </h3>
          <ul className="space-y-3 list-disc list-inside text-foreground/90">
            <li>
              Proven track in analyzing market/competitor data, creating
              interactive dashboards, cleaning and organizing business data, and
              producing strategic executive presentations for C-level decisions.
            </li>
            <li>
              Skilled in Excel, Power BI, SQL, Python, Agile project management,
              and stakeholder communication
            </li>
            <li>
              Pursuing a diploma in Computer Science (Cairo University); BSc. in
              Mathematics & Statistics.
            </li>
            <li>Planning to pursue a Master's in Machine Learning</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};
