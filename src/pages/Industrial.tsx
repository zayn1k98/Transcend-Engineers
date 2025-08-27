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
import industrial1 from "@/assets/Industrial/1.jpg";
import industrial3 from "@/assets/Industrial/3.jpg";
import industrial4 from "@/assets/Industrial/4.jpg";

const Industrial = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselApi, setCarouselApi] = useState<any>(null);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const navigate = useNavigate();
  const scrollToSection = useScrollToSection();

  // Industrial media items
  const mediaItems = [
    {
      type: "image",
      src: industrial1,
      alt: "Industrial Manufacturing Equipment"
    },
    {
      type: "image",
      src: industrial3,
      alt: "Industrial Infrastructure"
    },
    {
      type: "image",
      src: industrial4,
      alt: "Custom Industrial Machinery"
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
          {/* Title */}
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-black text-center break-words px-4">
              Industrial
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
                    {item.type === "video" ? (
                      <div className="relative w-full h-full group flex items-center justify-center">
                        <video
                          ref={(el) => {
                            if (el) {
                              setVideoRef(el);
                              el.muted = isMuted;
                            }
                          }}
                          className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                          poster={item.thumbnail}
                          loop
                          muted={isMuted}
                          autoPlay
                          onPlay={() => setIsPlaying(true)}
                          onPause={() => setIsPlaying(false)}
                        >
                          <source src={item.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        
                        {/* Video Controls Overlay */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={isPlaying ? handleVideoPlayPause : handleVideoResume}
                              className="text-white hover:bg-white/20"
                            >
                              {isPlaying ? (
                                <Pause className="w-5 h-5" />
                              ) : (
                                <Play className="w-5 h-5" />
                              )}
                            </Button>
                            
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={handleVideoMute}
                              className="text-white hover:bg-white/20"
                            >
                              {isMuted ? (
                                <VolumeX className="w-5 h-5" />
                              ) : (
                                <Volume2 className="w-5 h-5" />
                              )}
                            </Button>

                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={enterFullscreen}
                              className="text-white hover:bg-white/20"
                              title="Enter Fullscreen"
                            >
                              <Maximize2 className="w-5 h-5" />
                            </Button>
              </div>
            </div>
          </div>
                    ) : (
                      <div className="relative w-full h-full group flex items-center justify-center">
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
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
                {item.type === "video" ? (
                  <div className="w-full h-full bg-black/50 flex items-center justify-center">
                    <Play className="w-4 h-4 text-white" />
            </div>
                ) : (
                  <img
                    src={item.src}
                    alt={`Thumbnail ${index}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Location: Industrial Facilities
          </Badge>
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Year: 2024
          </Badge>
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Type: Industrial Structures
          </Badge>
        </div>

        {/* Project Description */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl mb-6 text-foreground">
            Project Overview
              </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Our industrial metalwork solutions are designed to meet the demanding requirements 
            of manufacturing and production environments. We specialize in creating robust, 
            durable structures that enhance operational efficiency and ensure long-term reliability.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-card p-6 rounded-xl border border-accent/20">
              <h3 className="mb-3 text-foreground">Manufacturing Excellence</h3>
              <p className="text-muted-foreground">
                Heavy-duty metal fabrication techniques ensuring structural integrity and long-term durability for industrial manufacturing processes.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-accent/20">
              <h3 className="mb-3 text-foreground">Infrastructure Solutions</h3>
              <p className="text-muted-foreground">
                Comprehensive structural metalwork solutions for industrial facilities including support structures, platforms, and storage systems.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-accent/20">
              <h3 className="mb-3 text-foreground">Custom Machinery</h3>
              <p className="text-muted-foreground">
                Specialized metal fabrication for custom industrial machinery and equipment, delivering precision-engineered solutions for various sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industrial; 