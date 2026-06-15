/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { Eye, Image as ImageIcon } from "lucide-react";

interface BeforeAfterProps {
  beforeImg: string;
  afterImg: string;
  title: string;
  id?: string;
}

export default function BeforeAfter({ beforeImg, afterImg, title, id }: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onTouchStart = () => {
    setIsDragging(true);
  };

  return (
    <div 
      id={id || "before-after-slider"}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl select-none group"
      ref={containerRef}
    >
      {/* Before Image */}
      <img
        src={beforeImg}
        alt="Before editing"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase text-gray-300 z-10 flex items-center gap-1.5 shadow-lg">
        <ImageIcon className="w-3 h-3" /> RAW / Before
      </div>

      {/* After Image Container - Cropped based on sliderPosition */}
      <div
        className="absolute inset-y-0 left-0 right-0 overflow-hidden pointer-events-none transition-all duration-75"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={afterImg}
          alt="After editing"
          className="absolute inset-y-0 left-0 w-full h-full object-cover max-w-none pointer-events-none"
          style={{ width: containerRef.current?.offsetWidth || "100%" }}
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase text-black font-semibold z-10 flex items-center gap-1.5 shadow-lg whitespace-nowrap">
          <Eye className="w-3 h-3" /> Retouched / After
        </div>
      </div>

      {/* Dividing Handle Line */}
      <div
        className="absolute inset-y-0 z-20 w-0.5 bg-white/70 cursor-ew-resize group-hover:bg-white"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        {/* iOS 26 Liquid Handle Circle */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/60 flex items-center justify-center shadow-xl cursor-ew-resize select-none active:scale-95 transition-transform"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(220,225,255,0.3) 100%)",
            boxShadow: "0 0 16px rgba(255, 255, 255, 0.4), inset 0 2px 2px rgba(255,255,255,0.8)"
          }}
        >
          {/* Slider controls arrow visual */}
          <div className="flex gap-0.5 text-black">
            <span className="text-[10px] font-bold">‹</span>
            <span className="text-[10px] font-bold">›</span>
          </div>
        </div>
      </div>

      {/* Title Label Hover Indicator */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex justify-between items-end z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div>
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{title}</span>
          <p className="text-white text-xs font-medium font-sans">Slide divider left/right to compare details</p>
        </div>
      </div>
    </div>
  );
}
