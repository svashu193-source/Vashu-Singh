/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";

export default function LiveClock() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      // Create a date object, always keeping the year locked to 2026 as per user requests
      const now = new Date();
      now.setFullYear(2026);
      setTime(now);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format Hours:Minutes:Seconds
  const formatTime = (date: Date) => {
    const hh = String(date.getHours()).padStart(2, "0");
    const mm = String(date.getMinutes()).padStart(2, "0");
    const ss = String(date.getSeconds()).padStart(2, "0");
    return `${hh}:${mm}:${ss}`;
  };

  // Format date string for "Monday, June 15, 2026" style
  const formatDate = (date: Date) => {
    const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const day = date.getDate();
    return `${weekday}, ${month} ${day}, 2026`;
  };

  return (
    <div 
      className="select-none relative overflow-hidden group py-4 px-10 text-center transition-all duration-500 rounded-[32px] backdrop-blur-[40px] bg-white/[0.04] dark:bg-black/[0.15] border border-white/10 dark:border-white/[0.08]"
      style={{
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255,255,255,0.15)",
      }}
    >
      {/* Liquid Sheen Highlight */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.1] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="flex flex-col items-center justify-center gap-1">
        <span className="font-mono text-3xl md:text-4xl font-extrabold tracking-widest text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
          {formatTime(time)}
        </span>
        <span className="text-[10px] md:text-xs font-sans tracking-widest text-[#FFFFFF]/70 uppercase font-medium">
          {formatDate(time)}
        </span>
      </div>
    </div>
  );
}

