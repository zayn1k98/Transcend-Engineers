import React, { useState } from 'react';
import Header from '../components/Header';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ExternalLink, MapPin, Filter, Search, Building2, Factory, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';
import projectImage from '../assets/project-1.jpg';
import zionMain from '../assets/zion/zion-main.avif';
import liciousLogo from '../assets/clients/3.png';
import jubilantLogo from '../assets/clients/4.png';

const AllProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allProjects = [
    {
      title: "Zion Hills",
      location: "Kolar, Karnataka",
      year: "2023",
      type: "Roof Structures & Skylights",
      category: "Commercial",
      description: "",
      image: zionMain,
      tags: ["Commercial", "Clubhouse", "Pergolas", "Louvers"],
      status: "Completed"
    },
    {
      title: "Licious",
      location: "Bangalore",
      year: "2023",
      type: "Industrial Setup",
      category: "Industrial",
      description: "Custom industrial equipment housing and support structures for food processing facility.",
      image: liciousLogo,
      tags: ["Industrial", "Equipment", "Food Processing"],
      status: "Completed"
    },
    {
      title: "Jubilant Foodworks",
      location: "Bangalore", 
      year: "2022",
      type: "Food Processing Facility",
      category: "F&B",
      description: "",
      image: jubilantLogo,
      tags: ["Food Processing", "Industrial", "Facility"],
      status: "Completed"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: Building2 },
    { id: 'commercial', name: 'Commercial', icon: Building2 },
    { id: 'industrial', name: 'Industrial', icon: Factory },
    { id: 'f&b', name: 'F&B', icon: Utensils }
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
        <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-glow">All</span>
                <span className="gradient-title ml-4">Projects</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
                Explore our comprehensive portfolio of successful projects across various industries
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/80 backdrop-blur-md rounded-lg px-6 py-3 border border-slate-200">
                  <span className="font-semibold text-slate-700">{allProjects.length} Projects</span>
                </div>
                <div className="bg-white/80 backdrop-blur-md rounded-lg px-6 py-3 border border-slate-200">
                  <span className="font-semibold text-slate-700">Multiple Industries</span>
                </div>
                <div className="bg-white/80 backdrop-blur-md rounded-lg px-6 py-3 border border-slate-200">
                  <span className="font-semibold text-slate-700">Years of Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-slate-400 bg-white"
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
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400 hover:bg-slate-50'
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
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            {/* Results Count */}
            <div className="mb-8">
              <p className="text-slate-600">
                Showing {filteredProjects.length} of {allProjects.length} projects
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.title}
                  className="group overflow-hidden bg-white border border-slate-200 hover-lift transition-all duration-500 hover:border-slate-300 hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48 flex items-center justify-center bg-slate-50">
                    {project.title === "Licious" || project.title === "Jubilant Foodworks" ? (
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-48 h-24 object-contain transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                    
                    {/* Status Badge */}
                    <Badge className={`absolute top-4 right-4 ${
                      project.status === 'Completed' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-orange-600 text-white'
                    }`}>
                      {project.status}
                    </Badge>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                      <p className="text-slate-600 text-sm mb-3">{project.description}</p>
                    </div>
                    
                    {/* Project Details */}
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-slate-500">
                        <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                        {project.location}
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag}
                          variant="secondary" 
                          className="text-xs bg-slate-100 text-slate-700 border-slate-200"
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
                          className="w-full mt-4 bg-slate-900 hover:bg-slate-800 text-white"
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
                          className="w-full mt-4 bg-slate-900 hover:bg-slate-800 text-white"
                        >
                          View Details
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    ) : project.title === "Jubilant Foodworks" ? (
                      <Link to="/jubilant-foodworks">
                        <Button 
                          variant="default" 
                          size="sm" 
                          className="w-full mt-4 bg-slate-900 hover:bg-slate-800 text-white"
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
                <div className="text-slate-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">No projects found</h3>
                <p className="text-slate-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create something extraordinary together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Free Consultation
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors">
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
