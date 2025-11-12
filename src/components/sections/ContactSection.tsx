import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="gradient-primary text-primary-foreground py-16 px-6 mt-20 rounded-t-2xl animate-slide-up"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 pb-4 border-b-4 border-primary-foreground/50 inline-block">
          📢 Contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="flex flex-col items-center gap-3 hover:scale-110 transition-transform duration-300">
            <Mail className="h-8 w-8" />
            <strong className="text-lg">Email</strong>
            <a
              href="mailto:mostafaabdelghafar7@gmail.com"
              className="hover:underline"
            >
              mostafaabdelghafar7@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center gap-3 hover:scale-110 transition-transform duration-300">
            <Phone className="h-8 w-8" />
            <strong className="text-lg">Phone</strong>
            <a href="tel:+201019388017" className="hover:underline">
              (+20) 1019388017
            </a>
          </div>
          <div className="flex flex-col items-center gap-3 hover:scale-110 transition-transform duration-300">
            <Linkedin className="h-8 w-8" />
            <strong className="text-lg">LinkedIn</strong>
            <a
              href="https://www.linkedin.com/in/Mostafa-Abdelghafar/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/Mostafa-Abdelghafar
            </a>
          </div>
          <div className="flex flex-col items-center gap-3 hover:scale-110 transition-transform duration-300">
            <MapPin className="h-8 w-8" />
            <strong className="text-lg">Location</strong>
            <span>Cairo, Egypt</span>
          </div>
        </div>
      </div>
    </section>
  );
};
