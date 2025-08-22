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
import { Link } from "react-router-dom";

// Import assets properly
import zionVideo from "@/assets/zion/zion-assets/zionhills.mp4";
import zionMain from "@/assets/zion/zion-main.avif";
import zionImage1 from "@/assets/zion/zion-assets/PXL_20240922_143018728.MV.jpg";
import zionImage2 from "@/assets/zion/zion-assets/IMG-20231117-WA0027.jpg";
import zionImage3 from "@/assets/zion/zion-assets/IMG-20231117-WA0066.jpg";
import zionImage4 from "@/assets/zion/zion-assets/IMG-20231117-WA0022.jpg";
import zionImage5 from "@/assets/zion/zion-assets/IMG-20231117-WA0017.jpg";

const ZionGallery = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselApi, setCarouselApi] = useState<any>(null);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Media items in order: video first, then images
  const mediaItems = [
    {
      type: "video",
      src: zionVideo,
      alt: "Zion Hills Video",
      thumbnail: zionMain
    },
    {
      type: "image",
      src: zionImage1,
      alt: "Zion Hills - Modern Architecture"
    },
    {
      type: "image",
      src: zionImage2,
      alt: "Zion Hills - Steel Structure"
    },
    {
      type: "image",
      src: zionImage3,
      alt: "Zion Hills - Skylight Design"
    },
    {
      type: "image",
      src: zionImage4,
      alt: "Zion Hills - Roof Structure"
    },
    {
      type: "image",
      src: zionImage5,
      alt: "Zion Hills - Construction Progress"
    }
  ];

  const handleVideoPlayPause = () => {
    if (!isPlaying) {
      // When starting to play, enter fullscreen
      setIsPlaying(true);
      enterFullscreen();
    } else {
      // When pausing, exit fullscreen
      setIsPlaying(false);
      exitFullscreen();
    }
  };

  const handleVideoResume = () => {
    // When resuming video, automatically enter fullscreen
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
    // Pause video when switching away from it
    if (index !== 0) {
      setIsPlaying(false);
    }
  };

  // Listen to carousel slide changes
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

  // Listen to fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).msFullscreenElement
      );
      
      if (!isCurrentlyFullscreen && isFullscreen) {
        // User exited fullscreen, pause video
        setIsFullscreen(false);
        setIsPlaying(false);
        if (videoRef) {
          videoRef.pause();
        }
      } else if (isCurrentlyFullscreen && !isFullscreen) {
        // User entered fullscreen
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

  // Handle video play/pause when state changes
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
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-title">
            Zion Hills Project
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Modern steel roof structure with innovative skylight design for enhanced natural lighting
          </p>
          
          {/* Project Details */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Location: Kolar, Bangalore
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Year: 2023
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Type: Roof Structures & Skylights
            </Badge>
          </div>

          {/* Back to Projects */}
          <Link to="/#projects">
            <Button variant="outline" className="mb-8">
              ← Back to Projects
            </Button>
          </Link>
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

                        {/* Video Indicator */}
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary/90 text-white">
                            <Play className="w-3 h-3 mr-1" />
                            Video
                          </Badge>
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full h-full group flex items-center justify-center">
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                        />
                        
                        {/* Image Info Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                          <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-white text-xl font-semibold mb-2">
                              {item.alt}
                            </h3>
                            <p className="text-white/80 text-sm">
                              Zion Hills Project - {index} of {mediaItems.length - 1}
                            </p>
                          </div>
                        </div>
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
                  <div className="w-full h-full bg-muted-foreground/20 flex items-center justify-center">
                    <Play className="w-4 h-4 text-muted-foreground" />
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

        {/* Project Description */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6 text-foreground">
            Project Overview
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            The Zion Hills project represents a breakthrough in modern architectural design, 
            featuring an innovative steel roof structure with strategically placed skylights. 
            This design not only enhances the aesthetic appeal of the building but also 
            maximizes natural lighting, creating a more sustainable and energy-efficient space.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-card p-6 rounded-xl border border-accent/20">
              <h3 className="font-semibold mb-3 text-foreground">Innovation</h3>
              <p className="text-muted-foreground">
                Advanced steel fabrication techniques and precision engineering for optimal structural integrity.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-accent/20">
              <h3 className="font-semibold mb-3 text-foreground">Sustainability</h3>
              <p className="text-muted-foreground">
                Natural lighting optimization reduces energy consumption while maintaining visual comfort.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-accent/20">
              <h3 className="font-semibold mb-3 text-foreground">Quality</h3>
              <p className="text-muted-foreground">
                Premium materials and expert craftsmanship ensure long-term durability and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZionGallery; 