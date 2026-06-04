import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, DollarSign, Play } from "lucide-react";
import { Link } from "react-router-dom";
import VideoPlayer from "@/components/VideoPlayer";

const caseStudies = [
  {
    id: 1,
    title: "PREMIUM - Industry Authority Strategy",
    client: "Premium Client",
    industry: "Magnates Style",
    challenge: "Lacked structural authority positioning required to close premium enterprise accounts.",
    solution: "Engineered high-end, documentary-style content pipelines delivering deep industry insights.",
    results: {
      subscribers: "850K+",
      views: "2.1M",
      revenue: "$300K+",
      timeframe: "5 months"
    },
    metrics: [
      { label: "Total Views", value: "2.1M", icon: TrendingUp },
      { label: "Premium Deals", value: "$300K+", icon: DollarSign },
      { label: "Engagement Rate", value: "8.5%", icon: Users }
    ],
    testimonial: "This video positioned our client as a thought leader, generating $300K+ in premium deals.",
    videoSrc: "/videos/magnates-media-documentary.mp4",
    thumbnailSrc: "/videos/thumbnails/magnates-media-thumbnail.jpg"
  },
  {
    id: 2,
    title: "ELITE - Enterprise Brand Elevation",
    client: "Elite Client",
    industry: "Magnates Style",
    challenge: "Struggled with market perception while scaling premium target deal sizes.",
    solution: "Developed cinematic, performance-driven asset structures to elevate brand exclusivity.",
    results: {
      subscribers: "920K+",
      views: "1.8M",
      revenue: "$500K+",
      timeframe: "4 months"
    },
    metrics: [
      { label: "Total Views", value: "1.8M", icon: TrendingUp },
      { label: "High-Value Deals", value: "$500K+", icon: DollarSign },
      { label: "Conversion Rate", value: "12.3%", icon: Users }
    ],
    testimonial: "This video elevated our client's brand to premium status, closing $500K+ in high-value deals.",
    videoSrc: "/videos/magnates-media-documentary.mp4",
    thumbnailSrc: "/videos/thumbnails/magnates-media-thumbnail.jpg"
  },
  {
    id: 3,
    title: "LUXURY - Global Market Positioning",
    client: "Luxury Client",
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
      { label: "Total Views", value: "2.9M", icon: TrendingUp },
      { label: "Luxury Deals", value: "$800K+", icon: DollarSign },
      { label: "Premium Reach", value: "1.2M+", icon: Users }
    ],
    testimonial: "Our highest-value video that positioned the client as a luxury brand, generating $800K+ in deals.",
    videoSrc: "/videos/magnates-media-documentary.mp4",
    thumbnailSrc: "/videos/thumbnails/magnates-media-thumbnail.jpg"
  }
];

const CaseStudiesSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      
      {/* MINIMALIST SUBTLE RASTER BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* HEADER */}
        <motion.div
          className="text-left mb-16 sm:mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="text-xs font-bold text-red-600 tracking-widest uppercase mb-3">Proven Performance</div>
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight uppercase leading-none">
            Verified <span className="text-red-600">Case Histories</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-black/70 leading-relaxed font-normal">
            Real parameters, authenticated performance analytics, and growth execution pipelines achieved across active partner operations.
          </p>
        </motion.div>

        {/* CASE STUDIES LIST */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: window.innerWidth > 768 ? index * 0.05 : 0 }}
            >
              
              {/* CONTENT LAYER */}
              <div className={`lg:col-span-6 flex flex-col order-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="space-y-6">
                  
                  {/* Category & Header Group */}
                  <div>
                    <div className="inline-flex items-center space-x-2 mb-2">
                      <span className="text-[10px] font-extrabold tracking-widest text-red-600 uppercase bg-red-50 border border-red-200 px-2.5 py-0.5 rounded">
                        {study.industry}
                      </span>
                      <span className="text-xs font-semibold text-zinc-500">/ Partner: {study.client}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight uppercase leading-none">
                      {study.title}
                    </h3>
                  </div>

                  {/* Primary Performance Metrics Dashboard Block */}
                  <div className="grid grid-cols-3 gap-3 bg-white border border-black rounded-xl p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    {study.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-left space-y-1">
                        <div className="flex items-center space-x-1.5">
                          <metric.icon className="w-3.5 h-3.5 text-red-600 shrink-0" />
                          <span className="text-[10px] text-zinc-500 font-bold tracking-wider uppercase truncate">{metric.label}</span>
                        </div>
                        <div className="text-lg sm:text-xl font-black text-black tracking-tight">{metric.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Scannable Challenge & Solution Protocol */}
                  <div className="space-y-3 border-l-2 border-black pl-4 py-1">
                    <p className="text-sm leading-relaxed text-black/80">
                      <strong className="text-black font-black uppercase tracking-wider text-[11px] block mb-0.5">Objective Deviation</strong>
                      {study.challenge}
                    </p>
                    <p className="text-sm leading-relaxed text-black/80">
                      <strong className="text-black font-black uppercase tracking-wider text-[11px] block mb-0.5">Execution Architecture</strong>
                      {study.solution}
                    </p>
                  </div>

                  {/* High Impact Single-Line Testimonial */}
                  <div className="text-xs sm:text-sm text-black bg-zinc-50 rounded-lg p-3 border-l-2 border-red-600 font-medium">
                    "{study.testimonial}"
                  </div>

                  {/* Action Link Button */}
                  <div className="pt-2">
                    <Link to="/contact" className="inline-block w-full sm:w-auto">
                      <Button 
                        variant="outline" 
                        className="w-full group border-black text-black hover:bg-black hover:text-white transition-all duration-200 font-bold uppercase tracking-wider text-[10px] xs:text-xs px-4 xs:px-6 py-5 rounded-xl flex items-center justify-center whitespace-normal xs:whitespace-nowrap min-w-0"
                      >
                        <span className="truncate">Get Similar Growth Strategy</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform shrink-0" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* VISUAL COMPONENT LAYER */}
              <div className={`lg:col-span-6 order-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative overflow-hidden group rounded-xl bg-black border border-black shadow-lg aspect-video w-full flex flex-col justify-end">
                  
                  {/* Dynamic Video Execution */}
                  {study.videoSrc ? (
                    <div className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.015]">
                      <VideoPlayer
                        src={study.videoSrc}
                        poster={study.thumbnailSrc}
                        fallbackSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        className="w-full h-full object-cover"
                        aspectRatio="video"
                        autoPlay={false}
                        muted={true}
                        showControls={true}
                        loop={true}
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-black to-zinc-950 flex items-center justify-center text-white">
                      <div className="text-center p-6">
                        <div className="text-3xl mb-2">📊</div>
                        <div className="text-sm font-bold uppercase tracking-widest">{study.title}</div>
                      </div>
                    </div>
                  )}
                  
                  {/* Dynamic Floating Visual Playback Badges */}
                  <div className="absolute top-3 left-3 bg-black border border-zinc-800 text-white px-2.5 py-1 rounded-md flex items-center space-x-1.5 text-[10px] font-bold tracking-wider uppercase z-20 pointer-events-none">
                    <Play className="w-2.5 h-2.5 text-red-600 fill-red-600" />
                    <span>Watch Case Study</span>
                  </div>
                  
                  {/* Retained Bottom Matrix Overlay Layer */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 pt-12 z-10 pointer-events-none">
                    <div className="grid grid-cols-4 gap-2 text-center border-t border-white/20 pt-3">
                      <div>
                        <div className="text-xs sm:text-sm font-black text-white tracking-tight">{study.results.subscribers}</div>
                        <div className="text-[9px] font-bold text-red-600 tracking-wider uppercase">New Scale</div>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-black text-white tracking-tight">{study.results.views}</div>
                        <div className="text-[9px] font-bold text-red-600 tracking-wider uppercase">Gross Vol</div>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-black text-white tracking-tight">{study.results.revenue}</div>
                        <div className="text-[9px] font-bold text-red-600 tracking-wider uppercase">Pipeline</div>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-black text-white tracking-tight">{study.results.timeframe}</div>
                        <div className="text-[9px] font-bold text-red-600 tracking-wider uppercase">Duration</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* PERSISTENT FOOTER CTA ARCHITECTURE */}
        <motion.div
          className="text-center mt-24 sm:mt-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Card className="bg-black border border-black text-white rounded-2xl shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />
            <div className="p-6 sm:p-12 md:p-16 relative z-10 max-w-3xl mx-auto space-y-6">
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight uppercase leading-none">Ready to Construct Your Pipeline?</h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-normal max-w-xl mx-auto">
                Integrate our dedicated asset optimization mechanics directly with your channel matrix to generate predictable, high-retention reach systems.
              </p>
              <div className="pt-2">
                <Link to="/start-project" className="inline-block w-full sm:w-auto">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="w-full bg-white text-black hover:bg-red-600 hover:text-white transition-all duration-200 font-extrabold uppercase tracking-wider text-[10px] xs:text-xs px-6 xs:px-8 py-6 rounded-full shadow-sm hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center whitespace-normal xs:whitespace-nowrap min-w-0"
                  >
                    <span className="truncate">Start Your Growth System</span>
                    <ArrowRight className="w-4 h-4 ml-2 shrink-0" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </motion.div>

      </div>
    </section>
  );
};

export default CaseStudiesSection;