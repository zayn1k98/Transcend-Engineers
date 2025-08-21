import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MapPin, Users, Award, Target, CheckCircle2, Factory, Utensils, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import projectImage from "@/assets/project-1.jpg";

const LiciousProject = () => {
  const projectDetails = {
    title: "Licious Industrial Setup",
    location: "Bangalore, Karnataka",
    year: "2023",
    duration: "8 months",
    client: "Licious Foods Pvt Ltd",
    category: "Industrial Equipment & Food Processing",
    description: "A comprehensive industrial setup project for Licious, a leading food processing company, involving custom metal fabrication for equipment housing, support structures, and specialized food processing infrastructure.",
    challenge: "The project required creating hygienic, food-grade metal structures that could withstand high-temperature processing environments while maintaining strict food safety standards and meeting tight production deadlines.",
    solution: "We designed and fabricated custom stainless steel equipment housings, support structures, and processing units with specialized coatings and finishes that meet food industry standards. Our team implemented modular design principles for easy maintenance and future scalability.",
    highlights: [
      "Custom stainless steel equipment housing",
      "Food-grade processing infrastructure",
      "Modular design for easy maintenance",
      "Temperature-resistant coatings",
      "Hygienic surface finishes",
      "Scalable production units"
    ],
    specifications: [
      "Material: 316L Stainless Steel",
      "Capacity: 5000 kg/day processing",
      "Temperature Range: -40°C to +200°C",
      "Surface Finish: Food-grade polish",
      "Modular Units: 12 independent sections",
      "Installation Time: 8 months"
    ],
    valuePropositions: [
      {
        icon: Shield,
        title: "Food Safety Compliance",
        description: "All structures meet international food safety standards with hygienic design and easy-clean surfaces."
      },
      {
        icon: Zap,
        title: "Operational Efficiency",
        description: "Modular design reduces maintenance downtime by 40% and increases production flexibility."
      },
      {
        icon: Target,
        title: "Quality Assurance",
        description: "Precision engineering ensures consistent product quality and reduces processing variations."
      },
      {
        icon: Factory,
        title: "Scalable Infrastructure",
        description: "Future-ready design allows for easy capacity expansion without major structural changes."
      }
    ],
    results: [
      "40% reduction in maintenance downtime",
      "25% increase in production efficiency",
      "100% compliance with food safety standards",
      "30% improvement in operational flexibility",
      "Zero safety incidents during installation",
      "On-time delivery within budget"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold">
                  <span className="gradient-title">{projectDetails.title}</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {projectDetails.description}
                </p>
              </div>

              {/* Project Meta */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-medium">{projectDetails.location}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Year</div>
                    <div className="font-medium">{projectDetails.year}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Client</div>
                    <div className="font-medium">{projectDetails.client}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                    <div className="font-medium">{projectDetails.duration}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={projectImage}
                alt={projectDetails.title}
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 surface-elevated p-6 rounded-xl shadow-2xl border border-accent/20">
                <div className="text-primary text-3xl font-bold">{projectDetails.category}</div>
                <div className="text-muted-foreground">Industrial Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                <span className="gradient-title">The Challenge</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {projectDetails.challenge}
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                <span className="gradient-title">Our Solution</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {projectDetails.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-title">Project Highlights</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key features and innovations that set this project apart
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectDetails.highlights.map((highlight, index) => (
              <div 
                key={highlight}
                className="surface-elevated p-6 rounded-xl space-y-4 hover-lift transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle2 className="w-8 h-8 text-accent" />
                <h3 className="text-lg font-bold">{highlight}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-title">Technical Specifications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Detailed specifications and engineering parameters
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectDetails.specifications.map((spec, index) => (
              <div 
                key={spec}
                className="surface-elevated p-4 rounded-lg text-center hover-lift transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-sm text-muted-foreground mb-2">
                  {spec.split(':')[0]}
                </div>
                <div className="font-bold text-primary">
                  {spec.split(':')[1]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-title">Value Propositions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How this project delivers exceptional value to the client
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projectDetails.valuePropositions.map((proposition, index) => (
              <div 
                key={proposition.title}
                className="surface-elevated p-8 rounded-xl space-y-4 hover-lift transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <proposition.icon className="w-12 h-12 text-primary" />
                <h3 className="text-2xl font-bold">{proposition.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {proposition.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-title">Results & Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Measurable outcomes and business impact achieved
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectDetails.results.map((result, index) => (
              <div 
                key={result}
                className="surface-elevated p-6 rounded-xl text-center space-y-3 hover-lift transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full mx-auto flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <p className="font-medium">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="surface-elevated p-12 rounded-2xl text-center space-y-8">
            <h2 className="text-4xl font-bold">
              <span className="gradient-title">Ready for Your Project?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how we can bring the same level of excellence and innovation to your industrial project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="neon" size="lg">
                Get a Quote
              </Button>
              <Button variant="outline" size="lg">
                View More Projects
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiciousProject; 