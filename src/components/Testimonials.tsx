/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TESTIMONIALS } from "../data";
import { Star, MessageSquareQuote } from "lucide-react";

interface TestimonialsProps {
  darkMode: boolean;
  id?: string;
}

export default function Testimonials({ darkMode, id }: TestimonialsProps) {
  return (
    <section id={id || "testimonials"} className="py-24 px-4 max-w-7xl mx-auto relative">
      {/* Decorative pulse blur */}
      <div className="absolute left-1/4 bottom-0 w-80 h-80 rounded-full dark:bg-white-[2%] bg-black-[2%] blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 border-b pb-8 dark:border-white/5 border-black/5">
        <div>
          <span className="font-mono text-[10px] tracking-widest text-gray-500 uppercase block mb-3">
            04. TESTIMONIALS & TRUST
          </span>
          <h2 className={`font-display font-extrabold text-3xl sm:text-5xl tracking-tight ${darkMode ? "text-white" : "text-black"}`}>
            Client Retrospective
          </h2>
        </div>
        <p className={`font-sans text-xs md:text-sm max-w-md ${darkMode ? "text-gray-400" : "text-gray-600"} leading-relaxed`}>
          We establish deep visual partnerships. Here is is what brand directors, videographers, and start-up founders say about their finished deliverables.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((test) => (
          <div
            key={test.id}
            className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${
              darkMode
                ? "glass-panel-dark border-white/5"
                : "glass-panel-light border-black/5 shadow-md shadow-black/[0.01]"
            }`}
          >
            <div>
              {/* Star Rating Row */}
              <div className="flex items-center gap-1 mb-6 text-neutral-400 dark:text-gray-300">
                {Array.from({ length: test.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
                <span className="font-mono text-[9px] text-gray-500 ml-2">({test.rating}.0 Rating)</span>
              </div>

              {/* Comment text */}
              <p className={`font-sans text-xs sm:text-sm leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"} italic`}>
                "{test.comment}"
              </p>
            </div>

            {/* Profile Row */}
            <div className="mt-8 border-t dark:border-white/5 border-black/5 pt-6 flex items-center gap-3.5">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border dark:border-white/10 border-black/10 shadow-sm">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1">
                <h4 className={`font-display font-bold text-xs ${darkMode ? "text-white" : "text-black"}`}>
                  {test.name}
                </h4>
                <p className="font-mono text-[9px] text-gray-500 uppercase mt-0.5">
                  {test.role} • <span className="font-semibold text-gray-400">{test.company}</span>
                </p>
              </div>
              <MessageSquareQuote className="w-5 h-5 text-gray-500 opacity-20 hidden sm:block" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
