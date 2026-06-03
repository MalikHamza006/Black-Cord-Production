import Navigation from "@/components/Navigation";
import PricingSection from "@/components/PricingSection";
import { motion } from "framer-motion";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Star, Crown, ArrowRight } from "lucide-react";

const addOns = [
	{ name: "Rush Delivery (6 hours)", price: "$50" },
	{ name: "Long-form Video (10+ min)", price: "$200" },
	{ name: "Custom Animation Package", price: "$150" },
	{ name: "Voice-over Recording", price: "$100" },
	{ name: "Thumbnail A/B Testing", price: "$75" },
	{ name: "Video SEO Optimization", price: "$50" },
];

const Pricing = () => {
	return (
		<ErrorBoundary>
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
				
				<main className="pt-20 sm:pt-24 relative z-10">
					{/* Professional Pricing Section */}
					<PricingSection />

					{/* Additional Content */}
					<div className="bg-background py-20">
						<div className="container mx-auto px-6">
							{/* Add-ons Section */}
							<motion.div
								className="bg-white rounded-xl border border-neutral-200 p-12 mb-20 shadow-sm"
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.3 }}
							>
								<div className="text-center mb-12">
									<h2 className="section-text text-black mb-6">Popular Add-ons</h2>
									<p className="text-muted-foreground text-lg">Enhance your video production with these professional add-ons</p>
								</div>
								
								<motion.div
									className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
									initial="hidden"
									animate="visible"
									variants={{
										hidden: {},
										visible: { transition: { staggerChildren: 0.1 } },
									}}
								>
									{addOns.map((addon, index) => (
										<motion.div
											key={addon.name}
											className="flex justify-between items-center p-6 bg-card/50 rounded-lg border border-border/50 hover:border-red-500/30 transition-smooth hover-scale"
											initial={{ opacity: 0, x: -40 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{
												type: "spring",
												stiffness: 80,
												damping: 18,
												delay: index * 0.1,
											}}
										>
											<span className="text-sm text-muted-foreground font-medium">
												{addon.name}
											</span>
											<span className="font-semibold text-red-600">{addon.price}</span>
										</motion.div>
									))}
								</motion.div>
							</motion.div>

							{/* FAQ Section */}
							<motion.div
								className="text-center mb-20"
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.4 }}
							>
								<h2 className="section-text text-black mb-12">Frequently Asked Questions</h2>
								<motion.div
									className="max-w-4xl mx-auto space-y-6"
									initial="hidden"
									animate="visible"
									variants={{
										hidden: {},
										visible: { transition: { staggerChildren: 0.1 } },
									}}
								>
									{[
										{
											q: "What's included in the turnaround time?",
											a: "Our turnaround time includes full editing, color correction, audio enhancement, and one round of revisions.",
										},
										{
											q: "Can I cancel or change my plan anytime?",
											a: "Yes! You can upgrade, downgrade, or cancel your plan at any time with no long-term contracts.",
										},
										{
											q: "Do you work with content in languages other than English?",
											a: "Absolutely! We work with creators worldwide and can edit content in any language.",
										},
										{
											q: "What if I need more videos than my plan includes?",
											a: "You can always add extra videos at a per-video rate or upgrade to a higher plan mid-month.",
										},
										{
											q: "Do you provide raw footage or just the final edited video?",
											a: "We provide both! You'll receive the final edited video plus all raw footage and project files.",
										},
										{
											q: "What video formats do you support?",
											a: "We support all major formats including MP4, MOV, AVI, and can export in any format you need.",
										},
									].map((faq, index) => (
										<motion.div
											key={faq.q}
											className="text-left p-8 bg-card/30 rounded-lg border border-border/50 hover:border-red-500/30 transition-smooth"
											initial={{ opacity: 0, y: 30 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{
												type: "spring",
												stiffness: 80,
												damping: 18,
												delay: index * 0.1,
											}}
										>
											<h3 className="font-semibold text-foreground mb-4 flex items-center gap-3">
												<CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
												{faq.q}
											</h3>
											<p className="text-muted-foreground leading-relaxed">{faq.a}</p>
										</motion.div>
									))}
								</motion.div>
							</motion.div>

							{/* Final CTA Section */}
							<motion.div
								className="text-center"
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.5 }}
							>
								<div className="bg-gradient-to-r from-red-50 to-red-100 rounded-3xl p-12 border border-red-200">
									<h2 className="section-text text-black mb-6">Ready to Scale Your Content?</h2>
									<p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
										Join 200+ successful creators who trust us with their video production needs.
										Our professional services help improve content quality and reach.
									</p>
									<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
										<Link to="/start-project">
											<Button variant="member" size="xl" className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 group">
												Start Your Project
												<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
											</Button>
										</Link>
										<Link to="/contact">
											<Button variant="about" size="xl" className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
												Schedule Consultation
											</Button>
										</Link>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</main>
			</div>
		</ErrorBoundary>
	);
};

export default Pricing;