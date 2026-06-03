import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Image, Users, TrendingUp, Clock, Star, CheckCircle, ArrowRight, Zap, Target, Award, BarChart3, Shield, Headphones, Calendar, Eye, Palette } from "lucide-react";

const Thumbnails = () => {
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

      <Navigation />
      
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
              <Image className="w-4 h-4" />
              THUMBNAIL SPECIALISTS
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Thumbnails That
              <span className="text-red-600 block">GET CLICKS</span>
            </h1>
            <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto leading-relaxed mb-8">
              Your thumbnail is your first impression. Our professional design service has increased 
              <span className="font-semibold text-black"> CTR by 340%</span> and generated 
              <span className="font-semibold text-black"> 15M+ additional views</span> for our clients. 
              Let us design thumbnails that convert.
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
              <h2 className="text-4xl font-bold text-black mb-6">Proven Thumbnail Results</h2>
              <p className="text-lg text-black max-w-3xl mx-auto">
                Our data-driven approach delivers measurable growth across all metrics that matter to your business.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                { 
                  number: "340%", 
                  label: "Average CTR Increase", 
                  icon: TrendingUp,
                  color: "text-red-600",
                  bgColor: "bg-red-50",
                  description: "Across all client channels"
                },
                { 
                  number: "15M+", 
                  label: "Additional Views Generated", 
                  icon: Eye,
                  color: "text-red-600",
                  bgColor: "bg-red-50",
                  description: "From improved thumbnails"
                },
                { 
                  number: "92%", 
                  label: "Client Satisfaction Rate", 
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

          {/* Thumbnail Video Showcase */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.2 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">Our Thumbnail Designs in Action</h2>
              <p className="text-lg text-black max-w-3xl mx-auto">
                Watch videos featuring our high-converting thumbnails that have increased CTR by up to 420% and generated millions of additional views.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Video 1 */}
              <motion.div
                className="h-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.2 }}
              >
                <Card className="h-full bg-white border border-red-200 overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
                  <div className="aspect-[9/16] bg-black relative">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/thumbnail1"
                      title="Thumbnail Design - CTR Example 1"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      +280% CTR
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      2.1M views
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-black mb-2">High-Converting Design</h3>
                    <p className="text-black mb-4 flex-grow">This thumbnail increased CTR by 280%, generating 2.1M additional views for our client.</p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-red-600 font-semibold">Thumbnail</span>
                      <span className="text-sm text-black">+280% CTR</span>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Video 2 */}
              <motion.div
                className="h-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.3 }}
              >
                <Card className="h-full bg-white border border-red-200 overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
                  <div className="aspect-[9/16] bg-black relative">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/thumbnail2"
                      title="Thumbnail Design - CTR Example 2"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      +320% CTR
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      1.8M views
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-black mb-2">Click Magnet Design</h3>
                    <p className="text-black mb-4 flex-grow">This thumbnail design increased CTR by 320%, becoming a true click magnet for our client.</p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-red-600 font-semibold">Thumbnail</span>
                      <span className="text-sm text-black">+320% CTR</span>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Video 3 */}
              <motion.div
                className="h-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.4 }}
              >
                <Card className="h-full bg-white border border-red-200 overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
                  <div className="aspect-[9/16] bg-black relative">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/thumbnail3"
                      title="Thumbnail Design - CTR Example 3"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      +420% CTR
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      3.2M views
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-black mb-2">Ultimate CTR Booster</h3>
                    <p className="text-black mb-4 flex-grow">Our highest-performing thumbnail with 420% CTR increase, generating 3.2M additional views.</p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-red-600 font-semibold">Thumbnail</span>
                      <span className="text-sm text-black">+420% CTR</span>
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
              <h2 className="text-4xl font-bold text-black mb-6">Our Thumbnail Design Process</h2>
              <p className="text-lg text-black max-w-3xl mx-auto">
                We don't just design thumbnails—we engineer click-worthy visuals using proven psychology and design principles.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Psychology-Driven Design",
                  description: "We use proven psychological principles to create thumbnails that trigger curiosity and drive clicks.",
                  features: ["Color psychology", "Facial expression analysis", "Visual hierarchy", "Attention-grabbing elements"],
                  color: "text-red-600",
                  bgColor: "bg-red-50"
                },
                {
                  icon: Zap,
                  title: "A/B Testing & Optimization",
                  description: "Our data-driven approach continuously optimizes your thumbnails for maximum performance.",
                  features: ["A/B testing", "Performance analytics", "Iterative improvement", "ROI tracking"],
                  color: "text-red-600",
                  bgColor: "bg-red-50"
                },
                {
                  icon: Award,
                  title: "Professional Design",
                  description: "Cinematic quality with broadcast-standard design, typography, and visual effects.",
                  features: ["4K design quality", "Professional typography", "Visual effects", "Brand consistency"],
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
                  <div className="text-5xl font-bold text-black mb-2">$50</div>
                  <p className="text-black">Perfect for testing our service</p>
                </div>
                
                <div className="space-y-4 mb-8 flex-grow">
                  {[
                    "Professional thumbnail design",
                    "3 design variations",
                    "Color psychology optimization",
                    "High-resolution delivery",
                    "24-hour delivery",
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
                  <div className="text-5xl font-bold text-black mb-2">$40</div>
                  <p className="text-black">Best value for serious creators</p>
                </div>
                
                <div className="space-y-4 mb-8 flex-grow">
                  {[
                    "Everything in Starter",
                    "5 design variations",
                    "A/B testing setup",
                    "Performance analytics",
                    "12-hour delivery",
                    "Unlimited revisions",
                    "Priority support",
                    "Monthly optimization"
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
                  <div className="text-5xl font-bold text-black mb-2">$30</div>
                  <p className="text-black">For agencies & large creators</p>
                </div>
                
                <div className="space-y-4 mb-8 flex-grow">
                  {[
                    "Everything in Professional",
                    "10 design variations",
                    "Dedicated account manager",
                    "Custom workflow integration",
                    "6-hour delivery",
                    "Unlimited revisions",
                    "24/7 priority support",
                    "Weekly optimization calls",
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
                Real results from real clients. See how we've transformed their click-through rates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "David Kim",
                  role: "Tech Reviewer",
                  avatar: "DK",
                  quote: "Black Cord Production's thumbnails increased my CTR by 450%! My videos now get 3x more views just from better thumbnails. Their design psychology is incredible.",
                  metrics: [
                    { label: "CTR Increase", value: "450%" },
                    { label: "Views Increase", value: "300%" },
                    { label: "Revenue Increase", value: "280%" }
                  ]
                },
                {
                  name: "Lisa Martinez",
                  role: "Fashion Creator",
                  avatar: "LM",
                  quote: "The ROI on their thumbnail service is insane. I've seen a 380% increase in clicks and my subscriber growth has accelerated dramatically. They understand what works.",
                  metrics: [
                    { label: "CTR Increase", value: "380%" },
                    { label: "Subscriber Growth", value: "250%" },
                    { label: "Engagement Rate", value: "200%" }
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
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
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
              <h2 className="text-4xl font-bold text-black mb-6">Ready to Maximize Your Click-Through Rate?</h2>
              <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
                Join 400+ creators who trust us with their thumbnail design. 
                Let's discuss how we can transform your thumbnails into click magnets.
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

export default Thumbnails;