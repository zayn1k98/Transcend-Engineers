import * as React from "react";
import { motion, useAnimation } from "framer-motion";

// Dynamically import all client images
const images = import.meta.glob("../assets/clients/*.{jpg,png}", { eager: true, as: 'url' });
const clientImages = Object.values(images) as string[];

export const ClientsCarousel = ({ speed = 120 }: { speed?: number }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const controls = useAnimation();

  React.useEffect(() => {
    if (isHovered) {
      controls.stop();
    } else {
      controls.start({
        x: ["0%", "-200%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed * 2,
            ease: "linear",
          },
        },
      });
    }
  }, [isHovered, speed, controls]);

  // Duplicate images multiple times for seamless looping
  const carouselImages = [...clientImages, ...clientImages, ...clientImages, ...clientImages];

  return (
    <div
      className="relative w-full overflow-hidden py-8 bg-background"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ minHeight: 100 }}
    >
      {/* Clientele Title */}
      <div className="container mx-auto px-6 mb-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-glow">Our</span>
            <span className="gradient-title ml-4">Clientele</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading companies across various industries
          </p>
        </div>
      </div>
      <motion.div
        className="flex items-center"
        animate={controls}
        initial={{ x: "0%" }}
        style={{ width: "max-content" }}
      >
        {carouselImages.map((img, idx) => (
          <div
            key={idx}
            className="mx-8 flex-shrink-0 flex items-center justify-center group bg-white rounded-lg shadow-sm"
            style={{ width: 140, height: 120 }}
          >
            <img
              src={img}
              alt={`Client ${idx}`}
              className="max-h-20 max-w-[110px] object-contain transition duration-300"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}; 