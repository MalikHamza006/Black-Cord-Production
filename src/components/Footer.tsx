import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground osmo-bg py-12 sm:py-16 lg:py-20">
      {/* Gradient Mesh Background */}
      <div className="gradient-mesh"></div>
      
      {/* Advanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="osmo-floating top-4 left-8 w-8 h-8 border border-red-600/10 rounded-full magnetic-element"></div>
        <div className="osmo-floating top-6 right-12 w-10 h-10 bg-red-600/06 rounded-lg magnetic-element"></div>
        <div className="osmo-floating bottom-8 left-1/4 w-6 h-6 border border-red-600/12 rounded-full magnetic-element"></div>
        <div className="osmo-floating bottom-4 right-1/3 w-8 h-8 bg-red-600/08 rounded-lg magnetic-element"></div>
        <div className="osmo-floating top-1/2 left-12 w-6 h-6 border border-red-600/06 rounded-full magnetic-element"></div>
        <div className="osmo-floating top-1/3 right-16 w-8 h-8 bg-red-600/12 rounded-lg magnetic-element"></div>
        
        {/* Advanced Particles */}
        <div className="osmo-particle" style={{left: '15%', animationDelay: '2s'}}></div>
        <div className="osmo-particle" style={{left: '35%', animationDelay: '4s'}}></div>
        <div className="osmo-particle" style={{left: '55%', animationDelay: '6s'}}></div>
        <div className="osmo-particle" style={{left: '75%', animationDelay: '8s'}}></div>
        <div className="osmo-particle" style={{left: '95%', animationDelay: '10s'}}></div>
      </div>

      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden bg-red-600">
                {/* Black Cord Production Logo */}
                <img
                  src="/ascets/logo.png"
                  alt="Black Cord Production Logo"
                  className="w-full h-full object-contain"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    console.error("Footer logo failed to load");
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <span className="text-xl lg:text-2xl font-bold text-foreground">
                Black Cord <span className="text-red-600">Production</span>
              </span>
            </div>

            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed text-sm sm:text-base">
              Professional video production services that transform your vision into compelling visual stories.
              Serving global clients with excellence and creativity since 2020.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-sm text-muted-foreground">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                <span className="text-sm text-muted-foreground">Adobe Certified Professionals</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                <span className="text-sm text-muted-foreground">YouTube Partner Program</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="https://instagram.com/blackcordproduction" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-foreground hover:text-red-600 interactive-glow w-10 h-10"><Instagram className="w-5 h-5" /></Button>
              </a>
              <a href="https://twitter.com/blackcordprod" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-foreground hover:text-red-600 interactive-glow w-10 h-10"><Twitter className="w-5 h-5" /></Button>
              </a>
              <a href="https://linkedin.com/company/blackcordproduction" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-foreground hover:text-red-600 interactive-glow w-10 h-10"><Linkedin className="w-5 h-5" /></Button>
              </a>
              <a href="https://youtube.com/@blackcordproduction" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-foreground hover:text-red-600 interactive-glow w-10 h-10"><Youtube className="w-5 h-5" /></Button>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-6 text-foreground">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/youtube-shorts" className="text-muted-foreground hover:text-red-600 transition-colors interactive-glow text-sm">YouTube Shorts</Link></li>
              <li><Link to="/services/tiktok-videos" className="text-muted-foreground hover:text-red-600 transition-colors interactive-glow text-sm">TikTok Videos</Link></li>
              <li><Link to="/services/instagram-reels" className="text-muted-foreground hover:text-red-600 transition-colors interactive-glow text-sm">Instagram Reels</Link></li>
              <li><Link to="/services/cash-cow-channels" className="text-muted-foreground hover:text-red-600 transition-colors interactive-glow text-sm">Cash Cow Channels</Link></li>
              <li><Link to="/services/motion-graphics" className="text-muted-foreground hover:text-red-600 transition-colors interactive-glow text-sm">Motion Graphics</Link></li>
              <li><Link to="/services/thumbnails" className="text-muted-foreground hover:text-red-600 transition-colors interactive-glow text-sm">Thumbnails</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-6 text-foreground">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:hello@blackcordproduction.com" 
                  className="text-muted-foreground hover:text-red-600 transition-colors text-sm break-all"
                >
                  hello@blackcordproduction.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                <a 
                  href="tel:+15551234567" 
                  className="text-muted-foreground hover:text-red-600 transition-colors text-sm"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Serving Global Clients</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-red-600 flex-shrink-0">🌍</div>
                <span className="text-muted-foreground text-sm whitespace-nowrap">15+ Countries</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border mt-8 sm:mt-12">
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto gap-4 sm:gap-0">
            <p className="text-muted-foreground text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Black Cord Production. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-6">
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-red-600 text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-muted-foreground hover:text-red-600 text-sm transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" className="text-muted-foreground hover:text-red-600 text-sm transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
