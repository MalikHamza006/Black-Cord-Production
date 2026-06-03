// import { motion } from "framer-motion";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";
// import { Link } from "react-router-dom";
// import VideoPlayer from "@/components/VideoPlayer";

// const caseStudies = [
//   {
//     id: 1,
//     title: "PREMIUM - Industry Authority",
//     client: "Premium Client",
//     industry: "Magnates Style",
//     challenge: "Client needed to position themselves as a thought leader in their industry and attract premium-tier clients.",
//     solution: "Created high-end Magnates-style documentary content that showcased expertise and delivered industry insights.",
//     results: {
//       subscribers: "850K+",
//       views: "2.1M",
//       revenue: "$300K+",
//       timeframe: "5 months"
//     },
//     metrics: [
//       { label: "Total Views", value: "2.1M", icon: TrendingUp },
//       { label: "Premium Deals", value: "$300K+", icon: DollarSign },
//       { label: "Engagement Rate", value: "8.5%", icon: Users }
//     ],
//     testimonial: "This video positioned our client as a thought leader, generating $300K+ in premium deals.",
//     startDate: "January 2024",
//     clientRole: "Industry Authority",
//     image: "/case-studies/magnates-documentary.jpg",
//     videoSrc: "/videos/magnates-media-documentary.mp4",
//     thumbnailSrc: "/videos/thumbnails/magnates-media-thumbnail.jpg"
//   },
//   {
//     id: 2,
//     title: "ELITE - Brand Elevation",
//     client: "Elite Client",
//     industry: "Magnates Style",
//     challenge: "Client needed to elevate brand perception and close high-value deals with premium-tier clients.",
//     solution: "Developed cinematic Magnates-style content that elevated brand status and established premium positioning.",
//     results: {
//       subscribers: "920K+",
//       views: "1.8M",
//       revenue: "$500K+",
//       timeframe: "4 months"
//     },
//     metrics: [
//       { label: "Total Views", value: "1.8M", icon: TrendingUp },
//       { label: "High-Value Deals", value: "$500K+", icon: DollarSign },
//       { label: "Conversion Rate", value: "12.3%", icon: Users }
//     ],
//     testimonial: "This video elevated our client's brand to premium status, closing $500K+ in high-value deals.",
//     startDate: "March 2024",
//     clientRole: "Brand Authority",
//     image: "/case-studies/magnates-documentary.jpg",
//     videoSrc: "/videos/magnates-media-documentary.mp4",
//     thumbnailSrc: "/videos/thumbnails/magnates-media-thumbnail.jpg"
//   },
//   {
//     id: 3,
//     title: "LUXURY - Luxury Positioning",
//     client: "Luxury Client",
//     industry: "Magnates Style",
//     challenge: "Client needed to position as a luxury brand and attract ultra-high-net-worth premium-tier clients.",
//     solution: "Crafted premium Magnates-style documentary showcasing luxury positioning and brand exclusivity.",
//     results: {
//       subscribers: "1.2M+",
//       views: "2.9M",
//       revenue: "$800K+",
//       timeframe: "6 months"
//     },
//     metrics: [
//       { label: "Total Views", value: "2.9M", icon: TrendingUp },
//       { label: "Luxury Deals", value: "$800K+", icon: DollarSign },
//       { label: "Premium Reach", value: "1.2M+", icon: Users }
//     ],
//     testimonial: "Our highest-value video that positioned the client as a luxury brand, generating $800K+ in deals.",
//     startDate: "February 2024",
//     clientRole: "Luxury Brand Authority",
//     image: "/case-studies/magnates-documentary.jpg",
//     videoSrc: "/videos/magnates-media-documentary.mp4",
//     thumbnailSrc: "/videos/thumbnails/magnates-media-thumbnail.jpg"
//   }
// ];

// const CaseStudiesSection = () => {
//   return (
//     <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-neutral-50 relative overflow-hidden osmo-bg">
//       {/* Gradient Mesh Background */}
//       <div className="gradient-mesh"></div>
      
//       {/* Advanced Floating Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="osmo-floating top-20 left-14 w-12 h-12 border border-red-600/10 rounded-full magnetic-element"></div>
//         <div className="osmo-floating top-32 right-18 w-16 h-16 bg-red-600/08 rounded-lg magnetic-element"></div>
//         <div className="osmo-floating bottom-24 left-1/4 w-10 h-10 border border-red-600/12 rounded-full magnetic-element"></div>
//         <div className="osmo-floating bottom-20 right-1/3 w-14 h-14 bg-red-600/06 rounded-lg magnetic-element"></div>
//         <div className="osmo-floating top-1/2 left-18 w-8 h-8 border border-red-600/08 rounded-full magnetic-element"></div>
//         <div className="osmo-floating top-1/3 right-22 w-12 h-12 bg-red-600/10 rounded-lg magnetic-element"></div>
//         <div className="osmo-floating top-2/3 left-1/2 w-6 h-6 border border-red-600/15 rounded-full magnetic-element"></div>
//         <div className="osmo-floating bottom-1/3 right-1/5 w-18 h-18 bg-red-600/04 rounded-lg magnetic-element"></div>
        
//         {/* Advanced Particles */}
//         <div className="osmo-particle" style={{left: '14%', animationDelay: '2s'}}></div>
//         <div className="osmo-particle" style={{left: '24%', animationDelay: '4s'}}></div>
//         <div className="osmo-particle" style={{left: '34%', animationDelay: '6s'}}></div>
//         <div className="osmo-particle" style={{left: '44%', animationDelay: '8s'}}></div>
//         <div className="osmo-particle" style={{left: '54%', animationDelay: '10s'}}></div>
//         <div className="osmo-particle" style={{left: '64%', animationDelay: '12s'}}></div>
//         <div className="osmo-particle" style={{left: '74%', animationDelay: '14s'}}></div>
//         <div className="osmo-particle" style={{left: '84%', animationDelay: '16s'}}></div>
//         <div className="osmo-particle" style={{left: '94%', animationDelay: '18s'}}></div>
//       </div>

//       <div className="container mx-auto max-w-7xl relative z-10">
//         {/* Header */}
//         <motion.div
//           className="text-center mb-12 sm:mb-16"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ type: "spring", stiffness: 80, damping: 18 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
//             Success <span className="text-red-600">Stories</span>
//           </h2>
//           <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
//             Real results from real clients. See how we've helped businesses achieve extraordinary growth.
//           </p>
//         </motion.div>

//         {/* Case Studies */}
//         <div className="space-y-8 sm:space-y-12 lg:space-y-16">
//           {caseStudies.map((study, index) => (
//             <motion.div
//               key={study.id}
//               className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ type: "spring", stiffness: 80, damping: 18, delay: index * 0.2 }}
//             >
//               {/* Content */}
//               <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} flex h-full order-2 lg:order-none`}>
//                 <Card className="h-full w-full bg-white border border-neutral-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg interactive-glow flex flex-col">
//                   <div className="p-4 sm:p-6 lg:p-8 flex flex-col h-full">
//                     {/* Header */}
//                     <div className="mb-4 sm:mb-6">
//                       <div className="text-xs sm:text-sm text-red-600 font-semibold mb-2">{study.industry}</div>
//                       <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2 leading-tight">{study.title}</h3>
//                       <div className="text-sm sm:text-base text-neutral-600">Client: {study.client}</div>
//                     </div>

//                     {/* Challenge & Solution */}
//                     <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-4 flex-grow">
//                       <div>
//                         <h4 className="font-semibold text-black mb-1 sm:mb-2 text-sm sm:text-base">Challenge:</h4>
//                         <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">{study.challenge}</p>
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-black mb-1 sm:mb-2 text-sm sm:text-base">Solution:</h4>
//                         <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">{study.solution}</p>
//                       </div>
//                     </div>

//                     {/* Metrics */}
//                     <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6">
//                       {study.metrics.map((metric, metricIndex) => (
//                         <div key={metricIndex} className="text-center p-2 sm:p-3 bg-neutral-50 rounded-lg">
//                           <metric.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-red-600 mx-auto mb-1 sm:mb-2" />
//                           <div className="text-sm sm:text-base lg:text-lg font-bold text-black">{metric.value}</div>
//                           <div className="text-[10px] sm:text-xs text-neutral-600 leading-tight">{metric.label}</div>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Testimonial */}
//                     <blockquote className="text-sm sm:text-base text-neutral-700 italic mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 rounded-lg border-l-4 border-red-500 leading-relaxed">
//                       "{study.testimonial}"
//                     </blockquote>

//                     {/* CTA */}
//                     <div className="mt-auto">
//                       <Link to="/contact">
//                         <Button variant="outline" className="w-full group text-sm sm:text-base">
//                           Get Similar Results
//                           <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                         </Button>
//                       </Link>
//                     </div>
//                   </div>
//                 </Card>
//               </div>

//               {/* Visual */}
//               <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} flex h-full order-1 lg:order-none`}>
//                 <div className="relative overflow-hidden group h-full w-full flex flex-col min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
//                   {study.videoSrc ? (
//                     <VideoPlayer
//                       src={study.videoSrc}
//                       poster={study.thumbnailSrc}
//                       fallbackSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
//                       className="rounded-lg sm:rounded-xl h-full w-full object-cover"
//                       aspectRatio="video"
//                       autoPlay={false}
//                       muted={true}
//                       showControls={true}
//                       loop={true}
//                     />
//                   ) : (
//                     <div className="aspect-video bg-gradient-to-br from-red-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white h-full w-full">
//                       {/* Placeholder for cases without video */}
//                       <div className="text-center p-4">
//                         <div className="text-4xl sm:text-5xl lg:text-6xl mb-2 sm:mb-4">📈</div>
//                         <div className="text-base sm:text-lg lg:text-xl font-semibold">{study.title}</div>
//                         <div className="text-red-100 mt-1 sm:mt-2 text-sm sm:text-base">Case Study #{study.id}</div>
//                       </div>
//                     </div>
//                   )}
                  
//                   {/* Success badge */}
//                   <div className="absolute top-2 left-2 sm:top-3 sm:left-3 lg:top-4 lg:left-4 bg-red-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs lg:text-sm font-semibold z-10">
//                     {study.industry}
//                   </div>
                  
//                   {/* Views badge */}
//                   <div className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 bg-black/70 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs lg:text-sm z-10">
//                     {study.results.views}
//                   </div>
                  
//                   {/* Results Overlay */}
//                   <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 lg:bottom-4 lg:left-4 lg:right-4 bg-black/50 backdrop-blur-sm rounded-lg p-2 sm:p-3 lg:p-4 text-white z-10">
//                     <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 text-center">
//                       <div>
//                         <div className="text-sm sm:text-base lg:text-lg font-bold">{study.results.subscribers}</div>
//                         <div className="text-[10px] sm:text-xs text-gray-300">New Followers</div>
//                       </div>
//                       <div>
//                         <div className="text-sm sm:text-base lg:text-lg font-bold">{study.results.views}</div>
//                         <div className="text-[10px] sm:text-xs text-gray-300">Total Views</div>
//                       </div>
//                       <div>
//                         <div className="text-sm sm:text-base lg:text-lg font-bold">{study.results.revenue}</div>
//                         <div className="text-[10px] sm:text-xs text-gray-300">Brand Deals</div>
//                       </div>
//                       <div>
//                         <div className="text-sm sm:text-base lg:text-lg font-bold">{study.results.timeframe}</div>
//                         <div className="text-[10px] sm:text-xs text-gray-300">Timeframe</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <motion.div
//           className="text-center mt-16"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.5 }}
//         >
//           <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white border-0 interactive-glow">
//             <div className="p-8">
//               <h3 className="text-2xl font-bold mb-4">Ready to Create Your Success Story?</h3>
//               <p className="text-red-100 mb-6 max-w-2xl mx-auto">
//                 Join our growing list of successful clients and start your journey to viral content and increased revenue.
//               </p>
//               <Link to="/start-project">
//                 <Button variant="secondary" size="lg" className="bg-white text-red-600 hover:bg-red-50">
//                   Start Your Project
//                   <ArrowRight className="w-4 h-4 ml-2" />
//                 </Button>
//               </Link>
//             </div>
//           </Card>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudiesSection;





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