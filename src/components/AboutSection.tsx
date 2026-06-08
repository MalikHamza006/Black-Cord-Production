import { motion } from "framer-motion";
// ...existing code...
const leftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 18 } },
};
const rightVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 18 } },
};
const fadeVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 18 } },
};

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden osmo-bg">
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
        <div className="osmo-particle" style={{left: '18%', animationDelay: '1.5s'}}></div>
        <div className="osmo-particle" style={{left: '28%', animationDelay: '3.5s'}}></div>
        <div className="osmo-particle" style={{left: '38%', animationDelay: '5.5s'}}></div>
        <div className="osmo-particle" style={{left: '48%', animationDelay: '7.5s'}}></div>
        <div className="osmo-particle" style={{left: '58%', animationDelay: '9.5s'}}></div>
        <div className="osmo-particle" style={{left: '68%', animationDelay: '11.5s'}}></div>
        <div className="osmo-particle" style={{left: '78%', animationDelay: '13.5s'}}></div>
        <div className="osmo-particle" style={{left: '88%', animationDelay: '15.5s'}}></div>
        <div className="osmo-particle" style={{left: '23%', animationDelay: '2.5s'}}></div>
        <div className="osmo-particle" style={{left: '33%', animationDelay: '4.5s'}}></div>
        <div className="osmo-particle" style={{left: '43%', animationDelay: '6.5s'}}></div>
        <div className="osmo-particle" style={{left: '53%', animationDelay: '8.5s'}}></div>
        <div className="osmo-particle" style={{left: '63%', animationDelay: '10.5s'}}></div>
        <div className="osmo-particle" style={{left: '73%', animationDelay: '12.5s'}}></div>
        <div className="osmo-particle" style={{left: '83%', animationDelay: '14.5s'}}></div>
        <div className="osmo-particle" style={{left: '93%', animationDelay: '16.5s'}}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 px-4 sm:px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start">
    {/* Left Content */}
    <motion.div className="space-y-6 sm:space-y-8" initial="hidden" animate="visible" variants={leftVariants}>
      {/* Main Heading */}
      <div className="space-y-3">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              We're Not Just Editors
            </span>
            <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 300 4" preserveAspectRatio="none">
              <line x1="0" y1="2" x2="300" y2="2" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="6 4"/>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444"/>
                  <stop offset="100%" stopColor="#dc2626"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <br />
          <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
            We're Your Creative Partners
          </span>
        </h2>
        
        {/* Decorative element */}
        <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-transparent rounded-full"></div>
      </div>

      {/* Description Text */}
      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg border-l-4 border-red-500/30 pl-5">
        Here's the thing — we've been where you are. We know the struggle of creating content that actually gets watched. 
        That's why we don't just edit videos; <span className="text-foreground font-medium">we craft stories</span> that hook viewers from the first second and keep them coming back for more.
      </p>

      {/* Benefits List */}
      <div className="space-y-5">
        <motion.div 
          className="flex items-start gap-4 group" 
          initial="hidden" 
          animate="visible" 
          variants={fadeVariants} 
          transition={{ delay: 0.2 }}
        >
          <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <span className="text-foreground font-semibold">We make videos that actually make money</span>
            <p className="text-sm text-muted-foreground/80 mt-1">Content that drives conversions and boosts your ROI</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-start gap-4 group" 
          initial="hidden" 
          animate="visible" 
          variants={fadeVariants} 
          transition={{ delay: 0.4 }}
        >
          <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-pink-400 to-rose-500 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <span className="text-foreground font-semibold">TikTok & Instagram content that goes viral</span>
            <p className="text-sm text-muted-foreground/80 mt-1">Optimized for algorithms to maximize reach and engagement</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-start gap-4 group" 
          initial="hidden" 
          animate="visible" 
          variants={fadeVariants} 
          transition={{ delay: 0.6 }}
        >
          <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <span className="text-foreground font-semibold">Documentary-style videos that keep people watching</span>
            <p className="text-sm text-muted-foreground/80 mt-1">Storytelling that increases watch time and retention</p>
          </div>
        </motion.div>
      </div>

      {/* Optional Stats Bar */}
      <motion.div 
        className="pt-4 flex flex-wrap gap-6 border-t border-border/50"
        initial="hidden"
        animate="visible"
        variants={fadeVariants}
        transition={{ delay: 0.8 }}
      >
        <div>
          <div className="text-2xl font-bold text-red-500">500+</div>
          <div className="text-xs text-muted-foreground">Happy Clients</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-red-500">10M+</div>
          <div className="text-xs text-muted-foreground">Views Generated</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-red-500">98%</div>
          <div className="text-xs text-muted-foreground">Retention Rate</div>
        </div>
      </motion.div>
    </motion.div>

          {/* Right Content - Video Showcase */}
          <motion.div className="relative scale-100 sm:scale-105 lg:scale-110 xl:scale-125 order-first md:order-last" initial="hidden" animate="visible" variants={rightVariants}>
            <div className="aspect-video bg-gradient-to-br from-card to-accent/5 rounded-2xl border-2 border-border/50 flex items-center justify-center group hover:border-red-500/50 transition-smooth glow-box overflow-hidden shadow-2xl">
              {/* Video Element */}
              {/* Vimeo Embed */}
<div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
  <iframe 
    src="https://player.vimeo.com/video/1066090855?autoplay=1&muted=1&loop=0&byline=0&portrait=0&title=0"
    className="absolute top-0 left-0 w-full h-full"
    frameBorder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
    title="Petra & Lukáš Wedding"
  />
</div> 
              {/* Floating elements */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-red-500/15 rounded-full animate-float delay-500"></div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-red-400/15 rounded-full animate-float delay-1000"></div>
              <div className="absolute top-1/2 left-6 w-8 h-8 bg-red-300/15 rounded-full animate-float delay-1500"></div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div className="mt-24 text-center max-w-5xl mx-auto" initial="hidden" animate="visible" variants={fadeVariants}>
          <blockquote className="text-2xl lg:text-3xl text-muted-foreground leading-relaxed italic font-medium">
            "Black Cord Production was born from working with top creators who needed consistent, 
            high-quality video content. We've perfected the art of creating viral videos that not only 
            get millions of views but actually convert viewers into loyal subscribers and customers."
          </blockquote>
          <div className="mt-8 flex justify-center items-center gap-6">
            <div className="text-lg font-semibold text-muted-foreground">Trusted by creators worldwide</div>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-500"></div>
              <div className="w-2 h-2 bg-red-300 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;