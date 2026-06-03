import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const categories = [
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

const Sidebar = () => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-[73px] h-[calc(100vh-73px)] w-64 bg-white/90 backdrop-blur-sm border-r border-neutral-200 z-40 animate-slide-in-left osmo-bg">
        {/* Gradient Mesh Background */}
        <div className="gradient-mesh"></div>
        
        {/* Advanced Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="osmo-floating top-4 left-4 w-6 h-6 border border-red-600/10 rounded-full magnetic-element"></div>
          <div className="osmo-floating top-8 right-6 w-8 h-8 bg-red-600/06 rounded-lg magnetic-element"></div>
          <div className="osmo-floating bottom-12 left-6 w-4 h-4 border border-red-600/12 rounded-full magnetic-element"></div>
          <div className="osmo-floating bottom-6 right-4 w-6 h-6 bg-red-600/08 rounded-lg magnetic-element"></div>
          
          {/* Advanced Particles */}
          <div className="osmo-particle" style={{left: '25%', animationDelay: '3s'}}></div>
          <div className="osmo-particle" style={{left: '50%', animationDelay: '5s'}}></div>
          <div className="osmo-particle" style={{left: '75%', animationDelay: '7s'}}></div>
        </div>

        <div className="p-6 relative z-10">
          <h3 className="text-sm font-semibold text-black mb-4">VIDEO SERVICES</h3>
          <div className="space-y-2">
            {categories.map((category, index) => (
              <Link to={category.path} key={category.name} style={{ textDecoration: "none" }}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-left text-neutral-600 hover:text-black hover:bg-neutral-100 transition-smooth animate-fade-in interactive-glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {category.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </aside>

      {/* Mobile Categories - Horizontal Scroll */}
      <div className="lg:hidden fixed top-[73px] left-0 right-0 bg-white/90 nav-blur border-b border-neutral-200 z-40 px-2 sm:px-4 py-2 sm:py-3 animate-fade-in osmo-bg">
        {/* Gradient Mesh Background */}
        <div className="gradient-mesh"></div>
        
        {/* Advanced Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="osmo-floating top-2 left-8 w-4 h-4 border border-red-600/10 rounded-full magnetic-element"></div>
          <div className="osmo-floating top-3 right-12 w-6 h-6 bg-red-600/06 rounded-lg magnetic-element"></div>
          <div className="osmo-floating bottom-2 left-1/2 w-4 h-4 border border-red-600/12 rounded-full magnetic-element"></div>
          
          {/* Advanced Particles */}
          <div className="osmo-particle" style={{left: '30%', animationDelay: '4s'}}></div>
          <div className="osmo-particle" style={{left: '70%', animationDelay: '6s'}}></div>
        </div>

        <div className="flex space-x-1 sm:space-x-2 overflow-x-auto scrollbar-hide relative z-10 pb-1 snap-x snap-mandatory">
          {categories.map((category, index) => (
            <Link to={category.path} key={category.name} style={{ textDecoration: "none" }}>
              <Button
                variant="ghost"
                size="sm"
                className="whitespace-nowrap text-neutral-600 hover:text-black flex-shrink-0 animate-scale-in interactive-glow text-xs sm:text-sm px-2 sm:px-3 snap-start min-w-fit"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {category.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;