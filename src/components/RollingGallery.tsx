import * as React from "react";
import { motion, useAnimation } from "framer-motion";

export function RollingGallery({
  images,
  speed = 40,
  pauseOnHover = false,
  className = "",
}: {
  images: string[];
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [preview, setPreview] = React.useState<string | null>(null);
  const controls = useAnimation();

  React.useEffect(() => {
    if (isHovered && pauseOnHover) {
      controls.stop();
    } else {
      controls.start({
        x: ["0%", "-100%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        },
      });
    }
  }, [isHovered, pauseOnHover, speed, controls]);

  // Duplicate images for seamless looping
  const galleryImages = [...images, ...images];

  // Modal close on ESC or click outside
  React.useEffect(() => {
    if (!preview) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreview(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [preview]);

  return (
    <>
      <div
        className={`relative w-full overflow-hidden ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ height: "50vh", minHeight: 220, maxHeight: 600 }}
      >
        <motion.div
          className="flex"
          animate={controls}
          initial={{ x: "0%" }}
          style={{ width: "max-content" }}
        >
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="mx-2 rounded-lg overflow-hidden shadow-md bg-card cursor-pointer"
              style={{ width: "auto", height: "100%", flex: "0 0 auto" }}
              onClick={() => setPreview(img)}
            >
              <img
                src={img}
                alt={`Gallery ${idx}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                draggable={false}
                style={{ height: "50vh", minHeight: 220, maxHeight: 600, aspectRatio: '1/1' }}
              />
            </div>
          ))}
        </motion.div>
      </div>
      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setPreview(null)}
        >
          <img
            src={preview}
            alt="Preview"
            className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl border-4 border-white"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute top-6 right-8 text-white text-4xl font-bold bg-black/40 rounded-full px-4 py-1 hover:bg-black/70 transition"
            onClick={() => setPreview(null)}
            aria-label="Close preview"
            style={{ zIndex: 51 }}
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
} 