import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const technicalSkills = [
  {
    category: "Languages/Tools",
    skills: "Python (Pandas, NumPy, Matplotlib, Seaborn), SQL, Excel/VBA, Power BI",
  },
  {
    category: "Database",
    skills: "SQL, Google Sheets, Data Modeling",
  },
  {
    category: "Data Automation & Web Scraping",
    skills: "Requests, BeautifulSoup, Parsel",
  },
  {
    category: "Agile & Collaboration",
    skills: "Trello, Jira, Lucidchart",
  },
];

const softSkills = [
  "Analytical & Problem-Solving",
  "Stakeholder Communication",
  "Agile Mindset",
  "Process Optimization",
  "Storytelling with Data",
  "Fast Learner & Adaptable",
];

export const SkillsSection = () => {
  return (
    <>
      <section id="technical" className="scroll-mt-20 animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 pb-4 border-b-4 border-primary flex items-center gap-3 transition-transform hover:translate-x-2">
          <span>💻</span> Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {technicalSkills.map((skill, index) => (
            <Card
              key={index}
              className="hover:shadow-elegant transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="text-lg text-primary">
                  {skill.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90">{skill.skills}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="soft" className="scroll-mt-20 animate-slide-up mt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 pb-4 border-b-4 border-primary flex items-center gap-3 transition-transform hover:translate-x-2">
          <span>🧠</span> Soft Skills
        </h2>
        <div className="flex flex-wrap gap-3">
          {softSkills.map((skill, index) => (
            <Badge
              key={index}
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2 text-base hover:shadow-glow transition-all duration-300 hover:scale-110 cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </section>
    </>
  );
};
