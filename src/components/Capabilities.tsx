import { Cpu, Lightning, ShieldCheck } from "@phosphor-icons/react";
import { motion } from "motion/react";

export function Capabilities() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6 md:px-12 text-left relative">
      <div className="absolute top-1/2 left-0 w-[250px] h-[250px] rounded-full bg-[#70a1ff]/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-white">
          Architected for Digital Performance
        </h2>
        <p className="text-base text-[#b4b7bd] mt-3 leading-relaxed">
          Why custom engineering outperforms page-builders. We code for SEO indices, runtime performance, and customer conversion.
        </p>
      </motion.div>

      {/* Capabilities columns */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        
        {/* Capability 1 */}
        <motion.div variants={itemVariants} className="flex flex-col gap-4 text-left">
          <div className="w-10 h-10 rounded-lg bg-[#70a1ff]/10 border border-[#70a1ff]/20 flex items-center justify-center text-[#70a1ff]">
            <Lightning size={20} weight="fill" />
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight">Ultra-Low Latency Runtimes</h3>
          <p className="text-xs text-[#b4b7bd] leading-relaxed">
            Every millisecond costs conversion rate. Our custom React and vanilla scripts load inside a second, achieving perfect Core Web Vitals marks.
          </p>
        </motion.div>

        {/* Capability 2 */}
        <motion.div variants={itemVariants} className="flex flex-col gap-4 text-left">
          <div className="w-10 h-10 rounded-lg bg-[#70a1ff]/10 border border-[#70a1ff]/20 flex items-center justify-center text-[#70a1ff]">
            <Cpu size={20} weight="fill" />
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight">Custom POS & Database Integration</h3>
          <p className="text-xs text-[#b4b7bd] leading-relaxed">
            No middleware bloat. We hook physical hardware (IoT controllers, local shop systems) directly into unified web portals and analytics dashboards.
          </p>
        </motion.div>

        {/* Capability 3 */}
        <motion.div variants={itemVariants} className="flex flex-col gap-4 text-left">
          <div className="w-10 h-10 rounded-lg bg-[#70a1ff]/10 border border-[#70a1ff]/20 flex items-center justify-center text-[#70a1ff]">
            <ShieldCheck size={20} weight="fill" />
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight">Security & Compliance First</h3>
          <p className="text-xs text-[#b4b7bd] leading-relaxed">
            Enterprise grade authorization structures. Secure portal gateways protect customer data, bookings, and financial API exchanges from day one.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}
