import React from 'react';
import Header from '../components/Header';
import { Utensils, Coffee, ChefHat, Award, CheckCircle2, ArrowRight } from 'lucide-react';

const FnB = () => {
  const services = [
    {
      title: "Restaurant Equipment",
      description: "Custom metal fabrication for commercial kitchens and dining spaces.",
      features: ["Stainless steel workstations", "Custom shelving systems", "Equipment mounting", "Safety railings"]
    },
    {
      title: "Café & Bar Design",
      description: "Specialized metalwork solutions for modern café and bar environments.",
      features: ["Bar counters and fixtures", "Display cases", "Seating arrangements", "Lighting fixtures"]
    },
    {
      title: "Food Service Infrastructure",
      description: "Complete metalwork infrastructure for food service operations.",
      features: ["Kitchen layouts", "Storage solutions", "Service areas", "Maintenance access"]
    }
  ];

  const projects = [
    {
      name: "Licious Kitchen",
      description: "Modern commercial kitchen with custom metalwork",
      image: "/api/placeholder/400/300",
      category: "Restaurant"
    },
    {
      name: "Urban Café",
      description: "Contemporary café with premium metal fixtures",
      image: "/api/placeholder/400/300",
      category: "Café"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/10 backdrop-blur-md rounded-full p-4">
                  <Utensils className="w-12 h-12" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-glow">Food</span>
                <span className="gradient-title ml-4">&</span>
                <span className="text-glow ml-4">Beverage</span>
              </h1>
              <p className="text-xl md:text-2xl text-orange-100 mb-8 leading-relaxed">
                Crafting exceptional dining experiences with precision metalwork for the food service industry
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3">
                  <span className="font-semibold">Hygiene Focused</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3">
                  <span className="font-semibold">Durable Solutions</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3">
                  <span className="font-semibold">Custom Design</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-glow">Our</span>
                <span className="gradient-title ml-4">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized metalwork solutions designed specifically for food and beverage operations, 
                ensuring hygiene, durability, and operational efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="surface-elevated rounded-2xl p-8 hover-lift transition-all duration-300">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                    {index === 0 ? (
                      <Utensils className="w-8 h-8 text-white" />
                    ) : index === 1 ? (
                      <Coffee className="w-8 h-8 text-white" />
                    ) : (
                      <ChefHat className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-glow">Featured</span>
                <span className="gradient-title ml-4">Projects</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our portfolio of food and beverage projects that demonstrate 
                our expertise in creating functional and beautiful dining spaces.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="surface-elevated rounded-2xl overflow-hidden hover-lift transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">{project.name}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <button className="flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors">
                      View Project <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Elevate Your Dining Experience?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your food and beverage metalwork requirements and create 
              spaces that enhance both functionality and ambiance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-900 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FnB; 