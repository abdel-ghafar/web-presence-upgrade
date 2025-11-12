import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  "Deloitte Australia Data Analytics Job Simulation — Forage, 2025",
  "ALX Certificate of Recognition — ALX Egypt, 2024",
  "ALX Freelancer Career Maker — ALX Egypt, 2024",
  "ALX AICE - AI Career Essentials — ALX Egypt, 2024",
  "Python for Data Science — IBM/Coursera, 2022",
  "Python for Data Science, AI and Development — IBM/Coursera, 2022",
  "Data Science Methodology — IBM/Coursera, 2022",
  "Tools for Data Science — IBM/Coursera, 2022",
  "What is Data Science — IBM/Coursera, 2022",
  "Population and Economic Statistics — CAPMAS Egypt, 2022",
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="scroll-mt-20 animate-slide-up">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 pb-4 border-b-4 border-primary flex items-center gap-3 transition-transform hover:translate-x-2">
        <span>📜</span> Certifications & Training
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <Card
            key={index}
            className="border-l-4 border-l-primary hover:shadow-elegant transition-all duration-300 hover:translate-x-2"
          >
            <CardContent className="p-4">
              <p className="text-foreground/90">{cert}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
