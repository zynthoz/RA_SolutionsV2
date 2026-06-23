import { useState } from "react";
import { Check, Sparkle } from "@phosphor-icons/react";
import { motion } from "motion/react";

type PricingCategory = "web" | "seo" | "ai";

interface Plan {
  name: string;
  price: string;
  period: string;
  desc: string;
  popular?: boolean;
  concreteFraming?: string;
  features: string[];
}

const WEB_PLANS: Plan[] = [
  {
    name: "Essential Brand",
    price: "₱15,500",
    period: "one-time",
    desc: "Perfect for startups and local shops looking for a clean, professional online footprint.",
    features: [
      "Single-page custom layout",
      "Mobile responsive design",
      "High-speed hosting setup",
      "Contact / inquiry form integration",
      "Basic on-page SEO setup",
    ],
  },
  {
    name: "Growth Operations",
    price: "₱25,500",
    period: "one-time",
    desc: "Designed for service businesses needing booking flows and advanced content strategies.",
    popular: true,
    features: [
      "Up to 5 custom-designed pages",
      "Branch locator & Google Maps sync",
      "Interactive booking & calculators",
      "Custom copywriting & messaging",
      "Advanced technical SEO schema",
      "30 days post-launch support",
    ],
  },
  {
    name: "Custom System",
    price: "₱29,000",
    period: "one-time",
    desc: "For enterprises requiring bespoke database architecture, custom portals, or POS APIs.",
    features: [
      "Multi-page custom database app",
      "Client & staff portal accounts",
      "LaundryLink POS sync / API integration",
      "Priority 24/7 critical response SLA",
      "Dedicated project design engineer",
    ],
  },
];

const SEO_PLANS: Plan[] = [
  {
    name: "Local Foundation",
    price: "₱9,500",
    period: "per month",
    desc: "Kickstart search rankings in your direct geographical neighborhood.",
    concreteFraming: "Less than ₱320/day",
    features: [
      "Google Business Profile optimization",
      "Google Maps pinning & local sync",
      "Local directories submission (50+ sites)",
      "On-page technical SEO audit",
      "Monthly search ranking reports",
    ],
  },
  {
    name: "Authority Scale",
    price: "₱19,500",
    period: "per month",
    desc: "Dominate search rankings across your entire city and outclass local competitors.",
    popular: true,
    concreteFraming: "Fraction of a part-time hire",
    features: [
      "Everything in Local Foundation",
      "Competitor keyword gap analysis",
      "2 custom optimized articles / month",
      "Continuous copywriting optimizations",
      "High-authority local backlinks acquisition",
      "Dedicated SEO lead & strategy monthly call",
    ],
  },
  {
    name: "Market Dominance",
    price: "₱39,500",
    period: "per month",
    desc: "National search visibility campaigns for multi-branch organizations.",
    features: [
      "Complete local & national deployments",
      "4 high-quality optimized articles / month",
      "Core Web Vitals speed optimization updates",
      "PR outreach & digital guest columns",
      "Weekly analytics dashboard tracking",
    ],
  },
];

const AI_PLANS: Plan[] = [
  {
    name: "FAQ & Lead Capture",
    price: "₱14,500",
    period: "setup + ₱1.5k/mo",
    desc: "Automate basic support inquiries and instantly capture inbound visitor interest.",
    features: [
      "Custom rules-based flow tree",
      "Up to 30 custom FAQ responses",
      "Automated client lead capture data",
      "Instant email & WhatsApp notifications",
    ],
  },
  {
    name: "AI Assistant",
    price: "₱29,500",
    period: "setup + ₱3.5k/mo",
    desc: "Deploy a conversational AI model that understands customer context natively.",
    popular: true,
    concreteFraming: "24/7 support for less than minimum wage",
    features: [
      "Custom-trained AI Agent (OpenAI/Claude)",
      "Business docs & policy data injection",
      "Natural conversation processing",
      "Lead qualification & direct CRM sync",
      "Continuous prompt tuning updates",
    ],
  },
  {
    name: "Enterprise System",
    price: "Custom",
    period: "integration focus",
    desc: "Sync AI conversational agents directly with back-end APIs and customer records.",
    features: [
      "Database-linked AI Bot (read/write data)",
      "Self-service booking & status check",
      "Omni-channel (Web, Messenger, WhatsApp)",
      "Advanced analytical reporting console",
    ],
  },
];

export function Pricing() {
  const [activeCategory, setActiveCategory] = useState<PricingCategory>("web");

  const getPlans = () => {
    switch (activeCategory) {
      case "web":
        return WEB_PLANS;
      case "seo":
        return SEO_PLANS;
      case "ai":
        return AI_PLANS;
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="pricing" className="py-24 border-t border-white/5 bg-[#0b0d11]/20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header - Staggered vertically */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-left mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-white">
            Transparent Pricing Models
          </h2>
          <p className="text-base text-[#b4b7bd] mt-3 leading-relaxed">
            Select the service suite optimized for your operational scale. No hidden fees, clear boundaries.
          </p>
        </motion.div>

        {/* Categories Tab Selector */}
        <div className="flex justify-start border-b border-white/5 pb-4 mb-12 gap-6 overflow-x-auto">
          {[
            { id: "web", label: "Website Development" },
            { id: "seo", label: "SEO Optimization" },
            { id: "ai", label: "AI Integrations" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as PricingCategory)}
              className={`text-sm font-semibold pb-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? "border-[#70a1ff] text-white"
                  : "border-transparent text-[#9c9ea2] hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Pricing Cards Grid */}
        <motion.div 
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {getPlans().map((plan) => (
            <motion.div
              variants={itemVariants}
              key={plan.name}
              className={`rounded-2xl border p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? "bg-[#13161b] border-[#70a1ff] shadow-[0_4px_30px_rgba(112,161,255,0.08)]"
                  : "bg-[#0b0d11]/80 border-white/5 hover:border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-6 bg-[#70a1ff] text-[#050608] text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Sparkle size={10} weight="fill" />
                  <span>Most Popular</span>
                </div>
              )}

              <div className="text-left">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#9c9ea2]">
                  {activeCategory === "web" ? "Web Dev" : activeCategory === "seo" ? "Local Search" : "AI Agent"}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight mt-1">{plan.name}</h3>
                <p className="text-xs text-[#9c9ea2] mt-3 leading-relaxed min-h-[40px]">{plan.desc}</p>

                {/* Features List */}
                <ul className="flex flex-col gap-3 mt-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#b4b7bd] leading-tight">
                      <Check size={14} className="text-[#70a1ff] mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price Display */}
                <div className="mt-8 flex flex-col gap-1 border-t border-white/5 pt-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold tracking-tight text-white">{plan.price}</span>
                    <span className="text-xs text-[#9c9ea2] font-medium">/ {plan.period}</span>
                  </div>
                  {plan.concreteFraming && (
                    <span className="text-[11px] text-[#3aa85b] font-medium">{plan.concreteFraming}</span>
                  )}
                </div>
              </div>

              {/* Start Project button matching exact CTA intent */}
              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-lg text-xs font-bold transition-all mt-6 active:scale-98 cursor-pointer ${
                  plan.popular
                    ? "bg-white text-[#050608] hover:bg-[#e5e8ec]"
                    : "bg-[#1d1f23] text-white hover:bg-white hover:text-[#050608]"
                }`}
              >
                Select {plan.name}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
