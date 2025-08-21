import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, FileText, Building, Users, Home } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'section' | 'content';
  icon: React.ComponentType<any>;
}

const SearchModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Website content data for search
  const websiteContent: SearchResult[] = [
    // Home page sections
    {
      id: 'hero',
      title: 'Hero Section',
      description: 'Blending experience, innovation, and craftsmanship – we deliver precision metalwork with clean design, structural strength, and unmatched detail.',
      url: '/#hero',
      type: 'section',
      icon: Home
    },
    {
      id: 'about',
      title: 'About Us',
      description: 'Transcend Engineers brings together experience, innovation, and craftsmanship to deliver precision-driven metal fabrication solutions.',
      url: '/#about',
      type: 'section',
      icon: Users
    },
    {
      id: 'projects',
      title: 'Our Projects',
      description: 'Featured projects showcasing our metal fabrication expertise across various industries.',
      url: '/#projects',
      type: 'section',
      icon: Building
    },
    {
      id: 'clientele',
      title: 'Our Clientele',
      description: 'Trusted by leading companies across various industries for our metal fabrication services.',
      url: '/#clientele',
      type: 'section',
      icon: Users
    },
    {
      id: 'contact',
      title: 'Contact Us',
      description: 'Get in touch with us to discuss your project requirements and create something extraordinary together.',
      url: '/#contact',
      type: 'section',
      icon: Users
    },
    
    // Pages
    {
      id: 'about-us-page',
      title: 'About Us Page',
      description: 'Comprehensive information about Transcend Engineers, our services, and company overview.',
      url: '/about-us',
      type: 'page',
      icon: FileText
    },
    {
      id: 'all-projects',
      title: 'All Projects',
      description: 'Complete portfolio of all our metal fabrication projects across different industries.',
      url: '/all-projects',
      type: 'page',
      icon: Building
    },
    
    // Service categories
    {
      id: 'commercial-residential',
      title: 'Commercial & Residential',
      description: 'Metal fabrication services for commercial spaces and residential projects including clubhouses, canopies, skylights, and staircases.',
      url: '/commercial-residential',
      type: 'page',
      icon: Building
    },
    {
      id: 'f&b',
      title: 'F&B (Food & Beverage)',
      description: 'Commercial kitchens, workstations, storage units, and barbeque grills for food and beverage industry.',
      url: '/f&b',
      type: 'page',
      icon: Building
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      description: 'Medical furniture, wheelchairs, hospital beds, handrails, and storage solutions for healthcare facilities.',
      url: '/healthcare',
      type: 'page',
      icon: Building
    },
    {
      id: 'industrial',
      title: 'Industrial',
      description: 'Custom structures, sheds, and commercial kitchens for industrial applications.',
      url: '/industrial',
      type: 'page',
      icon: Building
    },
    {
      id: 'residential',
      title: 'Residential',
      description: 'Custom gates, staircases, balconies, railings, and outdoor furniture for residential projects.',
      url: '/residential',
      type: 'page',
      icon: Building
    },
    {
      id: 'upcoming',
      title: 'Upcoming Services',
      description: 'Prefabricated homes, cabins, portable structures, modular units, and RV trailers.',
      url: '/upcoming',
      type: 'page',
      icon: Building
    },
    
    // Project pages
    {
      id: 'licious-project',
      title: 'Licious Project',
      description: 'Detailed showcase of the Licious project with specifications, challenges, and results.',
      url: '/licious-project',
      type: 'page',
      icon: Building
    },
    {
      id: 'tikovina-project',
      title: 'Tikovina Project',
      description: 'Comprehensive overview of the Tikovina project including highlights and value propositions.',
      url: '/tikovina-project',
      type: 'page',
      icon: Building
    },
    {
      id: 'zion-gallery',
      title: 'Zion Gallery',
      description: 'Gallery showcasing the Zion project with detailed images and project information.',
      url: '/zion-gallery',
      type: 'page',
      icon: Building
    }
  ];

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim()) {
      performSearch(query);
    } else {
      setResults([]);
    }
  }, [query]);

  const performSearch = (searchQuery: string) => {
    setIsLoading(true);
    
    // Simulate search delay for better UX
    setTimeout(() => {
      const searchTerm = searchQuery.toLowerCase();
      const filteredResults = websiteContent.filter(item => 
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.type.toLowerCase().includes(searchTerm)
      );
      
      setResults(filteredResults);
      setIsLoading(false);
    }, 300);
  };

  const handleResultClick = (result: SearchResult) => {
    if (result.url.startsWith('/#')) {
      // Handle anchor links
      const path = result.url.split('#')[0];
      const section = result.url.split('#')[1];
      
      if (path === '/') {
        // Navigate to home and scroll to section
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      // Navigate to page
      navigate(result.url);
    }
    
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && results.length > 0) {
      e.preventDefault();
      handleResultClick(results[selectedIndex]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Search Modal */}
      <div className="relative w-full max-w-2xl mx-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search across the website..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full pl-12 pr-12 py-4 bg-white rounded-2xl shadow-2xl border-0 text-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <button
            onClick={onClose}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results */}
        {query.trim() && (
          <div className="mt-4 bg-white rounded-2xl shadow-2xl max-h-96 overflow-y-auto">
            {isLoading ? (
              <div className="p-6 text-center text-gray-500">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                Searching...
              </div>
            ) : results.length > 0 ? (
              <div className="py-2">
                {results.map((result, index) => (
                  <button
                    key={result.id}
                    onClick={() => handleResultClick(result)}
                    className={`w-full text-left p-4 hover:bg-gray-50 transition-colors ${
                      index === selectedIndex ? 'bg-gray-50' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <result.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <h3 className="text-sm font-semibold text-gray-900 truncate">
                            {result.title}
                          </h3>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            result.type === 'page' 
                              ? 'bg-blue-100 text-blue-800' 
                              : result.type === 'section'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-purple-100 text-purple-800'
                          }`}>
                            {result.type}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                          {result.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-6 text-center text-gray-500">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-lg font-medium">No results found</p>
                <p className="text-sm">Try searching with different keywords</p>
              </div>
            )}
          </div>
        )}

        {/* Search Tips */}
        {!query.trim() && (
          <div className="mt-4 bg-white rounded-2xl shadow-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Search Tips</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• Search for pages, sections, or content</p>
              <p>• Use keywords like "projects", "services", "contact"</p>
              <p>• Navigate to specific sections or pages</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
