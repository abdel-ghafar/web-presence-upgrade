import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    degree: "Diploma in Computer Science",
    institution: "Cairo University",
    period: "2022-2025",
  },
  {
    degree: "B.Sc. Mathematics & Statistics",
    institution: "Zagazig University",
    period: "2018-2022",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="scroll-mt-20 animate-slide-up">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 pb-4 border-b-4 border-primary flex items-center gap-3 transition-transform hover:translate-x-2">
        <span>🎓</span> Education
      </h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card
            key={index}
            className="border-l-4 border-l-primary hover:shadow-elegant transition-all duration-300 hover:translate-x-2"
          >
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">
                {edu.degree}
              </h3>
              <Badge className="mb-2 bg-primary text-primary-foreground">
                {edu.institution}
              </Badge>
              <p className="text-sm text-muted-foreground italic">{edu.period}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
