import Navigation from "@/components/Navigation";
import StoryModal from "@/components/StoryModal";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Clock, Eye } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const portfolioItems = [
  {
    id: 1,
    title: "Meet Sarah Chen – from struggling creator to TikTok sensation",
    category: "TikTok Videos",
    views: "2.5M+",
    subscribers: "500K+",
    revenue: "$180K+",
    thumbnailBg: "from-pink-50 to-rose-100",
    clientName: "Sarah Chen",
    clientRole: "Lifestyle Creator",
    duration: "6 months",
    challenge: "Sarah was creating beautiful content but struggling with low engagement and couldn't find her authentic voice",
    solution: "We helped her discover her authentic storytelling style and optimized her content for TikTok's algorithm",
    results: ["500K+ new followers", "$180K+ in brand deals", "2.5M+ total views", "Viral content performance"],
    vimeoId: "1066091632",
  },
  {
    id: 2,
    title: "Educational Content Growth",
    category: "Cash Cow Channels",
    views: "1.2M+",
    subscribers: "20K+",
    revenue: "$50K+",
    thumbnailBg: "from-emerald-50 to-green-100",
    clientName: "Marcus Rodriguez",
    clientRole: "Finance Educator",
    duration: "8 months",
    challenge: "Wanted to improve content quality and reach",
    solution: "Professional content creation with educational focus",
    results: ["$50K+ total revenue", "20K+ engaged subscribers", "Improved content quality", "Better monetization"],
    vimeoId: "1066091555",
  },
  {
    id: 3,
    title: "Business Authority Building",
    category: "Magnates Style",
    views: "800K+",
    subscribers: "15K+",
    revenue: "$80K+",
    thumbnailBg: "from-amber-50 to-yellow-100",
    clientName: "David Thompson",
    clientRole: "Business Consultant",
    duration: "4 months",
    challenge: "Needed to improve professional positioning",
    solution: "High-end production with strategic storytelling",
    results: ["$80K+ in premium deals", "15K+ authority-building followers", "Improved professional image", "Better industry recognition"],
    vimeoId: "1066091094",
  },
  {
    id: 4,
    title: "YouTube Shorts Growth",
    category: "YouTube Shorts",
    views: "4.5M+",
    subscribers: "230K+",
    revenue: "$120K+",
    thumbnailBg: "from-red-50 to-rose-100",
    clientName: "Alex Kim",
    clientRole: "Gaming Creator",
    duration: "8 months",
    challenge: "Stuck at 50K subscribers for 2+ years",
    solution: "YouTube Shorts strategy with improved content",
    results: ["230K+ new subscribers", "4.5M+ total views", "$120K+ in revenue", "Improved channel growth"],
    vimeoId: "1066090855",
  },
  {
    id: 5,
    title: "Instagram Reels Growth",
    category: "Instagram Reels",
    views: "1.8M+",
    subscribers: "80K+",
    revenue: "$45K+",
    thumbnailBg: "from-purple-50 to-violet-100",
    clientName: "Emma Williams",
    clientRole: "Fashion Influencer",
    duration: "5 months",
    challenge: "Beautiful content but low engagement",
    solution: "Improved aesthetic consistency and engagement",
    results: ["80K+ new followers", "$45K+ in brand partnerships", "Improved engagement", "Better brand collaborations"],
    vimeoId: "1066087047",
  },
  {
    id: 6,
    title: "Documentary Content Success",
    category: "Documentary Style",
    views: "3M+",
    subscribers: "110K+",
    revenue: "$95K+",
    thumbnailBg: "from-sky-50 to-blue-100",
    clientName: "Jordan Patel",
    clientRole: "Social Impact Creator",
    duration: "3 months",
    challenge: "Complex topic that needed compelling storytelling",
    solution: "Professional documentary production with clear messaging",
    results: ["110K+ engaged followers", "$95K+ in impact funding", "Improved awareness", "Better audience engagement"],
    vimeoId: "1066089898",
  },
];

const allCategories = ["All", "TikTok Videos", "Cash Cow Channels", "Magnates Style", "YouTube Shorts", "Instagram Reels", "Documentary Style"];

// VideoCard component with autoplay
const VideoCard = ({ item, onClick, index }) => {
  const iframeRef = useRef(null);
  const [playerReady, setPlayerReady] = useState(false);
  const playerInstanceRef = useRef(null);

  useEffect(() => {
    // Load Vimeo Player API
    const loadVimeoAPI = () => {
      if (window.Vimeo) {
        initializePlayer();
      } else {
        const script = document.createElement('script');
        script.src = "https://player.vimeo.com/api/player.js";
        script.onload = initializePlayer;
        document.body.appendChild(script);
      }
    };

    const initializePlayer = () => {
      if (iframeRef.current && window.Vimeo && !playerInstanceRef.current) {
        const player = new window.Vimeo.Player(iframeRef.current);
        playerInstanceRef.current = player;
        player.setVolume(0); // Mute for autoplay
        player.ready().then(() => {
          setPlayerReady(true);
          // Auto play when ready
          player.play().catch(err => console.log("Autoplay blocked:", err));
        }).catch(err => console.log("Player ready error:", err));
      }
    };

    loadVimeoAPI();

    // Cleanup
    return () => {
      if (playerInstanceRef.current) {
        playerInstanceRef.current.pause();
      }
    };
  }, []);

  const initials = item.clientName.split(" ").map((w) => w[0]).join("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 100, damping: 20 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg transition-all duration-300">

        {/* Video Container */}
        <div className="relative aspect-video overflow-hidden bg-black">
          
          {/* Vimeo Iframe - Always visible and playing */}
          <iframe
            ref={iframeRef}
            className="absolute inset-0 w-full h-full"
            src={`https://player.vimeo.com/video/${item.vimeoId}?autoplay=1&muted=1&loop=1&controls=0&badge=0&autopause=0&playsinline=1&background=1&byline=0&portrait=0&title=0`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={item.title}
            frameBorder="0"
          />

          {/* Auto-playing indicator */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md shadow-lg z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            PLAYING
          </div>

          {/* Category badge */}
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-neutral-700 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm z-10">
            {item.category}
          </div>

          {/* Views badge */}
          <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-md flex items-center gap-1 z-10">
            <Eye className="w-3 h-3" />
            {item.views}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4">
          <h3 className="font-semibold text-[15px] text-neutral-900 leading-snug mb-3 line-clamp-2 group-hover:text-red-600 transition-colors duration-200">
            {item.title}
          </h3>

          {/* Stats 3-col */}
          <div className="grid grid-cols-3 divide-x divide-neutral-100 border border-neutral-100 rounded-xl overflow-hidden mb-3">
            <div className="flex flex-col items-center py-2.5 px-2 bg-neutral-50/60">
              <span className="text-sm font-bold text-neutral-800">{item.views}</span>
              <span className="text-[10px] text-neutral-400 uppercase tracking-wider mt-0.5">Views</span>
            </div>
            <div className="flex flex-col items-center py-2.5 px-2 bg-neutral-50/60">
              <span className="text-sm font-bold text-neutral-800">{item.subscribers}</span>
              <span className="text-[10px] text-neutral-400 uppercase tracking-wider mt-0.5">Gained</span>
            </div>
            <div className="flex flex-col items-center py-2.5 px-2 bg-neutral-50/60">
              <span className="text-sm font-bold text-emerald-600">{item.revenue}</span>
              <span className="text-[10px] text-neutral-400 uppercase tracking-wider mt-0.5">Revenue</span>
            </div>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-1.5 text-neutral-400 text-xs mb-4">
            <Clock className="w-3 h-3" />
            <span>{item.duration}</span>
          </div>

          {/* Footer */}
          <div className="flex items-center pt-3 border-t border-neutral-100">
            <div className="w-7 h-7 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-[11px] font-bold text-neutral-600 flex-shrink-0">
              {initials}
            </div>
            <div className="ml-2.5">
              <p className="text-xs font-semibold text-neutral-800 leading-none mb-0.5">{item.clientName}</p>
              <p className="text-[11px] text-neutral-400 leading-none">{item.clientRole}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-300 ml-auto group-hover:text-red-500 group-hover:translate-x-0.5 transition-all duration-200" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main Portfolio Page
const Portfolio = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleReadStory = (story) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStory(null);
  };

  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  const getCategoryCount = (category) => {
    if (category === "All") return portfolioItems.length;
    return portfolioItems.filter((item) => item.category === category).length;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-20 sm:pt-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-7xl">

          {/* Hero Section */}
          <motion.div
            className="text-left mb-20 max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-black mb-6 leading-tight tracking-tight">
              Stories That Speak
              <span className="text-red-600 block">Louder Than Numbers</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl leading-relaxed mb-12">
              Behind every view, every subscriber, every milestone—there's a real person with a real dream.
              We help creators turn their content into a movement.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link to="/start-project">
                <Button variant="member" size="xl" className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 bg-red-600 hover:bg-red-700">
                  START YOUR PROJECT
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="xl" className="px-8 py-4 text-lg font-semibold border-2 border-black hover:bg-black hover:text-white transition-all duration-300">
                  LET'S CHAT
                </Button>
              </Link>
              <Link to="/success-stories" className="text-black font-semibold hover:text-red-600 transition-colors duration-300 flex items-center gap-1">
                SUCCESS STORIES
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {[
              { number: "15M+", label: "Views Generated", color: "text-red-600" },
              { number: "200+", label: "Creators Helped", color: "text-black" },
              { number: "$500K+", label: "Revenue Generated", color: "text-black" },
              { number: "4.9/5", label: "Client Rating", color: "text-black" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="border-l-4 border-red-600 pl-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`text-4xl sm:text-5xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
                <div className="text-sm text-neutral-500 uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Success Stories Section */}
          <div className="mb-24">
            <div className="flex flex-wrap justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-bold text-black mb-1">Real Results. Real Impact.</h2>
                <p className="text-neutral-500 text-sm">
                  All videos play automatically • Click any card to read the full story
                </p>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2.5 mb-3 pb-5 border-b border-neutral-100">
              {allCategories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-red-600 text-white shadow-sm shadow-red-200"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                >
                  {category}
                  <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                    activeCategory === category ? "bg-white/20 text-white" : "bg-white text-neutral-500"
                  }`}>
                    {getCategoryCount(category)}
                  </span>
                </motion.button>
              ))}
            </div>

            <p className="text-xs text-neutral-400 mb-8 tracking-wide uppercase">
              Showing {filteredItems.length} of {portfolioItems.length} stories
            </p>

            {filteredItems.length === 0 ? (
              <motion.div className="text-center py-20 bg-neutral-50 rounded-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <p className="text-neutral-400 text-base">No stories in this category yet.</p>
                <button onClick={() => setActiveCategory("All")} className="mt-3 text-red-600 text-sm font-semibold hover:underline">
                  View all stories
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, index) => (
                  <VideoCard key={item.id} item={item} index={index} onClick={() => handleReadStory(item)} />
                ))}
              </div>
            )}
          </div>

          {/* Featured Story */}
          <motion.div
            className="mb-24 bg-neutral-50 rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
           {/* Featured Story */}
<motion.div
  className="mb-24 bg-neutral-50 rounded-3xl overflow-hidden"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
>
  <div className="grid grid-cols-1 lg:grid-cols-2">
    <div className="relative bg-black aspect-video lg:aspect-auto overflow-hidden">
      {/* Vimeo Video - Autoplaying */}
      <iframe
        className="absolute inset-0 w-full h-full"
        src="https://player.vimeo.com/video/1066091632?autoplay=1&muted=1&loop=1&controls=0&badge=0&autopause=0&playsinline=1&background=1&byline=0&portrait=0&title=0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Sarah Chen - Featured Success Story"
        frameBorder="0"
      />
      
      {/* Auto-playing indicator */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md shadow-lg z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        PLAYING
      </div>
      
      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm z-10">
        2.5M+ Views • 6 Months Duration
      </div>
    </div>
    
    <div className="p-8 lg:p-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">SC</div>
        <div>
          <div className="font-bold text-black">Sarah Chen</div>
          <div className="text-sm text-neutral-500">Lifestyle Creator</div>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-black mb-4">From 10K to 500K: Sarah's Transformation Journey</h3>
      <blockquote className="text-neutral-700 italic mb-6 border-l-4 border-red-600 pl-4">
        "I was creating content for months with barely any engagement. Black Cord didn't just edit my videos – they helped me find my voice and showed me how to connect with my audience."
      </blockquote>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <div className="text-xs text-neutral-500 uppercase font-semibold mb-1">The Challenge</div>
          <p className="text-sm text-neutral-700">Low engagement, unclear niche, inconsistent growth.</p>
        </div>
        <div>
          <div className="text-xs text-neutral-500 uppercase font-semibold mb-1">Our Approach</div>
          <p className="text-sm text-neutral-700">Content strategy, authentic storytelling, algorithm optimization.</p>
        </div>
        <div>
          <div className="text-xs text-neutral-500 uppercase font-semibold mb-1">The Results</div>
          <p className="text-sm text-neutral-700">500K+ followers, $180K+ in brand deals, viral content success.</p>
        </div>
      </div>
      <Link to="/success-stories/sarah-chen">
        <Button variant="member" className="bg-red-600 hover:bg-red-700">READ FULL STORY</Button>
      </Link>
    </div>
  </div>
</motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div className="text-center" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <div className="bg-black rounded-3xl p-12 text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
              <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">Join 200+ creators who turned their passion into profit with our help.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/start-project">
                  <Button variant="member" size="xl" className="bg-red-600 hover:bg-red-700 px-8">START YOUR PROJECT</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-black px-8">LET'S CHAT</Button>
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      <StoryModal isOpen={isModalOpen} onClose={handleCloseModal} story={selectedStory} />
    </div>
  );
};

export default Portfolio;