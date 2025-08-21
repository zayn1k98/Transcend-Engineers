import { Card } from "@/components/ui/card";
import { Building, Utensils, Heart, Factory, Home, Loader, CheckCircle2 } from "lucide-react";

const Services = () => {
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
    <section id="services" className="py-24 surface-elevated">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-glow">Our</span>
            <span className="gradient-title ml-4">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive metal fabrication solutions across diverse industries and applications
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="group relative p-8 bg-card border-accent/20 hover-lift transition-all duration-500 hover:border-accent/50 hover:bg-card/80"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon and Title */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                {category.subtitle && (
                  <p className="text-green-600 text-sm font-medium">{category.subtitle}</p>
                )}
                
                {/* Services List */}
                <ul className="space-y-2 pt-4">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0 mr-2" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-primary group-hover:to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;