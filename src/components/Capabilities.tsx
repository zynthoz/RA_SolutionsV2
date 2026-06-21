import { Cpu, Lightning, ShieldCheck } from "@phosphor-icons/react";

export function Capabilities() {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6 md:px-12 text-left relative">
      <div className="absolute top-1/2 left-0 w-[250px] h-[250px] rounded-full bg-[#70a1ff]/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-2xl mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-white">
          Architected for Digital Performance
        </h2>
        <p className="text-base text-[#b4b7bd] mt-3 leading-relaxed">
          Why custom engineering outperforms page-builders. We code for SEO indices, runtime performance, and customer conversion.
        </p>
      </div>

      {/* Capabilities columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Capability 1 */}
        <div className="flex flex-col gap-4 text-left">
          <div className="w-10 h-10 rounded-lg bg-[#70a1ff]/10 border border-[#70a1ff]/20 flex items-center justify-center text-[#70a1ff]">
            <Lightning size={20} weight="fill" />
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight">Ultra-Low Latency Runtimes</h3>
          <p className="text-xs text-[#b4b7bd] leading-relaxed">
            Every millisecond costs conversion rate. Our custom React and vanilla scripts load inside a second, achieving perfect Core Web Vitals marks.
          </p>
        </div>

        {/* Capability 2 */}
        <div className="flex flex-col gap-4 text-left">
          <div className="w-10 h-10 rounded-lg bg-[#70a1ff]/10 border border-[#70a1ff]/20 flex items-center justify-center text-[#70a1ff]">
            <Cpu size={20} weight="fill" />
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight">Custom POS & Database Integration</h3>
          <p className="text-xs text-[#b4b7bd] leading-relaxed">
            No middleware bloat. We hook physical hardware (IoT controllers, local shop systems) directly into unified web portals and analytics dashboards.
          </p>
        </div>

        {/* Capability 3 */}
        <div className="flex flex-col gap-4 text-left">
          <div className="w-10 h-10 rounded-lg bg-[#70a1ff]/10 border border-[#70a1ff]/20 flex items-center justify-center text-[#70a1ff]">
            <ShieldCheck size={20} weight="fill" />
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight">Security & Compliance First</h3>
          <p className="text-xs text-[#b4b7bd] leading-relaxed">
            Enterprise grade authorization structures. Secure portal gateways protect customer data, bookings, and financial API exchanges from day one.
          </p>
        </div>

      </div>
    </section>
  );
}
