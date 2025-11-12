import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ScrollButtons } from "@/components/ScrollButtons";
import { AboutSection } from "@/components/sections/AboutSection";
import { SummarySection } from "@/components/sections/SummarySection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { LinkedInSection } from "@/components/sections/LinkedInSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { ContactSection } from "@/components/sections/ContactSection";

const sections = [
  { id: "about", label: "About Me" },
  { id: "summary", label: "Summary" },
  { id: "experience", label: "Experience" },
  { id: "technical", label: "Technical Skills" },
  { id: "soft", label: "Soft Skills" },
  { id: "linkedin", label: "LinkedIn Posts" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "impact", label: "Impact" },
  { id: "vision", label: "Vision" },
  { id: "contact", label: "Contact" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation sections={sections} />
      <Hero />
      
      <main className="container mx-auto px-4 py-12 space-y-16 max-w-6xl">
        <AboutSection />
        <SummarySection />
        <ExperienceSection />
        <SkillsSection />
        <LinkedInSection />
        <CertificationsSection />
        <EducationSection />
        <ImpactSection />
        <VisionSection />
      </main>

      <ContactSection />
      <ScrollButtons />
    </div>
  );
};

export default Index;
