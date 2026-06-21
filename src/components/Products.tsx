import { Cpu, ArrowRight } from "@phosphor-icons/react";
import { DeviceFrames } from "./DeviceFrames";

interface MiniBranch {
  location: string;
  machines: string;
  revenue: string;
  uptime: string;
}

const MINI_BRANCHES: MiniBranch[] = [
  { location: "Taft Ave, Ermita (Manila)", machines: "24", revenue: "₱14.2k", uptime: "87%" },
  { location: "Katipunan Ave (Quezon City)", machines: "14", revenue: "₱8.6k", uptime: "94%" },
  { location: "Marcos Hwy (Antipolo)", machines: "19", revenue: "₱10.8k", uptime: "91%" },
];

export function Products() {
  const handleViewProduct = () => {
    window.location.hash = "#/laundrylink";
    window.scrollTo({ top: 0, behavior: "instant" as any });
  };

  return (
    <section id="products" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-left">
        
        {/* Header Block */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-[10px] text-[#70a1ff] uppercase tracking-wider block mb-2 font-bold">
            Flagship Software Products
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-black tracking-tighter text-white uppercase">
            Proprietary SaaS Systems
          </h2>
          <p className="text-base text-[#b4b7bd] mt-3 leading-relaxed">
            In addition to custom consulting, we build and deploy production-ready software solutions tailored for business operations.
          </p>
        </div>

        {/* Featured Product Card - LaundryLink */}
        <div className="rounded-2xl border border-white/5 bg-[#13161b] p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-10 hover:border-[#70a1ff]/30 transition-all duration-300 relative overflow-hidden group">
          {/* Subtle gradient light flare */}
          <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-[#70a1ff]/5 blur-[80px] pointer-events-none" />

          {/* Left Details */}
          <div className="max-w-xl text-left flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-[#70a1ff]/10 border border-[#70a1ff]/20 flex items-center justify-center text-[#70a1ff]">
                <Cpu size={20} />
              </div>
              <div>
                <span className="text-[9px] font-mono text-[#70a1ff] uppercase tracking-wider block font-bold">
                  IoT Automation
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">LaundryLink</h3>
              </div>
            </div>

            <p className="text-sm text-[#b4b7bd] leading-relaxed">
              Our premier software system designed for laundromats and dry-cleaning services. Synthesizes hardware controller triggers with payment APIs and client SMS notifications to eliminate bottlenecks.
            </p>

            {/* Features bullet preview */}
            <div className="grid grid-cols-2 gap-4 text-xs font-sans">
              <div className="flex flex-col gap-1">
                <span className="font-bold text-white font-mono">Point of Sale Control</span>
                <span className="text-[#9c9ea2]">Start washers & dryers instantly</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-white font-mono">Real-time Dashboard</span>
                <span className="text-[#9c9ea2]">Track multiple branches easily</span>
              </div>
            </div>

            <button
              onClick={handleViewProduct}
              className="px-5 py-3 rounded-lg bg-white text-[#050608] hover:bg-[#e5e8ec] active:scale-95 text-xs font-bold transition-all flex items-center gap-2 self-start mt-4 shadow-[0_4px_16px_rgba(255,255,255,0.1)] cursor-pointer"
            >
              <span>View Product Details</span>
              <ArrowRight size={14} weight="bold" />
            </button>
          </div>

          {/* Right Preview Graphic: Overlapping Device Frames */}
          <DeviceFrames />

        </div>

      </div>
    </section>
  );
}
