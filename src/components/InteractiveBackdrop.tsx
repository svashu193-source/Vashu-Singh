/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { playClickSound, playHoverSound } from "../utils/audio";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function InteractiveBackdrop() {
  const [coords, setCoords] = useState({ x: -100, y: -100 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only apply premium desktop cursor glow on non-touch devices
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Global mouse Click ripple handler and click sound hook
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      // Create ripple
      const newRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev, newRipple].slice(-10)); // Keep only last 10 ripples for sanity

      // Determine standard audio response
      // Check if target is interactive (button, link, input, select, etc.)
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === "BUTTON" || 
        target.tagName === "A" || 
        target.tagName === "INPUT" || 
        target.tagName === "SELECT" || 
        target.tagName === "TEXTAREA" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer");

      if (isInteractive) {
        playClickSound();
      }
    };

    // Global Hover Sound Listener on interactive items
    const handleGlobalHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("button, a, input, select, textarea, [role='button'], .cursor-pointer");
      
      if (interactiveEl) {
        setIsHoveringInteractive(true);
        // Play once when entering or moving to another interactive element
        const lastEl = (window as any)._lastHoveredEl;
        if (lastEl !== interactiveEl) {
          playHoverSound();
          (window as any)._lastHoveredEl = interactiveEl;
        }
      } else {
        setIsHoveringInteractive(false);
        (window as any)._lastHoveredEl = null;
      }
    };

    window.addEventListener("click", handleGlobalClick);
    window.addEventListener("mouseover", handleGlobalHover);

    return () => {
      window.removeEventListener("click", handleGlobalClick);
      window.removeEventListener("mouseover", handleGlobalHover);
    };
  }, []);

  return (
    <>
      {/* Liquid Glass Follower Glow */}
      {isVisible && (
        <div
          className="fixed pointer-events-none inset-0 z-50 mix-blend-screen transition-opacity duration-300"
          style={{ opacity: isHoveringInteractive ? 0.7 : 0.4 }}
        >
          <div
            className="absolute rounded-full blur-[30px]"
            style={{
              left: `${coords.x}px`,
              top: `${coords.y}px`,
              width: isHoveringInteractive ? "70px" : "40px",
              height: isHoveringInteractive ? "70px" : "40px",
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 50%, transparent 100%)",
              boxShadow: isHoveringInteractive 
                ? "0 0 35px 5px rgba(255, 255, 255, 0.4)" 
                : "0 0 15px 2px rgba(255, 255, 255, 0.15)",
              transition: "width 0.3s ease, height 0.3s ease, box-shadow 0.3s ease"
            }}
          />
        </div>
      )}

      {/* Ripple Expand Elements */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <AnimatePresence>
          {ripples.map((rip) => (
            <motion.span
              key={rip.id}
              initial={{ scale: 0, opacity: 0.4 }}
              animate={{ scale: 4.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="absolute w-8 h-8 rounded-full border border-white/20"
              style={{
                left: rip.x - 16,
                top: rip.y - 16,
                background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)"
              }}
            />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
