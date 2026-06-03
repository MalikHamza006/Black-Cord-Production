import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, Users, TrendingUp, Clock, Star, CheckCircle, ArrowRight, Zap, Target, Award, BarChart3, Shield, Headphones, Calendar } from "lucide-react";

const YouTubeShorts = () => {
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
        <div className="osmo-particle" style={{left: '18%', animationDelay: '1.5s'}}></div>
        <div className="osmo-particle" style={{left: '28%', animationDelay: '3.5s'}}></div>
        <div className="osmo-particle" style={{left: '38%', animationDelay: '5.5s'}}></div>
        <div className="osmo-particle" style={{left: '48%', animationDelay: '7.5s'}}></div>
        <div className="osmo-particle" style={{left: '58%', animationDelay: '9.5s'}}></div>
        <div className="osmo-particle" style={{left: '68%', animationDelay: '11.5s'}}></div>
        <div className="osmo-particle" style={{left: '78%', animationDelay: '13.5s'}}></div>
        <div className="osmo-particle" style={{left: '88%', animationDelay: '15.5s'}}></div>
      </div>

      {/* Main Content */}
      <main className="pt-24 relative z-10">
        <div className="container mx-auto px-6 py-12">
          {/* YouTube Shorts Style Hero Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 18 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-red-100">
              <Play className="w-4 h-4" />
              YOUTUBE SHORTS SPECIALISTS
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              YouTube Shorts That
              <span className="text-red-600 block">GO VIRAL</span>
            </h1>
            <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto leading-relaxed mb-8">
              We're not just editors—we're viral content strategists. Our YouTube Shorts service has generated 
              <span className="font-bold text-black"> 45M+ views</span> and 
              <span className="font-bold text-black"> 2.3M+ subscribers</span> for creators worldwide.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { number: "45M+", label: "Views Generated", icon: TrendingUp, color: "text-red-600" },
                { number: "2.3M+", label: "Subscribers Gained", icon: Users, color: "text-red-600" },
                { number: "89%", label: "Retention Rate", icon: Star, color: "text-red-600" },
                { number: "24h", label: "Fast Delivery", icon: Clock, color: "text-red-600" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-white rounded-xl border border-red-200"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 80, damping: 18, delay: index * 0.1 }}
                >
                  <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
                  <div className="text-xs sm:text-sm text-black">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/start-project">
                <Button variant="member" size="xl" className="px-8 py-4 text-lg font-semibold">
                  <Play className="w-5 h-5 mr-2" />
                  Start Your Project
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="about" size="xl" className="px-8 py-4 text-lg font-semibold">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Professional Results Dashboard */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.1 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">Proven Results for Our Clients</h2>
              <p className="text-lg text-black max-w-3xl mx-auto">
                Our data-driven approach delivers measurable growth across all metrics that matter to your business.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                { 
                  number: "45M+", 
                  label: "Total Views Generated", 
                  icon: TrendingUp,
                  color: "text-red-600",
                  bgColor: "bg-red-50",
                  description: "Across all client channels"
                },
                { 
                  number: "2.3M+", 
                  label: "Subscribers Gained", 
                  icon: Users,
                  color: "text-red-600",
                  bgColor: "bg-red-50",
                  description: "Average 89% retention rate"
                },
                { 
                  number: "89%", 
                  label: "Average Retention Rate", 
                  icon: Star,
                  color: "text-red-600",
                  bgColor: "bg-red-50",
                  description: "Industry-leading performance"
                },
                { 
                  number: "24h", 
                  label: "Average Delivery Time", 
                  icon: Clock,
                  color: "text-red-600",
                  bgColor: "bg-red-50",
                  description: "Express turnaround available"
                }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.1 + index * 0.1 }}
                  className="flex"
                >
                  <Card className="bg-white border border-red-200 p-6 text-center hover:shadow-xl transition-all duration-300 group flex-1 flex flex-col justify-between min-h-[200px]">
                    <div className="flex flex-col items-center">
                      <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <stat.icon className={`w-8 h-8 ${stat.color}`} />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-black mb-2">{stat.number}</div>
                      <div className="text-base md:text-lg font-semibold text-black mb-2 leading-tight">{stat.label}</div>
                    </div>
                    <div className="text-sm text-gray-600 mt-auto">{stat.description}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* YouTube Shorts Video Showcase */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.2 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">Our YouTube Shorts in Action</h2>
              <p className="text-lg text-black max-w-3xl mx-auto">
                Watch our viral YouTube Shorts that have generated millions of views and subscribers for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Video 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.2 }}
                className="h-full"
              >
                <Card className="bg-white border border-red-200 overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-[9/16] bg-black relative">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example1"
                      title="YouTube Shorts - Viral Example 1"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      VIRAL
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      2.3M views
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-black mb-2">Viral Hook Strategy</h3>
                    <p className="text-black mb-4 flex-grow">This Short went viral with our signature hook formula, generating 2.3M views in 48 hours.</p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-red-600 font-semibold">YouTube Shorts</span>
                      <span className="text-sm text-black">89% retention</span>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Video 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.3 }}
                className="h-full"
              >
                <Card className="bg-white border border-red-200 overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-[9/16] bg-black relative">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example2"
                      title="YouTube Shorts - Viral Example 2"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      TRENDING
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      1.8M views
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-black mb-2">Algorithm Optimization</h3>
                    <p className="text-black mb-4 flex-grow">Perfect timing and pacing that the YouTube algorithm loves, resulting in 1.8M views.</p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-red-600 font-semibold">YouTube Shorts</span>
                      <span className="text-sm text-black">92% retention</span>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Video 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.4 }}
                className="h-full"
              >
                <Card className="bg-white border border-red-200 overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-[9/16] bg-black relative">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example3"
                      title="YouTube Shorts - Viral Example 3"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      MEGA VIRAL
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      4.2M views
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-black mb-2">Retention Mastery</h3>
                    <p className="text-black mb-4 flex-grow">Our highest-performing Short with 4.2M views and 95% retention rate.</p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-red-600 font-semibold">YouTube Shorts</span>
                      <span className="text-sm text-black">95% retention</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Professional Service Breakdown */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.2 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">Our Professional Process</h2>
              <p className="text-lg text-black max-w-3xl mx-auto">
                We don't just edit videos—we engineer viral content using proven strategies and cutting-edge technology.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Strategic Analysis",
                  description: "We analyze your niche, competitors, and audience to create content that resonates and converts.",
                  features: ["Audience research & analysis", "Competitor benchmarking", "Trend identification", "Content strategy development"],
                  color: "text-red-600",
                  bgColor: "bg-red-50"
                },
                {
                  icon: Zap,
                  title: "Viral Engineering",
                  description: "Our proprietary hook formulas and pacing techniques maximize retention and algorithmic reach.",
                  features: ["Hook optimization", "Retention curve analysis", "Algorithm-friendly editing", "Engagement triggers"],
                  color: "text-red-600",
                  bgColor: "bg-red-50"
                },
                {
                  icon: Award,
                  title: "Professional Production",
                  description: "Cinematic quality with broadcast-standard editing, color grading, and audio enhancement.",
                  features: ["4K professional editing", "Color correction & grading", "Audio mastering", "Motion graphics"],
                  color: "text-red-600",
                  bgColor: "bg-red-50"
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.2 + index * 0.1 }}
                >
                  <Card className="bg-white border border-red-200 p-8 h-full hover:shadow-xl transition-all duration-300 group">
                    <div className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`w-10 h-10 ${service.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                    <p className="text-black mb-6 leading-relaxed text-lg">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-black">
                          <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Pricing */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.3 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">Investment Options</h2>
              <p className="text-lg text-black max-w-3xl mx-auto">
                Transparent pricing with no hidden fees. Choose the package that aligns with your growth goals.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Starter Package */}
              <Card className="bg-white border border-red-200 p-8 relative flex flex-col h-full">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black mb-2">Starter</h3>
                  <div className="text-5xl font-bold text-black mb-2">$200</div>
                  <p className="text-black">Perfect for testing our service</p>
                </div>
                
                <div className="space-y-4 mb-8 flex-grow">
                  {[
                    "Professional editing & color grading",
                    "Viral hook creation",
                    "Smooth transitions & effects",
                    "Audio enhancement",
                    "48-hour delivery",
                    "2 rounds of revisions",
                    "Basic analytics report"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <span className="text-black font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 mt-auto">
                  <Link to="/start-project" className="w-full">
                    <Button variant="about" size="xl" className="w-full mb-4">
                      Get Started
                    </Button>
                  </Link>
                  <Link to="/portfolio" className="w-full">
                    <Button variant="outline" size="lg" className="w-full">
                      View Samples
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Professional Package - Most Popular */}
              <Card className="bg-white border-2 border-red-500 p-8 relative overflow-visible flex flex-col h-full">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
                <div className="text-center mb-8 pt-4">
                  <h3 className="text-2xl font-bold text-black mb-2">Professional</h3>
                  <div className="text-5xl font-bold text-black mb-2">$150</div>
                  <p className="text-black">Best value for serious creators</p>
                </div>
                
                <div className="space-y-4 mb-8 flex-grow">
                  {[
                    "Everything in Starter",
                    "Advanced analytics & insights",
                    "Custom thumbnail design",
                    "SEO optimization",
                    "24-hour delivery",
                    "Unlimited revisions",
                    "Priority support",
                    "Monthly strategy call"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <span className="text-black font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 mt-auto">
                  <Link to="/start-project" className="w-full">
                    <Button variant="member" size="xl" className="w-full mb-4">
                      Choose Professional
                    </Button>
                  </Link>
                  <Link to="/portfolio" className="w-full">
                    <Button variant="outline" size="lg" className="w-full">
                      View Samples
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Enterprise Package */}
              <Card className="bg-white border border-red-200 p-8 relative flex flex-col h-full">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black mb-2">Enterprise</h3>
                  <div className="text-5xl font-bold text-black mb-2">$120</div>
                  <p className="text-black">For agencies & large creators</p>
                </div>
                
                <div className="space-y-4 mb-8 flex-grow">
                  {[
                    "Everything in Professional",
                    "Dedicated account manager",
                    "Custom workflow integration",
                    "White-label options",
                    "12-hour delivery",
                    "Unlimited revisions",
                    "24/7 priority support",
                    "Weekly strategy calls",
                    "Custom reporting dashboard"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <span className="text-black font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 mt-auto">
                  <Link to="/start-project" className="w-full">
                    <Button variant="about" size="xl" className="w-full mb-4">
                      Contact Sales
                    </Button>
                  </Link>
                  <Link to="/portfolio" className="w-full">
                    <Button variant="outline" size="lg" className="w-full">
                      View Samples
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Client Success Stories */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.4 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">Client Success Stories</h2>
              <p className="text-lg text-black max-w-3xl mx-auto">
                Real results from real clients. See how we've transformed their YouTube presence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Sarah Chen",
                  role: "Lifestyle Creator",
                  avatar: "SC",
                  quote: "Black Cord Production transformed my channel from 10K to 500K subscribers in just 6 months. Their YouTube Shorts strategy is unmatched—my videos now consistently hit 1M+ views!",
                  metrics: [
                    { label: "Subscribers Gained", value: "490K+" },
                    { label: "Total Views", value: "15M+" },
                    { label: "Revenue Increase", value: "340%" }
                  ]
                },
                {
                  name: "Marcus Johnson",
                  role: "Business Coach",
                  avatar: "MJ",
                  quote: "The ROI on their YouTube Shorts service is incredible. I've seen a 500% increase in leads and my course sales have tripled. They understand the algorithm better than anyone.",
                  metrics: [
                    { label: "Subscribers Gained", value: "320K+" },
                    { label: "Total Views", value: "8M+" },
                    { label: "Lead Generation", value: "500%" }
                  ]
                }
              ].map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="bg-white border border-red-200 p-8 h-full">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        {client.avatar}
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-xl font-bold text-black mb-2">{client.name}</h4>
                        <p className="text-black mb-4 font-medium">{client.role}</p>
                        <p className="text-black mb-6 leading-relaxed italic">"{client.quote}"</p>
                        <div className="grid grid-cols-3 gap-4">
                          {client.metrics.map((metric) => (
                            <div key={metric.label} className="text-center">
                              <div className="text-lg font-bold text-red-600">{metric.value}</div>
                              <div className="text-xs text-black">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.5 }}
          >
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-3xl p-12 border border-red-200">
              <h2 className="text-4xl font-bold text-black mb-6">Ready to Scale Your YouTube Presence?</h2>
              <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
                Join 500+ creators who trust us with their YouTube growth. 
                Let's discuss how we can transform your content into viral success.
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
        </div>
      </main>
    </div>
  );
};

export default YouTubeShorts;