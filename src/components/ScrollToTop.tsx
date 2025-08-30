import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // Use 'auto' instead of 'smooth' for instant scroll
    });
    
    // Also scroll to top after a brief delay to handle any async content loading
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
