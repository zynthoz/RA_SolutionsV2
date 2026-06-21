import { motion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import { ArchitectureVisualizer } from "./ArchitectureVisualizer";

export function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[100dvh] flex items-center pt-20 md:pt-24 pb-12 overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#70a1ff]/5 blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Copy (Asymmetric col span 5) */}
        <div className="lg:col-span-5 flex flex-col gap-6 text-left">
          {/* Eyebrow */}
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#70a1ff]">
            INTELLIGENT SYSTEMS
          </span>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-display font-black tracking-tighter leading-none text-white uppercase">
            Scale Your Operations with Custom Digital Systems
          </h1>

          {/* Subtext */}
          <p className="text-base text-[#b4b7bd] leading-relaxed max-w-[65ch]">
            We build bespoke database portals, integrate operational AI, and optimize local search rankings.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-start gap-3 mt-2">
            <div className="flex flex-wrap items-center gap-4 font-sans">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-5 py-3 rounded-lg bg-white text-[#050608] hover:bg-[#e5e8ec] active:scale-95 text-xs font-bold transition-all flex items-center gap-2 shadow-[0_4px_20px_rgba(255,255,255,0.15)] cursor-pointer"
              >
                <span>Get Free Technical Scoping</span>
                <ArrowRight size={14} weight="bold" />
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="px-5 py-3 rounded-lg bg-[#13161b] hover:bg-[#1d1f23] text-white active:scale-95 text-xs font-semibold transition-all border border-white/10 cursor-pointer"
              >
                Explore Services
              </button>
            </div>
            <span className="text-[10px] text-[#9c9ea2] font-mono">🔒 No obligation • 24h response SLA</span>
          </div>
        </div>

        {/* Right Side: General Architecture Visualizer (Asymmetric col span 7) */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end w-full">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex justify-center lg:justify-end"
          >
            <ArchitectureVisualizer />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
