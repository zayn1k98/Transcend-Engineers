import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ClientsCarousel } from "@/components/ClientsCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ClientsCarousel />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
