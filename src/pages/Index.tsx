import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";

import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="bg-background osmo-bg overflow-x-hidden w-full">
      {/* Gradient Mesh Background */}
      <div className="gradient-mesh"></div>
      
      {/* Advanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
      </div>

      <Navigation />

      {/* Main Content */}
      <main className="pt-20 sm:pt-24 relative z-10">
        <HeroSection />
        <AboutSection />
        <TestimonialsSection />
        <CaseStudiesSection />

        {/* Showcase Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-8 sm:mt-12 md:mt-16 px-4 sm:px-6 lg:px-8 auto-rows-fr"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="bg-white border border-neutral-200 rounded-xl p-6 sm:p-8 text-black interactive-glow flex flex-col h-full" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Cash Cow Channels</h2>
            <p className="text-sm sm:text-base text-neutral-600 flex-grow">Monetization-ready faceless videos with viral hooks and premium editing.</p>
          </motion.div>
          <motion.div className="bg-white border border-neutral-200 rounded-xl p-6 sm:p-8 text-black interactive-glow flex flex-col h-full" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Magnates Media Style</h2>
            <p className="text-sm sm:text-base text-neutral-600 flex-grow">Business documentaries with cinematic storytelling and high retention.</p>
          </motion.div>
          <motion.div className="bg-white border border-neutral-200 rounded-xl p-6 sm:p-8 text-black interactive-glow flex flex-col h-full md:col-span-2 lg:col-span-1" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">YouTube Shorts & TikTok</h2>
            <p className="text-sm sm:text-base text-neutral-600 flex-grow">Short-form content optimized for virality and engagement across platforms.</p>
          </motion.div>
        </motion.div>

        {/* Testimonial Section */}
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20 mx-4 sm:mx-6 lg:mx-8 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white border border-neutral-200 rounded-xl text-center interactive-glow"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-4">Trusted by 100+ Creators</h3>
          <blockquote className="text-sm sm:text-base lg:text-lg text-neutral-600 italic max-w-2xl mx-auto px-4 sm:px-0">
            "Black Cord Production helped me scale my channel to millions of views. Their editing is world-class, and the turnaround is lightning fast!"
          </blockquote>
          <div className="mt-6 flex justify-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black border-2 border-white"></div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-600 border-2 border-white"></div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black border-2 border-white"></div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
