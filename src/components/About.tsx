import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Award, Target, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { value: "25+", label: "years in business", color: "bg-primary/10 text-primary" },
    { value: "50+", label: "Projects", color: "bg-accent/10 text-accent" },
    { value: "4+", label: "Industries", color: "bg-primary/20 text-primary" },
    { value: "20+", label: "Elite Clients", color: "bg-accent/20 text-accent" }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Centered Content */}
          <div className="space-y-8">
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-glow">About</span>
                <span className="gradient-title ml-4">Us</span>
              </h2>
              <p className="text-lg text-black leading-relaxed">
                Blending experience, innovation, and craftsmanship – we deliver precision metalwork with clean design, structural strength, and unmatched detail.
              </p>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`text-center space-y-3 p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 group ${stat.color} hover:bg-primary hover:text-white`}
                >
                  <div className="text-4xl font-bold">{stat.value}</div>
                  <div className="text-sm font-medium px-3 py-1 rounded-full inline-block">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about-us">
              <Button variant="neon" size="lg" className="mt-8">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;