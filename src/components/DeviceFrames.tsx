import React from "react";
import { motion } from "motion/react";

export function DeviceFrames() {
  return (
    <div className="w-full max-w-[560px] aspect-[4/3] relative flex items-center justify-center select-none py-6">
      {/* Background glowing aura */}
      <div className="absolute w-[300px] h-[300px] bg-[#70a1ff]/10 blur-[90px] pointer-events-none rounded-full" />

      {/* Desktop/Browser Mockup Frame */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-[95%] aspect-[16/10] bg-[#1e293b] rounded-xl p-1.5 md:p-2 border border-white/10 shadow-2xl relative z-10 flex flex-col"
      >
        {/* Browser top chrome */}
        <div className="h-4 flex items-center px-2 gap-1.5 mb-1.5 border-b border-white/5 pb-1.5 shrink-0">
          <div className="w-2 h-2 rounded-full bg-[#ef4444]" />
          <div className="w-2 h-2 rounded-full bg-[#f59e0b]" />
          <div className="w-2 h-2 rounded-full bg-[#10b981]" />
        </div>
        
        {/* Desktop Image Content */}
        <div className="flex-1 rounded-md overflow-hidden bg-slate-900 border border-white/5 relative">
          <img
            src="/assets/dashboard-desktop-new.png"
            alt="LaundryLink Desktop Dashboard Mockup"
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
      </motion.div>

      {/* Mobile Phone Mockup Frame (Overlapping Bottom Right, Scaled to exact 394x815 aspect ratio) */}
      <motion.div
        initial={{ opacity: 0, x: 25, y: 25 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute bottom-[3%] right-[0%] w-[26%] aspect-[394/815] bg-[#1e293b] rounded-[24px] p-1 border-2 border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.7)] z-20 flex flex-col overflow-hidden"
      >
        {/* Mobile Image Content (dashboard-mobile-actual.png has correct 394x815 portrait layout) */}
        <div className="flex-1 rounded-[20px] overflow-hidden bg-slate-900 relative">
          <img
            src="/assets/dashboard-mobile-actual.png"
            alt="LaundryLink Mobile Dashboard Mockup"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Mobile bottom home indicator */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[30%] h-0.5 rounded-full bg-white/20 z-30" />
      </motion.div>
    </div>
  );
}
