/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { PORTFOLIO } from "../data";
import { PortfolioItem } from "../types";
import BeforeAfter from "./BeforeAfter";
import { motion, AnimatePresence } from "motion/react";
import { Play, Eye, FileText, ChevronRight, Sparkles, Clock, Volume2 } from "lucide-react";

interface PortfolioProps {
  darkMode: boolean;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  searchQuery?: string;
  id?: string;
}

export default function Portfolio({ darkMode, selectedCategory, setSelectedCategory, searchQuery = "", id }: PortfolioProps) {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const categories = [
    { label: "All Works", value: "all" },
    { label: "Photo Editing", value: "photo" },
    { label: "Video Editing", value: "video" },
    { label: "Brand Design", value: "brand" }
  ];

  const filteredItems = PORTFOLIO.filter(item => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const renderPortfolioContent = (item: PortfolioItem) => {
    switch (item.category) {
      case "photo":
        return (
          <div className="flex flex-col gap-4">
            <BeforeAfter
              beforeImg={item.imageBefore || item.imageUrl}
              afterImg={item.imageAfter || item.imageUrl}
              title={item.title}
              id={`slider-${item.id}`}
            />
            <div className="px-1 mt-1">
              <div className="flex items-center gap-2 mb-2">
                {item.tags.map(tag => (
                  <span key={tag} className="font-mono text-[9px] px-2.5 py-0.5 rounded-full dark:bg-white/5 bg-black/5 text-gray-500 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
              <h4 className={`font-display font-bold text-lg ${darkMode ? "text-white" : "text-black"}`}>{item.title}</h4>
              <p className={`font-sans text-xs mt-2 leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                {item.description}
              </p>
              
              {/* Custom specs */}
              {item.stats && (
                <div className="grid grid-cols-2 gap-4 mt-4 border-t dark:border-white/5 border-black/5 pt-3">
                  {item.stats.map(st => (
                    <div key={st.label}>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-gray-500">{st.label}</p>
                      <p className={`font-display font-extrabold text-sm ${darkMode ? "text-white" : "text-black"}`}>{st.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      case "video":
        const isPlaying = activeVideoId === item.id;
        return (
          <div className="flex flex-col gap-4">
            {/* Cinematic video player / simulated player */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl group/video">
              {isPlaying && item.videoUrl ? (
                <video
                  src={item.videoUrl}
                  className="w-full h-full object-cover"
                  autoPlay
                  controls
                  loop
                  muted
                  playsInline
                />
              ) : (
                <>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/video:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Frosted overlay glass cover with play trigger */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex flex-col justify-between p-4 transition-all duration-300 group-hover/video:backdrop-blur-[3px]">
                    <div className="flex justify-between items-center">
                      <span className="bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-mono tracking-widest uppercase text-gray-300 flex items-center gap-1.5 border border-white/5">
                        <Clock className="w-3 h-3" /> 16s Reel Target
                      </span>
                      <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-mono tracking-widest uppercase text-black font-extrabold flex items-center gap-1">
                        4K UHD
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveVideoId(item.id)}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white text-black hover:bg-neutral-200 flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer z-10"
                    >
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </button>

                    <div className="flex justify-between items-end">
                      <span className="font-mono text-[9px] text-gray-300">CUT RATE: 24FPS</span>
                      <Volume2 className="w-4 h-4 text-gray-300 animate-pulse" />
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="px-1">
              <div className="flex items-center gap-2 mb-2">
                {item.tags.map(tag => (
                  <span key={tag} className="font-mono text-[9px] px-2.5 py-0.5 rounded-full dark:bg-white/5 bg-black/5 text-gray-500 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
              <h4 className={`font-display font-bold text-lg ${darkMode ? "text-white" : "text-black"}`}>{item.title}</h4>
              <p className={`font-sans text-xs mt-2 leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                {item.description}
              </p>

              {item.stats && (
                <div className="grid grid-cols-2 gap-4 mt-4 border-t dark:border-white/5 border-black/5 pt-3">
                  {item.stats.map(st => (
                    <div key={st.label}>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-gray-500">{st.label}</p>
                      <p className={`font-display font-extrabold text-sm ${darkMode ? "text-white" : "text-black"}`}>{st.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      case "brand":
        return (
          <div className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
            darkMode ? "glass-panel-dark border-white/5" : "glass-panel-light border-black/5"
          }`}>
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-5 group/brand-img">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover/brand-img:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4 flex justify-between items-end opacity-0 group-hover/brand-img:opacity-100 transition-opacity">
                <span className="font-mono text-[8px] text-gray-300 uppercase">SYSTEM SPECIFICATION SHEET</span>
                <span className="p-1 rounded-full bg-white text-black"><FileText className="w-3.5 h-3.5" /></span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                {item.tags.map(tag => (
                  <span key={tag} className="font-mono text-[9px] px-2.5 py-0.5 rounded-full dark:bg-white/5 bg-black/5 text-gray-500 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
              <h4 className={`font-display font-bold text-lg ${darkMode ? "text-white" : "text-black"}`}>{item.title}</h4>
              <p className={`font-sans text-xs mt-2 leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                {item.description}
              </p>

              {/* Simulated Palette grid for mock brand specs */}
              <div className="mt-4 border-t dark:border-white/5 border-black/5 pt-4 flex gap-2 flex-wrap">
                <div className="flex items-center gap-1.5 bg-black/5 dark:bg-white/5 p-1 rounded-full pr-3 border dark:border-white/5">
                  <div className="w-3.5 h-3.5 rounded-full bg-black border border-white/20" />
                  <span className="font-mono text-[9px] text-gray-400 font-bold">#000000</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/5 dark:bg-white/5 p-1 rounded-full pr-3 border dark:border-white/5">
                  <div className="w-3.5 h-3.5 rounded-full bg-white border border-black/20" />
                  <span className="font-mono text-[9px] text-gray-400 font-bold">#FFFFFF</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/5 dark:bg-white/5 p-1 rounded-full pr-3 border dark:border-white/5">
                  <div className="w-3.5 h-3.5 rounded-full bg-neutral-400 border" />
                  <span className="font-mono text-[9px] text-gray-400 font-bold">#A3A3A3</span>
                </div>
              </div>

              {item.stats && (
                <div className="grid grid-cols-2 gap-4 mt-4 border-t dark:border-white/5 border-black/5 pt-3">
                  {item.stats.map(st => (
                    <div key={st.label}>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-gray-500">{st.label}</p>
                      <p className={`font-display font-extrabold text-sm ${darkMode ? "text-white" : "text-black"}`}>{st.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id={id || "portfolio"} className="py-24 px-4 bg-transparent max-w-7xl mx-auto relative">
      {/* Liquid abstract background decorative lines */}
      <div className="absolute right-0 top-1/4 w-72 h-72 rounded-full dark:bg-white/5 bg-gray-500/5 blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b dark:border-white/5 border-black/5">
        <div>
          <span className="font-mono text-[10px] tracking-widest text-gray-500 uppercase block mb-3">
            02. SELECTED CURATED PORTFOLIO
          </span>
          <h2 className={`font-display font-extrabold text-3xl sm:text-5xl tracking-tight ${darkMode ? "text-white" : "text-black"}`}>
            Proof in Every Frame
          </h2>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setSelectedCategory(cat.value);
                setActiveVideoId(null); // Pause active videos on switch
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap focus:outline-none ${
                selectedCategory === cat.value
                  ? darkMode
                    ? "bg-white text-black border-transparent shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    : "bg-black text-white border-transparent"
                  : darkMode
                    ? "border-transparent bg-white/5 text-gray-300 hover:bg-white/10"
                    : "border-transparent bg-black/5 text-gray-600 hover:bg-black/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid containing selected items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 items-start">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col"
            >
              {renderPortfolioContent(item)}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Extra portfolio bottom hook */}
      <div className={`mt-16 p-8 rounded-3xl border text-center ${
        darkMode ? "glass-panel-dark border-white/10" : "glass-panel-light border-black/10"
      }`}>
        <h4 className="font-display font-extrabold text-xl mb-2">Have a custom format or storyboard in mind?</h4>
        <p className={`font-sans text-xs ${darkMode ? "text-gray-400" : "text-gray-600"} max-w-xl mx-auto mb-6`}>
          We manage custom encoding presets, master high-bitrate outputs, and build specific templates to match pre-established guidelines.
        </p>
        <button
          onClick={() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className={`px-6 py-2.5 rounded-full text-xs font-bold font-display uppercase tracking-wider cursor-pointer flex items-center gap-1 mx-auto transition-transform active:scale-95 ${
            darkMode 
              ? "bg-white text-black hover:bg-neutral-200" 
              : "bg-black text-white hover:bg-neutral-800"
          }`}
        >
          Request Creative Consultation <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
}
