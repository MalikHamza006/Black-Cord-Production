import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, DollarSign, Crown, Film, Users, Zap, Layers, Image, Eye, TrendingUp, Star, CheckCircle, ArrowRight, Shield, Headphones, Calendar, MessageCircle } from "lucide-react";

const services = [
  {
    title: "YouTube Shorts",
    description: "Professional YouTube Shorts editing that helps improve engagement and reach.",
    features: ["Engaging storytelling", "Algorithm-optimized pacing", "Retention-focused editing", "Professional quality"],
    price: "Starting at $75",
    views: "5M+",
    subscribers: "200K+",
    gradient: "from-red-500 to-red-600",
    icon: Play,
    link: "/services/youtube-shorts"
  },
  {
    title: "TikTok Videos", 
    description: "Professional TikTok video editing that helps improve engagement and performance.",
    features: ["Trend-aware editing", "Optimized pacing", "Sound synchronization", "Engaging hooks"],
    price: "Starting at $75",
    views: "3M+",
    subscribers: "150K+",
    gradient: "from-red-500 to-red-700",
    icon: Zap,
    link: "/services/tiktok-videos"
  },
  {
    title: "Instagram Reels",
    description: "Professional Instagram Reels editing that helps improve engagement and brand consistency.",
    features: ["Brand-consistent storytelling", "Music synchronization", "Visual flow optimization", "Engagement-focused editing"],
    price: "Starting at $75",
    views: "2M+",
    subscribers: "100K+",
    gradient: "from-red-600 to-red-500",
    icon: Eye,
    link: "/services/instagram-reels"
  },
  {
    title: "Cash Cow Channels",
    description: "Professional content creation focused on monetization and audience growth.",
    features: ["Revenue-focused content strategy", "Professional production quality", "Monetization optimization", "Audience growth strategies"],
    price: "Starting at $125",
    revenue: "$500K+",
    views: "2M+",
    gradient: "from-red-500 to-red-600",
    icon: DollarSign,
    link: "/services/cash-cow-channels"
  },
  {
    title: "Magnates Media Style",
    description: "Premium business content that helps establish authority and professional positioning.",
    features: ["Authority-building narratives", "Premium production values", "Strategic content planning", "Professional brand elevation"],
    price: "Starting at $200",
    views: "3M+",
    deals: "$300K+",
    gradient: "from-red-600 to-red-700",
    icon: Crown,
    link: "/services/magnates-media-style"
  },
  {
    title: "Documentary Style",
    description: "Professional documentary-style content that tells compelling stories.",
    features: ["Story development", "Cinematic production quality", "Strategic planning", "Professional storytelling"],
    price: "Starting at $200",
    views: "2M+",
    revenue: "$400K+",
    gradient: "from-red-500 to-red-600",
    icon: Film,
    link: "/services/documentary-style"
  },
  {
    title: "Faceless Videos",
    description: "Professional faceless video content that builds authority and trust.",
    features: ["Privacy-focused content strategy", "Authority-building narratives", "Professional production values", "Audience growth without exposure"],
    price: "Starting at $125",
    views: "4M+",
    subscribers: "180K+",
    gradient: "from-red-600 to-red-500",
    icon: Users,
    link: "/services/faceless-videos"
  },
  {
    title: "Thumbnails",
    description: "Professional thumbnail design that helps improve click-through rates.",
    features: ["Psychology-driven design", "A/B testing support", "Professional graphics", "Conversion-focused layouts"],
    price: "Starting at $25",
    ctr: "150%",
    views: "3M+",
    gradient: "from-red-500 to-red-700",
    icon: Image,
    link: "/services/thumbnails"
  },
  {
    title: "Motion Graphics",
    description: "Professional motion graphics that enhance your content and brand.",
    features: ["Strategic animation", "Technical excellence", "Creative innovation", "Professional quality"],
    price: "Starting at $150",
    views: "2M+",
    conversions: "$300K+",
    gradient: "from-red-600 to-red-500",
    icon: Layers,
    link: "/services/motion-graphics"
  }
];

const Services = () => {
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
        <div className="osmo-particle" style={{left: '20%', animationDelay: '1s'}}></div>
        <div className="osmo-particle" style={{left: '30%', animationDelay: '3s'}}></div>
        <div className="osmo-particle" style={{left: '40%', animationDelay: '5s'}}></div>
        <div className="osmo-particle" style={{left: '50%', animationDelay: '7s'}}></div>
        <div className="osmo-particle" style={{left: '60%', animationDelay: '9s'}}></div>
        <div className="osmo-particle" style={{left: '70%', animationDelay: '11s'}}></div>
        <div className="osmo-particle" style={{left: '80%', animationDelay: '13s'}}></div>
        <div className="osmo-particle" style={{left: '90%', animationDelay: '15s'}}></div>
      </div>

      <Navigation />
      
      <main className="pt-20 sm:pt-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Human-Centered Header */}
          <motion.div 
            className="text-center mb-16" 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ type: 'spring', stiffness: 80, damping: 18 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-red-100 hover:bg-red-100 transition-colors duration-300">
              <Film className="w-4 h-4" />
              Professional Video Production Services
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Professional Video Production
              <span className="text-red-600 block">That Delivers Results</span>
            </h1>
            <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto leading-relaxed mb-8">
              We provide professional video editing services that help creators improve their content quality and reach. Our team has completed <span className="font-bold text-black">500+ projects</span> for <span className="font-bold text-black">200+ clients</span> across various platforms.
            </p>
            
            {/* Competitive Advantages */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold border border-red-100">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                30-Day Money-Back Guarantee
              </div>
              <div className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold border border-red-100">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                24-Hour Delivery
              </div>
              <div className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold border border-red-100">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Unlimited Revisions
              </div>
              <div className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold border border-red-100">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Starting at $75
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { number: "500+", label: "Projects Completed", icon: TrendingUp, color: "text-red-600" },
                { number: "200+", label: "Happy Clients", icon: Users, color: "text-red-600" },
                { number: "24h", label: "Average Delivery Time", icon: Zap, color: "text-red-600" },
                { number: "100%", label: "Client Satisfaction", icon: Star, color: "text-red-600" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-white rounded-xl border border-red-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 80, damping: 18, delay: index * 0.1 }}
                >
                  <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
                  <div className="text-xs sm:text-sm text-black">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/start-project">
                <Button variant="member" size="xl" className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  <Play className="w-5 h-5 mr-2" />
                  Start Your Project
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="about" size="xl" className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  See What We've Made
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Our Services - Human Touch */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-12 sm:mb-16 w-full" 
            initial="hidden" 
            animate="visible" 
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 18, delay: index * 0.1 }}
              >
                <Link to={service.link} className="h-full">
                  <Card className="group h-full flex flex-col bg-white border border-red-200 hover:border-red-500 hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden hover:scale-[1.02] hover:bg-gradient-to-br hover:from-white hover:to-red-50/20 min-h-[400px]">
                    <div className="relative p-4 lg:p-6 flex flex-col h-full">
                      {/* Icon & Stats */}
                      <div className="flex items-center justify-between mb-3 lg:mb-4">
                        <motion.div 
                          className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
                          initial={{ opacity: 0, scale: 0.8 }} 
                          animate={{ opacity: 1, scale: 1 }} 
                          transition={{ type: 'spring', stiffness: 80, damping: 18, delay: index * 0.2 }}
                        >
                          <service.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                        </motion.div>
                        <div className="text-right">
                          <div className="text-base lg:text-lg font-bold text-red-600 group-hover:text-red-700 transition-colors duration-300">{service.price}</div>
                          <div className="text-xs text-black group-hover:text-red-600 transition-colors duration-300">Starting from</div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg lg:text-xl font-bold text-black mb-2 lg:mb-3 group-hover:text-red-600 transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs lg:text-sm text-black mb-3 lg:mb-4 leading-relaxed flex-grow group-hover:text-red-600 transition-colors duration-300">
                        {service.description}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-2 lg:gap-3 mb-3 lg:mb-4">
                        {service.views && (
                          <div className="text-center p-2 lg:p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors duration-300">
                            <div className="text-xs lg:text-sm font-bold text-red-600">{service.views}</div>
                            <div className="text-xs text-black">Views</div>
                          </div>
                        )}
                        {service.subscribers && (
                          <div className="text-center p-2 lg:p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors duration-300">
                            <div className="text-xs lg:text-sm font-bold text-red-600">{service.subscribers}</div>
                            <div className="text-xs text-black">Subscribers</div>
                          </div>
                        )}
                        {service.revenue && (
                          <div className="text-center p-2 lg:p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors duration-300">
                            <div className="text-xs lg:text-sm font-bold text-red-600">{service.revenue}</div>
                            <div className="text-xs text-black">Revenue</div>
                          </div>
                        )}
                        {service.ctr && (
                          <div className="text-center p-2 lg:p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors duration-300">
                            <div className="text-xs lg:text-sm font-bold text-red-600">{service.ctr}</div>
                            <div className="text-xs text-black">CTR Boost</div>
                          </div>
                        )}
                      </div>

                      {/* Features */}
                      <div className="mb-3 lg:mb-4">
                        {service.features.slice(0, 2).map((feature, featureIndex) => (
                          <motion.div 
                            key={feature}
                            className="flex items-center text-xs text-black mb-1 hover:text-red-600 transition-colors duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: (index * 0.1) + (featureIndex * 0.05) }}
                          >
                            <CheckCircle className="w-3 h-3 text-red-600 mr-2 flex-shrink-0 hover:scale-110 transition-transform duration-300" />
                            <span className="font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between mt-auto pt-2 lg:pt-3 border-t border-red-200 group-hover:border-red-300 transition-colors duration-300">
                        <span className="text-xs lg:text-sm font-semibold text-red-600 group-hover:text-red-700 transition-colors duration-300">
                          Tell Me More
                        </span>
                        <ArrowRight className="w-4 h-4 text-black group-hover:text-red-600 group-hover:translate-x-2 transition-all duration-500" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* YouTube Shorts Style Process Section */}
          <motion.div 
            className="mb-16" 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.3 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">How We Make Videos Go Viral</h2>
              <p className="text-lg text-black max-w-2xl mx-auto">
                Our proven 4-step process that turns your content into viral hits
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  step: "01", 
                  title: "Viral Analysis", 
                  desc: "We analyze what makes content go viral in your niche", 
                  icon: TrendingUp,
                  color: "bg-red-50",
                  iconColor: "text-red-600"
                },
                { 
                  step: "02", 
                  title: "Hook Creation", 
                  desc: "Crafting irresistible hooks that stop the scroll", 
                  icon: Zap,
                  color: "bg-red-50",
                  iconColor: "text-red-600"
                },
                { 
                  step: "03", 
                  title: "Viral Editing", 
                  desc: "Professional editing optimized for algorithm success", 
                  icon: Star,
                  color: "bg-red-50",
                  iconColor: "text-red-600"
                },
                { 
                  step: "04", 
                  title: "Launch & Scale", 
                  desc: "24h delivery with ongoing optimization support", 
                  icon: ArrowRight,
                  color: "bg-red-50",
                  iconColor: "text-red-600"
                }
              ].map((item, index) => (
                <motion.div 
                  key={item.step}
                  className={`${item.color} p-6 rounded-xl border border-red-200 text-center`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 80, damping: 18, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                  </div>
                  <div className="text-sm font-bold text-black mb-2">{item.step}</div>
                  <h3 className="text-lg font-bold text-black mb-3">{item.title}</h3>
                  <p className="text-sm text-black leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Let's Create Something Amazing Together */}
          <motion.div 
            className="text-center" 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.5 }}
          >
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-white relative overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Get Started?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Join 200+ creators who trust us with their video production needs. 
                  Let's work together to improve your content quality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link to="/start-project">
                    <Button 
                      variant="member"
                      size="xl" 
                      className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Start Your Project
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
    </div>
  );
};

export default Services;