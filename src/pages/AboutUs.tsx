import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Award, Target, Clock, Star, CheckCircle2, MapPin, Phone, Mail, Building, Utensils, Heart, Factory, Home, Loader, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

// Dynamically import all client images and sort them numerically
const images = import.meta.glob("../assets/clients/*.{jpg,png,jpeg}", { eager: true, as: 'url' });
const clientLogos = Object.entries(images)
  .map(([path, url]) => ({
    path,
    url: url as string,
    // Extract number from filename (e.g., "1.jpg" -> 1)
    number: parseInt(path.split('/').pop()?.split('.')[0] || '0', 10)
  }))
  .sort((a, b) => a.number - b.number) // Sort by number
  .map(item => item.url);

const AboutUs = () => {
  const serviceCategories = [
    {
      icon: Building,
      title: "Commercial Spaces",
      services: ["Clubhouse", "Canopies & Shelters", "Skylights & Staircases (eg. Spiral)"]
    },
    {
      icon: Utensils,
      title: "F&B",
      subtitle: "Food & Beverage",
      services: ["Commercial kitchens", "Workstations", "Storage units", "Barbeque grills"]
    },
    {
      icon: Heart,
      title: "Healthcare",
      services: ["Wheelchairs", "Hospital beds & Medical furniture", "Handrails", "Storage & Shelving units"]
    },
    {
      icon: Factory,
      title: "Industrial",
      services: ["Custom Structures & Sheds", "Commercial kitchens"]
    },
    {
      icon: Home,
      title: "Residential",
      services: ["Custom Gates & Staircases", "Balconies and railings", "Outdoor furniture (pergolas, grills)"]
    },
    {
      icon: Loader,
      title: "Upcoming",
      services: ["Prefabricated Homes & Cabins", "Portable & Modular Structures", "RV Trailers & Custom Mobile Units"]
    }
  ];



  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <h1 className="text-3xl md:text-4xl font-bold">
                <span className="text-glow">About</span>
                <span className="gradient-title ml-4">Us</span>
              </h1>
            </div>
            <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
              <strong>Transcend Engineers</strong> brings together experience, innovation, and craftsmanship to deliver precision-driven metal fabrication solutions. With a <strong>wide portfolio across industries</strong>, our work stands out for its attention to detail, structural integrity, and clean, functional design. Every project reflects our commitment to <strong>quality</strong> and <strong>creative problem-solving</strong>.
            </p>
          </div>
        </div>
      </section>



      {/* Service Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-glow">Our</span>
              <span className="gradient-title ml-4">Services</span>
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              Comprehensive metal fabrication solutions across diverse industries and applications.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {serviceCategories.map((category, index) => (
              <div 
                key={category.title}
                className="surface-elevated p-3 md:p-6 rounded-xl space-y-3 md:space-y-4 hover-lift transition-all duration-300 border border-border/40 hover:border-accent/30 bg-card/50 hover:bg-card/80 shadow-sm hover:shadow-md"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-2 md:space-x-3">
                  <category.icon className="w-8 h-8 md:w-12 md:h-12 text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <h3 className="text-sm md:text-xl font-bold leading-tight">{category.title}</h3>
                    {category.subtitle && (
                      <p className="text-green-600 text-xs md:text-sm font-medium">{category.subtitle}</p>
                    )}
                  </div>
                </div>
                <ul className="space-y-1 md:space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="text-muted-foreground text-xs md:text-sm flex items-start space-x-2">
                      <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clientele Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-glow">Our</span>
              <span className="gradient-title ml-4">Clientele</span>
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              Trusted by leading companies across various industries
            </p>
          </div>
          
          {/* Client Logos Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 md:gap-6">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 aspect-square group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="max-h-12 max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="surface-elevated p-12 rounded-2xl text-center space-y-8">
            <h2 className="text-4xl font-bold">
              <span className="gradient-title">Ready to bring your vision to life?</span>
            </h2> 
            <p className="text-lg text-black max-w-2xl mx-auto">
               Let's discuss your project requirements and create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="neon" size="lg">
                Get a Quote
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default AboutUs; 