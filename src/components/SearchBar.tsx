/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { Search, X, Sparkles } from "lucide-react";

interface SearchBarProps {
  onSearchChange: (query: string) => void;
  darkMode: boolean;
}

export default function SearchBar({ onSearchChange, darkMode }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    onSearchChange(val);
  };

  const clearSearch = () => {
    setQuery("");
    onSearchChange("");
  };

  return (
    <div
      className={`relative mx-auto mt-6 w-full max-w-lg transition-all duration-500 z-20 ${
        isFocused ? "scale-[1.04]" : "scale-100"
      }`}
    >
      {/* Expanding dynamic glowing aura behind the pill */}
      <div
        className={`absolute -inset-1 rounded-full blur-xl transition-all duration-700 pointer-events-none ${
          isFocused
            ? "bg-gradient-to-r from-white/20 via-white/40 to-white/20 opacity-80 animate-pulse"
            : "bg-transparent opacity-0"
        }`}
      />

      {/* Large Rounded Pill container with Frosted Liquid Glass of absolute 30px-50px blur */}
      <div
        className="relative flex items-center rounded-full px-5 py-3 border transition-all duration-500 overflow-hidden bg-white/[0.03] dark:bg-black/[0.12] border-white/10 dark:border-white/[0.08] backdrop-blur-[35px]"
        style={{
          boxShadow: isFocused
            ? "0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1.5px 3px rgba(255, 255, 255, 0.2)"
            : "0 10px 25px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Specular Liquid Shine Reflection Reflection Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.12] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Floating search icon animation */}
        <div className="relative mr-3 flex items-center justify-center">
          <Search
            className={`w-4 h-4 transition-all duration-500 ${
              isFocused ? "rotate-90 scale-110 text-white" : "text-gray-400"
            }`}
          />
        </div>

        {/* Core Input controller */}
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Type here..."
          className="flex-1 text-sm font-sans bg-transparent outline-none border-none py-1 text-white placeholder-white/40 font-light"
        />

        {/* Clear control & status */}
        <div className="flex items-center gap-2 pl-2">
          {query ? (
            <button
              onClick={clearSearch}
              className="p-1 rounded-full cursor-pointer transition-all hover:bg-white/10 text-gray-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          ) : (
            <div className="flex items-center gap-1 opacity-50">
              <Sparkles className="w-3 h-3 text-white/60 animate-pulse" />
              <span className="font-mono text-[8px] uppercase tracking-wider text-white/50">Apple Fluidic</span>
            </div>
          )}
        </div>
      </div>

      {/* Under-search luxury quick suggestion chips */}
      <div className="flex justify-center gap-2 mt-3.5 flex-wrap pointer-events-auto">
        {["Photo Editing", "Video Editing", "Brand Design", "Logo Design", "Social Media Design"].map((tag) => (
          <button
            key={tag}
            onClick={() => {
              const val = query === tag ? "" : tag;
              setQuery(val);
              onSearchChange(val);
            }}
            className={`text-[9px] font-mono tracking-widest uppercase px-3.5 py-1.5 rounded-full border transition-all duration-300 cursor-pointer ${
              query === tag
                ? "bg-white text-black border-white"
                : "bg-white/[0.03] border-white/10 text-white/60 hover:text-white hover:border-white/20"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
