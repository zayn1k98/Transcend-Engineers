import { Link, useLocation } from "react-router-dom";
import { Search, ChevronDown, ChevronUp, Building, Utensils, Heart, Factory, Home, Loader } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect, useRef } from "react";
import logoImg from "@/assets/logo.png";
import { useScrollToSection } from "../hooks/useScrollToSection";
import SearchModal from "./SearchModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVerticalsOpen, setIsVerticalsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const scrollToSection = useScrollToSection();
  const location = useLocation();
  const headerRef = useRef<HTMLDivElement>(null);

  const navigationItems = [
    { name: "Projects", href: "/#projects", hasDropdown: true, isAnchor: true, path: "/", pageHref: "/all-projects" },
    { name: "Verticals", href: "#", hasDropdown: true, isAnchor: false, path: "/" },
    { name: "About Us", href: "/about-us", hasDropdown: false, isAnchor: false, path: "/about-us" },
    { name: "Contact Us", href: "/contact-us", hasDropdown: false, isAnchor: false, path: "/contact-us" }
  ];

  const isActivePage = (item: any) => {
    // Don't show active state on home page
    if (location.pathname === "/") {
      return false;
    }
    
    if (item.name === "Verticals") {
      // Check if we're on any vertical page
      const verticalPages = [
        "/commercial-residential",
        "/f&b", 
        "/healthcare",
        "/industrial",

        "/upcoming"
      ];
      return verticalPages.includes(location.pathname);
    }
    return location.pathname === item.path;
  };

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setIsVerticalsOpen(false);
        setIsProjectsOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-4 left-4 right-4 z-50" ref={headerRef}>
      <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6">
          <div className="flex items-center justify-between py-3 xs:py-3.5 sm:py-4 relative">
            {/* Mobile Layout: Logo Left, Text Center, Menu Right */}
            <div className="sm:hidden flex items-center w-full relative">
              {/* Logo on Left */}
              <Link 
                to="/" 
                onClick={(e) => {
                  if (location.pathname === "/") {
                    e.preventDefault();
                    // If already on home page, scroll to top
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="flex items-center hover:opacity-80 transition-opacity z-10 flex-shrink-0"
              >
                <img src={logoImg} alt="Transcend Engineers Logo" className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 object-cover rounded-lg" />
              </Link>
              
              {/* Text in Center - Clickable link to homepage */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Link 
                  to="/" 
                  onClick={(e) => {
                    if (location.pathname === "/") {
                      e.preventDefault();
                      // If already on home page, scroll to top
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-white font-semibold text-xs xs:text-sm sm:text-base text-center leading-tight px-2 max-w-[140px] xs:max-w-[160px] sm:max-w-[180px] break-words hover:text-white/80 transition-colors duration-200"
                >
                  TRANSCEND ENGINEERS
                </Link>
              </div>
              
              {/* Menu on Right */}
              <div className="flex items-center space-x-1 xs:space-x-2 sm:space-x-3 ml-auto z-10 flex-shrink-0">
                {/* Search Icon */}
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="text-white/90 hover:text-white transition-colors p-1.5 xs:p-2 sm:p-2.5"
                >
                  <Search className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5" />
                </button>

                {/* Mobile Menu Button */}
                <button
                  className="text-white/90 hover:text-white transition-colors p-1.5 xs:p-2 sm:p-2.5"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle mobile menu"
                >
                  <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-6 sm:h-6 flex flex-col justify-center space-y-0.5 xs:space-y-1 sm:space-y-1">
                    <div className={`w-5 h-0.5 xs:w-6 xs:h-0.5 sm:w-6 sm:h-0.5 bg-current transition-all duration-200 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                    <div className={`w-5 h-0.5 xs:w-6 xs:h-0.5 bg-current transition-all duration-200 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-5 h-0.5 xs:w-6 xs:h-0.5 sm:w-6 sm:h-0.5 bg-current transition-all duration-200 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                  </div>
                </button>
              </div>
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden sm:block">
              <Link 
                to="/" 
                onClick={(e) => {
                  if (location.pathname === "/") {
                    e.preventDefault();
                    // If already on home page, scroll to top
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="flex items-center space-x-4 hover:opacity-80 transition-opacity"
              >
                <img src={logoImg} alt="Transcend Engineers Logo" className="w-12 h-12 object-cover rounded-lg" />
                <span className="text-white font-semibold text-lg">TRANSCEND ENGINEERS</span>
              </Link>
            </div>
          

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.isAnchor && location.pathname === "/" ? (
                  <button
                    onClick={() => {
                      const sectionId = item.href.split('#')[1];
                      scrollToSection(sectionId);
                    }}
                    className={`transition-all duration-300 font-medium flex items-center space-x-1 px-3 py-2 rounded-lg ${
                      isActivePage(item) 
                        ? 'text-white bg-white/20 shadow-lg backdrop-blur-md' 
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                    )}
                  </button>
                ) : (
                  item.name === "Contact Us" && item.isAnchor ? (
                    <Link
                      to="/"
                      onClick={(e) => {
                        e.preventDefault();
                        // Navigate to home page first, then scroll to contact section
                        if (location.pathname === "/") {
                          // If already on home page, just scroll to contact
                          const contactSection = document.getElementById('contact');
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        } else {
                          // If on another page, navigate to home then scroll to contact
                          window.location.href = "/#contact";
                        }
                      }}
                      className={`transition-all duration-300 font-medium flex items-center space-x-1 px-3 py-2 rounded-lg ${
                        isActivePage(item) 
                          ? 'text-white bg-white/20 shadow-lg backdrop-blur-md' 
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <ChevronDown className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                      )}
                    </Link>
                  ) : (
                    <Link
                      to={item.isAnchor && item.pageHref ? item.pageHref : item.href}
                      className={`transition-all duration-300 font-medium flex items-center space-x-1 px-3 py-2 rounded-lg ${
                        isActivePage(item) 
                          ? 'text-white bg-white/20 shadow-lg backdrop-blur-md' 
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <ChevronDown className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                      )}
                    </Link>
                  )
                )}
                {item.hasDropdown && item.name === "Verticals" && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-white/20">
                    <div className="py-2">
                      <Link to="/commercial-residential" className="block px-4 py-2 text-gray-800 hover:bg-[#14b8a6] hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg mx-2 hover:border hover:border-[#14b8a6] relative">
                        <span className="relative inline-block flex items-start gap-2">
                          <Building className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">Residential &<br />Commercial</span>
                        </span>
                      </Link>
                      <Link to="/f&b" className="block px-4 py-2 text-gray-800 hover:bg-[#14b8a6] hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg mx-2 hover:border hover:border-[#14b8a6] relative">
                        <span className="relative inline-block flex items-center gap-2 whitespace-nowrap">
                          <Utensils className="w-4 h-4 flex-shrink-0" />
                          F&B
                        </span>
                      </Link>
                      <Link to="/healthcare" className="block px-4 py-2 text-gray-800 hover:bg-[#14b8a6] hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg mx-2 hover:border hover:border-[#14b8a6] relative">
                        <span className="relative inline-block flex items-center gap-2 whitespace-nowrap">
                          <Heart className="w-4 h-4 flex-shrink-0" />
                          Healthcare
                        </span>
                      </Link>
                      <Link to="/industrial" className="block px-4 py-2 text-gray-800 hover:bg-[#14b8a6] hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg mx-2 hover:border hover:border-[#14b8a6] relative">
                        <span className="relative inline-block flex items-center gap-2 whitespace-nowrap">
                          <Factory className="w-4 h-4 flex-shrink-0" />
                          Industrial
                        </span>
                      </Link>

                      <Link to="/upcoming" className="block px-4 py-2 text-gray-800 hover:bg-[#14b8a6] hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg mx-2 hover:border hover:border-[#14b8a6] relative">
                        <span className="relative inline-block flex items-center gap-2 whitespace-nowrap">
                          <Loader className="w-4 h-4 flex-shrink-0" />
                          Upcoming
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
                {item.hasDropdown && item.name === "Projects" && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-white/20">
                    <div className="py-2">
                      <Link to="/zion-gallery" className="block px-4 py-2 text-gray-800 hover:bg-[#14b8a6] hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg mx-2 hover:border hover:border-[#14b8a6] relative">
                        <span className="relative inline-block">
                          Zion Hills
                        </span>
                      </Link>
                      <Link to="/licious-project" className="block px-4 py-2 text-gray-800 hover:bg-[#14b8a6] hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg mx-2 hover:border hover:border-[#14b8a6] relative">
                        <span className="relative inline-block">
                          Licious
                        </span>
                      </Link>
                      <Link to="/jubilant-foodworks" className="block px-4 py-2 text-gray-800 hover:bg-[#14b8a6] hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg mx-2 hover:border hover:border-[#14b8a6] relative">
                        <span className="relative inline-block">
                          Jubilant Foodworks
                        </span>
                      </Link>
                      <Link to="/all-projects" className="block px-4 py-2 text-gray-800 hover:bg-[#14b8a6] hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg mx-2 hover:border hover:border-[#14b8a6] relative">
                        <span className="relative inline-block">
                          View All Projects
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Search and Menu */}
          <div className="hidden sm:flex items-center space-x-4 ml-auto">
            {/* Search Icon */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-white/90 hover:text-white transition-colors p-2"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/20 backdrop-blur-md rounded-b-2xl">
            <nav className="py-3 xs:py-4 sm:py-5 space-y-1 xs:space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown && item.name === "Verticals" ? (
                    <div className="space-y-1">
                      <button
                        onClick={() => setIsVerticalsOpen(!isVerticalsOpen)}
                        className="w-full flex items-center justify-between px-4 xs:px-5 sm:px-6 py-3 xs:py-3.5 sm:py-4 text-white/90 hover:text-white hover:bg-white/10 transition-colors font-medium text-base xs:text-lg sm:text-lg"
                      >
                        <span>{item.name}</span>
                        {isVerticalsOpen ? (
                          <ChevronUp className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5" />
                        ) : (
                          <ChevronDown className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5" />
                        )}
                      </button>
                      {isVerticalsOpen && (
                        <div className="pl-4 xs:pl-6 sm:pl-8 space-y-1 xs:space-y-1.5">
                          <Link
                            to="/commercial-residential"
                            className="block px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 sm:py-3.5 text-white/70 hover:text-white hover:bg-[#14b8a6] transition-colors text-sm xs:text-base sm:text-base relative"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span className="relative inline-block flex items-start gap-2">
                              <Building className="w-4 h-4 flex-shrink-0 mt-0.5" />
                              <span className="leading-tight">Residential &<br />Commercial</span>
                            </span>
                          </Link>
                          <Link
                            to="/f&b"
                            className="block px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 sm:py-3.5 text-white/70 hover:text-white hover:bg-[#14b8a6] transition-colors text-sm xs:text-base sm:text-base relative"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span className="relative inline-block flex items-center gap-2 whitespace-nowrap">
                              <Utensils className="w-4 h-4 flex-shrink-0" />
                              F&B
                            </span>
                          </Link>
                          <Link
                            to="/healthcare"
                            className="block px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 sm:py-3.5 text-white/70 hover:text-white hover:bg-[#14b8a6] transition-colors text-sm xs:text-base sm:text-base relative"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span className="relative inline-block flex items-center gap-2 whitespace-nowrap">
                              <Heart className="w-4 h-4 flex-shrink-0" />
                              Healthcare
                            </span>
                          </Link>
                          <Link
                            to="/industrial"
                            className="block px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 sm:py-3.5 text-white/70 hover:text-white hover:bg-[#14b8a6] transition-colors text-sm xs:text-base sm:text-base relative"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span className="relative inline-block flex items-center gap-2 whitespace-nowrap">
                              <Factory className="w-4 h-4 flex-shrink-0" />
                              Industrial
                            </span>
                          </Link>

                          <Link
                            to="/upcoming"
                            className="block px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 sm:py-3.5 text-white/70 hover:text-white hover:bg-[#14b8a6] transition-colors text-sm xs:text-base sm:text-base relative"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span className="relative inline-block flex items-center gap-2 whitespace-nowrap">
                              <Loader className="w-4 h-4 flex-shrink-0" />
                              Upcoming
                            </span>
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : item.hasDropdown && item.name === "Projects" ? (
                    <div className="space-y-1">
                      <button
                        onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                        className="w-full flex items-center justify-between px-4 xs:px-5 sm:px-6 py-3 xs:py-3.5 sm:py-4 text-white/90 hover:text-white hover:bg-white/10 transition-colors font-medium text-base xs:text-lg sm:text-lg"
                      >
                        <span>{item.name}</span>
                        {isProjectsOpen ? (
                          <ChevronUp className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5" />
                        ) : (
                          <ChevronDown className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5" />
                        )}
                      </button>
                      {isProjectsOpen && (
                        <div className="pl-4 xs:pl-6 sm:pl-8 space-y-1 xs:space-y-1.5">
                          <Link
                            to="/zion-gallery"
                            className="block px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 sm:py-3.5 text-white/70 hover:text-white hover:bg-[#14b8a6] transition-colors text-sm xs:text-base sm:text-base relative"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span className="relative inline-block">
                              Zion Hills
                            </span>
                          </Link>
                          <Link
                            to="/licious-project"
                            className="block px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 sm:py-3.5 text-white/70 hover:text-white hover:bg-[#14b8a6] transition-colors text-sm xs:text-base sm:text-base relative"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span className="relative inline-block">
                              Licious
                            </span>
                          </Link>
                          <Link
                            to="/jubilant-foodworks"
                            className="block px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 sm:py-3.5 text-white/70 hover:text-white hover:bg-[#14b8a6] transition-colors text-sm xs:text-base sm:text-base relative"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span className="relative inline-block">
                              Jubilant Foodworks
                            </span>
                          </Link>
                          <Link
                            to="/all-projects"
                            className="block px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 sm:py-3.5 text-white/70 hover:text-white hover:bg-[#14b8a6] transition-colors text-sm xs:text-base sm:text-base relative"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span className="relative inline-block">
                              View All Projects
                            </span>
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    item.isAnchor && location.pathname === "/" ? (
                      <button
                        onClick={() => {
                          const sectionId = item.href.split('#')[1];
                          scrollToSection(sectionId);
                          setIsMenuOpen(false);
                        }}
                        className={`block w-full text-left px-4 xs:px-5 sm:px-6 py-3 xs:py-3.5 sm:py-4 transition-all duration-300 font-medium rounded-lg mx-2 text-base xs:text-lg sm:text-lg ${
                          isActivePage(item) 
                            ? 'text-white bg-white/20 shadow-lg' 
                            : 'text-white/90 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {item.name}
                      </button>
                    ) : (
                      item.name === "Contact Us" && item.isAnchor ? (
                        <Link
                          to="/"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsMenuOpen(false);
                            // Navigate to home page first, then scroll to contact section
                            if (location.pathname === "/") {
                              // If already on home page, just scroll to contact
                              const contactSection = document.getElementById('contact');
                              if (contactSection) {
                                contactSection.scrollIntoView({ behavior: 'smooth' });
                              }
                            } else {
                              // If on another page, navigate to home then scroll to contact
                              window.location.href = "/#contact";
                            }
                          }}
                          className={`block px-4 xs:px-5 sm:px-6 py-3 xs:py-3.5 sm:py-4 transition-all duration-300 font-medium rounded-lg mx-2 text-base xs:text-lg sm:text-lg ${
                            isActivePage(item) 
                              ? 'text-white bg-white/20 shadow-lg' 
                              : 'text-white/90 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <Link
                          to={item.isAnchor && item.pageHref ? item.pageHref : item.href}
                          className={`block px-4 xs:px-5 sm:px-6 py-3 xs:py-3.5 sm:py-4 transition-all duration-300 font-medium rounded-lg mx-2 text-base xs:text-lg sm:text-lg ${
                            isActivePage(item) 
                              ? 'text-white bg-white/20 shadow-lg' 
                              : 'text-white/90 hover:text-white hover:bg-white/10'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )
                    )
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
        </div>
      </div>
      
      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </header>
  );
};

export default Header; 