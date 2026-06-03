import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageCircle, Calendar, Play, Zap, Star, Users, TrendingUp, ArrowRight, Clock, CheckCircle, Video, Smartphone, Headphones, Check, Loader2 } from "lucide-react";
import { useState } from "react";

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
  { number: "45M+", label: "Views We've Helped Create", icon: TrendingUp },
  { number: "2.3M+", label: "Subscribers Our Clients Gained", icon: Users },
  { number: "24h", label: "How Fast We Work", icon: Clock },
  { number: "98%", label: "Clients Who Love Working With Us", icon: Star }
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
    // Clear error when user starts typing
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Prepare form data for Formspree
    const formspreeData = new FormData();
    formspreeData.append("firstName", formData.firstName);
    formspreeData.append("lastName", formData.lastName);
    formspreeData.append("email", formData.email);
    formspreeData.append("projectType", formData.projectType);
    formspreeData.append("budget", formData.budget);
    formspreeData.append("message", formData.message);
    formspreeData.append("_subject", `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`);

    try {
      const response = await fetch("https://formspree.io/f/xaqzyekq", {
        method: "POST",
        body: formspreeData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          projectType: "",
          budget: "",
          message: ""
        });
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const errorData = await response.json();
        setSubmitError(errorData.error || "Something went wrong. Please try again.");
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

      <Navigation />
      <main className="pt-20 sm:pt-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
          {/* Human-Centered Header */}
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 80, damping: 18 }}>
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-red-100">
              <Video className="w-4 h-4" />
              Hey there! Let's talk about your videos
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 leading-tight">
              Ready to Make Your
              <span className="text-red-600 block">Dreams Go Viral?</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-8">
              We're not just editors – we're your creative partners. We've helped creators like you reach <span className="font-bold text-black">200M+ views</span> and generate <span className="font-bold text-black">$15M+ in revenue</span>. Professional editing starting at just $75 per video.
            </p>
            
            {/* Trust Signals */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold border border-green-100">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                30-Day Money-Back Guarantee
              </div>
              <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold border border-blue-100">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                24-Hour Delivery
              </div>
              <div className="flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold border border-purple-100">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Starting at $75
              </div>
              <div className="flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold border border-orange-100">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Unlimited Revisions
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-white rounded-xl border border-neutral-200"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 80, damping: 18, delay: index * 0.1 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-1">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-neutral-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Let's Connect - Human Touch */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
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
                  <Card className="group bg-white border border-neutral-200 hover:border-red-500 transition-all duration-500 hover:shadow-xl hover:scale-[1.02] cursor-pointer overflow-hidden hover:bg-gradient-to-br hover:from-white hover:to-red-50/30">
                    <div className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 ${action.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                          <action.icon className={`w-8 h-8 ${action.textColor}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-black mb-1 group-hover:text-red-600 transition-colors duration-300">
                            {action.title}
                          </h3>
                          <p className="text-sm text-neutral-600 mb-2 group-hover:text-neutral-700 transition-colors duration-300">
                            {action.subtitle}
                          </p>
                          <p className="text-xs text-red-600 font-semibold group-hover:text-red-700 transition-colors duration-300">
                            {action.stats}
                          </p>
                        </div>
                        <ArrowRight className="w-6 h-6 text-neutral-400 group-hover:text-red-600 group-hover:translate-x-2 transition-all duration-500" />
                      </div>
                    </div>
                  </Card>
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Tell Us About Your Project - Form with Formspree Integration */}
          <motion.div className="mb-12" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.3 }}>
            <Card className="bg-white border border-neutral-200 overflow-hidden hover:shadow-lg transition-all duration-500">
              <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 border-b border-red-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black">Tell Us About Your Vision</h2>
                    <p className="text-sm text-neutral-600">We'll have your video ready in 24 hours – promise!</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-black font-semibold">What should we call you? *</Label>
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
                      <Label htmlFor="lastName" className="text-black font-semibold">Last name *</Label>
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
                    <Label htmlFor="email" className="text-black font-semibold">Your email address *</Label>
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
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="projectType" className="text-black font-semibold">What kind of video do you need? *</Label>
                      <select 
                        id="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all duration-300 text-black h-12 hover:border-red-300"
                        required
                        disabled={isSubmitting}
                      >
                        <option value="">Tell us what you're thinking...</option>
                        <option value="youtube-shorts">🎬 YouTube Shorts (our specialty!)</option>
                        <option value="tiktok-videos">📱 TikTok Videos</option>
                        <option value="instagram-reels">📸 Instagram Reels</option>
                        <option value="cash-cow">💰 Cash Cow Channels</option>
                        <option value="magnates-style">👑 Magnates Media Style</option>
                        <option value="documentary">🎭 Documentary Style</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-black font-semibold">What's your budget range?</Label>
                      <select 
                        id="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all duration-300 text-black h-12 hover:border-red-300"
                        disabled={isSubmitting}
                      >
                        <option value="">No pressure, just curious!</option>
                        <option value="under-500">Under $500</option>
                        <option value="500-1000">$500 - $1,000</option>
                        <option value="1000-2500">$1,000 - $2,500</option>
                        <option value="2500-5000">$2,500 - $5,000</option>
                        <option value="5000-plus">$5,000+</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-black font-semibold">Tell us about your project *</Label>
                    <Textarea 
                      id="message" 
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="What's your vision? What kind of content do you create? Any specific ideas or requirements? We'd love to hear about your goals!"
                      rows={4}
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
                    className="w-full sm:w-auto px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5 mr-2" />
                        Let's Make Something Amazing Together!
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </Card>
          </motion.div>

          {/* Real Stories from Real People */}
          <motion.div className="mb-12" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.4 }}>
            <Card className="bg-gradient-to-r from-red-50 to-red-100 border border-red-200 overflow-hidden hover:shadow-lg transition-all duration-500">
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

          {/* What Makes Us Different */}
          <motion.div className="mb-12" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.5 }}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-black mb-4">Why Creators Choose Us</h2>
              <p className="text-lg text-neutral-600">We're not just a service – we're your creative partners</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { 
                  icon: "🎯", 
                  title: "We Actually Care About Your Success", 
                  desc: "We don't just edit and send. We learn your brand, understand your audience, and become invested in your growth.",
                  color: "bg-red-50",
                  iconColor: "text-red-600"
                },
                { 
                  icon: "⚡", 
                  title: "Lightning Fast, But Never Rushed", 
                  desc: "24-hour delivery doesn't mean cutting corners. We work efficiently because we're passionate about what we do.",
                  color: "bg-blue-50",
                  iconColor: "text-blue-600"
                },
                { 
                  icon: "🔥", 
                  title: "Proven Results, Real Relationships", 
                  desc: "Our clients don't just get views – they get a team that celebrates their wins and supports their journey.",
                  color: "bg-green-50",
                  iconColor: "text-green-600"
                },
                { 
                  icon: "💎", 
                  title: "Quality That Speaks for Itself", 
                  desc: "We treat every project like it's our own channel. Because when you succeed, we succeed.",
                  color: "bg-purple-50",
                  iconColor: "text-purple-600"
                }
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  className={`${item.color} p-6 rounded-xl border border-neutral-200 hover:shadow-lg transition-all duration-500 hover:scale-105`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-black mb-2 text-lg hover:text-red-600 transition-colors duration-300">{item.title}</h4>
                      <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Let's Create Something Amazing Together */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.6 }}
          >
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-white relative overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Make Magic Together?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Join 1000+ creators who've found their creative partners in us. 
                  Let's turn your vision into viral reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href="/start-project">
                    <Button 
                      variant="member"
                      size="xl" 
                      className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Let's Start Creating!
                    </Button>
                  </a>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="about" 
                      size="xl" 
                      className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat With Us
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Contact;