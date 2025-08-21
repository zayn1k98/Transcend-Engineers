import React from 'react';
import Header from '../components/Header';
import { Calendar, TrendingUp, Rocket, Award, CheckCircle2, ArrowRight } from 'lucide-react';

const Upcoming = () => {
  const services = [
    {
      title: "Innovation Hub",
      description: "Cutting-edge metalwork solutions for emerging technologies and startups.",
      features: ["Tech startup spaces", "Innovation centers", "Co-working facilities", "Research labs"]
    },
    {
      title: "Future Projects",
      description: "Next-generation metalwork concepts for upcoming market demands.",
      features: ["Sustainable materials", "Smart technology integration", "Modular systems", "Green building solutions"]
    },
    {
      title: "Emerging Markets",
      description: "Specialized solutions for new and developing market segments.",
      features: ["EV infrastructure", "Renewable energy", "Digital transformation", "Smart cities"]
    }
  ];

  const projects = [
    {
      name: "Tech Innovation Center",
      description: "Future-ready facility with advanced metalwork solutions",
      image: "/api/placeholder/400/300",
      category: "Innovation"
    },
    {
      name: "Smart City Project",
      description: "Next-generation urban development with integrated metalwork",
      image: "/api/placeholder/400/300",
      category: "Smart Cities"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-900 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/10 backdrop-blur-md rounded-full p-4">
                  <Rocket className="w-12 h-12" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-glow">Upcoming</span>
                <span className="gradient-title ml-4">Innovations</span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
                Pioneering the future of metalwork with cutting-edge solutions for tomorrow's challenges
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3">
                  <span className="font-semibold">Future Ready</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3">
                  <span className="font-semibold">Innovation Driven</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3">
                  <span className="font-semibold">Technology Forward</span>
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
                <span className="gradient-title ml-4">Vision</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Exploring the frontiers of metalwork technology and innovation to create 
                solutions that address the challenges of tomorrow.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="surface-elevated rounded-2xl p-8 hover-lift transition-all duration-300">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                    {index === 0 ? (
                      <Rocket className="w-8 h-8 text-white" />
                    ) : index === 1 ? (
                      <TrendingUp className="w-8 h-8 text-white" />
                    ) : (
                      <Calendar className="w-8 h-8 text-white" />
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
                <span className="text-glow">Future</span>
                <span className="gradient-title ml-4">Projects</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our vision for upcoming projects that will shape the future 
                of metalwork and construction technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="surface-elevated rounded-2xl overflow-hidden hover-lift transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">{project.name}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <button className="flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your innovative metalwork requirements and explore 
              how we can pioneer solutions for tomorrow's challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-colors">
                Explore Innovation
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Upcoming; 