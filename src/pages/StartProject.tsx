import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const projectTypes = [
  {
    title: "YouTube Shorts",
    description: "Viral short-form content for YouTube",
    price: "From $75",
    features: ["Hook-driven editing", "Trending audio", "Thumbnail included"],
    icon: "📺",
    gradient: "from-red-500 to-orange-500",
  },
  {
    title: "TikTok Videos",
    description: "Trending content designed for TikTok",
    price: "From $75",
    features: ["Perfect timing", "Sound sync", "Viral hooks"],
    icon: "🎵",
    gradient: "from-red-500 to-red-400",
  },
  {
    title: "Cash Cow Channels",
    description: "Educational faceless content",
    price: "From $125",
    features: ["Professional animations", "Voice-over sync", "SEO optimized"],
    icon: "💰",
    gradient: "from-green-500 to-teal-500",
  },
  {
    title: "Documentary Style",
    description: "Professional documentary editing",
    price: "From $200",
    features: ["Cinematic quality", "Color grading", "Professional audio"],
    icon: "🎬",
    gradient: "from-red-600 to-red-400",
  },
];

const StartProject = () => {
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
        <div className="osmo-particle" style={{left: '25%', animationDelay: '2s'}}></div>
        <div className="osmo-particle" style={{left: '35%', animationDelay: '4s'}}></div>
        <div className="osmo-particle" style={{left: '45%', animationDelay: '6s'}}></div>
        <div className="osmo-particle" style={{left: '55%', animationDelay: '8s'}}></div>
        <div className="osmo-particle" style={{left: '65%', animationDelay: '10s'}}></div>
        <div className="osmo-particle" style={{left: '75%', animationDelay: '12s'}}></div>
        <div className="osmo-particle" style={{left: '85%', animationDelay: '14s'}}></div>
        <div className="osmo-particle" style={{left: '95%', animationDelay: '16s'}}></div>
      </div>

      <Navigation />

      <main className="pt-24 relative z-10">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-green-100">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              30-Day Money-Back Guarantee
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">Start Your Project</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to create viral content? Professional video editing starting at just $75 per video.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="flex items-center gap-2 text-sm text-green-600">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>24-hour delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Unlimited revisions</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Money-back guarantee</span>
              </div>
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-8">Choose Your Service</h2>

            <div className="space-y-4">
              {projectTypes.map((project, index) => (
                <Card
                  key={project.title}
                  className="group bg-white border border-neutral-200 hover:border-red-600 transition-all duration-300 cursor-pointer relative overflow-hidden"
                >
                  <div className="hidden" />

                  <div className="relative p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{project.icon}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-black transition-all duration-300">
                            {project.title}
                          </h3>
                          <span className="text-sm font-semibold text-red-600">
                            {project.price}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature) => (
                            <span key={feature} className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      <input type="radio" name="projectType" value={project.title} className="mt-1 text-red-500 focus:ring-red-500" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Rush Options */}
            <Card className="mt-8 bg-white border border-neutral-200">
              <div className="p-6">
                <h3 className="font-semibold text-black mb-4">Rush Delivery Options</h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between p-3 hover:bg-neutral-100 rounded-lg cursor-pointer">
                    <div>
                      <span className="text-sm font-medium text-black">Standard (24-48 hours)</span>
                      <p className="text-xs text-muted-foreground">Included in base price</p>
                    </div>
                    <input type="radio" name="delivery" value="standard" defaultChecked className="text-red-500 focus:ring-red-500" />
                  </label>
                  <label className="flex items-center justify-between p-3 hover:bg-neutral-100 rounded-lg cursor-pointer">
                    <div>
                      <span className="text-sm font-medium text-black">Express (12 hours)</span>
                      <p className="text-xs text-muted-foreground">+$30 per video</p>
                    </div>
                    <input type="radio" name="delivery" value="express" className="text-red-500 focus:ring-red-500" />
                  </label>
                  <label className="flex items-center justify-between p-3 hover:bg-neutral-100 rounded-lg cursor-pointer">
                    <div>
                      <span className="text-sm font-medium text-black">Rush (6 hours)</span>
                      <p className="text-xs text-muted-foreground">+$50 per video</p>
                    </div>
                    <input type="radio" name="delivery" value="rush" className="text-red-500 focus:ring-red-500" />
                  </label>
                </div>
              </div>
            </Card>

            {/* Project Details Form */}
            <Card className="bg-white border border-neutral-200 mt-8">
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-black mb-6">Project Details</h2>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-black font-medium">First Name *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        className="bg-white border-neutral-300 text-black placeholder:text-neutral-500 focus:border-red-600 focus:ring-red-600 transition-all duration-300" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-black font-medium">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        className="bg-white border-neutral-300 text-black placeholder:text-neutral-500 focus:border-red-600 focus:ring-red-600 transition-all duration-300" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-black font-medium">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-white border-neutral-300 text-black placeholder:text-neutral-500 focus:border-red-600 focus:ring-red-600 transition-all duration-300" 
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="videos" className="text-black font-medium">Number of Videos</Label>
                    <select 
                      id="videos" 
                      className="w-full px-3 py-2 bg-white border border-neutral-300 rounded-md focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300 text-black"
                    >
                      <option value="1">1 Video</option>
                      <option value="3">3 Videos (-10% discount)</option>
                      <option value="5">5 Videos (-15% discount)</option>
                      <option value="10">10 Videos (-20% discount)</option>
                      <option value="custom">Custom Package</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deadline" className="text-black font-medium">Project Deadline</Label>
                    <Input 
                      id="deadline" 
                      type="date" 
                      className="bg-white border-neutral-300 text-black focus:border-red-600 focus:ring-red-600 transition-all duration-300" 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-black font-medium">Project Description *</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Describe your project goals, target audience, style preferences, and any specific requirements..." 
                      rows={4} 
                      className="bg-white border-neutral-300 text-black placeholder:text-neutral-500 focus:border-red-600 focus:ring-red-600 transition-all duration-300 resize-none" 
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reference" className="text-black font-medium">Reference Links (Optional)</Label>
                    <Textarea 
                      id="reference" 
                      placeholder="Share links to videos you like or want to emulate (YouTube, TikTok, Instagram, etc.)" 
                      rows={2} 
                      className="bg-white border-neutral-300 text-black placeholder:text-neutral-500 focus:border-red-600 focus:ring-red-600 transition-all duration-300 resize-none" 
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-black">Additional Services</h3>
                    <div className="space-y-2">
                      {[
                        { service: "Custom Thumbnail Design", price: "+$25" },
                        { service: "Voice-over Recording", price: "+$100" },
                        { service: "Custom Animation Package", price: "+$150" },
                        { service: "SEO Optimization", price: "+$50" },
                      ].map((addon) => (
                        <label key={addon.service} className="flex items-center justify-between p-3 hover:bg-neutral-100 rounded-lg cursor-pointer">
                          <div className="flex items-center">
                            <input type="checkbox" className="mr-3 text-red-500 focus:ring-red-500" />
                          <span className="text-sm text-black">{addon.service}</span>
                          </div>
                          <span className="text-sm text-red-600 font-semibold">
                            {addon.price}
                          </span>
                        </label>
                      ))}
                    </div>

                      <div className="border-t border-neutral-200 pt-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold text-black">Estimated Total:</span>
                        <span className="text-xl font-bold text-black">$75+</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-6">*Final price will be confirmed based on your specific requirements</p>

                      <Button 
                        type="submit" 
                        variant="member"
                        size="xl"
                        className="w-full px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                      >
                        Submit Project Request
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </Card>
          </div>

          {/* Process Timeline */}
          <div className="mt-20">
            <h2 className="text-2xl font-semibold text-center text-black mb-12">What happens next?</h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Project Review", desc: "We review your request within 2 hours", time: "Under 2 hours" },
                { step: "2", title: "Quote & Planning", desc: "Receive detailed quote and project timeline", time: "Same day" },
                { step: "3", title: "Production Starts", desc: "Our editors begin working on your content", time: "Next day" },
                { step: "4", title: "Delivery & Revisions", desc: "Get your video with unlimited revisions", time: "24-48h" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
                  <span className="text-xs text-red-600 font-semibold">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StartProject;