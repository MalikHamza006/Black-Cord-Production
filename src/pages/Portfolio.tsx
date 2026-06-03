import Navigation from "@/components/Navigation";
import StoryModal from "@/components/StoryModal";
import VideoPlayer from "@/components/VideoPlayer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, TrendingUp, Users, DollarSign, Star, Clock, ArrowRight, Heart, Eye, MessageCircle, Calendar, Zap } from "lucide-react";
import { useState } from "react";

const portfolioItems = [
  {
    title: "Meet Sarah Chen – from struggling creator to TikTok sensation",
    category: "TikTok Videos",
    views: "2.5M+ Views",
    subscribers: "500K+ Gained",
    revenue: "$180K+ Generated",
    thumbnail: "bg-gradient-to-br from-pink-100 to-pink-200 border border-pink-200",
    description: "From 10K to 500K followers in 6 months. Sarah's authentic lifestyle content transformed with our strategic editing and optimization.",
    story: "Sarah was creating beautiful content but struggling with low engagement and couldn't find her authentic voice. We helped her discover her authentic storytelling style and optimized her content for TikTok's algorithm.",
    clientName: "Sarah Chen",
    clientRole: "Lifestyle Creator",
    duration: "6 months",
    startDate: "March 2023",
    challenge: "Sarah was creating beautiful content but struggling with low engagement and couldn't find her authentic voice",
    solution: "We helped her discover her authentic storytelling style and optimized her content for TikTok's algorithm",
    results: ["500K+ new followers", "$180K+ in brand deals", "2.5M+ total views", "Viral content performance"],
    videoSrc: "/videos/featured-tiktok-viral.mp4",
    thumbnailSrc: "/videos/thumbnails/sarah-chen-thumbnail.jpg"
  },
  {
    title: "Educational Content Growth",
    category: "Cash Cow Channels",
    views: "1.2M+ Views",
    subscribers: "20K+ Gained",
    revenue: "$50K+ Generated",
    thumbnail: "bg-gradient-to-br from-green-100 to-green-200 border border-green-200",
    description: "Educational content that helped build a sustainable income stream. This client improved their content quality and monetization.",
    story: "A finance educator wanted to improve their content quality and reach. We helped create professional educational content that resonated with their audience.",
    clientName: "Marcus Rodriguez",
    clientRole: "Finance Educator",
    duration: "8 months",
    challenge: "Wanted to improve content quality and reach",
    solution: "Professional content creation with educational focus",
    results: ["$50K+ total revenue", "20K+ engaged subscribers", "Improved content quality", "Better monetization"],
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnailSrc: "https://img.youtube.com/vi/YE7VzlLtp-4/maxresdefault.jpg"
  },
  {
    title: "Business Authority Building",
    category: "Magnates Media Style",
    views: "800K+ Views",
    subscribers: "15K+ Gained",
    revenue: "$80K+ Generated",
    thumbnail: "bg-gradient-to-br from-yellow-100 to-yellow-200 border border-yellow-200",
    description: "Premium business content that helped establish our client as an industry authority. Improved their professional positioning.",
    story: "A business consultant needed to improve their content quality and professional image. We crafted premium content that enhanced their authority.",
    clientName: "David Thompson",
    clientRole: "Business Consultant",
    duration: "4 months",
    challenge: "Needed to improve professional positioning",
    solution: "High-end production with strategic storytelling",
    results: ["$80K+ in premium deals", "15K+ authority-building followers", "Improved professional image", "Better industry recognition"],
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnailSrc: "https://img.youtube.com/vi/w7vYhyD3QMM/maxresdefault.jpg"
  },
  {
    title: "YouTube Shorts Growth",
    category: "YouTube Shorts",
    views: "4.5M+ Views",
    subscribers: "230K+ Gained",
    revenue: "$120K+ Generated",
    thumbnail: "bg-gradient-to-br from-red-100 to-red-200 border border-red-200",
    description: "YouTube Shorts strategy that helped grow the channel significantly. From 50K to 280K subscribers in 8 months.",
    story: "A gaming creator was stuck at 50K subscribers for years. We helped optimize their YouTube Shorts strategy and improved their content quality.",
    clientName: "Alex Kim",
    clientRole: "Gaming Creator",
    duration: "8 months",
    challenge: "Stuck at 50K subscribers for 2+ years",
    solution: "YouTube Shorts strategy with improved content",
    results: ["230K+ new subscribers", "4.5M+ total views", "$120K+ in revenue", "Improved channel growth"],
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnailSrc: "https://img.youtube.com/vi/ByXuk9QqQkk/maxresdefault.jpg"
  },
  {
    title: "Instagram Reels Growth",
    category: "Instagram Reels",
    views: "1.8M+ Views",
    subscribers: "80K+ Gained",
    revenue: "$45K+ Generated",
    thumbnail: "bg-gradient-to-br from-purple-100 to-purple-200 border border-purple-200",
    description: "Fashion content that improved significantly on Instagram. This creator enhanced their brand partnerships and engagement.",
    story: "A fashion blogger's content wasn't getting the engagement it deserved. We helped improve her content quality and aesthetic consistency.",
    clientName: "Emma Williams",
    clientRole: "Fashion Influencer",
    duration: "5 months",
    challenge: "Beautiful content but low engagement",
    solution: "Improved aesthetic consistency and engagement",
    results: ["80K+ new followers", "$45K+ in brand partnerships", "Improved engagement", "Better brand collaborations"],
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnailSrc: "https://img.youtube.com/vi/JMuzlEQz3uo/maxresdefault.jpg"
  },
  {
    title: "Documentary Content Success",
    category: "Documentary Style",
    views: "3M+ Views",
    subscribers: "110K+ Gained",
    revenue: "$95K+ Generated",
    thumbnail: "bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-200",
    description: "Compelling documentary content that resonated with audiences. This content helped raise awareness and drive engagement.",
    story: "A social impact creator wanted to tell an important story effectively. We helped create compelling documentary content that connected with viewers.",
    clientName: "Jordan Patel",
    clientRole: "Social Impact Creator",
    duration: "3 months",
    challenge: "Complex topic that needed compelling storytelling",
    solution: "Professional documentary production with clear messaging",
    results: ["110K+ engaged followers", "$95K+ in impact funding", "Improved awareness", "Better audience engagement"],
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumbnailSrc: "https://img.youtube.com/vi/eRsGyueVLvQ/maxresdefault.jpg"
  },
];

const Portfolio = () => {
  const [selectedStory, setSelectedStory] = useState<typeof portfolioItems[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadStory = (story: typeof portfolioItems[0]) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStory(null);
  };

  return (
    <div className="min-h-screen bg-background osmo-bg">
      {/* Gradient Mesh Background */}
      <div className="gradient-mesh"></div>
      
      {/* Advanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="osmo-floating top-20 left-10 w-12 h-12 border border-red-600/10 rounded-full magnetic-element"></div>
        <div className="osmo-floating top-40 right-20 w-16 h-16 bg-red-600/06 rounded-lg magnetic-element"></div>
        <div className="osmo-floating bottom-32 left-1/4 w-8 h-8 border border-red-600/12 rounded-full magnetic-element"></div>
        <div className="osmo-floating bottom-20 right-1/3 w-14 h-14 bg-red-600/08 rounded-lg magnetic-element"></div>
        <div className="osmo-floating top-1/2 left-8 w-10 h-10 border border-red-600/06 rounded-full magnetic-element"></div>
        <div className="osmo-floating top-1/3 right-1/4 w-12 h-12 bg-red-600/12 rounded-lg magnetic-element"></div>
        <div className="osmo-floating top-2/3 left-1/2 w-6 h-6 border border-red-600/15 rounded-full magnetic-element"></div>
        <div className="osmo-floating bottom-1/4 right-1/6 w-18 h-18 bg-red-600/04 rounded-lg magnetic-element"></div>
        
        {/* Advanced Particles */}
        <div className="osmo-particle" style={{left: '15%', animationDelay: '0.5s'}}></div>
        <div className="osmo-particle" style={{left: '25%', animationDelay: '2.5s'}}></div>
        <div className="osmo-particle" style={{left: '35%', animationDelay: '4.5s'}}></div>
        <div className="osmo-particle" style={{left: '45%', animationDelay: '6.5s'}}></div>
        <div className="osmo-particle" style={{left: '55%', animationDelay: '8.5s'}}></div>
        <div className="osmo-particle" style={{left: '65%', animationDelay: '10.5s'}}></div>
        <div className="osmo-particle" style={{left: '75%', animationDelay: '12.5s'}}></div>
        <div className="osmo-particle" style={{left: '85%', animationDelay: '14.5s'}}></div>
        <div className="osmo-particle" style={{left: '20%', animationDelay: '1.5s'}}></div>
        <div className="osmo-particle" style={{left: '30%', animationDelay: '3.5s'}}></div>
        <div className="osmo-particle" style={{left: '40%', animationDelay: '5.5s'}}></div>
        <div className="osmo-particle" style={{left: '50%', animationDelay: '7.5s'}}></div>
        <div className="osmo-particle" style={{left: '60%', animationDelay: '9.5s'}}></div>
        <div className="osmo-particle" style={{left: '70%', animationDelay: '11.5s'}}></div>
        <div className="osmo-particle" style={{left: '80%', animationDelay: '13.5s'}}></div>
        <div className="osmo-particle" style={{left: '90%', animationDelay: '15.5s'}}></div>
      </div>

      <Navigation />

      <main className="pt-20 sm:pt-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-7xl">
          {/* Human-Centered Header */}
          <motion.div
            className="text-center mb-16 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-red-100 hover:bg-red-100 transition-colors duration-300">
              <Play className="w-4 h-4" />
              Real Stories, Real Results
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Success Stories That
              <span className="text-red-600 block">Changed Lives</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-8">
              These aren't just numbers – they're real people whose lives we've transformed. 
              From struggling creators to viral sensations, here are the stories behind our success. Professional video editing starting at just $75 per video.
            </p>
            
            {/* Trust Signals */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold border border-green-100">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                30-Day Money-Back Guarantee
              </div>
              <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold border border-blue-100">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                24-Hour Delivery
              </div>
              <div className="flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold border border-purple-100">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Starting at $75
              </div>
              <div className="flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold border border-orange-100">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Unlimited Revisions
              </div>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { number: "200+", label: "Projects Completed", icon: Users, color: "text-red-600" },
                { number: "15M+", label: "Views We've Helped Create", icon: TrendingUp, color: "text-green-600" },
                { number: "50+", label: "Creators We've Partnered With", icon: Heart, color: "text-blue-600" },
                { number: "100%", label: "Client Satisfaction", icon: Star, color: "text-purple-600" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-white rounded-xl border border-neutral-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 80, damping: 18, delay: index * 0.1 }}
                >
                  <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
                  <div className="text-xs sm:text-sm text-neutral-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/start-project">
                <Button variant="member" size="xl" className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  <Play className="w-5 h-5 mr-2" />
                  Start Your Success Story
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="about" size="xl" className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat With Us
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Success Stories Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 items-stretch"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="flex h-full"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 18,
                  delay: index * 0.15,
                }}
              >
                <Card 
                  className="group flex flex-col w-full h-full bg-white border border-neutral-200 hover:border-red-500 hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden hover:scale-[1.02] hover:bg-gradient-to-br hover:from-white hover:to-red-50/20"
                >
                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    {/* Video Thumbnail */}
                    <div className="mb-4 group-hover:scale-105 transition-transform duration-500 relative">
                      <VideoPlayer
                        src={item.videoSrc}
                        poster={item.thumbnailSrc}
                        fallbackSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        className="rounded-lg shadow-lg"
                        aspectRatio="video"
                        autoPlay={false}
                        muted={true}
                        showControls={true}
                        loop={true}
                      />
                      
                      {/* Category badge */}
                      <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold group-hover:scale-110 transition-transform duration-300 z-20">
                        {item.category}
                      </div>
                      
                      {/* Stats overlay */}
                      <div className="absolute bottom-3 right-3 bg-black/50 text-white px-3 py-1 rounded-full text-sm group-hover:bg-red-600 transition-colors duration-300 z-20">
                        {item.views}
                      </div>
                    </div>

                    {/* Content */}
                    <div 
                      className="space-y-3 sm:space-y-4 flex flex-col flex-grow cursor-pointer" 
                      onClick={() => handleReadStory(item)}
                    >
                      <div className="flex-grow">
                        <h3 className="text-lg sm:text-xl font-bold text-black mb-2 group-hover:text-red-600 transition-colors duration-300 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors duration-300 line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Client Info */}
                      <div className="bg-neutral-50 p-3 rounded-lg group-hover:bg-red-50 transition-colors duration-300">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                            {item.clientName.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-semibold text-black text-sm truncate">{item.clientName}</div>
                            <div className="text-xs text-neutral-600 truncate">{item.clientRole}</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Key Results */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-center p-2 sm:p-3 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors duration-300">
                          <div className="text-sm font-bold text-red-600 truncate">{item.subscribers}</div>
                          <div className="text-xs text-neutral-500">Subscribers</div>
                        </div>
                        <div className="text-center p-2 sm:p-3 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors duration-300">
                          <div className="text-sm font-bold text-green-600 truncate">{item.revenue}</div>
                          <div className="text-xs text-neutral-500">Revenue</div>
                        </div>
                      </div>
                      
                      {/* Duration */}
                      <div className="flex items-center gap-2 text-sm text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">
                        <Clock className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">Project Duration: {item.duration}</span>
                      </div>
                      
                      {/* CTA */}
                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-neutral-100 group-hover:border-red-200 transition-colors duration-300">
                        <span className="text-sm font-semibold text-red-600 group-hover:text-red-700 transition-colors duration-300">
                          Read Full Story
                        </span>
                        <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-red-600 group-hover:translate-x-2 transition-all duration-500" />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Success Story */}
          <motion.div
            className="mb-16 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.3 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Featured Success Story</h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Meet Sarah Chen – from struggling creator to TikTok sensation
              </p>
            </div>
            
            <Card className="bg-gradient-to-r from-pink-50 to-red-50 border border-pink-200 overflow-hidden hover:shadow-xl transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[400px] lg:min-h-[500px]">
                {/* Video Section */}
                <div className="relative">
                  <VideoPlayer
                    src="/videos/featured-tiktok-viral.mp4"
                    poster="/videos/thumbnails/featured-tiktok-thumbnail.jpg"
                    fallbackSrc="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4"
                    className="lg:aspect-square"
                    aspectRatio="video"
                  />
                  
                  <div className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    TikTok Success
                  </div>
                  
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
                    2.5M+ Views
                  </div>
                </div>
                
                {/* Story Section */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      SC
                    </div>
                    <div>
                      <div className="font-bold text-black text-lg">Sarah Chen</div>
                      <div className="text-sm text-neutral-600">Lifestyle Creator</div>
                      <div className="text-xs text-pink-600 font-medium">Started working with us in March 2023</div>
                    </div>
                  </div>
                  
                  <blockquote className="text-lg text-neutral-700 mb-6 leading-relaxed italic">
                    "I was skeptical at first – everyone promises viral content. But Black Cord actually delivered. 
                    They didn't just edit my videos, they became part of my creative journey. From 10K to 500K subscribers 
                    in 6 months, and I genuinely feel like they care about my success."
                  </blockquote>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black mb-2">The Challenge</h4>
                      <p className="text-sm text-neutral-600">Sarah was creating beautiful content but struggling with low engagement and couldn't find her authentic voice.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Our Solution</h4>
                      <p className="text-sm text-neutral-600">We helped her discover her authentic storytelling style and optimized her content for TikTok's algorithm.</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-white/50 rounded-lg">
                        <div className="text-lg font-bold text-pink-600">500K+</div>
                        <div className="text-xs text-neutral-600">New Followers</div>
                      </div>
                      <div className="text-center p-3 bg-white/50 rounded-lg">
                        <div className="text-lg font-bold text-green-600">$180K+</div>
                        <div className="text-xs text-neutral-600">Brand Deals</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Ready to Write Your Success Story? */}
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.5 }}
          >
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-white relative overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Write Your Success Story?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  These success stories could be yours. Let's create content that doesn't just get views – 
                  it changes your life and builds your empire.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link to="/start-project">
                    <Button 
                      variant="member"
                      size="xl" 
                      className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Start Your Success Story
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button 
                      variant="about" 
                      size="xl" 
                      className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat With Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Story Modal */}
      <StoryModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        story={selectedStory} 
      />
    </div>
  );
};

export default Portfolio;
