import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // State for Desktop Dropdown
  const [videoServicesOpen, setVideoServicesOpen] = useState(false);
  // Separate State for Mobile Dropdown to prevent conflicts
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const videoServices = [
    { name: "YouTube Shorts", path: "/services/youtube-shorts" },
    { name: "TikTok Videos", path: "/services/tiktok-videos" },
    { name: "Instagram Reels", path: "/services/instagram-reels" },
    { name: "Cash Cow Channels", path: "/services/cash-cow-channels" },
    { name: "Magnates Media Style", path: "/services/magnates-media-style" },
    { name: "Documentary Style", path: "/services/documentary-style" },
    { name: "Faceless Videos", path: "/services/faceless-videos" },
    { name: "Thumbnails", path: "/services/thumbnails" },
    { name: "Motion Graphics", path: "/services/motion-graphics" },
  ];

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 nav-blur border-b border-neutral-200 osmo-bg">
      {/* Gradient Mesh Background */}
      <div className="gradient-mesh"></div>
      
      {/* Advanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="osmo-floating top-2 left-4 w-6 h-6 border border-red-600/10 rounded-full magnetic-element"></div>
        <div className="osmo-floating top-3 right-8 w-8 h-8 bg-red-600/06 rounded-lg magnetic-element"></div>
        <div className="osmo-floating bottom-2 left-1/3 w-4 h-4 border border-red-600/12 rounded-full magnetic-element"></div>
        <div className="osmo-floating bottom-1 right-1/4 w-6 h-6 bg-red-600/08 rounded-lg magnetic-element"></div>
        
        {/* Advanced Particles */}
        <div className="osmo-particle" style={{left: '20%', animationDelay: '1s'}}></div>
        <div className="osmo-particle" style={{left: '40%', animationDelay: '3s'}}></div>
        <div className="osmo-particle" style={{left: '60%', animationDelay: '5s'}}></div>
        <div className="osmo-particle" style={{left: '80%', animationDelay: '7s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 relative z-10 overflow-visible">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 animate-fade-in">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3" onClick={() => setMobileOpen(false)}>
              <img
                src="/ascets/logo.png"
                alt="Black Cord Production logo"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                onError={(e) => {
                  console.error("Logo failed to load");
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="relative">
                <h1 className="text-lg sm:text-2xl font-bold tracking-tight text-black">
                  Black Cord
                </h1>
                <div className="absolute -top-1 -right-6 sm:-right-8 text-[10px] sm:text-xs text-neutral-500 font-medium">
                  PRODUCTION
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 animate-slide-in-left flex-1 justify-center max-w-2xl relative">
            <Link to="/" className="font-medium text-black no-underline hover:text-red-600 transition-colors interactive-glow text-sm lg:text-base">
              Home
            </Link>
            <Link to="/portfolio" className="font-medium text-black no-underline hover:text-red-600 transition-colors interactive-glow text-sm lg:text-base">
              Portfolio
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => {
                if (hoverTimeout) {
                  clearTimeout(hoverTimeout);
                  setHoverTimeout(null);
                }
                setVideoServicesOpen(true);
              }}
              onMouseLeave={() => {
                const timeout = setTimeout(() => {
                  setVideoServicesOpen(false);
                }, 150);
                setHoverTimeout(timeout);
              }}
            >
              <button 
                onClick={() => setVideoServicesOpen(!videoServicesOpen)}
                className="font-medium text-black hover:text-red-600 transition-colors interactive-glow text-sm lg:text-base flex items-center gap-1"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${videoServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {videoServicesOpen && (
                <div className="services-dropdown absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-neutral-200 py-2 z-[100] animate-slide-down"
                    onMouseEnter={() => {
                      if (hoverTimeout) {
                        clearTimeout(hoverTimeout);
                        setHoverTimeout(null);
                      }
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => {
                        setVideoServicesOpen(false);
                      }, 150);
                      setHoverTimeout(timeout);
                    }}>
                  {videoServices.map((service, index) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-neutral-700 hover:text-red-600 hover:bg-red-50 transition-colors duration-200 rounded-md mx-1"
                      style={{ animationDelay: `${index * 0.05}s` }}
                      onClick={() => setVideoServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/contact" className="font-medium text-black no-underline hover:text-red-600 transition-colors interactive-glow text-sm lg:text-base">
              Contact
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3 xl:space-x-4 animate-slide-in-right flex-shrink-0">
            <Link
              to="/start-project"
              className="no-underline px-3 lg:px-4 py-2 rounded-md font-semibold bg-red-600 text-white hover:bg-black transition-colors interactive-glow text-sm lg:text-base"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-black hover:bg-neutral-100 focus:bg-transparent active:bg-transparent w-11 h-11"
            >
              {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 fixed top-full left-0 right-0 z-50 shadow-xl max-h-[calc(100vh-100%)] overflow-y-auto animate-slide-down">
          <div className="flex flex-col items-start space-y-1 px-4 sm:px-6 py-4 bg-white/95 backdrop-blur-md">
            <Link 
              to="/" 
              onClick={() => setMobileOpen(false)} 
              className="text-neutral-900 font-medium no-underline hover:text-red-600 transition-colors w-full py-2.5 text-base border-b border-neutral-100/50"
            >
              Home
            </Link>
            <Link 
              to="/portfolio" 
              onClick={() => setMobileOpen(false)} 
              className="text-neutral-900 font-medium no-underline hover:text-red-600 transition-colors w-full py-2.5 text-base border-b border-neutral-100/50"
            >
              Portfolio
            </Link>
            
            {/* Services Mobile Dropdown */}
            <div className="w-full border-b border-neutral-100/50">
              <button 
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full py-2.5 text-base font-medium text-neutral-900 hover:text-red-600 transition-colors duration-200"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-red-600' : ''}`} />
              </button>
              
              {mobileServicesOpen && (
                <div className="pl-3 mb-2 space-y-0.5 bg-neutral-50 rounded-lg p-1 animate-slide-down">
                  {videoServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className="block py-2 px-3 text-sm font-medium text-neutral-600 hover:text-red-600 hover:bg-white rounded-md transition-all duration-150"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* PRICING LINK REMOVED */}
            <Link 
              to="/contact" 
              onClick={() => setMobileOpen(false)} 
              className="text-neutral-900 font-medium no-underline hover:text-red-600 transition-colors w-full py-2.5 text-base"
            >
              Contact
            </Link>
            
            <div className="w-full pt-4 mt-2">
              <Link
                to="/start-project"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-4 py-3 rounded-md font-semibold bg-red-600 text-white hover:bg-black transition-all duration-200 active:scale-[0.98] shadow-md shadow-red-600/10"
              >
                Start Project
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;