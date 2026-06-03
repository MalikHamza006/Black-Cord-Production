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

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div className="space-y-4 sm:space-y-6" initial="hidden" animate="visible" variants={leftVariants}>
            <h2 className="section-text text-foreground leading-tight">
              <span className="text-red-600">We're Not Just Editors</span>
              <br />
              We're Your Creative Partners
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Here's the thing - we've been where you are. We know the struggle of creating content that actually gets watched. 
              That's why we don't just edit videos; we craft stories that hook viewers from the first second and keep them coming back for more.
            </p>
            <div className="space-y-4">
              <motion.div className="flex items-center gap-3" initial="hidden" animate="visible" variants={fadeVariants} transition={{ delay: 0.2 }}>
                <div className="w-6 h-6 text-green-400">✓</div>
                <span className="text-muted-foreground">We make videos that actually make money</span>
              </motion.div>
              <motion.div className="flex items-center gap-3" initial="hidden" animate="visible" variants={fadeVariants} transition={{ delay: 0.4 }}>
                <div className="w-6 h-6 text-green-400">✓</div>
                <span className="text-muted-foreground">TikTok & Instagram content that goes viral</span>
              </motion.div>
              <motion.div className="flex items-center gap-3" initial="hidden" animate="visible" variants={fadeVariants} transition={{ delay: 0.6 }}>
                <div className="w-6 h-6 text-green-400">✓</div>
                <span className="text-muted-foreground">Documentary-style videos that keep people watching</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Video Showcase */}
          <motion.div className="relative scale-100 sm:scale-105 lg:scale-110 xl:scale-125 order-first md:order-last" initial="hidden" animate="visible" variants={rightVariants}>
            <div className="aspect-video bg-gradient-to-br from-card to-accent/5 rounded-2xl border-2 border-border/50 flex items-center justify-center group hover:border-red-500/50 transition-smooth glow-box overflow-hidden shadow-2xl">
              {/* Video Element */}
              <video 
                className="w-full h-full object-cover rounded-2xl"
                controls
                poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4MCIgaGVpZ2h0PSI3MjAiIHZpZXdCb3g9IjAgMCAxMjgwIDcyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyODAiIGhlaWdodD0iNzIwIiBmaWxsPSIjMDAwMDAwIi8+Cjx0ZXh0IHg9IjY0MCIgeT0iMzYwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNDgiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJSQU5EIFZJREVPIFNIT1dDQVNFPC90ZXh0Pgo8L3N2Zz4K"
              >
                <source src="/videos/portfolio-showcase.mp4" type="video/mp4" />
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Overlay elements */}
              <div className="absolute top-6 left-6 text-white bg-black/70 px-5 py-3 rounded-full backdrop-blur-sm">
                <span className="text-lg font-bold">Portfolio Showcase</span>
              </div>
              
              <div className="absolute bottom-6 right-6 text-white bg-black/70 px-5 py-3 rounded-full backdrop-blur-sm">
                <span className="text-lg font-semibold">500+ success stories</span>
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