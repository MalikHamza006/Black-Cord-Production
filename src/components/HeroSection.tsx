import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.02 }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "tween", duration: 0.4, ease: "easeOut" } 
  }
};

const stats = [
  { value: "500+", text: "Premium Assets Produced" },
  { value: "150M+", text: "Organic Views Generated" },
  { value: "50+", text: "Global Creators Scaled" },
  { value: "95%", text: "Retention Success Rate" },
];

const HeroSection = () => {
  return (
    // Changed min-h-[85vh] to py-20 sm:py-28 so it grows dynamically based on mobile content length without stretching or blurring layout
    <section className="relative min-h-screen w-full bg-neutral-50 text-neutral-900 flex items-center py-20 sm:py-28 overflow-hidden">
      
      {/* STRUCTURE CONTAINER */}
      <motion.div 
        className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8 items-center relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        
        {/* LEFT COLUMN: VALUE PROPOSITION & CTAs */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 flex flex-col items-start text-left">
          
          {/* TAGLINE CONTEXT */}
          <motion.div variants={fadeUpVariants} className="inline-flex items-center space-x-2 bg-neutral-100 border border-neutral-200 px-3 py-1.5 rounded-md max-w-full">
            <span className="h-1.5 w-1.5 rounded-full bg-red-600 flex-shrink-0" />
            <span className="text-neutral-600 font-semibold tracking-wider text-[9px] sm:text-[10px] uppercase truncate">
              High-Performance Post-Production
            </span>
          </motion.div>
          
          {/* WHAT WE DO & WHY IT MATTERS (Core Headline) */}
          {/* Replaced manual <br /> with standard responsive responsive wrapping and adjusted sizes for crisp rendering */}
          <motion.h1 variants={fadeUpVariants} className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight text-neutral-950 leading-[1.1] sm:leading-[1.05]">
            WE HELP CREATORS{" "}
            <br className="hidden sm:inline" />
            SCALE AUDIENCES THROUGH{" "}
            <br className="hidden sm:inline" />
            <span className="text-red-600 block sm:inline mt-1 sm:mt-0">PRODUCTION PIPELINES.</span>
          </motion.h1>

          {/* SUPPORTING SUBHEADING (Clarity Focus) */}
          <motion.p variants={fadeUpVariants} className="text-sm sm:text-lg text-neutral-600 max-w-xl leading-relaxed font-normal">
            We engineer high-retention short-form assets and cinematic channel architectures that turn structural impressions into predictable, active community scale.
          </motion.p>

          {/* ACTION HANDLERS (Value-Driven CTAs) */}
          {/* Optimized full width structure for seamless mobile clickability */}
          <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
            <Link to="/start-project" className="w-full sm:w-auto">
              <Button 
                variant="default" 
                size="lg" 
                className="w-full sm:w-auto bg-neutral-950 text-white font-bold uppercase tracking-wider rounded-md px-8 py-6 text-sm shadow-sm transition-all duration-200 ease-out hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98]"
              >
                Start Free Strategy
              </Button>
            </Link>
            
            <Link to="/portfolio" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-neutral-200 bg-transparent text-neutral-600 font-bold uppercase tracking-wider rounded-md px-8 py-6 text-sm transition-all duration-200 ease-out hover:bg-neutral-100 hover:text-neutral-900 hover:border-neutral-400 hover:scale-[1.02] active:scale-[0.98]"
              >
                View Case Studies
              </Button>
            </Link>
          </motion.div>
          
          {/* PRICING ANCHOR */}
          <motion.p variants={fadeUpVariants} className="text-[11px] sm:text-xs text-neutral-400 font-medium pt-1">
            Enterprise infrastructure packages starting at $75 per finished asset.
          </motion.p>
        </div>

        {/* RIGHT COLUMN: SINGLE DASHBOARD VISUAL & SUBTLE TRUST METRICS */}
        {/* Adjusted spacing to avoid clashing with the left column items on smaller media wrappers */}
        <div className="lg:col-span-5 space-y-8 sm:space-y-10 lg:pl-6 w-full mt-4 lg:mt-0">
          
          {/* SINGLE DOMINANT PERFORMANCE CARD */}
          <motion.div 
            className="w-full bg-white rounded-xl shadow-sm border border-neutral-200 p-5 sm:p-8 space-y-5 sm:space-y-6"
            variants={fadeUpVariants}
          >
            <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-[10px] sm:text-[11px] font-bold text-neutral-400 uppercase tracking-widest">Live Engine Output</span>
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-neutral-900 bg-neutral-100 px-2 py-0.5 rounded">Optimal</span>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] sm:text-xs text-neutral-400 font-medium uppercase tracking-wider">Retention Baseline Target</span>
              <div className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight">Top 2.4%</div>
            </div>

            {/* Simulated minimal visual graph layer */}
            <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
              <div className="h-full w-4/5 bg-red-600 rounded-full" />
            </div>
            
            <p className="text-[10px] sm:text-[11px] text-neutral-500 leading-normal font-medium">
              Asset optimization parameters structured according to algorithmic viewer thresholds.
            </p>
          </motion.div>

          {/* SUBTLE TRUST METRICS GRID */}
          {/* Changed gap styling to secure layout structure on narrow screens */}
          <motion.div 
            className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-6 border-t border-neutral-200/80 pt-6 sm:pt-8"
            variants={fadeUpVariants}
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[9px] sm:text-[10px] font-semibold text-neutral-400 tracking-wide uppercase leading-tight">
                  {stat.text}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </motion.div>
      
    </section>
  );
};

export default HeroSection;