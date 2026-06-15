/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, ArrowUpCircle } from "lucide-react";

interface FooterProps {
  darkMode: boolean;
  id?: string;
}

export default function Footer({ darkMode, id }: FooterProps) {
  const scrollToSection = (sectionId: string) => {
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
    { label: "About", target: "services" }, // 'About' naturally rolls into our core executive services section
    { label: "Contact", target: "contact" }
  ];

  return (
    <footer
      id={id || "app-footer"}
      className="border-t py-12 px-6 md:px-12 dark:border-white/5 border-black/5 bg-transparent"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left segment brand logo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold overflow-hidden ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}>
              <span className="font-display font-black tracking-tighter text-xs">VS</span>
            </div>
            <span className={`font-display font-extrabold text-sm tracking-tight ${darkMode ? "text-white" : "text-black"}`}>
              VS STUDIO
            </span>
          </div>
          <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase">
            CREATIVE DESIGN HOUSE • EST. 2026
          </span>
        </div>

        {/* Central segment links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.target)}
              className={`font-sans text-xs font-semibold tracking-wider uppercase transition-colors duration-300 opacity-60 hover:opacity-100 ${
                darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right segment back to top or direct link */}
        <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors uppercase font-mono tracking-widest"
          >
            Back to Top <ArrowUpCircle className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
          <div className="flex items-center gap-1.5 mt-1 text-gray-500 font-sans text-xs">
            <Mail className="w-3.5 h-3.5" /> <a href="mailto:svashu193@gmail.com" className="hover:underline">svashu193@gmail.com</a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t dark:border-white/5 border-black/5 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <p className="font-mono text-[10px] text-gray-500">
          Owner: Vashu Singh. Support Email: <a href="mailto:svashu193@gmail.com" className="hover:underline">svashu193@gmail.com</a>
        </p>
        <p className="font-mono text-[10px] text-gray-500">
          © 2026 Vashu Singh. All Rights Reserved. Designed to Apple iOS Liquid standards.
        </p>
      </div>
    </footer>
  );
}
