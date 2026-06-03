import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Film, Users, TrendingUp, Clock, Star, CheckCircle, ArrowRight, Zap, Target, Award, BarChart3, Shield, Headphones, Calendar, Camera, Video } from "lucide-react";

const DocumentaryStyle = () => {
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
              <Film className="w-4 h-4" />
              DOCUMENTARY SPECIALISTS
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Documentary Videos That
              <span className="text-red-600 block">GO VIRAL</span>
            </h1>
            <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto leading-relaxed mb-8">
              Cinematic storytelling meets business results. Our documentary service has produced 
              <span className="font-semibold text-black"> 12M+ views</span> and generated 
              <span className="font-semibold text-black"> $2.5M+ in revenue</span> for our clients. 
              Let us craft your narrative masterpiece.
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
              <h2 className="text-4xl font-bold text-black mb-6">Proven Documentary Results</h2>
              <p className="text-lg text-black max-w-3xl mx-auto">
                Our data-driven approach delivers measurable growth across all metrics that matter to your business.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                { 
                  number: "12M+", 
                  label: "Total Views Generated", 
                  icon: TrendingUp,
                  color: "text-red-600",
                  bgColor: "bg-red-50",
                  description: "Across all client documentaries"
                },
                { 
                  number: "$2.5M+", 
                  label: "Revenue Generated", 
                  icon: BarChart3,
                  color: "text-red-600",
                  bgColor: "bg-red-50",
                  description: "For our clients"
                },
                { 
                  number: "95%", 
                  label: "Client Satisfaction Rate", 
                  icon: Star,
                  color: "text-red-600",
                  bgColor: "bg-red-50",
                  description: "Industry-leading performance"
                },
                { 
                  number: "72h", 
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

          {/* Documentary Video Showcase */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.2 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">Our Documentary Videos in Action</h2>
              <p className="text-lg text-black max-w-3xl mx-auto">
                Watch our cinematic documentary videos that have generated millions of views and revenue for our clients.
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
                      src="https://www.youtube.com/embed/documentary1"
                      title="Documentary Video - Cinematic Example 1"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      CINEMATIC
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      1.8M views
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2">Storytelling Mastery</h3>
                    <p className="text-black mb-4">This documentary captivated audiences with powerful storytelling, generating $400K+ in revenue.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-red-600 font-semibold">Documentary</span>
                      <span className="text-sm text-black">$400K revenue</span>
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
                      src="https://www.youtube.com/embed/documentary2"
                      title="Documentary Video - Cinematic Example 2"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      EPIC
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      2.3M views
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2">Visual Excellence</h3>
                    <p className="text-black mb-4">This documentary showcased visual excellence, resulting in $600K+ in revenue and brand partnerships.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-red-600 font-semibold">Documentary</span>
                      <span className="text-sm text-black">$600K revenue</span>
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
                      src="https://www.youtube.com/embed/documentary3"
                      title="Documentary Video - Cinematic Example 3"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      MASTERPIECE
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      3.1M views
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2">Narrative Excellence</h3>
                    <p className="text-black mb-4">Our highest-performing documentary with 3.1M views and $800K+ in revenue through multiple streams.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-red-600 font-semibold">Documentary</span>
                      <span className="text-sm text-black">$800K revenue</span>
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
              <h2 className="text-4xl font-bold text-black mb-6">Our Documentary Production Process</h2>
              <p className="text-lg text-black max-w-3xl mx-auto">
                We don't just edit videos—we craft cinematic narratives that engage audiences and drive business results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Story Development",
                  description: "We work with you to develop compelling narratives that resonate with your audience and achieve your business goals.",
                  features: ["Story structure development", "Character arc creation", "Message positioning", "Audience analysis"],
                  color: "text-red-600",
                  bgColor: "bg-red-50"
                },
                {
                  icon: Zap,
                  title: "Cinematic Production",
                  description: "Professional-grade production with broadcast-quality editing, color grading, and audio mastering.",
                  features: ["4K professional editing", "Color correction & grading", "Audio mastering", "Motion graphics"],
                  color: "text-red-600",
                  bgColor: "bg-red-50"
                },
                {
                  icon: Award,
                  title: "Strategic Distribution",
                  description: "We optimize your documentary for maximum reach and engagement across all platforms.",
                  features: ["Platform optimization", "SEO enhancement", "Distribution strategy", "Performance analytics"],
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
                Transparent pricing with no hidden fees. Choose the package that aligns with your storytelling goals.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Starter Package */}
              <Card className="bg-white border border-red-200 p-8 relative flex flex-col h-full">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black mb-2">Starter</h3>
                  <div className="text-5xl font-bold text-black mb-2">$500</div>
                  <p className="text-black">Perfect for testing our service</p>
                </div>
                
                <div className="space-y-4 mb-8 flex-grow">
                  {[
                    "Professional documentary editing",
                    "Story development consultation",
                    "Color correction & grading",
                    "Audio enhancement",
                    "72-hour delivery",
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
                  <div className="text-5xl font-bold text-black mb-2">$400</div>
                  <p className="text-black">Best value for serious storytellers</p>
                </div>
                
                <div className="space-y-4 mb-8 flex-grow">
                  {[
                    "Everything in Starter",
                    "Advanced story development",
                    "Motion graphics & effects",
                    "Custom music & sound design",
                    "48-hour delivery",
                    "Unlimited revisions",
                    "Priority support",
                    "Distribution strategy"
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
                  <div className="text-5xl font-bold text-black mb-2">$300</div>
                  <p className="text-black">For agencies & large productions</p>
                </div>
                
                <div className="space-y-4 mb-8 flex-grow">
                  {[
                    "Everything in Professional",
                    "Dedicated production team",
                    "Custom workflow integration",
                    "White-label options",
                    "24-hour delivery",
                    "Unlimited revisions",
                    "24/7 priority support",
                    "Weekly progress calls",
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
                Real results from real clients. See how we've transformed their storytelling.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Robert Chen",
                  role: "Tech CEO",
                  avatar: "RC",
                  quote: "Black Cord Production's documentary about our company's journey generated 2M+ views and helped us secure $5M in Series A funding. Their storytelling is incredible.",
                  metrics: [
                    { label: "Views Generated", value: "2M+" },
                    { label: "Funding Secured", value: "$5M" },
                    { label: "Brand Awareness", value: "400%" }
                  ]
                },
                {
                  name: "Maria Rodriguez",
                  role: "Non-Profit Director",
                  avatar: "MR",
                  quote: "Their documentary about our cause raised $500K in donations and increased our volunteer base by 300%. The emotional impact was incredible.",
                  metrics: [
                    { label: "Donations Raised", value: "$500K" },
                    { label: "Volunteer Growth", value: "300%" },
                    { label: "Social Shares", value: "50K+" }
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
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
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
              <h2 className="text-4xl font-bold text-black mb-6">Ready to Tell Your Story?</h2>
              <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
                Join 150+ organizations who trust us with their documentary production. 
                Let's discuss how we can transform your story into cinematic success.
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

export default DocumentaryStyle;