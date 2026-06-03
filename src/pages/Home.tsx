import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Play, Users, TrendingUp, Star, CheckCircle, Zap, Target, Award } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-background osmo-bg">
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
      </div>

      <Navigation />

      {/* Main Content */}
      <main className="pt-[120px] sm:pt-[130px] lg:pt-0 relative z-10">
        <HeroSection />
        <AboutSection />
        <TestimonialsSection />
        <CaseStudiesSection />

        {/* Showcase Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 px-4 sm:px-6 lg:px-8 auto-rows-fr"
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

        {/* Professional Stats Section */}
        <motion.div
          className="mt-20 mb-16 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 18 }}
        >
          <div className="text-center mb-12">
            <h2 className="section-text text-black mb-6">Proven Results</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Our data-driven approach delivers measurable growth across all metrics that matter to your business.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                number: "50M+", 
                label: "Total Views Generated", 
                icon: TrendingUp,
                color: "text-red-600",
                bgColor: "bg-red-50"
              },
              { 
                number: "500+", 
                label: "Projects Completed", 
                icon: Star,
                color: "text-green-600",
                bgColor: "bg-green-50"
              },
              { 
                number: "200+", 
                label: "Happy Clients", 
                icon: Users,
                color: "text-blue-600",
                bgColor: "bg-blue-50"
              },
              { 
                number: "24h", 
                label: "Average Delivery", 
                icon: Zap,
                color: "text-purple-600",
                bgColor: "bg-purple-50"
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 80, damping: 18, delay: index * 0.1 }}
              >
                <Card className="bg-white border border-neutral-200 p-6 text-center hover:shadow-xl transition-all duration-300 group">
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-black mb-2">{stat.number}</div>
                  <div className="text-sm font-semibold text-black">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Process Section */}
        <motion.div
          className="mt-20 mb-16 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 18 }}
        >
          <div className="text-center mb-12">
            <h2 className="section-text text-black mb-6">Our Professional Process</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We don't just edit videos—we engineer success using proven strategies and cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Strategic Analysis",
                description: "We analyze your niche, competitors, and audience to create content that resonates and converts.",
                color: "text-red-600",
                bgColor: "bg-red-50"
              },
              {
                icon: Zap,
                title: "Viral Engineering",
                description: "Our proprietary hook formulas and pacing techniques maximize retention and algorithmic reach.",
                color: "text-blue-600",
                bgColor: "bg-blue-50"
              },
              {
                icon: Award,
                title: "Professional Production",
                description: "Cinematic quality with broadcast-standard editing, color grading, and audio enhancement.",
                color: "text-green-600",
                bgColor: "bg-green-50"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 80, damping: 18, delay: index * 0.1 }}
              >
                <Card className="bg-white border border-neutral-200 p-8 h-full hover:shadow-xl transition-all duration-300 group">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Section */}
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20 mx-4 sm:mx-6 lg:mx-8 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white border border-neutral-200 rounded-xl text-center interactive-glow"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-4">Trusted by 200+ Creators</h3>
          <blockquote className="text-sm sm:text-base lg:text-lg text-neutral-600 italic max-w-2xl mx-auto px-4 sm:px-0">
            "Black Cord Production helped me improve my content quality significantly. Their editing is professional, and the turnaround time is excellent."
          </blockquote>
          <div className="mt-6 flex justify-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black border-2 border-white"></div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-600 border-2 border-white"></div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black border-2 border-white"></div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="mt-20 mb-16 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 18 }}
        >
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-3xl p-12 border border-red-200 text-center">
            <h2 className="section-text text-black mb-6">Ready to Transform Your Content?</h2>
            <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
              Join 200+ creators and brands who trust us with their video production. 
              Let's discuss how we can help improve your content quality and reach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/start-project">
                <Button variant="member" size="xl" className="px-8 py-4 text-lg font-semibold">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="about" size="xl" className="px-8 py-4 text-lg font-semibold">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Home;
