import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Play, Star, Zap, Crown, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PricingSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pricingPlans = [
    {
      name: "Starter",
      price: "$75",
      period: "per video",
      description: "Perfect for testing our service",
      icon: Play,
      features: [
        "Professional editing & color grading",
        "Viral hook creation",
        "Smooth transitions & effects",
        "Audio enhancement",
        "48-hour delivery",
        "2 rounds of revisions",
        "Basic analytics report",
        "Money-back guarantee"
      ],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&showinfo=0",
      popular: false
    },
    {
      name: "Pro",
      price: "$125",
      period: "per video",
      description: "Best value for serious creators",
      icon: Star,
      features: [
        "Everything in Starter",
        "Advanced analytics & insights",
        "Custom thumbnail design",
        "SEO optimization",
        "24-hour delivery",
        "Unlimited revisions",
        "Priority support",
        "Monthly strategy call",
        "Money-back guarantee"
      ],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&showinfo=0",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$200",
      period: "per video",
      description: "For agencies & large creators",
      icon: Crown,
      features: [
        "Everything in Pro",
        "Dedicated account manager",
        "Custom workflow integration",
        "White-label options",
        "12-hour delivery",
        "Unlimited revisions",
        "24/7 priority support",
        "Weekly strategy calls",
        "Custom reporting dashboard",
        "Money-back guarantee"
      ],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&showinfo=0",
      popular: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
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
        
        {/* Advanced Particles */}
        <div className="osmo-particle" style={{left: '22%', animationDelay: '1.5s'}}></div>
        <div className="osmo-particle" style={{left: '32%', animationDelay: '3.5s'}}></div>
        <div className="osmo-particle" style={{left: '42%', animationDelay: '5.5s'}}></div>
        <div className="osmo-particle" style={{left: '52%', animationDelay: '7.5s'}}></div>
        <div className="osmo-particle" style={{left: '62%', animationDelay: '9.5s'}}></div>
        <div className="osmo-particle" style={{left: '72%', animationDelay: '11.5s'}}></div>
        <div className="osmo-particle" style={{left: '82%', animationDelay: '13.5s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-red-100"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <Zap className="w-4 h-4" />
            PROFESSIONAL VIDEO PRODUCTION
          </motion.div>
          
          <h1 className="hero-text text-black mb-6">
            Choose Your
            <span className="text-red-600 block">Growth Plan</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional video production starting at just $75 per video. 
            Choose the plan that aligns with your growth goals.
          </p>
          
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mt-4 border border-green-100">
            <Check className="w-4 h-4" />
            30-Day Money-Back Guarantee
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`relative ${plan.popular ? 'md:-mt-8' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  <div className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap">
                    MOST POPULAR
                  </div>
                </motion.div>
              )}

              <motion.div
                className={`relative bg-white rounded-3xl p-6 sm:p-8 h-full border-2 ${
                  plan.popular 
                    ? 'border-red-500 shadow-xl shadow-red-500/25' 
                    : 'border-neutral-200 hover:border-red-500/50'
                } transition-all duration-300 group overflow-visible flex flex-col`}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Video Section */}
                <div className="relative mb-6 sm:mb-8 rounded-2xl overflow-hidden">
                  <div className="aspect-video bg-black relative group">
                    <iframe
                      src={plan.videoUrl}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    
                    {/* Video Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.div
                        className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play className="w-6 h-6 text-white ml-1" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Plan Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <motion.div
                    className="flex items-center justify-center gap-3 mb-4"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                      <plan.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-black">{plan.name}</h3>
                      <p className="text-muted-foreground text-sm">{plan.description}</p>
                    </div>
                  </motion.div>

                  {/* Pricing */}
                  <motion.div
                    className="mb-6"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="text-5xl font-bold text-black mb-2">{plan.price}</div>
                    <div className="text-muted-foreground">{plan.period}</div>
                  </motion.div>
                </div>

                {/* Features */}
                <motion.ul
                  className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      className="flex items-start gap-3 text-muted-foreground"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 + featureIndex * 0.05 }}
                    >
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* CTA Button */}
                <motion.div
                  className="text-center mt-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <Link to="/start-project" className="w-full">
                    <Button 
                      variant="member" 
                      size="xl" 
                      className="w-full py-3 sm:py-4 text-base sm:text-lg font-semibold group"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-muted-foreground mb-6">
            All plans include 30-day money-back guarantee
          </p>
          <Link to="/contact">
            <Button variant="about" size="lg" className="px-8 py-3">
              Contact Sales Team
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingSection;