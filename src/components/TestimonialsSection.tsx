import { motion, AnimatePresence } from "framer-motion";
import { Play, Clock, Eye, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// Helper function to convert Google Drive link to embeddable format
const getGoogleDriveEmbedUrl = (url: string) => {
  if (url.includes("/preview")) return url;
  
  let fileId = "";
  const fileIdMatch = url.match(/\/file\/d\/([^/]+)/);
  if (fileIdMatch) {
    fileId = fileIdMatch[1];
  }
  
  const openIdMatch = url.match(/[?&]id=([^&]+)/);
  if (openIdMatch) {
    fileId = openIdMatch[1];
  }
  
  const ucIdMatch = url.match(/[?&]id=([^&]+)/);
  if (ucIdMatch) {
    fileId = ucIdMatch[1];
  }
  
  if (fileId) {
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }
  
  return url;
};

const getAspectRatio = (category: string): string => {
  switch (category) {
    case "Reels":
      return "aspect-[9/16]";
    default:
      return "aspect-video";
  }
};

// Get card width based on category
const getCardWidth = (category: string, isMobile: boolean): string => {
  if (!isMobile) {
    switch (category) {
      case "Reels":
        return 'w-[200px] md:w-[220px]';
      default:
        return 'w-[280px] md:w-[320px]';
    }
  }
  
  switch (category) {
    case "Reels":
      return 'w-[160px] sm:w-[180px]';
    default:
      return 'w-[75vw] sm:w-[65vw]';
  }
};

// Get card padding based on category
const getCardPadding = (category: string, isMobile: boolean): string => {
  if (category === "Reels" && isMobile) {
    return 'p-1.5 sm:p-2';
  }
  if (category === "Reels" && !isMobile) {
    return 'p-2 sm:p-2.5';
  }
  return 'p-3 sm:p-4';
};

// Get font sizes based on category
const getTitleSize = (category: string, isMobile: boolean): string => {
  if (category === "Reels" && isMobile) {
    return 'text-[9px] sm:text-[10px]';
  }
  if (category === "Reels" && !isMobile) {
    return 'text-[10px] sm:text-[11px]';
  }
  return 'text-xs sm:text-sm';
};

const getAuthorSize = (category: string, isMobile: boolean): string => {
  if (category === "Reels" && isMobile) {
    return 'text-[7px] sm:text-[8px]';
  }
  if (category === "Reels" && !isMobile) {
    return 'text-[8px] sm:text-[9px]';
  }
  return 'text-[9px] sm:text-[10px]';
};

// Get play button size based on category
const getPlayButtonSize = (category: string, isMobile: boolean): string => {
  if (category === "Reels" && isMobile) {
    return 'w-8 h-8 sm:w-10 sm:h-10';
  }
  if (category === "Reels" && !isMobile) {
    return 'w-10 h-10 sm:w-12 sm:h-12';
  }
  return 'w-12 h-12 sm:w-14 sm:h-14';
};

const getPlayIconSize = (category: string, isMobile: boolean): string => {
  if (category === "Reels" && isMobile) {
    return 'w-3.5 h-3.5 sm:w-4 sm:h-4';
  }
  if (category === "Reels" && !isMobile) {
    return 'w-4 h-4 sm:w-5 sm:h-5';
  }
  return 'w-5 h-5 sm:w-6 sm:h-6';
};

// Get metadata chip size
const getChipSize = (category: string, isMobile: boolean): string => {
  if (category === "Reels" && isMobile) {
    return 'px-1.5 py-0.5';
  }
  if (category === "Reels" && !isMobile) {
    return 'px-2 py-0.5';
  }
  return 'px-2 py-0.5';
};

const getChipTextSize = (category: string, isMobile: boolean): string => {
  if (category === "Reels" && isMobile) {
    return 'text-[8px]';
  }
  if (category === "Reels" && !isMobile) {
    return 'text-[9px]';
  }
  return 'text-[10px]';
};

const getChipIconSize = (category: string, isMobile: boolean): string => {
  if (category === "Reels" && isMobile) {
    return 'w-1.5 h-1.5';
  }
  if (category === "Reels" && !isMobile) {
    return 'w-2 h-2';
  }
  return 'w-2.5 h-2.5';
};

const videoData = {
  Reels: [
   {
  id: 1,
  title: "UI ANIMATION",
  author: "Color Grade",
  explanation: "From 10K to 2M+ subscribers using advanced short-form content strategy.",
  duration: "0:15",
  views: "2.3M",
  videoUrl: "https://player.vimeo.com/video/1068495229",
  ctaLink: "#"
},
    {
      id: 2,
      title: "BRAND STORY",
      author: "Nischa video in Ali Abdaal's style",
      explanation: "How we turned boring product demos into viral content that generates $500K+.",
      duration: "0:41",
      views: "1.8M",
      videoUrl: "https://player.vimeo.com/video/1066199796",
      ctaLink: "#"
    },
    {
      id: 3,
      title: "Athlete Reel",
      author: "Emily J.",
      explanation: "Sustainability content that actually moves people to action and drives sales.",
      duration: "0:42",
      views: "3.1M",
      videoUrl: "https://player.vimeo.com/video/1066154660",
      ctaLink: "#"
    },
    {
      id: 4,
      title: "Pink Load Trailer Video",
      author: "David K.",
      explanation: "Documentary-style storytelling that helped secure Series A funding.",
      duration: "0:44",
      views: "4.2M",
      videoUrl: "https://player.vimeo.com/video/1066093854",
      ctaLink: "#"
    }
  ],
  "VSL Videos": [
    {
      id: 5,
      title: "Talking Head Video",
      author: "Alex Hormozi style",
      explanation: "500K+ regular views after implementing our VSL framework for Instagram Reels.",
      duration: "0:39",
      views: "892K",
      videoUrl: "https://player.vimeo.com/video/1066091977",
      ctaLink: "#"
    },
    {
      id: 6,
      title: "CV Talking head video",
      author: "Aakarsh",
      explanation: "Fast turnaround, incredible quality, and strategic partnership that raised $2M.",
      duration: "0:57",
      views: "1.2M",
      videoUrl: "https://player.vimeo.com/video/1066091555",
      ctaLink: "#"
    },
    {
      id: 7,
      title: "Media Style Edit",
      author: "Magnates",
      explanation: "Attention-grabbing hooks that increased retention by 300% within weeks.",
      duration: "0:53",
      views: "756K",
      videoUrl: "https://player.vimeo.com/video/1066089898",
      ctaLink: "#"
    },
    {
      id: 8,
      title: "motions graphics",
      author: "Imad Gadzhi style",
      explanation: "How we engineered emotional responses that drive 7-figure campaigns.",
      duration: "1:03",
      views: "1.1M",
      videoUrl: "https://player.vimeo.com/video/1066091632",
      ctaLink: "#"
    }
  ],
  Weddings: [
    {
      id: 9,
      title: "Wedding",
      author: "Týnka & Láďa ",
      explanation: "Documentary-style wedding film that captured every authentic moment beautifully.",
      duration: "5:38",
      views: "345K",
      videoUrl: "https://player.vimeo.com/video/1066091094",
      ctaLink: "#"
    },
    {
      id: 10,
      title: "Wedding",
      author: "Petra & Lukáš",
      explanation: "Aerial storytelling that elevated destination wedding production value.",
      duration: "3:21",
      views: "512K",
      videoUrl: "https://player.vimeo.com/video/1066090855",
      ctaLink: "#"
    },
    {
      id: 11,
      title: "Wedding",
      author: "Petra & Lukáš",
      explanation: "Real-time editing magic delivered during the reception to roaring applause.",
      duration: "3:21",
      views: "278K",
      videoUrl: "https://player.vimeo.com/video/1066090625",
      ctaLink: "#"
    },
    {
      id: 12,
      title: "Wedding",
      author: "Týnka & Láďa",
      explanation: "Emotional storytelling that made family and friends cry tears of joy.",
      duration: "5:38",
      views: "623K",
      videoUrl: "https://player.vimeo.com/video/1066091094",
      ctaLink: "#"
    }
  ],
  Podcasts: [
    {
      id: 13,
      title: "motions graphics",
      author: "Imad Gadzhi style",
      explanation: "Professional-grade podcast production that increased listener retention by 200%.",
      duration: "1:03",
      views: "1.5M",
      videoUrl: "https://player.vimeo.com/video/1066091632",
      ctaLink: "#"
    },
    {
      id: 14,
      title: "motions graphics",
      author: "Imad Gadzhi style",
      explanation: "Turning 2-hour conversations into 50+ viral clips generating millions of views.",
      duration: "1:03",
      views: "4.2M",
      videoUrl: "https://player.vimeo.com/video/1066091632",
      ctaLink: "#"
    },
    {
      id: 15,
      title: "motions graphics",
      author: "Imad Gadzhi style",
      explanation: "Visual storytelling that keeps viewers engaged through long-form content.",
      duration: "1:03",
      views: "892K",
      videoUrl: "https://player.vimeo.com/video/1066091632",
      ctaLink: "#"
    },
    {
      id: 16,
      title: "motions graphics",
      author: "Imad Gadzhi style",
      explanation: "Professional mixing and mastering that competes with top-tier networks.",
      duration: "1:03",
      views: "1.1M",
      videoUrl: "https://player.vimeo.com/video/1066091632",
      ctaLink: "#"
    }
  ],
  CashCow: [
    {
      id: 17,
      title: "Cash Cow video",
      author: "Chat GPT ",
      explanation: "Cinematic case study that helped raise $2M in series A funding.",
      duration: "0:37",
      views: "2.1M",
      videoUrl: "https://player.vimeo.com/video/1066093431",
      ctaLink: "#"
    },
    {
      id: 18,
      title: "Cash Cow video",
      author: "Chat GPT ",
      explanation: "Emotional brand documentary that increased customer lifetime value by 400%.",
      duration: "0:37",
      views: "1.8M",
      videoUrl: "https://player.vimeo.com/video/1066093431",
      ctaLink: "#"
    },
    {
      id: 19,
      title: "Cash Cow video",
      author: "Chat GPT",
      explanation: "Authentic storytelling that humanized the brand and drove partnership deals.",
      duration: "0:37",
      views: "956K",
      videoUrl: "https://player.vimeo.com/video/1066093431",
      ctaLink: "#"
    },
    {
      id: 20,
      title: "Cash Cow video",
      author: "Chat GPT",
      explanation: "Data-driven documentary style that secured government grants and funding.",
      duration: "0:37",
      views: "1.3M",
      videoUrl: "https://player.vimeo.com/video/1066093431",
      ctaLink: "#"
    }
  ]
};

const categories = ["Reels", "VSL Videos", "Weddings", "Podcasts", "CashCow"];

// Custom hook for detecting mobile devices
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

// Custom hook for intersection observer - FIXED for better mobile detection
const useIntersectionObserver = (ref: React.RefObject<Element>, options?: IntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, { threshold: 0.5, ...options });

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [ref, options]);

  return isIntersecting;
};

// VideoCard Component - FIXED for proper mobile autoplay
const VideoCard = ({ video, category, isActive, onActivate, isMobileDevice }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(cardRef, { threshold: 0.5 });
  
  const embedUrl = getGoogleDriveEmbedUrl(video.videoUrl);
  const aspectRatio = getAspectRatio(category);
  const cardWidth = getCardWidth(category, isMobileDevice);
  const cardPadding = getCardPadding(category, isMobileDevice);
  const titleSize = getTitleSize(category, isMobileDevice);
  const authorSize = getAuthorSize(category, isMobileDevice);
  const playButtonSize = getPlayButtonSize(category, isMobileDevice);
  const playIconSize = getPlayIconSize(category, isMobileDevice);
  const chipSize = getChipSize(category, isMobileDevice);
  const chipTextSize = getChipTextSize(category, isMobileDevice);
  const chipIconSize = getChipIconSize(category, isMobileDevice);

  // Handle autoplay on mobile based on intersection
  useEffect(() => {
    if (isMobileDevice) {
      if (isIntersecting && !isPlaying && isActive) {
        // Auto-play when card is visible and active
        setIsPlaying(true);
        onActivate?.(video.id);
      } else if (!isIntersecting && isPlaying) {
        // Pause when card is out of view
        setIsPlaying(false);
      }
    }
  }, [isIntersecting, isMobileDevice, isPlaying, isActive, video.id, onActivate]);

  // Handle desktop hover behavior
  const handleMouseEnter = () => {
    if (!isMobileDevice) {
      setIsHovered(true);
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobileDevice) {
      setIsHovered(false);
      setIsPlaying(false);
    }
  };

  const handleManualPlay = () => {
    setIsPlaying(true);
    onActivate?.(video.id);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`group relative ${cardWidth} flex-shrink-0`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 18 }}
    >
      <div className="relative w-full rounded-xl overflow-hidden shadow-2xl">
        {/* BACKGROUND LAYER - Dark theme */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black" />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 via-transparent to-red-600/10 opacity-50" />
          
          <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
            isHovered && !isMobileDevice && !isPlaying ? 'opacity-100' : 'opacity-0'
          }`}
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.15), transparent 70%)",
            }}
          />
        </div>

        <div className={`relative ${aspectRatio} w-full`}>
          
          {isPlaying && (
            <div className="absolute inset-0 z-20 bg-black">
              <iframe
                src={`${embedUrl}${embedUrl.includes('?') ? '&' : '?'}autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                title={video.title}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 z-30">
                <div className="space-y-0.5">
                  <p className={`font-bold uppercase tracking-wider text-red-500 ${category === "Reels" ? 'text-[7px]' : 'text-[9px]'}`}>
                    {video.author}
                  </p>
                  <h3 className={`font-bold uppercase tracking-tight text-white leading-tight ${category === "Reels" ? 'text-[8px]' : 'text-[10px]'}`}>
                    {video.title}
                  </h3>
                </div>
              </div>
            </div>
          )}

          <div className={`relative z-10 flex flex-col h-full ${cardPadding}`}>
            
            {/* Top Section - Metadata Chips */}
            <div className="flex justify-between items-start gap-1">
              <div className={`flex items-center gap-1 bg-black/60 backdrop-blur-md rounded-full border border-red-500/20 ${chipSize}`}>
                <Clock className={`${chipIconSize} text-red-500`} />
                <span className={`font-mono text-zinc-300 ${chipTextSize}`}>{video.duration}</span>
              </div>
              <div className={`flex items-center gap-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 ${chipSize}`}>
                <Eye className={`${chipIconSize} text-zinc-400`} />
                <span className={`font-mono text-zinc-300 ${chipTextSize}`}>{video.views}</span>
              </div>
            </div>

            {/* Center Section - Play Button */}
            <div className="flex-1 flex items-center justify-center">
              <motion.button
                className="relative"
                onClick={handleManualPlay}
                animate={{
                  scale: isHovered ? 1.15 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                <div className={`relative ${playButtonSize} bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-red-600/40 transition-all duration-300`}>
                  <Play className={`${playIconSize} text-white ml-0.5`} fill="white" />
                </div>
              </motion.button>
            </div>

            {/* Bottom Section */}
            <div className="mt-auto">
              <div className="space-y-0.5">
                <p className={`font-bold uppercase tracking-wider text-red-500 truncate ${authorSize}`}>
                  {video.author}
                </p>
                <h3 className={`font-bold uppercase tracking-tight text-white leading-tight line-clamp-2 ${titleSize}`}>
                  {video.title}
                </h3>
              </div>

              {/* HOVER EXPANDABLE CONTENT - Overlay only */}
              <AnimatePresence>
                {isHovered && !isMobileDevice && !isPlaying && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute z-20 ${
                      category === "Reels" ? 'bottom-12 left-2 right-2' : 'bottom-16 left-3 right-3'
                    }`}
                  >
                    <div className={`bg-black/90 backdrop-blur-md rounded-lg border border-red-500/20 shadow-lg ${
                      category === "Reels" ? 'p-1.5' : 'p-2'
                    }`}>
                      <p className={`text-zinc-300 leading-relaxed mb-1 ${category === "Reels" ? 'text-[9px] line-clamp-2' : 'text-[10px] line-clamp-2'}`}>
                        {video.explanation}
                      </p>
                      <motion.a
                        href={video.ctaLink}
                        className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold transition-colors text-[9px]"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        Explore
                        <ChevronRight className="w-2.5 h-2.5" />
                      </motion.a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Hover glow border effect */}
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none z-5"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: isHovered && !isPlaying && !isMobileDevice ? 1 : 0 
            }}
            transition={{ duration: 0.3 }}
            style={{
              boxShadow: "inset 0 0 0 2px rgba(239, 68, 68, 0.4)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

// Bottom Dots Navigation Component - MOBILE ONLY
const DotNavigation = ({ total, currentIndex, onDotClick, isMobile }: any) => {
  if (!isMobile) return null;
  
  return (
    <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`transition-all duration-300 rounded-full ${
            currentIndex === index
              ? 'w-8 h-2 bg-red-600' 
              : 'w-2 h-2 bg-zinc-600 hover:bg-zinc-400'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

// Category Tabs Component
const CategoryTabs = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 md:mb-16">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => setActiveTab(category)}
          className={`relative px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
            activeTab === category
              ? "text-white"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          {activeTab === category && (
            <motion.div
              className="absolute inset-0 bg-red-600 rounded-full"
              layoutId="activeTab"
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          )}
          <span className="relative z-10 whitespace-nowrap">{category}</span>
        </motion.button>
      ))}
    </div>
  );
};

// Main Component - FIXED for proper card navigation
const TestimonialsVideoSection = () => {
  const [activeTab, setActiveTab] = useState("Reels");
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);
  const [currentScrollIndex, setCurrentScrollIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const currentVideos = videoData[activeTab as keyof typeof videoData] || videoData.Reels;

  // Handle scroll to update active dot and autoplay
  const handleScroll = () => {
    if (scrollContainerRef.current && isMobile) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = activeTab === "Reels" ? 180 : window.innerWidth * 0.75;
      const gap = 12;
      const index = Math.round(scrollLeft / (cardWidth + gap));
      const newIndex = Math.min(index, currentVideos.length - 1);
      
      if (newIndex !== currentScrollIndex) {
        setCurrentScrollIndex(newIndex);
        // Update active video for autoplay
        setActiveVideoId(currentVideos[newIndex]?.id || null);
      }
    }
  };

  // Handle dot click to scroll to specific card
  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current && isMobile) {
      const cardWidth = activeTab === "Reels" ? 180 : window.innerWidth * 0.75;
      const gap = 12;
      const scrollPosition = index * (cardWidth + gap);
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentScrollIndex(index);
      setActiveVideoId(currentVideos[index]?.id || null);
    }
  };

  // Set first video as active on mount and tab change
  useEffect(() => {
    if (currentVideos.length > 0 && isMobile) {
      setActiveVideoId(currentVideos[0].id);
    }
  }, [activeTab, currentVideos, isMobile]);

  // Add scroll event listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container && isMobile) {
      container.addEventListener('scroll', handleScroll);
      // Trigger initial scroll position
      handleScroll();
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [activeTab, isMobile, currentVideos.length]);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)] opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-red-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[60%] h-[40%] bg-red-500/5 rounded-full blur-[100px]" />

      <div className="relative z-10">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 mb-5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-red-400">Video Portfolio</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Watch Our Work In{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
            Real results. Real creativity. See why top creators trust us with their vision.
          </p>
        </motion.div>

        <CategoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Carousel Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              ref={scrollContainerRef}
              className={`flex overflow-x-auto overflow-y-hidden gap-3 sm:gap-4 pb-4 ${
                isMobile ? 'snap-x snap-mandatory px-4' : 'justify-center px-8'
              }`}
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {currentVideos.map((video, idx) => (
                <div 
                  key={video.id} 
                  className={`${isMobile ? 'snap-start' : ''}`}
                >
                  <VideoCard
                    video={video}
                    category={activeTab}
                    isActive={activeVideoId === video.id}
                    onActivate={(id: number) => setActiveVideoId(id)}
                    isMobileDevice={isMobile}
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Bottom Dots Navigation - ONLY on mobile */}
          {currentVideos.length > 1 && isMobile && (
            <DotNavigation 
              total={currentVideos.length}
              currentIndex={currentScrollIndex}
              onDotClick={scrollToCard}
              isMobile={isMobile}
            />
          )}
        </div>

        {/* Stats Bar */}
        <motion.div
          className="mt-14 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.3 }}
        >
          {[
            { value: "98%", label: "Client Satisfaction" },
            { value: "50+", label: "Happy Clients" },
            { value: "24h", label: "Avg Delivery" },
            { value: "5★", label: "Average Rating" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              whileHover={{ scale: 1.05, borderColor: "#ef444430" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs text-zinc-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsVideoSection;