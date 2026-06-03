import { motion, AnimatePresence } from "framer-motion";
import { Play, Clock, Eye, ChevronRight } from "lucide-react";
import { useState } from "react";

// Helper function to convert Google Drive link to embeddable format
const getGoogleDriveEmbedUrl = (url: string) => {
  // Check if it's already an embed URL
  if (url.includes("/preview")) return url;
  
  // Extract file ID from various Google Drive URL formats
  let fileId = "";
  
  // Format: https://drive.google.com/file/d/FILE_ID/view
  const fileIdMatch = url.match(/\/file\/d\/([^/]+)/);
  if (fileIdMatch) {
    fileId = fileIdMatch[1];
  }
  
  // Format: https://drive.google.com/open?id=FILE_ID
  const openIdMatch = url.match(/[?&]id=([^&]+)/);
  if (openIdMatch) {
    fileId = openIdMatch[1];
  }
  
  // Format: https://drive.google.com/uc?id=FILE_ID
  const ucIdMatch = url.match(/[?&]id=([^&]+)/);
  if (ucIdMatch) {
    fileId = ucIdMatch[1];
  }
  
  if (fileId) {
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }
  
  // If no pattern matches, return original URL
  return url;
};

// Get aspect ratio based on category
const getAspectRatio = (category: string): string => {
  switch (category) {
    case "Reels":
      return "aspect-[9/16]"; // Vertical for TikTok/Reels/Shorts
    case "VSL Videos":
      return "aspect-video"; // 16:9 for sales videos
    case "Weddings":
      return "aspect-video"; // 16:9 cinematic
    case "Podcasts":
      return "aspect-video"; // 16:9 YouTube format
    case "CashCow":
      return "aspect-video"; // 16:9 documentary style
    default:
      return "aspect-video";
  }
};

// Get container width class based on category
const getContainerWidthClass = (category: string): string => {
  switch (category) {
    case "Reels":
      return "max-w-[280px] sm:max-w-[320px]"; // Tighter for vertical cards
    default:
      return "w-full"; // Full width for landscape cards
  }
};

// Video data structure per category with Google Drive links
const videoData = {
  Reels: [
    {
      id: 1,
      title: "UI ANIMATION MASTERCLASS",
      author: "Sarah Chen",
      explanation: "From 10K to 2M+ subscribers using advanced short-form content strategy.",
      duration: "0:45",
      views: "2.3M",
      videoUrl: "https://drive.google.com/file/d/1vaw_uTNjIq0Yxx1qaLK8BX3TIkkO8E6V/view?usp=sharing",
      ctaLink: "#"
    },
    {
      id: 2,
      title: "BRAND STORYTELLING BREAKDOWN",
      author: "Marcus Rodriguez",
      explanation: "How we turned boring product demos into viral content that generates $500K+.",
      duration: "1:20",
      views: "1.8M",
      videoUrl: "https://drive.google.com/file/d/SAMPLE_FILE_ID_2/preview",
      ctaLink: "#"
    },
    {
      id: 3,
      title: "GROWTH HACKING SECRETS",
      author: "Emily Johnson",
      explanation: "Sustainability content that actually moves people to action and drives sales.",
      duration: "0:58",
      views: "3.1M",
      videoUrl: "https://drive.google.com/file/d/SAMPLE_FILE_ID_3/preview",
      ctaLink: "#"
    },
    {
      id: 4,
      title: "ENGAGEMENT LOOP FORMULA",
      author: "David Kim",
      explanation: "Documentary-style storytelling that helped secure Series A funding.",
      duration: "1:15",
      views: "4.2M",
      videoUrl: "https://drive.google.com/file/d/SAMPLE_FILE_ID_4/preview",
      ctaLink: "#"
    }
  ],
  "VSL Videos": [
    {
      id: 5,
      title: "SALES CONVERSION MASTER",
      author: "Lisa Thompson",
      explanation: "500K+ regular views after implementing our VSL framework for Instagram Reels.",
      duration: "2:30",
      views: "892K",
      videoUrl: "https://drive.google.com/file/d/SAMPLE_FILE_ID_5/preview",
      ctaLink: "#"
    },
    {
      id: 6,
      title: "FUNNEL OPTIMIZATION",
      author: "Alex Morgan",
      explanation: "Fast turnaround, incredible quality, and strategic partnership that raised $2M.",
      duration: "3:15",
      views: "1.2M",
      videoUrl: "https://drive.google.com/file/d/SAMPLE_FILE_ID_6/preview",
      ctaLink: "#"
    },
    {
      id: 7,
      title: "AIDA FRAMEWORK DEEP DIVE",
      author: "Nina Patel",
      explanation: "Attention-grabbing hooks that increased retention by 300% within weeks.",
      duration: "1:55",
      views: "756K",
      videoUrl: "https://drive.google.com/file/d/SAMPLE_FILE_ID_7/preview",
      ctaLink: "#"
    },
    {
      id: 8,
      title: "PSYCHOLOGICAL TRIGGERS",
      author: "Oliver Chen",
      explanation: "How we engineered emotional responses that drive 7-figure campaigns.",
      duration: "2:45",
      views: "1.1M",
      videoUrl: "https://drive.google.com/file/d/SAMPLE_FILE_ID_8/preview",
      ctaLink: "#"
    }
  ],
  Weddings: [
    {
      id: 9,
      title: "CINEMATIC LOVE STORY",
      author: "Jessica & Michael",
      explanation: "Documentary-style wedding film that captured every authentic moment beautifully.",
      duration: "4:20",
      views: "345K",
      videoUrl: "/public/videos/Nikola & Eric.mp4",
      ctaLink: "#"
    },
    {
      id: 10,
      title: "DRONE CINEMATOGRAPHY",
      author: "Elena Rodriguez",
      explanation: "Aerial storytelling that elevated destination wedding production value.",
      duration: "3:45",
      views: "512K",
      videoUrl: "https://drive.google.com/file/d/SAMPLE_FILE_ID_10/preview",
      ctaLink: "#"
    },
    {
      id: 11,
      title: "SAME-DAY EDIT",
      author: "The Johnson Wedding",
      explanation: "Real-time editing magic delivered during the reception to roaring applause.",
      duration: "2:50",
      views: "278K",
      videoUrl: "https://drive.google.com/file/d/SAMPLE_FILE_ID_11/preview",
      ctaLink: "#"
    },
    {
      id: 12,
      title: "HIGHLIGHT REEL MASTER",
      author: "Priya & David",
      explanation: "Emotional storytelling that made family and friends cry tears of joy.",
      duration: "5:10",
      views: "623K",
      videoUrl: "https://drive.google.com/file/d/SAMPLE_FILE_ID_12/preview",
      ctaLink: "#"
    }
  ],
  Podcasts: [
    {
      id: 13,
      title: "MULTI-CAM SETUP",
      author: "The Daily Grind",
      explanation: "Professional-grade podcast production that increased listener retention by 200%.",
      duration: "15:00",
      views: "1.5M",
      videoUrl: "https://drive.google.com/file/d/SAMPLE_FILE_ID_13/preview",
      ctaLink: "#"
    },
    {
      id: 14,
      title: "SOCIAL CLIP ENGINE",
      author: "Tyler Adams",
      explanation: "Turning 2-hour conversations into 50+ viral clips generating millions of views.",
      duration: "0:60",
      views: "4.2M",
      videoUrl: "https://drive.google.com/file/d/SAMPLE_FILE_ID_14/preview",
      ctaLink: "#"
    },
    {
      id: 15,
      title: "DYNAMIC B-Roll INSERT",
      author: "Creators Unfiltered",
      explanation: "Visual storytelling that keeps viewers engaged through long-form content.",
      duration: "22:30",
      views: "892K",
      videoUrl: "https://drive.google.com/file/d/SAMPLE_FILE_ID_15/preview",
      ctaLink: "#"
    },
    {
      id: 16,
      title: "SOUND DESIGN PRO",
      author: "Audio Alchemy",
      explanation: "Professional mixing and mastering that competes with top-tier networks.",
      duration: "18:45",
      views: "1.1M",
      videoUrl: "https://drive.google.com/file/d/SAMPLE_FILE_ID_16/preview",
      ctaLink: "#"
    }
  ],
  CashCow: [
    {
      id: 17,
      title: "DOCUMENTARY STYLE",
      author: "Growth Ventures",
      explanation: "Cinematic case study that helped raise $2M in series A funding.",
      duration: "8:30",
      views: "2.1M",
      videoUrl: "https://drive.google.com/file/d/SAMPLE_FILE_ID_17/preview",
      ctaLink: "#"
    },
    {
      id: 18,
      title: "BRAND ORIGIN STORY",
      author: "Luxe & Co",
      explanation: "Emotional brand documentary that increased customer lifetime value by 400%.",
      duration: "6:45",
      views: "1.8M",
      videoUrl: "https://drive.google.com/file/d/SAMPLE_FILE_ID_18/preview",
      ctaLink: "#"
    },
    {
      id: 19,
      title: "FOUNDER JOURNEY",
      author: "TechStart Inc",
      explanation: "Authentic storytelling that humanized the brand and drove partnership deals.",
      duration: "10:20",
      views: "956K",
      videoUrl: "https://drive.google.com/file/d/SAMPLE_FILE_ID_19/preview",
      ctaLink: "#"
    },
    {
      id: 20,
      title: "IMPACT REPORT FILM",
      author: "Green Future",
      explanation: "Data-driven documentary style that secured government grants and funding.",
      duration: "7:15",
      views: "1.3M",
      videoUrl: "https://drive.google.com/file/d/SAMPLE_FILE_ID_20/preview",
      ctaLink: "#"
    }
  ]
};

const categories = ["Reels", "VSL Videos", "Weddings", "Podcasts", "CashCow"];

// Individual Video Card Component with Dynamic Aspect Ratio
const VideoCard = ({ video, category }: { video: any; category: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = getGoogleDriveEmbedUrl(video.videoUrl);
  const aspectRatio = getAspectRatio(category);
  const containerWidth = getContainerWidthClass(category);

  return (
    <motion.div
      className={`group relative ${containerWidth} mx-auto`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 80, damping: 18 }}
    >
      <motion.div
        className="relative bg-gradient-to-br from-zinc-900 via-zinc-950 to-black rounded-2xl overflow-hidden border border-zinc-800/50 backdrop-blur-sm cursor-pointer shadow-xl"
        animate={{
          scale: isHovered ? 1.02 : 1,
          borderColor: isHovered ? "rgba(239, 68, 68, 0.4)" : "rgba(39, 39, 42, 0.5)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Video Thumbnail/Player Area - DYNAMIC ASPECT RATIO */}
        <div className={`relative ${aspectRatio} overflow-hidden bg-gradient-to-br from-zinc-800/50 to-black`}>
          {!isPlaying ? (
            <div className="relative h-full">
              {/* Thumbnail Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/80 to-black/90 z-10" />
              
              {/* Gradient Overlay Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/5 via-transparent to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
              
              {/* Content Wrapper - Responsive padding based on category */}
              <div className={`relative z-30 flex flex-col h-full ${
                category === "Reels" ? "p-4 sm:p-5" : "p-4 sm:p-6 md:p-8"
              }`}>
                {/* Top Section - Metadata Chips */}
                <div className="flex justify-between items-start gap-2">
                  <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-red-500/20">
                    <Clock className="w-3 h-3 text-red-500" />
                    <span className="text-[11px] font-mono text-zinc-300">{video.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    <Eye className="w-3 h-3 text-zinc-400" />
                    <span className="text-[11px] font-mono text-zinc-300">{video.views}</span>
                  </div>
                </div>

                {/* Center Section - Play Button */}
                <div className="flex-1 flex items-center justify-center">
                  <motion.button
                    className="relative"
                    onClick={() => setIsPlaying(true)}
                    animate={{
                      scale: isHovered ? 1.15 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                    <div className={`relative ${
                      category === "Reels" 
                        ? "w-12 h-12 sm:w-14 sm:h-14" 
                        : "w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18"
                    } bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-red-600/40 transition-all duration-300`}>
                      <Play className={`${
                        category === "Reels" 
                          ? "w-5 h-5 sm:w-6 sm:h-6" 
                          : "w-6 h-6 sm:w-7 sm:h-7"
                      } text-white ml-0.5`} fill="white" />
                    </div>
                  </motion.button>
                </div>

                {/* Bottom Section - Hover Reveal System */}
                <div className="mt-auto space-y-1.5">
                  {/* Default State */}
                  <div className="space-y-0.5">
                    <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-red-500 truncate">
                      {video.author}
                    </p>
                    <h3 className={`font-bold uppercase tracking-tight text-white leading-tight line-clamp-2 ${
                      category === "Reels" 
                        ? "text-xs sm:text-sm" 
                        : "text-sm sm:text-base md:text-lg"
                    }`}>
                      {video.title}
                    </h3>
                  </div>

                  {/* Hover Expandable Content */}
                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: isHovered ? "auto" : 0,
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  >
                    <div className="pt-2 pb-3 space-y-2">
                      <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed line-clamp-2">
                        {video.explanation}
                      </p>
                      <motion.a
                        href={video.ctaLink}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-700 rounded-lg text-white text-[11px] sm:text-xs font-semibold transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                        transition={{ delay: 0.1 }}
                      >
                        Explore Architecture
                        <ChevronRight className="w-3.5 h-3.5" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 bg-black">
              <iframe
                src={`${embedUrl}?autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                title={video.title}
              />
              {/* Overlay with metadata when video is playing */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 z-10">
                <div className="space-y-0.5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-red-500">
                    {video.author}
                  </p>
                  <h3 className={`font-bold uppercase tracking-tight text-white leading-tight ${
                    category === "Reels" ? "text-xs" : "text-sm"
                  }`}>
                    {video.title}
                  </h3>
                </div>
              </div>
            </div>
          )}

          {/* Animated Border Glow Effect on Hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered && !isPlaying ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.2), transparent 70%)",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
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

// Main Testimonials Video Section Component
const TestimonialsVideoSection = () => {
  const [activeTab, setActiveTab] = useState("Reels");

  // Get current videos based on active tab
  const currentVideos = videoData[activeTab as keyof typeof videoData] || videoData.Reels;

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 bg-black overflow-hidden">
      {/* Premium Dark Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)] opacity-20" />
      
      {/* Radial Glow Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-red-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[60%] h-[40%] bg-red-500/5 rounded-full blur-[100px]" />

      <div className="relative z-10">
        {/* Header Section */}
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

        {/* Category Tabs */}
        <CategoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* 2×2 Video Grid - FULLY RESPONSIVE WITH DYNAMIC CARD SIZING */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8 ${
              activeTab === "Reels" ? "max-w-3xl" : "max-w-5xl"
            } mx-auto`}
          >
            {currentVideos.map((video) => (
              <VideoCard key={video.id} video={video} category={activeTab} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats Bar - Premium Dark Version */}
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