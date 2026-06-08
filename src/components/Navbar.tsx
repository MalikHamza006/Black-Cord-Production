import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface NavLinkItem {
  name: string;
  path: string;
}

const navLinks: NavLinkItem[] = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [open, setOpen] = useState<boolean>(false);

  // Safely close mobile menu on route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock background window body scroll when menu layout overlay is active
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu on Escape key press for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* HEADER BASE CONTAINER */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-full fixed top-0 left-0 z-50 h-16 bg-white/90 backdrop-blur-md border-b border-zinc-100 flex items-center select-none"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">
          
          {/* BRANDING LOGO ZONE */}
          <Link 
            to="/" 
            className="font-black text-xl tracking-tight text-black shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-md"
          >
            BRAND
          </Link>

          {/* DESKTOP ROUTING ARCHITECTURE (lg AND HIGHER BREAKPOINTS) */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
                    isActive 
                      ? "text-red-600 font-semibold" 
                      : "text-zinc-600 hover:text-black hover:bg-zinc-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* DIRECT SYSTEM HIGHLIGHT CTA LINK */}
            <Link
              to="/start-project"
              className="ml-3 px-4 py-2 text-sm font-semibold bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600"
            >
              Start Project
            </Link>
          </nav>

          {/* INTERACTIVE BREAKPOINT TRIGGER BUTTON (UNDER lg SCREEN RANGES) */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 -mr-2 text-zinc-600 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-md inline-flex items-center justify-center w-11 h-11"
            aria-expanded={open}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* FIXED COULISSE OFFSET PAD FOR ACCURATE VIEWPORT CONTENT DISTRIBUTION */}
      <div className="h-16 w-full space-shrink-0" aria-hidden="true" />

      {/* MOBILE & TABLET DRAWER OVERLAY CONTROL LAYER */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden fixed left-0 right-0 z-40 bg-white border-t border-zinc-100 shadow-xl flex flex-col"
            style={{ 
              top: "4rem", 
              height: "calc(100vh - 4rem)",
              height: "calc(100dvh - 4rem)"
            }}
          >
            {/* INNER EXPANSIVE LAYOUT LINKS BLOCK */}
            <nav className="flex flex-col px-4 py-6 space-y-1 overflow-y-auto flex-grow">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-4 py-4 rounded-xl text-base font-semibold transition-colors flex items-center min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
                      isActive
                        ? "bg-red-50 text-red-600"
                        : "text-zinc-800 hover:bg-zinc-50 active:bg-zinc-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* STICKY BOTTOM CONTAINER ACTION CALL ON DEVICE PORTVIEW FRAME */}
            <div className="p-4 border-t border-zinc-100 bg-zinc-50/50 pb-safe">
              <Link
                to="/start-project"
                className="w-full py-4 bg-red-600 text-white font-bold rounded-xl text-base text-center shadow-sm block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600 min-h-[48px] active:scale-[0.99] transition-transform"
              >
                Start Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;