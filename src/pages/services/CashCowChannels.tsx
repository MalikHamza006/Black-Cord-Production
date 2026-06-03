import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { DollarSign, Users, TrendingUp, Clock, Star, CheckCircle, ArrowRight, Zap, Target, Award, BarChart3, Shield, Headphones, Calendar, PiggyBank, TrendingDown } from "lucide-react";

const CashCowChannels = () => {
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
          {/* Professional Hero Section */}
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 18 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-red-100">
              <PiggyBank className="w-4 h-4" />
              CASH COW SPECIALISTS
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Cash Cow Channels That
              <span className="text-red-600 block">MAKE MONEY</span>
            </h1>
            <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto leading-relaxed mb-8">
              Turn your content into a revenue-generating machine. Our Cash Cow service has generated 
              <span className="font-semibold text-black"> $3.2M+ in revenue</span> and 
              <span className="font-semibold text-black"> 8.5M+ views</span> for our clients. 
              Let us build your automated income stream.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-black mb-12">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-red-600" />
                <span>Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-red-600" />
                <span>24/7 Client Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-red-600" />
                <span>Guaranteed Delivery</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/start-project">
                <Button variant="member" size="xl" className="px-8 py-4 text-lg font-semibold">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
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
              <h2 className="text-4xl font-bold text-black mb-6">Proven Cash Cow Results</h2>
              <p className="text-lg text-black max-w-3xl mx-auto">
                Our data-driven approach delivers measurable growth across all metrics that matter to your business.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                { 
                  number: "$3.2M+", 
                  label: "Revenue Generated", 
                  icon: DollarSign,
                  color: "text-red-600",
                  bgColor: "bg-red-50",
                  description: "For our clients"
                },
                { 
                  number: "8.5M+", 
                  label: "Total Views Generated", 
                  icon: TrendingUp,
                  color: "text-red-600",
                  bgColor: "bg-red-50",
                  description: "Across all channels"
                },
                { 
                  number: "92%", 
                  label: "Average Revenue Growth", 
                  icon: BarChart3,
                  color: "text-red-600",
                  bgColor: "bg-red-50",
                  description: "Year-over-year"
                },
                { 
                  number: "48h", 
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

          {/* Cash Cow Video Showcase */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.2 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">Our Cash Cow Videos in Action</h2>
              <p className="text-lg text-black max-w-3xl mx-auto">
                Watch our revenue-generating videos that have created millions in passive income for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Video 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.2 }}
              >
                <Card className="bg-white border border-red-200 overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[9/16] bg-black relative">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/cashcow1"
                      title="Cash Cow Video - Revenue Example 1"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      $500K+
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      2.8M views
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2">Passive Income Generator</h3>
                    <p className="text-black mb-4">This video generated $500K+ in passive revenue through affiliate marketing and sponsorships.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-red-600 font-semibold">Cash Cow</span>
                      <span className="text-sm text-black">$500K revenue</span>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Video 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.3 }}
              >
                <Card className="bg-white border border-red-200 overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[9/16] bg-black relative">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/cashcow2"
                      title="Cash Cow Video - Revenue Example 2"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      $750K+
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      3.2M views
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2">Automated Revenue Stream</h3>
                    <p className="text-black mb-4">This video created a fully automated income stream generating $750K+ in revenue.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-red-600 font-semibold">Cash Cow</span>
                      <span className="text-sm text-black">$750K revenue</span>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Video 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.4 }}
              >
                <Card className="bg-white border border-red-200 overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[9/16] bg-black relative">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/cashcow3"
                      title="Cash Cow Video - Revenue Example 3"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      $1.2M+
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      4.1M views
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2">Million Dollar Video</h3>
                    <p className="text-black mb-4">Our highest-earning video that generated over $1.2M in revenue through multiple income streams.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-red-600 font-semibold">Cash Cow</span>
                      <span className="text-sm text-black">$1.2M revenue</span>
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
              <h2 className="text-4xl font-bold text-black mb-6">Our Cash Cow Channel Strategy</h2>
              <p className="text-lg text-black max-w-3xl mx-auto">
                We don't just create content—we build automated revenue systems using proven monetization strategies.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Revenue Optimization",
                  description: "We analyze your niche and implement proven monetization strategies that maximize ad revenue and affiliate income.",
                  features: ["Ad revenue optimization", "Affiliate marketing setup", "Sponsorship strategies", "Product placement"],
                  color: "text-red-600",
                  bgColor: "bg-red-50"
                },
                {
                  icon: Zap,
                  title: "Automated Content System",
                  description: "Scalable content production that maintains quality while maximizing output for consistent revenue generation.",
                  features: ["Content templates", "Automated workflows", "Batch production", "Quality control systems"],
                  color: "text-red-600",
                  bgColor: "bg-red-50"
                },
                {
                  icon: Award,
                  title: "Professional Production",
                  description: "High-quality content that performs well across all platforms while maintaining cost efficiency.",
                  features: ["Professional editing", "Cost-effective production", "Multi-platform optimization", "Performance tracking"],
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
                Transparent pricing with no hidden fees. Choose the package that aligns with your revenue goals.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Starter Package */}
              <Card className="bg-white border border-red-200 p-8 relative flex flex-col h-full">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black mb-2">Starter</h3>
                  <div className="text-5xl font-bold text-black mb-2">$800</div>
                  <p className="text-black">Perfect for testing our service</p>
                </div>
                
                <div className="space-y-4 mb-8 flex-grow">
                  {[
                    "Professional video editing",
                    "Revenue optimization setup",
                    "Monetization strategy",
                    "Basic analytics tracking",
                    "48-hour delivery",
                    "2 rounds of revisions",
                    "Monthly performance report"
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
                  <div className="text-5xl font-bold text-black mb-2">$600</div>
                  <p className="text-black">Best value for serious entrepreneurs</p>
                </div>
                
                <div className="space-y-4 mb-8 flex-grow">
                  {[
                    "Everything in Starter",
                    "Advanced revenue analytics",
                    "Affiliate marketing setup",
                    "Automated content workflows",
                    "36-hour delivery",
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
                  <div className="text-5xl font-bold text-black mb-2">$400</div>
                  <p className="text-black">For agencies & large operations</p>
                </div>
                
                <div className="space-y-4 mb-8 flex-grow">
                  {[
                    "Everything in Professional",
                    "Dedicated account manager",
                    "Custom workflow integration",
                    "White-label options",
                    "24-hour delivery",
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
                Real results from real clients. See how we've built their passive income streams.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Michael Thompson",
                  role: "Entrepreneur",
                  avatar: "MT",
                  quote: "Black Cord Production's Cash Cow service has generated over $500K in passive income for me. Their revenue optimization strategies are incredible—I now make more from YouTube than my day job!",
                  metrics: [
                    { label: "Passive Income", value: "$500K+" },
                    { label: "Monthly Revenue", value: "$25K+" },
                    { label: "ROI", value: "1200%" }
                  ]
                },
                {
                  name: "Sarah Johnson",
                  role: "Content Creator",
                  avatar: "SJ",
                  quote: "The ROI on their Cash Cow service is insane. I've built a $200K annual passive income stream in just 18 months. Their automated content system is a game-changer.",
                  metrics: [
                    { label: "Annual Revenue", value: "$200K+" },
                    { label: "Channel Growth", value: "400%" },
                    { label: "Time Saved", value: "80%" }
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
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
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
              <h2 className="text-4xl font-bold text-black mb-6">Ready to Build Your Passive Income Stream?</h2>
              <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
                Join 100+ entrepreneurs who trust us with their Cash Cow channel strategy. 
                Let's discuss how we can transform your content into automated revenue.
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

export default CashCowChannels;