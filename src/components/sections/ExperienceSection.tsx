import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Experience {
  company: string;
  position: string;
  period: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    company: "Royal Cement (Export Dept.)",
    position: "Senior Market Research Analyst",
    period: "July 2025 – Present",
    highlights: [
      "Analyzed export markets for 15+ countries using data from Globalwits & Veritrade",
      "Built Power BI dashboards (MoM/YoY growth, pricing, share, competitor tracking)",
      "Delivered advanced Excel/Power BI reports with feasibility analysis, competitive benchmarks, and price recommendations",
      "Cleaned, organized, and validated data from diverse sources for business use",
      "Designed presentations and data stories for top management and strategy sessions",
      "Led market segmentation analysis (volume, order trends, region-based insights)",
      "Collaborated deeply with Marketing/Planning/Operations",
    ],
  },
  {
    company: "Hayah Laboratories",
    position: "Data Analyst",
    period: "Sep 2024 – Jul 2025",
    highlights: [
      "Automated sales reporting in Excel (VBA/scripts)",
      "Built KPIs dashboards in Power BI, found sales trends",
      "Developed & optimized SQL databases/queries for reporting",
      "Automated processes, built fraud detection scripts",
      "Managed agile projects (Trello, Scrum)",
    ],
  },
  {
    company: "NeuronetiX",
    position: "Data Analyst Intern (Remote)",
    period: "Jul 2024 – Sep 2024",
    highlights: [
      "Cleaned, visualized, and presented end-to-end data workflows in Excel, Python, and Power BI",
      "Collaborated with diverse teams remotely",
    ],
  },
  {
    company: "Freelance",
    position: "Client Analyses",
    period: "Various Projects",
    highlights: [
      "Built interactive dashboards for Saudi business distribution (Upwork)",
      "Advised businesses on Gulf market opportunities (videos, Excel, Power BI)",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="scroll-mt-20 animate-slide-up">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 pb-4 border-b-4 border-primary flex items-center gap-3 transition-transform hover:translate-x-2">
        <span>🏅</span> Professional Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="border-l-4 border-l-primary hover:shadow-elegant transition-all duration-300 hover:translate-x-2"
          >
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">
                {exp.company}
              </h3>
              <Badge className="mb-2 bg-primary text-primary-foreground">
                {exp.position}
              </Badge>
              <p className="text-sm text-muted-foreground italic mb-4">
                {exp.period}
              </p>
              <ul className="space-y-2 list-disc list-inside text-foreground/90">
                {exp.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
