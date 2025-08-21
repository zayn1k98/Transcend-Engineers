import React from 'react';
import Header from '../components/Header';
import { Home, Heart, Star, Award, CheckCircle2, ArrowRight } from 'lucide-react';

const Residential = () => {
  const services = [
    {
      title: "Custom Homes",
      description: "Luxury residential metalwork for custom homes and high-end properties.",
      features: ["Custom staircases", "Balcony railings", "Gates and fencing", "Garden structures"]
    },
    {
      title: "Interior Design",
      description: "Premium metalwork solutions for residential interior spaces.",
      features: ["Staircase systems", "Balustrades", "Lighting fixtures", "Decorative elements"]
    },
    {
      title: "Outdoor Living",
      description: "Beautiful metalwork for outdoor residential spaces and landscaping.",
      features: ["Patio structures", "Garden gates", "Outdoor furniture", "Water features"]
    }
  ];

  const projects = [
    {
      name: "Luxury Villa",
      description: "Premium residential project with custom metalwork",
      image: "/api/placeholder/400/300",
      category: "Luxury"
    },
    {
      name: "Modern Apartment",
      description: "Contemporary residential space with elegant metal fixtures",
      image: "/api/placeholder/400/300",
      category: "Modern"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-pink-800 to-rose-900 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/10 backdrop-blur-md rounded-full p-4">
                  <Home className="w-12 h-12" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-glow">Residential</span>
                <span className="gradient-title ml-4">Excellence</span>
              </h1>
              <p className="text-xl md:text-2xl text-pink-100 mb-8 leading-relaxed">
                Creating beautiful living spaces with premium metalwork solutions for modern homes
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3">
                  <span className="font-semibold">Luxury Design</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3">
                  <span className="font-semibold">Custom Craftsmanship</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3">
                  <span className="font-semibold">Premium Quality</span>
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
                Specialized metalwork solutions designed specifically for residential environments, 
                combining beauty, functionality, and lasting quality.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="surface-elevated rounded-2xl p-8 hover-lift transition-all duration-300">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                    {index === 0 ? (
                      <Home className="w-8 h-8 text-white" />
                    ) : index === 1 ? (
                      <Heart className="w-8 h-8 text-white" />
                    ) : (
                      <Star className="w-8 h-8 text-white" />
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
                Explore our portfolio of residential projects that showcase 
                our expertise in creating beautiful and functional living spaces.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="surface-elevated rounded-2xl overflow-hidden hover-lift transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">{project.name}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <button className="flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors">
                      View Project <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-800 to-rose-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Create Your Dream Home?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your residential metalwork requirements and create 
              spaces that reflect your style and enhance your living experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Residential;