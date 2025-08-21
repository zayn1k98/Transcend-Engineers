import React, { useState } from 'react';
import Header from '../components/Header';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ExternalLink, Calendar, MapPin, Filter, Search, Building2, Factory, Home, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';
import projectImage from '../assets/project-1.jpg';
import zionMain from '../assets/zion/zion-main.avif';

const AllProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allProjects = [
    {
      title: "Zion Hills",
      location: "Kolar, Bangalore",
      year: "2023",
      type: "Roof Structures & Skylights",
      category: "Commercial",
      description: "Modern steel roof structure with innovative skylight design for enhanced natural lighting.",
      image: zionMain,
      tags: ["Commercial", "Skylights", "Roofing"],
      status: "Completed"
    },
    {
      title: "Licious",
      location: "Bangalore",
      year: "2023",
      type: "Industrial Setup",
      category: "Industrial",
      description: "Custom industrial equipment housing and support structures for food processing facility.",
      image: projectImage,
      tags: ["Industrial", "Equipment", "Food Processing"],
      status: "Completed"
    },
    {
      title: "Tikovina",
      location: "Bangalore", 
      year: "2022",
      type: "Custom Structures",
      category: "Custom",
      description: "Specialized metal fabrication for unique architectural requirements.",
      image: projectImage,
      tags: ["Custom", "Architecture", "Precision"],
      status: "Completed"
    },
    {
      title: "Tech Park Office Complex",
      location: "Hyderabad",
      year: "2023",
      type: "Commercial Structures",
      category: "Commercial",
      description: "Multi-story office complex with custom metalwork and modern architectural elements.",
      image: projectImage,
      tags: ["Commercial", "Office", "Multi-story"],
      status: "In Progress"
    },
    {
      title: "Hospital Infrastructure",
      location: "Chennai",
      year: "2023",
      type: "Healthcare Facilities",
      category: "Healthcare",
      description: "Comprehensive metalwork solutions for modern healthcare facility infrastructure.",
      image: projectImage,
      tags: ["Healthcare", "Infrastructure", "Medical"],
      status: "Completed"
    },
    {
      title: "Luxury Villa Complex",
      location: "Mumbai",
      year: "2022",
      type: "Residential Development",
      category: "Residential",
      description: "Premium residential development with custom metalwork and luxury finishes.",
      image: projectImage,
      tags: ["Residential", "Luxury", "Villa"],
      status: "Completed"
    },
    {
      title: "Food Processing Plant",
      location: "Pune",
      year: "2023",
      type: "F&B Infrastructure",
      category: "F&B",
      description: "Complete food processing facility with specialized metalwork for hygiene and efficiency.",
      image: projectImage,
      tags: ["F&B", "Processing", "Hygiene"],
      status: "In Progress"
    },
    {
      title: "Manufacturing Facility",
      location: "Ahmedabad",
      year: "2022",
      type: "Industrial Manufacturing",
      category: "Industrial",
      description: "Large-scale manufacturing facility with robust metalwork infrastructure.",
      image: projectImage,
      tags: ["Industrial", "Manufacturing", "Large-scale"],
      status: "Completed"
    },
    {
      title: "Shopping Mall",
      location: "Delhi",
      year: "2023",
      type: "Retail Structures",
      category: "Commercial",
      description: "Modern shopping mall with innovative metalwork and architectural features.",
      image: projectImage,
      tags: ["Commercial", "Retail", "Mall"],
      status: "Completed"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: Building2 },
    { id: 'commercial', name: 'Commercial', icon: Building2 },
    { id: 'industrial', name: 'Industrial', icon: Factory },
    { id: 'residential', name: 'Residential', icon: Home },
    { id: 'f&b', name: 'F&B', icon: Utensils },
    { id: 'healthcare', name: 'Healthcare', icon: Building2 },
    { id: 'custom', name: 'Custom', icon: Building2 }
  ];

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || 
      project.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-glow">All</span>
                <span className="gradient-title ml-4">Projects</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Explore our comprehensive portfolio of successful projects across various industries
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3">
                  <span className="font-semibold">{allProjects.length} Projects</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3">
                  <span className="font-semibold">Multiple Industries</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3">
                  <span className="font-semibold">Years of Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            {/* Results Count */}
            <div className="mb-8">
              <p className="text-gray-600">
                Showing {filteredProjects.length} of {allProjects.length} projects
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.title}
                  className="group overflow-hidden bg-white border border-gray-200 hover-lift transition-all duration-500 hover:border-blue-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Status Badge */}
                    <Badge className={`absolute top-4 right-4 ${
                      project.status === 'Completed' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-orange-600 text-white'
                    }`}>
                      {project.status}
                    </Badge>

                    {/* Year Badge */}
                    <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                      {project.year}
                    </Badge>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                    </div>
                    
                    {/* Project Details */}
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                        {project.type}
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag}
                          variant="secondary" 
                          className="text-xs bg-blue-100 text-blue-800 border-blue-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* View Project Button */}
                    {project.title === "Zion Hills" ? (
                      <Link to="/zion-gallery">
                        <Button 
                          variant="default" 
                          size="sm" 
                          className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                        >
                          View Project Gallery
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    ) : project.title === "Licious" ? (
                      <Link to="/licious-project">
                        <Button 
                          variant="default" 
                          size="sm" 
                          className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                        >
                          View Details
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    ) : project.title === "Tikovina" ? (
                      <Link to="/tikovina-project">
                        <Button 
                          variant="default" 
                          size="sm" 
                          className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                        >
                          View Details
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    ) : (
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                      >
                        View Details
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            {/* No Results */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create something extraordinary together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Free Consultation
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllProjects;
