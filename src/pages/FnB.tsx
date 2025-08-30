import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, Volume2, VolumeX, Maximize2, Utensils, Coffee, ChefHat, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { useScrollToSection } from "@/hooks/useScrollToSection";

// F&B assets
import fnb1 from "@/assets/F&B/1.jpg";
import fnb2 from "@/assets/F&B/20220303_150910.jpg";
import fnb3 from "@/assets/F&B/3.jpg";
import fnb4 from "@/assets/F&B/4.jpg";
import bigKit from "@/assets/F&B/Big Kit-Photoroom.jpg";
import kitImg from "@/assets/F&B/IMG-20220728-WA0056.jpg";
import kitBlackSlab from "@/assets/F&B/Kit_blackslab-Photoroom_1.jpg";
import trayRackTrolleys from "@/assets/F&B/Tray Rack Trolleys.jpg";
import trolleys from "@/assets/F&B/Trolleys.jpg";

const FnB = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselApi, setCarouselApi] = useState<any>(null);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const navigate = useNavigate();
  const scrollToSection = useScrollToSection();

  // F&B media items
  const mediaItems = [
    {
      type: "image",
      src: trolleys,
      alt: "Trolleys"
    },
    {
      type: "image",
      src: fnb1,
      alt: "F&B Equipment Setup"
    },
    {
      type: "image",
      src: fnb2,
      alt: "Commercial Kitchen Equipment"
    },
    {
      type: "image",
      src: fnb3,
      alt: "Food Processing Equipment"
    },
    {
      type: "image",
      src: fnb4,
      alt: "Restaurant Equipment"
    },
    {
      type: "image",
      src: bigKit,
      alt: "Large Kitchen Setup"
    },
    {
      type: "image",
      src: kitImg,
      alt: "Kitchen Installation"
    },
    {
      type: "image",
      src: kitBlackSlab,
      alt: "Kitchen Black Slab"
    },
    {
      type: "image",
      src: trayRackTrolleys,
      alt: "Tray Rack Trolleys"
    }
  ];

  const handleVideoPlayPause = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      enterFullscreen();
    } else {
      setIsPlaying(false);
      exitFullscreen();
    }
  };

  const handleVideoResume = () => {
    setIsPlaying(true);
    enterFullscreen();
  };

  const handleVideoMute = () => {
    setIsMuted(!isMuted);
  };

  const enterFullscreen = async () => {
    if (videoRef && !isFullscreen) {
      try {
        if (videoRef.requestFullscreen) {
          await videoRef.requestFullscreen();
        } else if ((videoRef as any).webkitRequestFullscreen) {
          await (videoRef as any).webkitRequestFullscreen();
        } else if ((videoRef as any).msRequestFullscreen) {
          await (videoRef as any).msRequestFullscreen();
        }
        setIsFullscreen(true);
      } catch (error) {
        console.error('Error entering fullscreen:', error);
      }
    }
  };

  const exitFullscreen = async () => {
    if (isFullscreen) {
      try {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        } else if ((document as any).msExitFullscreen) {
          await (document as any).msExitFullscreen();
        }
        setIsFullscreen(false);
      } catch (error) {
        console.error('Error exiting fullscreen:', error);
      }
    }
  };

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      const index = carouselApi.selectedScrollSnap();
      handleSlideChange(index);
    };

    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).msFullscreenElement
      );
      
      if (!isCurrentlyFullscreen && isFullscreen) {
        setIsFullscreen(false);
        setIsPlaying(false);
        if (videoRef) {
          videoRef.pause();
        }
      } else if (isCurrentlyFullscreen && !isFullscreen) {
        setIsFullscreen(true);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, [isFullscreen, videoRef]);

  useEffect(() => {
    if (videoRef) {
      if (isPlaying) {
        videoRef.play().catch(error => {
          console.error('Error playing video:', error);
          setIsPlaying(false);
        });
      } else {
        videoRef.pause();
      }
    }
  }, [isPlaying, videoRef]);

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
      <div className="max-w-6xl mx-auto px-4 pt-32 pb-12">
        {/* Header */}
        <div className="mb-12">
          {/* Title */}
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-black text-center break-words px-4">
              Food & Beverage
            </h1>
          </div>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={setCarouselApi}
          >
            <CarouselContent className="h-[600px] md:h-[700px]">
              {mediaItems.map((item, index) => (
                <CarouselItem key={index} className="relative">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="relative w-full h-full group flex items-center justify-center">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-3">
            {mediaItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  if (carouselApi) {
                    carouselApi.scrollTo(index);
                  }
                }}
                className={`w-16 h-12 rounded-lg overflow-hidden transition-all duration-300 border-2 ${
                  index === currentSlide
                    ? "border-primary scale-110 shadow-lg"
                    : "border-muted-foreground/30 hover:border-muted-foreground/50 hover:scale-105"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <img
                  src={item.src}
                  alt={`Thumbnail ${index}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Location: Food & Beverage
          </Badge>
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Year: 2022-2024
          </Badge>
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Type: Commercial Kitchen Equipment
          </Badge>
        </div>

        {/* Our Services Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl mb-6 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Specialized metalwork solutions designed specifically for food and beverage operations, 
            ensuring hygiene, durability, and operational efficiency.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {services.map((service, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-accent/20">
                <h3 className="mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-muted-foreground text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FnB; 