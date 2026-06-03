import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Pages
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
// import ClientLogin from "./pages/ClientLogin";
import StartProject from "./pages/StartProject";

// Service Pages
import YouTubeShorts from "./pages/services/YouTubeShorts";
import TikTokVideos from "./pages/services/TikTokVideos";
import InstagramReels from "./pages/services/InstagramReels";
import CashCowChannels from "./pages/services/CashCowChannels";
import MagnatesMediaStyle from "./pages/services/MagnatesMediaStyle";
import DocumentaryStyle from "./pages/services/DocumentaryStyle";
import FacelessVideos from "./pages/services/FacelessVideos";
import Thumbnails from "./pages/services/Thumbnails";
import MotionGraphics from "./pages/services/MotionGraphics";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="dark min-h-screen bg-background flex flex-col overflow-x-hidden w-full">
          <Navigation />
          <Toaster />
          <Sonner />

          <main className="flex-1 w-full overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/start-project" element={<StartProject />} />

              {/* Service Routes */}
              <Route path="/services/youtube-shorts" element={<YouTubeShorts />} />
              <Route path="/services/tiktok-videos" element={<TikTokVideos />} />
              <Route path="/services/instagram-reels" element={<InstagramReels />} />
              <Route path="/services/cash-cow-channels" element={<CashCowChannels />} />
              <Route path="/services/magnates-media-style" element={<MagnatesMediaStyle />} />
              <Route path="/services/documentary-style" element={<DocumentaryStyle />} />
              <Route path="/services/faceless-videos" element={<FacelessVideos />} />
              <Route path="/services/thumbnails" element={<Thumbnails />} />
              <Route path="/services/motion-graphics" element={<MotionGraphics />} />

              {/* Fallback */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
