import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface LinkedInPost {
  url: string;
  image: string;
  description: string;
}

const posts: LinkedInPost[] = [
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7302260698879819777/",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    description: "Data insights and market analysis",
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7339991802726264833/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    description: "Market research strategies",
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7302977421614497792/",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80",
    description: "Industry analysis and trends",
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7369753717018968065/",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    description: "Data-driven insights",
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7316731814591524865/",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80",
    description: "Professional development",
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7373066991793889280/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    description: "Analytics best practices",
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7369021732264861697/",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80",
    description: "Business intelligence insights",
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7385585709765554176/",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    description: "Career growth and learning",
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7388315476747243520/",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80",
    description: "Data science applications",
  },
];

export const LinkedInSection = () => {
  return (
    <section id="linkedin" className="scroll-mt-20 animate-slide-up">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 pb-4 border-b-4 border-primary flex items-center gap-3 transition-transform hover:translate-x-2">
        <span>🔗</span> Featured LinkedIn Content
      </h2>
      <p className="text-muted-foreground mb-8">
        Check out my most engaging posts where I share insights about data
        analysis, market research, and industry trends.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <Card
            key={index}
            className="group overflow-hidden border-l-4 border-l-[#0077b5] hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            onClick={() => window.open(post.url, "_blank")}
          >
            <div className="relative">
              <div className="absolute top-3 left-3 bg-[#0077b5] text-white w-9 h-9 rounded flex items-center justify-center font-bold text-lg z-10">
                in
              </div>
              <img
                src={post.image}
                alt="LinkedIn post preview"
                className="w-full h-48 object-cover border-b-2 border-[#0077b5]"
              />
            </div>
            <CardContent className="p-4">
              <p className="text-foreground/80 mb-3">{post.description}</p>
              <Button
                variant="default"
                size="sm"
                className="bg-gradient-to-r from-[#0077b5] to-[#005582] hover:shadow-elegant transition-all duration-300 group-hover:scale-105"
              >
                View on LinkedIn <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
