import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-accent/20">
      <div className="container mx-auto px-6 py-6 md:py-12">
        <div className="hidden md:grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="gradient-title">
                Transcend Engineers
              </span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Engineering precision and building futures through innovative metal fabrication solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2 text-accent" />
                Bengaluru, Karnataka
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mr-2 text-accent" />
                +91 94488 83714
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mr-2 text-accent" />
                transcendengineer@gmail.com
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <ul className="space-y-2">
              {["Metal Fabrication", "Industrial Equipment", "Roof Structures", "Custom Skylights", "Quality Assurance"].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Recent Projects</h4>
            <ul className="space-y-2">
              {["Zion Hills", "Licious Industrial", "Tikovina Custom", "Commercial Buildings"].map((project) => (
                <li key={project}>
                  <a href="#projects" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    {project}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Ready to Start?</h4>
            <p className="text-muted-foreground text-sm">
              Get in touch with us today for your metal fabrication needs.
            </p>
            <Button variant="neon" size="sm" className="w-full">
              Get Quote
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-0 md:mt-12 pt-4 md:pt-8 border-t border-accent/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2025 Transcend Engineers. All rights reserved.
          </p>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={scrollToTop}
            className="text-muted-foreground hover:text-accent"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;