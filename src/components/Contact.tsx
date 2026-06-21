import React, { useState } from "react";
import { PaperPlaneTilt, Check } from "@phosphor-icons/react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "web",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API Submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left column (col-span-5) */}
        <div className="lg:col-span-5 text-left flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-white">
              Let's Build Something High-Converting
            </h2>
            <p className="text-base text-[#b4b7bd] mt-3 leading-relaxed">
              Submit your project scope, and an engineering lead will reach out to schedule a scoping call within 24 hours.
            </p>
          </div>

          <div className="mt-8 border-t border-white/5 pt-8 flex flex-col gap-4 text-xs font-mono text-[#9c9ea2]">
            <div>
              <span className="block text-white uppercase tracking-wider text-[10px] mb-1 font-bold">Email Address</span>
              <a href="mailto:engineering@rasolutions.io" className="hover:text-[#70a1ff] transition-colors">
                engineering@rasolutions.io
              </a>
            </div>
            <div>
              <span className="block text-white uppercase tracking-wider text-[10px] mb-1 font-bold">Response SLA</span>
              <span>24 Hours or Less</span>
            </div>
          </div>
        </div>

        {/* Right column: Form (col-span-7) */}
        <div className="lg:col-span-7 bg-[#0b0d11]/50 border border-white/5 rounded-2xl p-6 md:p-8 relative overflow-hidden">
          {submitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#3aa85b]/10 border border-[#3aa85b]/20 flex items-center justify-center text-[#3aa85b] shadow-[0_0_12px_rgba(58,168,91,0.15)]">
                <Check size={24} weight="bold" />
              </div>
              <h3 className="text-lg font-bold text-white">Project Scope Received</h3>
              <p className="text-xs text-[#b4b7bd] max-w-xs leading-relaxed">
                Thank you. We have queued your request. One of our engineers will review your details and contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name-input" className="text-xs font-bold text-white uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  id="name-input"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Aaron Lime"
                  className="w-full bg-[#13161b] border border-[#1d1f23] rounded-lg px-4 py-3 text-xs text-white placeholder-[#9c9ea2]/60 focus:border-[#70a1ff] focus:ring-1 focus:ring-[#70a1ff] outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email-input" className="text-xs font-bold text-white uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  id="email-input"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleInputChange}
                  placeholder="e.g. aaron@domain.com"
                  className="w-full bg-[#13161b] border border-[#1d1f23] rounded-lg px-4 py-3 text-xs text-white placeholder-[#9c9ea2]/60 focus:border-[#70a1ff] focus:ring-1 focus:ring-[#70a1ff] outline-none transition-all"
                />
              </div>

              {/* Service Category */}
              <div className="flex flex-col gap-2">
                <label htmlFor="service-select" className="text-xs font-bold text-white uppercase tracking-wider">
                  Service Category
                </label>
                <div className="relative">
                  <select
                    id="service-select"
                    name="service"
                    value={formState.service}
                    onChange={handleInputChange}
                    className="w-full bg-[#13161b] border border-[#1d1f23] rounded-lg px-4 py-3 text-xs text-white outline-none focus:border-[#70a1ff] focus:ring-1 focus:ring-[#70a1ff] transition-all appearance-none cursor-pointer"
                  >
                    <option value="web">Website Development (from ₱19.5k)</option>
                    <option value="seo">Local SEO Optimization (from ₱9.5k/mo)</option>
                    <option value="ai">AI Chatbot Integration (from ₱14.5k)</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#9c9ea2] text-[10px]">
                    ▼
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message-input" className="text-xs font-bold text-white uppercase tracking-wider">
                  Tell us about your project
                </label>
                <textarea
                  id="message-input"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Specify goals, timelines, or active integrations..."
                  className="w-full bg-[#13161b] border border-[#1d1f23] rounded-lg px-4 py-3 text-xs text-white placeholder-[#9c9ea2]/60 focus:border-[#70a1ff] focus:ring-1 focus:ring-[#70a1ff] outline-none transition-all resize-none"
                />
              </div>

              {/* Submit button */}
              <div className="flex flex-col items-center gap-3 mt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-lg bg-white text-[#050608] hover:bg-[#e5e8ec] disabled:opacity-50 text-xs font-bold transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer shadow-[0_4px_16px_rgba(255,255,255,0.1)]"
                >
                  <span>{loading ? "Sending Details..." : "Request Your Custom Quote"}</span>
                  <PaperPlaneTilt size={14} weight="bold" />
                </button>
                <span className="text-[10px] text-[#9c9ea2] font-mono">🔒 Secure & Confidential. No spam, no obligation.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
