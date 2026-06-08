import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, DollarSign, Play, Clock, Eye, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import VideoPlayer from "@/components/VideoPlayer";

const caseStudies = [
  {
    id: 1,
    title: "PREMIUM - Magnates Media Style Edit",
    industry: "Magnates Style",
    challenge: "Needed high-end visual identity to attract premium enterprise clients.",
    solution: "Engineered documentary-style cinematic edits that communicate authority and exclusivity.",
    results: {
      subscribers: "850K+",
      views: "2.1M",
      revenue: "$300K+",
      timeframe: "5 months"
    },
    metrics: [
      { label: "Total Views", value: "2.1M", icon: Eye, color: "blue" },
      { label: "Premium Deals", value: "$300K+", icon: DollarSign, color: "green" },
      { label: "Engagement", value: "8.5%", icon: TrendingUp, color: "purple" }
    ],
    testimonial: "This video positioned our client as a thought leader, generating $300K+ in premium deals.",
    vimeoId: "1066089898",
    thumbnailSrc: "/videos/thumbnails/magnates-media-thumbnail.jpg"
  },
  {
    id: 2,
    title: "ELITE - Alex Hormozi style Talking Head Video",
    industry: "Talking Head Script",
    challenge: "Struggled with market perception while scaling premium target deal sizes.",
    solution: "Developed cinematic, performance-driven asset structures to elevate brand exclusivity.",
    results: {
      subscribers: "920K+",
      views: "1.8M",
      revenue: "$500K+",
      timeframe: "4 months"
    },
    metrics: [
      { label: "Total Views", value: "1.8M", icon: Eye, color: "blue" },
      { label: "High-Value Deals", value: "$500K+", icon: DollarSign, color: "green" },
      { label: "Conversion", value: "12.3%", icon: Zap, color: "orange" }
    ],
    testimonial: "This video elevated our client's brand to premium status, closing $500K+ in high-value deals.",
    vimeoId: "1066091977",
    thumbnailSrc: "/videos/thumbnails/magnates-media-thumbnail.jpg"
  },
  {
    id: 3,
    title: "LUXURY - Stop selling to poor people in rich fonts.",
    industry: "Magnates Style",
    challenge: "Needed direct conversion channels targeting ultra-high-net-worth customer segments.",
    solution: "Crafted luxury-tier visual architectures focused entirely on brand legacy and exclusivity.",
    results: {
      subscribers: "1.2M+",
      views: "2.9M",
      revenue: "$800K+",
      timeframe: "6 months"
    },
    metrics: [
      { label: "Total Views", value: "2.9M", icon: Eye, color: "blue" },
      { label: "Luxury Deals", value: "$800K+", icon: DollarSign, color: "green" },
      { label: "Premium Reach", value: "1.2M+", icon: Users, color: "indigo" }
    ],
    testimonial: "Our highest-value video that positioned the client as a luxury brand, generating $800K+ in deals.",
    vimeoId: "1066091632",
    thumbnailSrc: "/videos/thumbnails/magnates-media-thumbnail.jpg"
  }
];

const fadeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const CaseStudiesSection = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Enhanced Header Section */}
        <motion.div
          className="text-center mb-20 sm:mb-28 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-1.5 mb-6">
            <Award className="w-4 h-4 text-red-600" />
            <span className="text-xs font-bold text-red-600 tracking-wider uppercase">Proven Performance</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-black tracking-tight uppercase leading-tight">
            Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">Case Histories</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-6 mb-6" />
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Real parameters, authenticated performance analytics, and growth execution pipelines achieved across active partner operations.
          </p>
        </motion.div>

        {/* Enhanced Case Studies Grid */}
        <div className="space-y-24 sm:space-y-32 lg:space-y-40">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            >
              
              {/* Enhanced Content Layer */}
              <div className={`flex flex-col space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                {/* Badge & Title Group */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[11px] font-black tracking-wider text-red-600 uppercase bg-red-50 border border-red-200 px-3 py-1.5 rounded-lg">
                      {study.industry}
                    </span>
                    
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight uppercase leading-tight">
                    {study.title.split(' - ')[0]}
                    <span className="block text-lg sm:text-xl font-medium text-gray-500 mt-2">
                      {study.title.split(' - ')[1]}
                    </span>
                  </h3>
                </div>

                {/* Enhanced Metrics Dashboard */}
                <div className="grid grid-cols-3 gap-4 bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center space-y-2">
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-${metric.color}-50 mx-auto mb-2`}>
                        <metric.icon className={`w-5 h-5 text-${metric.color}-600`} />
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-black">{metric.value}</div>
                      <div className="text-[10px] font-bold text-gray-500 tracking-wider uppercase">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Enhanced Challenge & Solution */}
                <div className="space-y-4 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-600 font-bold text-sm">!</span>
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-gray-400 uppercase tracking-wider mb-1">Challenge</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">{study.challenge}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Zap className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-gray-400 uppercase tracking-wider mb-1">Solution</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Testimonial */}
                <div className="relative bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border-l-4 border-red-600">
                  <div className="absolute top-4 right-4 text-4xl text-red-200 opacity-50">"</div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed relative z-10 font-medium">
                    {study.testimonial}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-xs font-bold text-gray-600">Verified Result</span>
                  </div>
                </div>

                {/* Enhanced CTA Button */}
                <Link to="/contact" className="block">
                  <Button 
                    variant="outline" 
                    className="w-full group border-2 border-black bg-white text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 font-extrabold uppercase tracking-wider text-xs px-6 py-6 rounded-xl flex items-center justify-center gap-3 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <span>Get Similar Growth Strategy</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Enhanced Video Component Layer */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative group rounded-2xl overflow-hidden bg-black shadow-2xl transition-all duration-500 hover:shadow-red-500/20 hover:scale-[1.02]">
                  
                  {/* Video Player with Vimeo */}
                  <VideoPlayer
                    vimeoId={study.vimeoId}
                    title={study.title}
                    aspectRatio="video"
                    hoverToPlay={true}
                    showControls={true}
                    loop={true}
                    muted={false}
                    autoPlay={false}
                    className="w-full"
                  />
                  
                  {/* Enhanced Floating Badges */}
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-full flex items-center gap-2 z-20 pointer-events-none">
                    <Play className="w-3 h-3 text-red-500 fill-red-500" />
                    <span className="text-xs font-bold tracking-wider">CASE STUDY</span>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1.5 rounded-full z-20 pointer-events-none">
                    <span className="text-xs font-black tracking-wider">#{study.id}</span>
                  </div>
                  
                  {/* Enhanced Bottom Results Overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/90 to-transparent p-5 pt-14 z-10 pointer-events-none">
                    <div className="grid grid-cols-4 gap-3 text-center border-t border-white/20 pt-4">
                      <div className="transform transition-transform group-hover:scale-105">
                        <div className="text-sm sm:text-base font-black text-white tracking-tight">{study.results.subscribers}</div>
                        <div className="text-[9px] font-bold text-red-500 tracking-wider uppercase mt-1">Subscribers</div>
                      </div>
                      <div className="transform transition-transform group-hover:scale-105">
                        <div className="text-sm sm:text-base font-black text-white tracking-tight">{study.results.views}</div>
                        <div className="text-[9px] font-bold text-red-500 tracking-wider uppercase mt-1">Views</div>
                      </div>
                      <div className="transform transition-transform group-hover:scale-105">
                        <div className="text-sm sm:text-base font-black text-white tracking-tight">{study.results.revenue}</div>
                        <div className="text-[9px] font-bold text-red-500 tracking-wider uppercase mt-1">Revenue</div>
                      </div>
                      <div className="transform transition-transform group-hover:scale-105">
                        <div className="text-sm sm:text-base font-black text-white tracking-tight flex items-center justify-center gap-1">
                          <Clock className="w-3 h-3" />
                          {study.results.timeframe}
                        </div>
                        <div className="text-[9px] font-bold text-red-500 tracking-wider uppercase mt-1">Timeline</div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/0 via-transparent to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Enhanced Persistent Footer CTA */}
        <motion.div
          className="text-center mt-28 sm:mt-36"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-800 text-white rounded-3xl shadow-2xl overflow-hidden relative group">
            {/* Animated Background Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/10 animate-pulse" />
            </div>
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            
            <div className="p-8 sm:p-12 md:p-16 relative z-10 max-w-4xl mx-auto space-y-8">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <Zap className="w-4 h-4 text-red-500" />
                  <span className="text-xs font-bold tracking-wider uppercase">Limited Availability</span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-tight">
                  Ready to Construct Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
                    Growth Pipeline?
                  </span>
                </h3>
                
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mt-6">
                  Integrate our dedicated asset optimization mechanics directly with your channel matrix to generate predictable, high-retention reach systems.
                </p>
                
                <div className="pt-6">
                  <Link to="/start-project" className="inline-block w-full sm:w-auto">
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-700 hover:to-red-600 transition-all duration-300 font-extrabold uppercase tracking-wider text-xs px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group"
                    >
                      <span>Start Your Growth System</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                
                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-4 mt-8 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Award className="w-3 h-3" />
                    <span>30-Day Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Users className="w-3 h-3" />
                    <span>500+ Happy Clients</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

      </div>
    </section>
  );
};

export default CaseStudiesSection;