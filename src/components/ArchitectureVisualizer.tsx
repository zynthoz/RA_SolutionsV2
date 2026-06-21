import { motion } from "motion/react";
import { 
  Globe, 
  User, 
  ChartLine, 
  SquaresFour, 
  FolderSimple, 
  Monitor,
  Heart,
  Star
} from "@phosphor-icons/react";

export function ArchitectureVisualizer() {
  return (
    <div className="w-full max-w-xl aspect-square relative flex items-center justify-center select-none py-10">
      
      {/* Background glowing aura */}
      <div className="absolute w-[350px] h-[350px] bg-[#70a1ff]/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Stack of Low-Fidelity High-Quality Website Cards */}
      <div className="relative w-full h-full">
        
        {/* Card 3: Bottom Left - Creative Portfolio / Shop Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: -30, y: 50, rotate: -8 }}
          animate={{ opacity: 0.5, scale: 1.0, x: -30, y: 50, rotate: -8 }}
          whileHover={{ opacity: 0.8, x: -40, y: 35, scale: 1.03, zIndex: 30, transition: { duration: 0.3 } }}
          className="absolute left-6 bottom-8 w-[85%] h-[62%] rounded-xl border border-white/5 bg-[#0b0d11]/90 shadow-[0_15px_40px_rgba(0,0,0,0.6)] p-5 flex flex-col justify-between text-left cursor-pointer z-10"
        >
          {/* Header block with Logo and Nav */}
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex items-center gap-2">
              <FolderSimple size={16} className="text-[#9c9ea2]" />
              <span className="text-[10px] font-mono text-white/80 font-bold uppercase tracking-wider">Studio.io</span>
            </div>
            <div className="flex gap-3 text-[9px] text-[#9c9ea2] font-medium">
              <span>Work</span>
              <span>Shop</span>
            </div>
          </div>
          
          {/* Main Portfolio Grid Element */}
          <div className="flex-1 my-4 flex items-center gap-4">
            <div className="w-20 h-20 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute top-1.5 right-1.5 text-white/30">
                <Heart size={10} />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/50">
                <Globe size={18} />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <Star size={10} weight="fill" className="text-yellow-500" />
                <span className="text-[9px] font-mono text-yellow-500 font-bold">Featured Project</span>
              </div>
              <h5 className="text-xs font-bold text-white leading-tight">Digital Experience Platform</h5>
              <div className="w-3/4 h-1.5 bg-white/10 rounded-full" />
            </div>
          </div>

          {/* Bottom Card Footer */}
          <div className="flex items-center justify-between text-[8px] text-[#9c9ea2] border-t border-white/5 pt-3">
            <span>CLIENT WORK</span>
            <span className="font-mono text-white/60">VIEW PROJECT →</span>
          </div>
        </motion.div>

        {/* Card 2: Middle Right - Bento Grid Analytics Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 40, y: 10, rotate: 6 }}
          animate={{ opacity: 0.8, scale: 1.0, x: 40, y: 10, rotate: 6 }}
          whileHover={{ opacity: 0.95, x: 45, y: -5, scale: 1.04, zIndex: 30, transition: { duration: 0.3 } }}
          className="absolute right-4 top-16 w-[85%] h-[62%] rounded-xl border border-white/10 bg-[#13161b] shadow-[0_20px_50px_rgba(0,0,0,0.7)] p-5 flex flex-col justify-between text-left cursor-pointer z-20"
        >
          {/* Header block with avatar and page context */}
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center text-[9px] text-white font-bold">
                U
              </div>
              <span className="text-[9px] font-mono text-[#9c9ea2] uppercase tracking-wider">Metrics Console</span>
            </div>
            <div className="flex items-center gap-1 text-[9px] text-[#3aa85b] font-mono font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3aa85b] animate-pulse" />
              <span>LIVE</span>
            </div>
          </div>
          
          {/* Bento grid showing high-fidelity details */}
          <div className="grid grid-cols-3 gap-2.5 flex-1 my-3">
            <div className="col-span-2 bg-[#050608]/60 border border-white/5 rounded-lg p-2.5 flex flex-col justify-between">
              <span className="text-[8px] font-mono text-[#636363] uppercase">Conversion Index</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-base font-bold text-white font-mono">14.8%</span>
                <span className="text-[8px] text-[#3aa85b] font-bold">+2.4%</span>
              </div>
            </div>
            <div className="bg-[#050608]/60 border border-white/5 rounded-lg p-2.5 flex flex-col justify-between">
              <div className="w-full h-1 bg-white/10 rounded-full" />
              <ChartLine size={20} className="text-[#70a1ff] self-center mt-1" />
            </div>
            <div className="col-span-3 bg-[#050608]/60 border border-white/5 rounded-lg p-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <SquaresFour size={12} className="text-[#70a1ff]" />
                <span className="text-[9px] font-medium text-white/70">Database API Stream</span>
              </div>
              <span className="text-[8px] font-mono text-[#3aa85b] bg-[#3aa85b]/10 border border-[#3aa85b]/20 px-1.5 py-0.5 rounded">CONNECTED</span>
            </div>
          </div>
        </motion.div>

        {/* Card 1: Top Left - B2B SaaS Landing Page Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: -20, y: -35, rotate: -2 }}
          animate={{ opacity: 1, scale: 1.02, x: -20, y: -35, rotate: -2 }}
          whileHover={{ scale: 1.05, y: -45, zIndex: 40, transition: { duration: 0.3 } }}
          className="absolute left-6 top-8 w-[85%] h-[62%] rounded-xl border border-[#70a1ff]/30 bg-[#13161b] shadow-[0_25px_60px_rgba(0,0,0,0.8)] p-5 flex flex-col justify-between text-left cursor-pointer z-30"
        >
          {/* Browser Chrome Header with fake buttons */}
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            </div>
            <div className="flex items-center gap-1.5 px-3 py-0.5 rounded bg-[#050608]/50 border border-white/5 text-[9px] font-mono text-[#9c9ea2]">
              <Monitor size={10} />
              <span>platform.io/signup</span>
            </div>
            <div className="w-10 h-4.5 rounded bg-white text-[8px] font-bold text-center flex items-center justify-center text-[#050608] hover:bg-[#e5e8ec] transition-colors">
              SIGN UP
            </div>
          </div>

          {/* High Fidelity SaaS Hero block */}
          <div className="flex-1 flex flex-col items-center justify-center text-center my-4 gap-2.5">
            <div className="flex items-center gap-1 bg-[#70a1ff]/10 border border-[#70a1ff]/20 px-2 py-0.5 rounded-full text-[8px] font-mono text-[#70a1ff] uppercase tracking-wider">
              Optimize Sales Pipeline
            </div>
            <h4 className="text-sm font-bold text-white tracking-tight leading-tight w-4/5">
              Automate Customer Onboarding
            </h4>
            <p className="text-[9px] text-[#9c9ea2] w-5/6 leading-relaxed">
              Fully customized workflows syncing customer POS details to central sales indices.
            </p>
            
            <div className="flex gap-2.5 mt-1">
              <div className="w-16 h-5 rounded bg-[#70a1ff] flex items-center justify-center shadow-[0_0_10px_rgba(112,161,255,0.4)]">
                <span className="text-[8px] font-bold text-[#050608]">GET STARTED</span>
              </div>
              <div className="w-14 h-5 rounded border border-white/10 bg-white/5 flex items-center justify-center text-[7px] text-white font-medium">
                TRY FREE
              </div>
            </div>
          </div>

          {/* Bottom Card Footer */}
          <div className="flex items-center justify-between text-[8px] text-white/40 border-t border-white/5 pt-3">
            <div className="flex items-center gap-1">
              <User size={10} className="text-[#70a1ff]" />
              <span>9,240 Users Onboarded</span>
            </div>
            <span className="text-[#70a1ff] font-bold font-mono">CONVERTING</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
