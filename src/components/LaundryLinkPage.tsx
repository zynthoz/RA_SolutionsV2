import { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Cpu, 
  DeviceMobile, 
  BellRinging, 
  Storefront, 
  Check,
  CreditCard,
  Notebook,
  Printer,
  WarningCircle,
  WifiHigh,
  CloudArrowUp
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";
import { DeviceFrames } from "./DeviceFrames";

interface Branch {
  name: string;
  address: string;
  machines: number;
  revenue: string;
  uptime: string;
  washers: number;
  dryers: number;
  status: "Online" | "1 Offline";
  type: "Cloud" | "Local";
}

const BRANCHES: Branch[] = [
  {
    name: "Manila",
    address: "Taft Ave, Ermita",
    machines: 24,
    revenue: "₱14.2k",
    uptime: "87%",
    washers: 12,
    dryers: 12,
    status: "Online",
    type: "Cloud",
  },
  {
    name: "Quezon City",
    address: "Katipunan Ave",
    machines: 14,
    revenue: "₱8.6k",
    uptime: "94%",
    washers: 6,
    dryers: 6,
    status: "Online",
    type: "Local",
  },
  {
    name: "Antipolo",
    address: "Marcos Hwy",
    machines: 19,
    revenue: "₱10.8k",
    uptime: "91%",
    washers: 10,
    dryers: 9,
    status: "1 Offline",
    type: "Local",
  },
];

export function LaundryLinkPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    branchCount: "1",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Washer 1 Terminal Simulator States
  const [washerStatus, setWasherStatus] = useState<"IDLE" | "ACTIVE">("IDLE");
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [cycleType, setCycleType] = useState<string>("");
  const [payStatus, setPayStatus] = useState<{ amount: string; verified: boolean; time: string } | null>(null);
  const [activeNotification, setActiveNotification] = useState<string | null>(null);

  // Washer countdown timer
  useEffect(() => {
    if (washerStatus !== "ACTIVE" || timeLeft <= 0) {
      if (timeLeft === 0 && washerStatus === "ACTIVE") {
        setWasherStatus("IDLE");
        setCycleType("");
        setPayStatus(null);
      }
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [washerStatus, timeLeft]);

  const handleStartCycle = (type: "STANDARD" | "QUICK") => {
    if (washerStatus === "ACTIVE") return;
    const price = type === "STANDARD" ? "₱65.00" : "₱50.00";
    const duration = type === "STANDARD" ? 45 : 30; // seconds mock
    
    setPayStatus({ amount: price, verified: true, time: "Just now" });
    setCycleType(type === "STANDARD" ? "STANDARD WASH" : "QUICK WASH");
    setWasherStatus("ACTIVE");
    setTimeLeft(duration);
    setActiveNotification("Washer 1 Activated");
    
    setTimeout(() => {
      setActiveNotification(null);
    }, 4000);
  };

  const handleStop = () => {
    setWasherStatus("IDLE");
    setTimeLeft(0);
    setCycleType("");
    setPayStatus(null);
    setActiveNotification(null);
  };

  const handleLifeCheck = () => {
    setActiveNotification("Pi Terminal Online · Taft Ave Link OK");
    setTimeout(() => {
      setActiveNotification(null);
    }, 3000);
  };

  const formatTime = (secs: number) => {
    if (secs === 0) return "--:--";
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-[100dvh] bg-[#050608] text-[#e5e8ec]">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#70a1ff]/5 to-transparent pointer-events-none z-0" />
      
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 md:pt-24 pb-12 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side Copy */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#70a1ff] flex items-center gap-1.5 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#70a1ff] animate-pulse" />
              FLAGSHIP PRODUCT
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-display font-black tracking-tighter leading-none text-white uppercase">
              Run Your Laundromat from Anywhere with LaundryLink
            </h1>

            <p className="text-base text-[#b4b7bd] leading-relaxed max-w-[65ch]">
              A unified IoT gateway syncing physical machine terminals, billing APIs, and digital client booking records.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-2 font-sans">
              <button
                onClick={() => scrollToSection("laundry-contact")}
                className="px-5 py-3 rounded-lg bg-white text-[#050608] hover:bg-[#e5e8ec] active:scale-95 text-xs font-bold transition-all flex items-center gap-2 shadow-[0_4px_20px_rgba(255,255,255,0.15)] cursor-pointer"
              >
                <span>Get a Custom Quote</span>
                <ArrowRight size={14} weight="bold" />
              </button>
              <button
                onClick={() => scrollToSection("laundry-features")}
                className="px-5 py-3 rounded-lg bg-[#13161b] hover:bg-[#1d1f23] text-white active:scale-95 text-xs font-semibold transition-all border border-white/10 cursor-pointer"
              >
                Explore Features
              </button>
            </div>
          </div>

          {/* Right Side: Overlapping Device Frames matching Products card */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end w-full">
            <DeviceFrames />
          </div>

        </div>
      </section>

      {/* Main Features Layout Sections */}
      <section id="laundry-features" className="py-12 max-w-7xl mx-auto px-6 md:px-12 text-left relative">
        <div className="absolute top-1/3 left-0 w-[200px] h-[200px] rounded-full bg-[#70a1ff]/5 blur-[100px] pointer-events-none" />

        {/* Section 1: Point of Sale */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 border-t border-white/5">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="w-10 h-10 rounded-lg bg-[#70a1ff]/10 border border-[#70a1ff]/20 flex items-center justify-center text-[#70a1ff]">
              <CreditCard size={20} />
            </div>
            <div>
              <h2 className="text-3xl font-display font-black tracking-tighter text-white uppercase">
                Point of Sale
              </h2>
              <p className="text-sm font-semibold text-[#70a1ff] mt-1">
                Complete control from your counter
              </p>
            </div>
            <ul className="flex flex-col gap-3 font-sans text-sm text-[#b4b7bd]">
              <li className="flex items-center gap-2.5">
                <Check size={16} className="text-[#3aa85b]" />
                <span>Start any washer or dryer with a single tap</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check size={16} className="text-[#3aa85b]" />
                <span>Accept and track every peso: Cash or Digital</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check size={16} className="text-[#3aa85b]" />
                <span>Prevent staff errors with locked pricing</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check size={16} className="text-[#3aa85b]" />
                <span>Eliminate coin-jam headaches completely</span>
              </li>
            </ul>
          </div>

          {/* Interactive POS Washer 1 Simulator Graphic (LIGHT MODE CARD) */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5 flex flex-col gap-4 text-left shadow-2xl relative font-sans text-slate-800">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Washer 1</h4>
                  <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider block">WASHER · Pi Connected</span>
                </div>
                <span className={`px-2 py-0.5 rounded font-mono text-[9px] font-bold ${
                  washerStatus === "ACTIVE" ? "bg-green-50 text-[#3aa85b] border border-green-200" : "bg-slate-100 text-slate-500 border border-slate-200"
                }`}>
                  {washerStatus}
                </span>
              </div>

              {/* Time Remaining Timer Display */}
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex flex-col items-center justify-center">
                <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider">Time Remaining</span>
                <span className="text-2xl font-mono font-extrabold text-slate-900 mt-1 tracking-widest">
                  {formatTime(timeLeft)}
                </span>
                <span className="text-[9px] text-[#70a1ff] font-mono mt-1 font-semibold">
                  {cycleType || "SELECT A CYCLE BELOW"}
                </span>
              </div>

              {/* Cycle Controls */}
              <div className="grid grid-cols-2 gap-2 text-[10px] font-bold">
                <button 
                  onClick={() => handleStartCycle("STANDARD")}
                  disabled={washerStatus === "ACTIVE"}
                  className="py-2.5 rounded bg-[#0f172a] text-white hover:bg-slate-800 disabled:opacity-50 transition-all cursor-pointer font-sans"
                >
                  STANDARD WASH (₱65.00)
                </button>
                <button 
                  onClick={() => handleStartCycle("QUICK")}
                  disabled={washerStatus === "ACTIVE"}
                  className="py-2.5 rounded bg-[#0f172a] text-white hover:bg-slate-800 disabled:opacity-50 transition-all cursor-pointer font-sans"
                >
                  QUICK WASH (₱50.00)
                </button>
                <button 
                  onClick={handleStop}
                  disabled={washerStatus === "IDLE"}
                  className="py-2.5 rounded bg-red-50 border border-red-200 text-[#d74745] hover:bg-red-100 disabled:opacity-50 transition-all cursor-pointer font-sans"
                >
                  STOP
                </button>
                <button 
                  onClick={handleLifeCheck}
                  className="py-2.5 rounded bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 transition-all cursor-pointer font-sans"
                >
                  LIFE CHECK
                </button>
              </div>

              {/* Live Alerts panel */}
              <div className="min-h-[48px] bg-slate-50 border border-slate-200 rounded-lg p-2.5 flex flex-col justify-center text-[9px] font-mono text-slate-500 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {payStatus ? (
                    <motion.div
                      key="payment-status"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="flex flex-col gap-0.5"
                    >
                      <div className="flex items-center justify-between text-slate-800 font-semibold">
                        <span>Digital Payment: {payStatus.amount}</span>
                        <span className="text-[#3aa85b] flex items-center gap-0.5 font-bold">
                          ✔ Verified
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-slate-400 text-[8px] mt-0.5">
                        <span>{activeNotification || "Washer 1 Activated"}</span>
                        <span>{payStatus.time}</span>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="flex items-center gap-1.5 justify-center py-2 text-slate-400">
                      <WifiHigh size={12} />
                      <span>Terminal awaiting checkout trigger...</span>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Live Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 border-t border-white/5">
          <div className="lg:col-span-5 flex flex-col gap-6 lg:order-last">
            <div className="w-10 h-10 rounded-lg bg-[#70a1ff]/10 border border-[#70a1ff]/20 flex items-center justify-center text-[#70a1ff]">
              <Storefront size={20} />
            </div>
            <div>
              <h2 className="text-3xl font-display font-black tracking-tighter text-white uppercase">
                Live Dashboard
              </h2>
              <p className="text-sm font-semibold text-[#70a1ff] mt-1">
                See your store from anywhere
              </p>
            </div>
            <ul className="flex flex-col gap-3 font-sans text-sm text-[#b4b7bd]">
              <li className="flex items-center gap-2.5">
                <Check size={16} className="text-[#3aa85b]" />
                <span>Every machine's status: running, idle, or offline</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check size={16} className="text-[#3aa85b]" />
                <span>Access securely from any phone or computer</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check size={16} className="text-[#3aa85b]" />
                <span>Monitor live revenue across all branches</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check size={16} className="text-[#3aa85b]" />
                <span>Receive instant alerts if a machine disconnects</span>
              </li>
            </ul>
          </div>

          {/* Branches Metrics visualizer (LIGHT MODE CARD) */}
          <div className="lg:col-span-7 flex justify-start w-full">
            <div className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-5 flex flex-col gap-4 text-left shadow-2xl relative font-sans text-slate-800">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">Active Branch Monitors</span>
                <span className="text-[8px] font-mono text-slate-400">UPDATED JUST NOW</span>
              </div>

              {/* Branch Lists */}
              <div className="flex flex-col gap-3">
                {BRANCHES.map((b) => (
                  <div key={b.name} className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors flex flex-col md:flex-row justify-between gap-4 md:items-center">
                    <div>
                      <div className="flex items-center gap-2">
                        <h5 className="text-sm font-bold text-slate-900 leading-none">{b.name}</h5>
                        <span className="text-[8px] font-mono bg-slate-200/50 text-slate-700 px-1.5 py-0.5 rounded border border-slate-200">
                          {b.type}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1 block font-mono">{b.address}</span>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-6 text-right font-mono text-xs text-slate-600">
                      <div>
                        <span className="text-slate-900 font-bold block">{b.machines}</span>
                        <span className="text-[8px] text-slate-400 uppercase">Machines</span>
                      </div>
                      <div>
                        <span className="text-indigo-600 font-bold block">{b.revenue}</span>
                        <span className="text-[8px] text-slate-400 uppercase">Today</span>
                      </div>
                      <div>
                        <span className="text-slate-900 font-bold block">{b.uptime}</span>
                        <span className="text-[8px] text-slate-400 uppercase">Uptime</span>
                      </div>
                      <div>
                        <span className="text-slate-900 font-bold block text-[10px]">{b.washers}W / {b.dryers}D</span>
                        <span className="text-[8px] text-slate-400 uppercase">Type</span>
                      </div>
                      
                      <div className="flex items-center gap-1 text-[9px] font-bold">
                        <span className={`w-1.5 h-1.5 rounded-full ${b.status === "Online" ? "bg-[#3aa85b]" : "bg-[#d74745]"}`} />
                        <span className={b.status === "Online" ? "text-[#3aa85b]" : "text-[#d74745]"}>{b.status}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Reports & Inventory */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 border-t border-white/5">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="w-10 h-10 rounded-lg bg-[#70a1ff]/10 border border-[#70a1ff]/20 flex items-center justify-center text-[#70a1ff]">
              <Notebook size={20} />
            </div>
            <div>
              <h2 className="text-3xl font-display font-black tracking-tighter text-white uppercase">
                Reports & Inventory
              </h2>
              <p className="text-sm font-semibold text-[#70a1ff] mt-1">
                Close the shift in one screen
              </p>
            </div>
            <ul className="flex flex-col gap-3 font-sans text-sm text-[#b4b7bd]">
              <li className="flex items-center gap-2.5">
                <Check size={16} className="text-[#3aa85b]" />
                <span>Generate daily and per-shift sales summaries</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check size={16} className="text-[#3aa85b]" />
                <span>Track soap and supply levels automatically</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check size={16} className="text-[#3aa85b]" />
                <span>Print physical shift receipts in one click</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check size={16} className="text-[#3aa85b]" />
                <span>Export data cleanly for your accountant</span>
              </li>
            </ul>
          </div>

          {/* Shift Report Panel mockup (LIGHT MODE CARD) */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5 flex flex-col gap-4 text-left shadow-2xl relative font-sans text-slate-800">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">Shift Report Summary</span>
                <span className="text-[8px] font-mono text-slate-400">SHIFT A · TAFT BRANCH</span>
              </div>

              {/* Shift data rows */}
              <div className="flex flex-col gap-2.5 font-mono text-xs text-slate-600">
                <div className="flex justify-between border-b border-slate-100 pb-1">
                  <span>Shift Manager:</span>
                  <span className="text-slate-900 font-bold">Rhea Santos</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1">
                  <span>Cash Sales:</span>
                  <span className="text-slate-900 font-bold">₱6,420.00</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1">
                  <span>Digital Payments:</span>
                  <span className="text-slate-900 font-bold">₱7,840.00</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1">
                  <span>Gross Shift Total:</span>
                  <span className="text-indigo-600 font-bold text-sm">₱14,260.00</span>
                </div>
                
                {/* Inventory warning */}
                <div className="flex items-center gap-2 bg-red-50 border border-red-150 p-2.5 rounded-lg text-[10px] text-red-700 font-semibold mt-1">
                  <WarningCircle size={14} className="shrink-0" />
                  <span>Soap Inventory Level Alert: 12% remaining (Refill suggested)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 py-2 rounded bg-[#0f172a] text-white hover:bg-slate-800 text-[10px] font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer font-sans">
                  <Printer size={12} weight="fill" />
                  <span>Print Shift Receipt</span>
                </button>
                <button className="flex-1 py-2 rounded bg-slate-100 border border-slate-200 text-slate-600 hover:bg-slate-200 text-[10px] font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer font-sans">
                  <span>Export CSV</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Laundry Specific Contact Form (LIGHT MODE CARD) */}
      <section id="laundry-contact" className="py-24 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 text-left flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-black tracking-tighter text-white uppercase">
                Deploy LaundryLink In Your Branch
              </h2>
              <p className="text-base text-[#b4b7bd] mt-3 leading-relaxed">
                Connect with our product lead to get a customized implementation quote for your washing terminals.
              </p>
            </div>
            <div className="mt-8 border-t border-white/5 pt-8 text-xs font-mono text-[#9c9ea2]">
              <span className="block text-white uppercase tracking-wider text-[10px] mb-1 font-bold">POS Sync Support</span>
              <span>Available globally for smart washer ecosystems.</span>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#0b0d11]/50 border border-white/5 rounded-2xl p-6 md:p-8 relative shadow-2xl text-white">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#3aa85b]/10 border border-[#3aa85b]/20 flex items-center justify-center text-[#3aa85b] shadow-[0_0_12px_rgba(58,168,91,0.15)]">
                  <Check size={24} weight="bold" />
                </div>
                <h3 className="text-lg font-bold text-white">Inquiry Received</h3>
                <p className="text-xs text-[#b4b7bd] max-w-xs leading-relaxed">
                  Thank you. We have queued your LaundryLink details. Our integration lead will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                <div className="flex flex-col gap-2">
                  <label htmlFor="laundry-name-input" className="text-xs font-bold text-white uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    id="laundry-name-input"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Aaron Lime"
                    className="w-full bg-[#13161b] border border-[#1d1f23] rounded-lg px-4 py-3 text-xs text-white placeholder-[#9c9ea2]/60 focus:border-[#70a1ff] focus:ring-1 focus:ring-[#70a1ff] outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="laundry-email-input" className="text-xs font-bold text-white uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    id="laundry-email-input"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="e.g. aaron@domain.com"
                    className="w-full bg-[#13161b] border border-[#1d1f23] rounded-lg px-4 py-3 text-xs text-white placeholder-[#9c9ea2]/60 focus:border-[#70a1ff] focus:ring-1 focus:ring-[#70a1ff] outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="laundry-branch-select" className="text-xs font-bold text-white uppercase tracking-wider">
                    Number of Branches
                  </label>
                  <div className="relative">
                    <select
                      id="laundry-branch-select"
                      name="branchCount"
                      value={formState.branchCount}
                      onChange={handleInputChange}
                      className="w-full bg-[#13161b] border border-[#1d1f23] rounded-lg px-4 py-3 text-xs text-white outline-none focus:border-[#70a1ff] focus:ring-1 focus:ring-[#70a1ff] transition-all appearance-none cursor-pointer"
                    >
                      <option value="1">1 Branch</option>
                      <option value="2-5">2 to 5 Branches</option>
                      <option value="6+">6+ Branches / Multi-City</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#9c9ea2] text-[10px]">
                      ▼
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="laundry-message-input" className="text-xs font-bold text-white uppercase tracking-wider">
                    Scope of wash terminals (e.g. models, active software)
                  </label>
                  <textarea
                    id="laundry-message-input"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Washing terminal brands, operational booking software currently in use..."
                    className="w-full bg-[#13161b] border border-[#1d1f23] rounded-lg px-4 py-3 text-xs text-white placeholder-[#9c9ea2]/60 focus:border-[#70a1ff] focus:ring-1 focus:ring-[#70a1ff] outline-none transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col items-center gap-3 mt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-lg bg-white text-[#050608] hover:bg-[#e5e8ec] disabled:opacity-50 text-xs font-bold transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer shadow-[0_4px_16px_rgba(255,255,255,0.1)]"
                  >
                    <span>{loading ? "Sending Details..." : "Request Implementation Quote"}</span>
                  </button>
                  <span className="text-[10px] text-[#9c9ea2] font-mono">🔒 No commitment required.</span>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
