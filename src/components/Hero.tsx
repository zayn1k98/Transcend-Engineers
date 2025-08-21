import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero.jpg";
import Header from "./Header";

const Hero = () => {

  return (
    <section id="hero" className="relative min-h-[48vh] sm:h-[60vh] overflow-hidden">
      {/* Header */}
      <Header />
      
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-[48vh] sm:min-h-[60vh] pt-40 sm:pt-32 pb-8 sm:pb-20">
        {/* Centered Content */}
        <div className="max-w-4xl mx-auto px-6 w-full">
          <div className="text-center text-white space-y-8">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white/90 leading-relaxed max-w-3xl mx-auto">
              Blending experience, innovation, and craftsmanship – we deliver precision metalwork with clean design, structural strength, and unmatched detail.
            </p>
            
            <div className="space-y-4">
              <Button
                variant="outline"
                size="lg"
                className="bg-black text-white border-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 text-lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore More
              </Button>
              
              {/* Scroll Indicator */}
              <div className="animate-bounce">
                <ChevronDown className="w-8 h-8 text-white mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;