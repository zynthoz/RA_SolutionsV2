import { Globe, MapPinArea, ChatCircleText, ArrowUpRight } from "@phosphor-icons/react";

export function Services() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-6 md:px-12 text-left relative">
      {/* Background Glow */}
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-[#70a1ff]/5 blur-[120px] pointer-events-none" />

      {/* Header (Vertically Stacked - no split header, no eyebrow) */}
      <div className="max-w-2xl mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-white">
          Engineered to Drive Growth
        </h2>
        <p className="text-base text-[#b4b7bd] mt-3 leading-relaxed">
          High-performance digital products built from the ground up to automate operations, rank organically, and convert leads.
        </p>
      </div>

      {/* Bento Grid (3 services, 3 cells) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cell 1: Web Development (Col-span 2) */}
        <div className="md:col-span-2 rounded-2xl border border-white/5 bg-[#0b0d11] p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#70a1ff]/30 transition-colors duration-300 min-h-[320px]">
          {/* Visual element: Layered glassmorphic card preview */}
          <div className="absolute right-0 bottom-0 w-1/2 h-[70%] opacity-15 group-hover:opacity-25 transition-opacity duration-300 hidden sm:block">
            <div className="w-[120%] h-[120%] rounded-tl-xl border border-[#70a1ff]/20 bg-gradient-to-br from-[#13161b] to-[#050608] p-4 flex flex-col gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <div className="h-4 w-1/2 bg-white/10 rounded" />
              <div className="grid grid-cols-3 gap-2 mt-2">
                <div className="h-10 bg-white/5 rounded border border-white/10" />
                <div className="h-10 bg-white/5 rounded border border-white/10" />
                <div className="h-10 bg-white/5 rounded border border-white/10" />
              </div>
            </div>
          </div>

          <div className="max-w-md relative z-10">
            <div className="w-10 h-10 rounded-lg bg-[#70a1ff]/10 border border-[#70a1ff]/20 flex items-center justify-center text-[#70a1ff] mb-6">
              <Globe size={20} />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Website Development</h3>
            <p className="text-sm text-[#b4b7bd] mt-2 leading-relaxed max-w-sm">
              Custom-coded, high-performance websites and database systems. Zero templates, lightning-fast load speeds, and integrated POS pipelines built for conversion.
            </p>
          </div>

          <button
            onClick={() => scrollToSection("pricing")}
            className="flex items-center gap-1.5 text-xs text-[#70a1ff] hover:text-[#7bb2ff] font-bold mt-8 transition-colors self-start cursor-pointer group/link"
          >
            <span>See Web Packages</span>
            <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Cell 2: SEO Optimization (Col-span 1) */}
        <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-[#13161b] to-[#0b0d11] p-8 flex flex-col justify-between group hover:border-[#70a1ff]/30 transition-colors duration-300 min-h-[320px]">
          <div className="relative z-10">
            <div className="w-10 h-10 rounded-lg bg-[#70a1ff]/10 border border-[#70a1ff]/20 flex items-center justify-center text-[#70a1ff] mb-6">
              <MapPinArea size={20} />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Local SEO Domination</h3>
            <p className="text-sm text-[#b4b7bd] mt-2 leading-relaxed">
              Command search rankings exactly where your clients are. Google Maps pinning, local citation networks, and technical optimization to outrank local competitors.
            </p>
          </div>

          <button
            onClick={() => scrollToSection("pricing")}
            className="flex items-center gap-1.5 text-xs text-[#70a1ff] hover:text-[#7bb2ff] font-bold mt-8 transition-colors self-start cursor-pointer group/link"
          >
            <span>View SEO ROI</span>
            <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Cell 3: AI Chatbots (Col-span 3 / Full Width) */}
        <div className="md:col-span-3 rounded-2xl border border-white/5 bg-[#0b0d11] p-8 flex flex-col md:flex-row md:items-center justify-between gap-8 group hover:border-[#70a1ff]/30 transition-colors duration-300">
          <div className="max-w-xl">
            <div className="w-10 h-10 rounded-lg bg-[#70a1ff]/10 border border-[#70a1ff]/20 flex items-center justify-center text-[#70a1ff] mb-6">
              <ChatCircleText size={20} />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">AI Agent Integrations</h3>
            <p className="text-sm text-[#b4b7bd] mt-2 leading-relaxed">
              Automate customer interactions 24/7. Custom-trained AI models qualified on your business rules. Instantly sync leads to CRM, answer FAQs naturally, and trigger action workflows directly.
            </p>
            <button
              onClick={() => scrollToSection("pricing")}
              className="flex items-center gap-1.5 text-xs text-[#70a1ff] hover:text-[#7bb2ff] font-bold mt-6 transition-colors cursor-pointer group/link"
            >
              <span>Automate Now</span>
              <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mini Interactive Preview: Chat flow bubbles */}
          <div className="flex-1 max-w-sm w-full bg-[#13161b]/50 border border-white/5 rounded-xl p-4 flex flex-col gap-3 font-sans text-xs">
            <div className="flex items-center gap-2 border-b border-white/5 pb-2">
              <div className="w-2 h-2 rounded-full bg-[#3aa85b]" />
              <span className="font-mono text-[9px] text-[#9c9ea2] uppercase tracking-wider">AI Assistant Live</span>
            </div>
            <div className="self-start bg-[#1d1f23] text-white px-3 py-2 rounded-lg rounded-tl-none max-w-[85%] border border-white/5">
              Hello! Can I help check your laundry status or book a pickup?
            </div>
            <div className="self-end bg-[#70a1ff]/10 text-[#70a1ff] px-3 py-2 rounded-lg rounded-tr-none max-w-[85%] border border-[#70a1ff]/10">
              Yes, I'd like to check order #59B8.
            </div>
            <div className="self-start bg-[#1d1f23] text-white px-3 py-2 rounded-lg rounded-tl-none max-w-[85%] border border-white/5 flex flex-col gap-1.5">
              <span>Order #59B8 is currently in progress:</span>
              <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#3aa85b] bg-[#3aa85b]/10 border border-[#3aa85b]/20 px-2 py-0.5 rounded self-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3aa85b]" />
                <span>Dryer Cycle: 6 mins left</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
