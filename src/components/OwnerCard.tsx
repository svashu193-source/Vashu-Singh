/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Mail, ShieldCheck, UserCheck, Layers, ArrowUpRight } from "lucide-react";

interface OwnerCardProps {
  darkMode: boolean;
  onContactClick: () => void;
}

export default function OwnerCard({ darkMode, onContactClick }: OwnerCardProps) {
  const specializedServices = [
    "Photo Editing",
    "Video Editing",
    "Brand Design",
    "Logo Design",
    "Social Media Design"
  ];

  return (
    <div
      className={`relative rounded-3xl border transition-all duration-500 overflow-hidden group/owner ${
        darkMode
          ? "glass-panel-dark border-white/10 text-white"
          : "glass-panel-light border-black/10 text-black shadow-2xl"
      }`}
      style={{
        boxShadow: "0 15px 40px rgba(0,0,0,0.35), inset 0 1px 0px rgba(255,255,255,0.15)",
        // Custom 30px backdrop blur as requested by the user
        backdropFilter: "blur(30px)",
        WebkitBackdropFilter: "blur(30px)"
      }}
    >
      {/* 🔮 Specular light lens flare sweep overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white-[3%] to-white-[15%] pointer-events-none transition-all duration-700 group-hover/owner:translate-x-full group-hover/owner:-translate-y-full" />
      <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-radial-gradient from-white/5 to-transparent blur-[80px]" />

      <div className="p-8 relative z-10 flex flex-col justify-between h-full gap-8">
        <div>
          {/* Tag badge */}
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-[9px] tracking-widest text-emerald-400 font-bold flex items-center gap-1.5 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              DIRECTOR IDENTITY SECURED
            </span>
            <UserCheck className="w-4 h-4 text-gray-500" />
          </div>

          {/* Vashu Singh Profile Segment */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 dark:border-white/10 border-black/10 shadow-lg scale-102 group-hover/owner:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format"
                alt="Vashu Singh"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="font-display font-black text-2xl tracking-tighter">Vashu Singh</h3>
              <p className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">
                Owner & Chief Creative Director
              </p>
            </div>
          </div>

          <p className={`font-sans text-xs leading-relaxed mb-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            I guide and directly execute production sequences with high-profile artists, product builders, and YouTube creators. No artificial templates or massive delays. Just outstanding visual design.
          </p>

          {/* Dedicated Services check grid */}
          <div className="flex flex-col gap-2.5 mt-6 pt-6 border-t dark:border-white/5 border-black/5">
            <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider block mb-1">
              Active Executive Scopes
            </span>
            {specializedServices.map((srv) => (
              <div key={srv} className="flex items-center gap-2">
                <div className={`p-1 rounded-full ${darkMode ? "bg-white/15" : "bg-black/10"}`}>
                  <Layers className="w-3 h-3 text-neutral-400" />
                </div>
                <span className={`font-sans text-[11px] font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  {srv}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action controls */}
        <div className="border-t dark:border-white/5 border-black/5 pt-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-gray-400" />
              <a
                href="mailto:svashu193@gmail.com"
                className="font-sans text-xs font-bold underline text-gray-300 hover:text-white"
              >
                svashu193@gmail.com
              </a>
            </div>
            <span className="font-mono text-[9px] text-gray-500 uppercase">24HR MAX FEEDBACK</span>
          </div>

          <button
            onClick={onContactClick}
            className={`w-full py-3.5 rounded-xl text-xs font-display font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-300 active:scale-98 ${
              darkMode
                ? "bg-white text-black hover:bg-neutral-200"
                : "bg-black text-white hover:bg-neutral-800"
            }`}
          >
            Initiate Project Blueprint <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
