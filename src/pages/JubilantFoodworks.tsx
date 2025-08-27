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
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const JubilantFoodworks = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselApi, setCarouselApi] = useState<any>(null);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const navigate = useNavigate();
  const scrollToSection = useScrollToSection();

  // Placeholder media items - you can replace these with actual assets later
  const mediaItems = [
    {
      type: "image",
      src: "/placeholder-project.jpg",
      alt: "Jubilant Foodworks - Food Processing Facility"
    },
    {
      type: "image",
      src: "/placeholder-project.jpg",
      alt: "Jubilant Foodworks - Industrial Equipment"
    },
    {
      type: "image",
      src: "/placeholder-project.jpg",
      alt: "Jubilant Foodworks - Facility Overview"
    },
    {
      type: "image",
      src: "/placeholder-project.jpg",
      alt: "Jubilant Foodworks - Processing Units"
    },
    {
      type: "image",
      src: "/placeholder-project.jpg",
      alt: "Jubilant Foodworks - Quality Control"
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-6xl mx-auto px-4 pt-32 pb-12">
        {/* Header */}
        <div className="mb-12">
          {/* Top Row: Back Button and Title */}
          <div className="flex items-center justify-between mb-6">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  scrollToSection('projects');
                }, 100);
              }}
              className="flex items-center gap-2 text-sm px-3 py-2"
            >
              ← Projects
            </Button>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center flex-1 break-words px-4">
              Jubilant
            </h1>
            <div className="w-32"></div> {/* Spacer for balance */}
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
            Location: Bangalore, Karnataka
          </Badge>
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Year: 2022
          </Badge>
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Type: Food Processing Facility
          </Badge>
        </div>

        {/* Project Description */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6 text-foreground">
            Project Overview
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            The Jubilant Foodworks project represents a significant milestone in our industrial engineering portfolio. 
            This state-of-the-art food processing facility showcases our expertise in designing and implementing 
            complex industrial structures that meet the highest standards of food safety and operational efficiency.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-card p-6 rounded-xl border border-accent/20">
              <h3 className="font-semibold mb-3 text-foreground">Advanced Processing</h3>
              <p className="text-muted-foreground">
                State-of-the-art food processing equipment integration with automated workflow systems for maximum efficiency.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-accent/20">
              <h3 className="font-semibold mb-3 text-foreground">Hygiene Standards</h3>
              <p className="text-muted-foreground">
                Food-grade construction with hygienic design compliant with international food safety standards and regulations.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-accent/20">
              <h3 className="font-semibold mb-3 text-foreground">Sustainable Design</h3>
              <p className="text-muted-foreground">
                Eco-friendly facility design with energy-efficient systems and sustainable resource management solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JubilantFoodworks;
