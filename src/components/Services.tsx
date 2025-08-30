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

        {/* Services Grid - Responsive for all devices */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {serviceCategories.map((category, index) => (
            <div 
              key={category.title}
              className="surface-elevated p-3 md:p-6 rounded-xl space-y-3 md:space-y-4 hover-lift transition-all duration-300"
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
  );
};

export default Services;