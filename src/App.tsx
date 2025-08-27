import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ZionGallery from "./pages/ZionGallery";
import AboutUs from "./pages/AboutUs";
import LiciousProject from "./pages/LiciousProject";
import JubilantFoodworks from "./pages/JubilantFoodworks";
import CommercialResidential from "./pages/CommercialResidential";
import FnB from "./pages/FnB";
import Healthcare from "./pages/Healthcare";
import Industrial from "./pages/Industrial";

import Upcoming from "./pages/Upcoming";
import AllProjects from "./pages/AllProjects";
import ContactUs from "./pages/ContactUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/zion-gallery" element={<ZionGallery />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/licious-project" element={<LiciousProject />} />
          <Route path="/jubilant-foodworks" element={<JubilantFoodworks />} />
          <Route path="/commercial-residential" element={<CommercialResidential />} />
          <Route path="/f&b" element={<FnB />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/industrial" element={<Industrial />} />

          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/all-projects" element={<AllProjects />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTopButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
