import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import projectImage from "@/assets/project-1.jpg";
import zionMain from "@/assets/zion/zion-main.avif";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "Zion Hills",
      location: "Kolar, Bangalore",
      year: "2023",
      type: "Roof Structures & Skylights",
      description: "Modern steel roof structure with innovative skylight design for enhanced natural lighting.",
      image: zionMain,
      tags: ["Commercial", "Skylights", "Roofing"]
    },
    {
      title: "Licious",
      location: "Bangalore",
      year: "2023",
      type: "Industrial Setup",
      description: "Custom industrial equipment housing and support structures for food processing facility.",
      image: projectImage,
      tags: ["Industrial", "Equipment", "Food Processing"]
    },
    {
      title: "Tikovina",
      location: "Bangalore", 
      year: "2022",
      type: "Custom Structures",
      description: "Specialized metal fabrication for unique architectural requirements.",
      image: projectImage,
      tags: ["Custom", "Architecture", "Precision"]
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-glow">Our</span>
            <span className="gradient-title ml-4">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our expertise through successful project implementations across various industries
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden bg-card border-accent/20 hover-lift transition-all duration-500 hover:border-accent/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                
                {/* Year Badge */}
                <Badge className="absolute top-4 right-4 bg-primary/90 text-white">
                  {project.year}
                </Badge>
              </div>
              
              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                </div>
                
                {/* Project Details */}
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-accent" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-accent" />
                    {project.type}
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag}
                      variant="secondary" 
                      className="text-xs bg-accent/10 text-accent border-accent/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* View Project Button */}
                {project.title === "Zion Hills" ? (
                  <Link to="/zion-gallery">
                    <Button 
                      variant="industrial" 
                      size="sm" 
                      className="w-full mt-4 group-hover:bg-accent/20"
                    >
                      View Project Gallery
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                ) : project.title === "Licious" ? (
                  <Link to="/licious-project">
                    <Button 
                      variant="industrial" 
                      size="sm" 
                      className="w-full mt-4 group-hover:bg-accent/20"
                    >
                      View Details
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                ) : project.title === "Tikovina" ? (
                  <Link to="/tikovina-project">
                    <Button 
                      variant="industrial" 
                      size="sm" 
                      className="w-full mt-4 group-hover:bg-accent/20"
                    >
                      View Details
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                ) : (
                  <Button 
                    variant="industrial" 
                    size="sm" 
                    className="w-full mt-4 group-hover:bg-accent/20"
                  >
                    View Details
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
        
        {/* View All Projects */}
        <div className="text-center mt-12">
          <Link to="/all-projects">
            <Button variant="neon" size="lg">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;