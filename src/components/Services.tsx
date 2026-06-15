/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { SERVICES } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { Image as ImageIcon, Film, Palette, ChevronDown, Check, ArrowUpRight } from "lucide-react";
import OwnerCard from "./OwnerCard";

interface ServicesProps {
  darkMode: boolean;
  onExplorePortfolio: (category: string) => void;
  id?: string;
}

export default function Services({ darkMode, onExplorePortfolio, id }: ServicesProps) {
  const [activeAccordion, setActiveAccordion] = useState<string | null>("photo-editing");

  const getIcon = (category: string) => {
    switch (category) {
      case "photo":
        return <ImageIcon className="w-5 h-5 text-gray-400" />;
      case "video":
        return <Film className="w-5 h-5 text-gray-400" />;
      case "brand":
        return <Palette className="w-5 h-5 text-gray-400" />;
      default:
        return null;
    }
  };

  const getSubtext = (category: string) => {
    switch (category) {
      case "photo":
        return "RETOUCHING & POST PRODUCTION";
      case "video":
        return "TIMELINE CUTS & SFX ENGINE";
      case "brand":
        return "SYSTEM DESIGN SYSTEMS";
      default:
        return "CREATIVE LABS";
    }
  };

  return (
    <section
      id={id || "services"}
      className="py-24 px-4 max-w-7xl mx-auto relative cursor-default"
    >
      {/* Editorial section header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 border-b pb-8 dark:border-white/5 border-black/5">
        <div>
          <span className="font-mono text-[10px] tracking-widest text-gray-500 uppercase block mb-3">
            01. CAPABILITIES & MASTERY
          </span>
          <h2 className={`font-display font-extrabold text-3xl sm:text-5xl tracking-tight ${darkMode ? "text-white" : "text-black"}`}>
            Bespoke Creative Solutions
          </h2>
        </div>
        <p className={`font-sans text-xs md:text-sm max-w-md ${darkMode ? "text-gray-400" : "text-gray-600"} leading-relaxed`}>
          We craft sleek media elements and brand identities designed to captivate high-profile customers. Every line, keyframe, and chromatic scale is adjusted with surgical precision.
        </p>
      </div>

      {/* Grid: Left - Detailed Accordion View, Right - Core Feature Previews */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Accordions */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {SERVICES.map((srv) => {
            const isOpen = activeAccordion === srv.id;
            return (
              <div
                key={srv.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? darkMode
                      ? "bg-neutral-900/60 border-white/25 shadow-2xl"
                      : "bg-white/95 border-black/20 shadow-xl"
                    : darkMode
                      ? "bg-black/30 border-white/5 hover:border-white/15"
                      : "bg-white/40 border-black/5 hover:border-black/15"
                } backdrop-blur-md`}
              >
                {/* Header Switcher */}
                <button
                  onClick={() => setActiveAccordion(isOpen ? null : srv.id)}
                  className="w-full text-left p-6 flex justify-between items-center cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${
                      darkMode 
                        ? isOpen ? "bg-white text-black" : "bg-white/5 text-gray-400"
                        : isOpen ? "bg-black text-white" : "bg-black/5 text-gray-600"
                    }`}>
                      {getIcon(srv.category)}
                    </div>
                    <div>
                      <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase block">
                        {getSubtext(srv.category)}
                      </span>
                      <h3 className={`font-display font-bold text-lg md:text-xl ${
                        darkMode ? "text-white" : "text-black"
                      }`}>
                        {srv.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-white dark:text-white" : ""
                  }`} />
                </button>

                {/* Sub-body Details */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 border-t dark:border-white/5 border-black/5">
                        <p className={`font-sans text-xs sm:text-sm mt-4 leading-relaxed ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}>
                          {srv.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                          {srv.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className={`p-0.5 rounded-full ${
                                darkMode ? "bg-white/10 text-white" : "bg-black/10 text-black"
                              }`}>
                                <Check className="w-3.5 h-3.5" />
                              </div>
                              <span className={`font-sans text-xs font-semibold ${
                                darkMode ? "text-gray-300" : "text-gray-700"
                              }`}>
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Interactive trigger link */}
                        <div className="mt-8 flex justify-end">
                          <button
                            onClick={() => onExplorePortfolio(srv.category)}
                            className={`inline-flex items-center gap-1.5 text-xs font-bold font-display cursor-pointer hover:underline ${
                              darkMode ? "text-white" : "text-black"
                            }`}
                          >
                            Explore {srv.category === "photo" ? "Retouches" : srv.category === "video" ? "Footage" : "Brand Book"}{" "}
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Dynamic Vashu Singh Owner identity glass integration card */}
        <div className="lg:col-span-5 h-full">
          <OwnerCard 
            darkMode={darkMode} 
            onContactClick={() => {
              const el = document.getElementById("contact");
              if (el) {
                const offset = 80;
                const pos = el.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: pos, behavior: "smooth" });
              }
            }} 
          />
        </div>
      </div>
    </section>
  );
}
