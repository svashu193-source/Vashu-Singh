/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  id?: string;
}

export default function Navbar({ darkMode, setDarkMode, id }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { label: "Home", target: "hero" },
    { label: "Services", target: "services" },
    { label: "Portfolio", target: "portfolio" },
    { label: "Why Us", target: "why-choose-us" },
    { label: "Testimonials", target: "testimonials" },
    { label: "Contact", target: "contact" }
  ];

  return (
    <>
      <header
        id={id || "app-header"}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "py-3 px-4 md:px-8" 
            : "py-6 px-6 md:px-12"
        }`}
      >
        <div 
          className={`max-w-7xl mx-auto rounded-full transition-all duration-500 flex items-center justify-between px-6 py-2.5 ${
            scrolled 
              ? darkMode 
                ? "glass-panel-dark bg-black/75 border-white/10 shadow-2xl" 
                : "glass-panel-light bg-white/75 border-white/90 shadow-xl"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Brand Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
          >
            <div className={`relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 font-bold overflow-hidden ${
              darkMode 
                ? "bg-white text-black shadow-inner shadow-white/40" 
                : "bg-black text-white shadow-inner shadow-black/40"
            }`}>
              <span className="font-display font-black tracking-tighter text-sm">VS</span>
              {/* Dynamic liquid shine overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rotate-12" />
            </div>
            
            <div className="flex flex-col">
              <span className={`font-display font-extrabold text-sm tracking-tight ${darkMode ? "text-white" : "text-black"}`}>
                VS STUDIO
              </span>
              <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase">
                Vashu Singh
              </span>
            </div>
          </button>

          {/* Large Screen Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className={`font-sans text-xs font-semibold tracking-wider uppercase relative py-2 px-1 transition-colors duration-300 hover:opacity-100 ${
                  darkMode 
                    ? "text-gray-300 hover:text-white" 
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right side controls (Theme toggle + CTA + Mobile trigger) */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Switch */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full border transition-all duration-300 cursor-pointer ${
                darkMode 
                  ? "bg-neutral-900 border-white/10 text-yellow-400 hover:bg-neutral-800" 
                  : "bg-gray-100 border-black/10 text-neutral-800 hover:bg-gray-200"
              }`}
              aria-label="Toggle visual tone"
              id="theme-toggler"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Custom CTA Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className={`hidden md:flex items-center gap-1 text-xs font-bold font-display px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${
                darkMode 
                  ? "bg-white text-black hover:bg-neutral-200" 
                  : "bg-black text-white hover:bg-neutral-800"
              }`}
            >
              Get Started <ArrowUpRight className="w-3 h-3" />
            </button>

            {/* Mobile Nav Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-full border transition-all duration-300 ${
                darkMode 
                  ? "bg-neutral-950 border-white/10 text-white" 
                  : "bg-white border-black/10 text-black"
              }`}
              id="mobile-menu-trigger"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop & Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-40 lg:hidden flex flex-col justify-center px-8 ${
              darkMode ? "bg-black/95 text-white" : "bg-white/95 text-black"
            }`}
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)"
            }}
          >
            {/* Absolute close button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full border border-gray-500/20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col gap-6 text-center">
              <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase mb-4">
                NAVIGATION CORE
              </span>

              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.target}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => scrollToSection(link.target)}
                  className="font-display font-extrabold text-2xl tracking-tight transition-colors duration-200 hover:opacity-75 focus:outline-none"
                >
                  {link.label}
                </motion.button>
              ))}

              <div className="h-px bg-gray-500/10 my-4" />

              <div className="flex flex-col gap-2 items-center">
                <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase mb-1">
                  DIRECT CONTACT
                </span>
                <a 
                  href="mailto:svashu193@gmail.com" 
                  className="font-sans text-xs underline font-medium hover:opacity-85 text-gray-400"
                >
                  svashu193@gmail.com
                </a>
                <p className="font-mono text-[10px] text-gray-500 mt-2">Owner: Vashu Singh</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
