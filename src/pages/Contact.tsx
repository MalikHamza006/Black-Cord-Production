import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageCircle, Calendar, Play, Zap, Star, Users, TrendingUp, ArrowRight, Clock, CheckCircle, Video, Smartphone, Headphones, Check, Loader2, Target, Award } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";


const quickActions = [
  {
    title: "Let's Create Together",
    subtitle: "Your video ready in 24 hours",
    icon: Play,
    color: "bg-red-600",
    textColor: "text-white",
    link: "/start-project",
    stats: "We've helped creators reach 45M+ views"
  },
  {
    title: "Chat With Us",
    subtitle: "We're here to help",
    icon: MessageCircle,
    color: "bg-green-600",
    textColor: "text-white",
    link: "https://wa.me/1234567890",
    stats: "Usually respond in under 2 minutes"
  },
  {
    title: "Free Strategy Call",
    subtitle: "Let's talk about your vision",
    icon: Calendar,
    color: "bg-blue-600",
    textColor: "text-white",
    link: "https://calendly.com/blackcordproduction",
    stats: "15 minutes to change everything"
  },
  {
    title: "Drop Us a Line",
    subtitle: "hello@blackcord.com",
    icon: Mail,
    color: "bg-purple-600",
    textColor: "text-white",
    link: "mailto:hello@blackcord.com",
    stats: "We read every message personally"
  }
];

const stats = [
  { number: "45M+", label: "Views Generated", icon: TrendingUp, color: "text-red-600", bgColor: "bg-red-50" },
  { number: "2.3M+", label: "Subscribers Gained", icon: Users, color: "text-green-600", bgColor: "bg-green-50" },
  { number: "24h", label: "Fast Delivery", icon: Clock, color: "text-blue-600", bgColor: "bg-blue-50" },
  { number: "98%", label: "Client Satisfaction", icon: Star, color: "text-purple-600", bgColor: "bg-purple-50" }
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "",
    budget: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (submitError) setSubmitError(null);
  };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitError(null);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        projectType: formData.projectType,
        budget: formData.budget,
        message: formData.message,
      }),
    });

    let data;
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    }

    if (response.ok) {
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
      });
    } else {
      setSubmitError(
        data && (data.error || data.message)
          ? data.error || data.message
          : "Something went wrong. Please try again."
      );
    }
  } catch (error) {
    setSubmitError("Network error. Please check your connection and try again.");
  } finally {
    setIsSubmitting(false);
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

      <main className="pt-20 sm:pt-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
          
          {/* Hero Section - Professional Style */}
          <motion.div 
            className="relative mb-20 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 18 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-red-100"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Video className="w-4 h-4" />
              <span>Let's Create Something Amazing</span>
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-6 leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Ready to Make Your
              <span className="text-red-600 block mt-2">Dreams Go Viral?</span>
            </motion.h1>

            <motion.p 
              className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              We're not just editors – we're your creative partners. We've helped creators like you reach <span className="font-bold text-black">200M+ views</span> and generate <span className="font-bold text-black">$15M+ in revenue</span>. Professional editing starting at just $75 per video.
            </motion.p>

            <motion.div 
              className="flex flex-wrap items-center justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold border border-green-100 hover:scale-105 transition-all duration-300">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                30-Day Money-Back Guarantee
              </div>
              <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold border border-blue-100 hover:scale-105 transition-all duration-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                24-Hour Delivery
              </div>
              <div className="flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold border border-purple-100 hover:scale-105 transition-all duration-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Starting at $75
              </div>
              <div className="flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold border border-orange-100 hover:scale-105 transition-all duration-300">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Unlimited Revisions
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Connect Options */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {quickActions.map((action, index) => (
              <motion.div 
                key={action.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 18, delay: index * 0.1 }}
              >
                <a 
                  href={action.link} 
                  className="block group"
                  target={action.link.startsWith('http') ? '_blank' : '_self'}
                  rel={action.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <Card className="group bg-white border border-neutral-200 hover:border-red-500 transition-all duration-500 hover:shadow-xl hover:scale-[1.02] cursor-pointer overflow-hidden hover:bg-gradient-to-br hover:from-white hover:to-red-50/30 h-full">
                    <div className="p-6">
                      <div className={`w-16 h-16 ${action.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl mb-4`}>
                        <action.icon className={`w-8 h-8 ${action.textColor}`} />
                      </div>
                      <h3 className="text-xl font-bold text-black mb-2 group-hover:text-red-600 transition-colors duration-300">
                        {action.title}
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3 group-hover:text-neutral-700 transition-colors duration-300">
                        {action.subtitle}
                      </p>
                      <p className="text-xs text-red-600 font-semibold group-hover:text-red-700 transition-colors duration-300">
                        {action.stats}
                      </p>
                    </div>
                  </Card>
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Professional Stats Section */}
          <motion.div
            className="mb-20"
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
              {stats.map((stat, index) => (
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

          {/* Contact Form Section - Professional */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 18 }}
          >
            <div className="text-center mb-12">
              <h2 className="section-text text-black mb-6">Tell Us About Your Vision</h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                We'll have your video ready in 24 hours – promise! Fill out the form below and let's create something amazing together.
              </p>
            </div>

            <Card className="bg-white border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-500 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-red-50 to-red-100 p-8 border-b border-red-200">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Video className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black">Start Your Project</h3>
                    <p className="text-sm text-neutral-600">Fill out the form and we'll get back to you within 2 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                {/* Success Message */}
                {isSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                  >
                    <Check className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-green-600">Message Sent Successfully!</p>
                      <p className="text-sm text-green-700">We'll get back to you within 2 hours.</p>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitError && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <p className="font-semibold text-red-600">Error</p>
                    <p className="text-sm text-red-700">{submitError}</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-black font-semibold">First Name *</Label>
                      <Input 
                        id="firstName" 
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Your first name"
                        className="bg-white border-neutral-300 text-black placeholder:text-neutral-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 h-12 hover:border-red-300"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-black font-semibold">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Your last name"
                        className="bg-white border-neutral-300 text-black placeholder:text-neutral-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 h-12 hover:border-red-300"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-black font-semibold">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className="bg-white border-neutral-300 text-black placeholder:text-neutral-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 h-12 hover:border-red-300"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="projectType" className="text-black font-semibold">Project Type *</Label>
                      <select 
                        id="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all duration-300 text-black h-12 hover:border-red-300"
                        required
                        disabled={isSubmitting}
                      >
                        <option value="">Select your project type</option>
                        <option value="youtube-shorts">🎬 YouTube Shorts</option>
                        <option value="tiktok-videos">📱 TikTok Videos</option>
                        <option value="instagram-reels">📸 Instagram Reels</option>
                        <option value="cash-cow">💰 Cash Cow Channels</option>
                        <option value="magnates-style">👑 Magnates Media Style</option>
                        <option value="documentary">🎭 Documentary Style</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-black font-semibold">Budget Range</Label>
                      <select 
                        id="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all duration-300 text-black h-12 hover:border-red-300"
                        disabled={isSubmitting}
                      >
                        <option value="">Select your budget</option>
                        <option value="under-500">Under $500</option>
                        <option value="500-1000">$500 - $1,000</option>
                        <option value="1000-2500">$1,000 - $2,500</option>
                        <option value="2500-5000">$2,500 - $5,000</option>
                        <option value="5000-plus">$5,000+</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-black font-semibold">Project Details *</Label>
                    <Textarea 
                      id="message" 
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your vision, goals, and any specific requirements you have for your video project..."
                      rows={5}
                      className="bg-white border-neutral-300 text-black placeholder:text-neutral-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 resize-none hover:border-red-300"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200 hover:bg-red-100/50 transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="w-5 h-5 text-red-600" />
                      <span className="font-semibold text-red-600">Our Promise to You</span>
                    </div>
                    <p className="text-sm text-neutral-600">We'll respond within 2 hours and start your project within 24 hours. No exceptions!</p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="member" 
                    size="xl" 
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5 mr-2" />
                        Submit Your Project
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </Card>
          </motion.div>

          {/* Testimonial Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-red-50 to-red-100 border border-red-200 overflow-hidden hover:shadow-xl transition-all duration-500 max-w-4xl mx-auto">
              <div className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-500 fill-current hover:scale-110 transition-transform duration-300" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-xl font-semibold text-black mb-6 leading-relaxed">
                  "I was skeptical at first – everyone promises viral content. But Black Cord actually delivered. 
                  They didn't just edit my videos, they became part of my creative journey. From 10K to 500K subscribers 
                  in 6 months, and I genuinely feel like they care about my success."
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl hover:scale-110 transition-transform duration-300 shadow-lg">
                    SC
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-black">Sarah Chen</div>
                    <div className="text-sm text-neutral-600">Lifestyle Creator • 2.3M subscribers</div>
                    <div className="text-xs text-red-600 font-medium">Started working with us in March 2023</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Why Choose Us Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 18 }}
          >
            <div className="text-center mb-12">
              <h2 className="section-text text-black mb-6">Why Creators Choose Us</h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                We're not just a service – we're your creative partners dedicated to your success.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Strategic Partnership",
                  description: "We learn your brand, understand your audience, and become invested in your growth journey.",
                  color: "text-red-600",
                  bgColor: "bg-red-50"
                },
                {
                  icon: Zap,
                  title: "Lightning Fast Delivery",
                  description: "24-hour delivery doesn't mean cutting corners. We work efficiently because we're passionate about what we do.",
                  color: "text-blue-600",
                  bgColor: "bg-blue-50"
                },
                {
                  icon: Award,
                  title: "Quality Guaranteed",
                  description: "We treat every project like it's our own channel. Because when you succeed, we succeed.",
                  color: "text-green-600",
                  bgColor: "bg-green-50"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 80, damping: 18, delay: index * 0.1 }}
                >
                  <Card className="bg-white border border-neutral-200 p-8 h-full hover:shadow-xl transition-all duration-300 group">
                    <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4">{item.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 18 }}
          >
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-3xl p-12 border border-red-200 text-center">
              <h2 className="section-text text-black mb-6">Ready to Transform Your Content?</h2>
              <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
                Join 1000+ creators who've found their creative partners in us. 
                Let's turn your vision into viral reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/start-project">
                  <Button variant="member" size="xl" className="px-8 py-4 text-lg font-semibold">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <Button variant="about" size="xl" className="px-8 py-4 text-lg font-semibold">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat With Us
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );

 };

export default Contact;