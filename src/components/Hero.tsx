/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Sparkles, Film, Image as ImageIcon, Award, Compass } from "lucide-react";
import SearchBar from "./SearchBar";
import LiveClock from "./LiveClock";

interface HeroProps {
  darkMode: boolean;
  onGetStarted: () => void;
  onViewPortfolio: () => void;
  onSearchChange: (query: string) => void;
  id?: string;
}

export default function Hero({ darkMode, onGetStarted, onViewPortfolio, onSearchChange, id }: HeroProps) {
  return (
    <section
      id={id || "hero"}
      className="relative min-h-screen flex items-center justify-center pt-36 pb-16 px-4 overflow-hidden"
    >
      {/* 🔮 iOS 26 Liquid Glass Sphere Blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Blob 1: Silver Dust floating top-left */}
        <div 
          className={`absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 rounded-full blur-[80px] md:blur-[120px] mix-blend-screen animate-float-slow opacity-60 ${
            darkMode 
              ? "bg-neutral-800" 
              : "bg-blue-100/70"
          }`}
          style={{ animationDelay: "0s" }}
        />
        {/* Blob 2: Glass White floating bottom-right */}
        <div 
          className={`absolute bottom-1/4 right-1/4 w-80 md:w-[450px] h-80 md:h-[450px] rounded-full blur-[90px] md:blur-[130px] mix-blend-screen animate-float-medium opacity-50 ${
            darkMode 
              ? "bg-zinc-800/80" 
              : "bg-purple-100/70"
          }`}
          style={{ animationDelay: "2s" }}
        />
        {/* Blob 3: Accent pulse bottom-left */}
        <div 
          className={`absolute bottom-1/10 left-1/3 w-64 md:w-80 h-64 md:h-80 rounded-full blur-[70px] md:blur-[100px] animate-float-fast opacity-40 ${
            darkMode 
              ? "bg-slate-800/60" 
              : "bg-slate-100"
          }`}
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Hero Master Container */}
      <div className="relative max-w-5xl w-full z-10 text-center flex flex-col items-center">
        {/* 🕰️ Top Center Live Clock */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <LiveClock />
        </motion.div>

        {/* 🔍 Glassmorphism Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="w-full max-w-lg mb-10"
        >
          <SearchBar onSearchChange={onSearchChange} darkMode={darkMode} />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`font-display font-extrabold text-4xl sm:text-5xl md:text-7xl leading-[1.05] tracking-tight max-w-4xl ${
            darkMode 
              ? "text-white" 
              : "text-black"
          }`}
        >
          Transforming Ideas Into{" "}
          <span className="block mt-1 bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 bg-clip-text text-transparent dark:from-white dark:via-neutral-400 dark:to-white">
            Stunning Visual Experiences
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className={`font-sans text-sm sm:text-base md:text-xl max-w-2xl mt-6 leading-relaxed leading-[1.6] ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Professional Photo Editing, Video Editing & Brand Design.
        </motion.p>

        {/* Button Pair */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto"
        >
          <button
            onClick={onGetStarted}
            className={`cursor-pointer px-8 py-4 rounded-full font-display font-extrabold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group ${
              darkMode
                ? "bg-white text-black hover:bg-neutral-200 hover:shadow-lg hover:shadow-white/10"
                : "bg-black text-white hover:bg-neutral-800 hover:shadow-lg hover:shadow-black/10"
            }`}
          >
            Get Started
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={onViewPortfolio}
            className={`cursor-pointer px-8 py-4 rounded-full font-display font-semibold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 border ${
              darkMode
                ? "border-white/10 text-white bg-white/5 hover:bg-white/10"
                : "border-black/10 text-black bg-black/5 hover:bg-black/10"
            } backdrop-blur-sm`}
          >
            View Portfolio
            <Compass className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Quick capabilities widgets */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-3 gap-3 md:gap-8 mt-20 max-w-3xl w-full border-t pt-8 dark:border-white/5 border-black/5"
        >
          <div className="flex flex-col items-center">
            <div className={`p-2 rounded-full mb-2 ${darkMode ? "bg-white/5 text-white" : "bg-black/5 text-black"}`}>
              <ImageIcon className="w-4 h-4" />
            </div>
            <span className={`text-[10px] md:text-xs font-bold tracking-wider font-display ${darkMode ? "text-white" : "text-black"}`}>
              Photo Editing
            </span>
            <span className="font-mono text-[9px] text-gray-500 mt-1 uppercase">Retouching / Grading</span>
          </div>

          <div className="flex flex-col items-center">
            <div className={`p-2 rounded-full mb-2 ${darkMode ? "bg-white/5 text-white" : "bg-black/5 text-black"}`}>
              <Film className="w-4 h-4" />
            </div>
            <span className={`text-[10px] md:text-xs font-bold tracking-wider font-display ${darkMode ? "text-white" : "text-black"}`}>
              Video Editing
            </span>
            <span className="font-mono text-[9px] text-gray-500 mt-1 uppercase">Reels / Commercials</span>
          </div>

          <div className="flex flex-col items-center">
            <div className={`p-2 rounded-full mb-2 ${darkMode ? "bg-white/5 text-white" : "bg-black/5 text-black"}`}>
              <Award className="w-4 h-4" />
            </div>
            <span className={`text-[10px] md:text-xs font-bold tracking-wider font-display ${darkMode ? "text-white" : "text-black"}`}>
              Brand Identity
            </span>
            <span className="font-mono text-[9px] text-gray-500 mt-1 uppercase">Logos / Guidelines</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative linear edge gradients */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t pointer-events-none z-10 dark:from-black dark:to-transparent from-white to-transparent" />
    </section>
  );
}
