/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { WHY_CHOOSE_US } from "../data";
import { Zap, ShieldCheck, RotateCcw, Headphones, Award } from "lucide-react";

interface WhyChooseUsProps {
  darkMode: boolean;
  id?: string;
}

export default function WhyChooseUs({ darkMode, id }: WhyChooseUsProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap className="w-5 h-5 text-gray-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-gray-400" />;
      case "RotateCcw":
        return <RotateCcw className="w-5 h-5 text-gray-400" />;
      case "Headphones":
        return <Headphones className="w-5 h-5 text-gray-400" />;
      case "Award":
        return <Award className="w-5 h-5 text-gray-400" />;
      default:
        return null;
    }
  };

  return (
    <section id={id || "why-choose-us"} className="py-24 px-4 max-w-7xl mx-auto relative overflow-hidden">
      {/* Editorial Title */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 border-b pb-8 dark:border-white/5 border-black/5">
        <div>
          <span className="font-mono text-[10px] tracking-widest text-gray-500 uppercase block mb-3">
            03. REPUTATION & VALUES
          </span>
          <h2 className={`font-display font-extrabold text-3xl sm:text-5xl tracking-tight ${darkMode ? "text-white" : "text-black"}`}>
            Engineered for Creators
          </h2>
        </div>
        <p className={`font-sans text-xs md:text-sm max-w-md ${darkMode ? "text-gray-400" : "text-gray-600"} leading-relaxed`}>
          We strip administrative bulk and focus purely on absolute visual craft. Here is how our production pipeline ensures perfection for your brand.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WHY_CHOOSE_US.map((item, idx) => (
          <div
            key={item.title}
            className={`p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
              darkMode
                ? "glass-panel-dark border-white/5 hover:border-white/15"
                : "glass-panel-light border-black/5 hover:border-black/15"
            }`}
          >
            {/* Specular highlights on icon background */}
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-6 border ${
              darkMode 
                ? "bg-white/5 border-white/10 text-white" 
                : "bg-black/5 border-black/10 text-black"
            }`}>
              {getIcon(item.iconName)}
            </div>

            <h3 className={`font-display font-bold text-lg mb-3 ${darkMode ? "text-white" : "text-black"}`}>
              {item.title}
            </h3>
            
            <p className={`font-sans text-xs leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
