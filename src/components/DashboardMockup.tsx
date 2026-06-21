import { useState, useEffect } from "react";
import { 
  ChartLineUp, 
  Cpu, 
  DeviceMobile, 
  List, 
  MapPin, 
  Play, 
  Plus, 
  Queue, 
  Sparkle, 
  Storefront, 
  User, 
  Users, 
  WarningCircle, 
  CheckCircle,
  Wrench
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";

interface Machine {
  id: string;
  name: string;
  type: "Washer" | "Dryer";
  status: "active" | "idle" | "error";
  progress: number;
  timeRemaining: number; // minutes
}

const INITIAL_MACHINES: Machine[] = [
  { id: "W1", name: "Washer 01", type: "Washer", status: "active", progress: 68, timeRemaining: 12 },
  { id: "W2", name: "Washer 02", type: "Washer", status: "idle", progress: 0, timeRemaining: 0 },
  { id: "W3", name: "Washer 03", type: "Washer", status: "active", progress: 42, timeRemaining: 24 },
  { id: "D1", name: "Dryer 01", type: "Dryer", status: "active", progress: 85, timeRemaining: 6 },
  { id: "D2", name: "Dryer 02", type: "Dryer", status: "error", progress: 0, timeRemaining: 0 },
  { id: "D3", name: "Dryer 03", type: "Dryer", status: "idle", progress: 0, timeRemaining: 0 },
];

export function DashboardMockup() {
  const [activeTab, setActiveTab] = useState<"overview" | "machines" | "analytics">("overview");
  const [machines, setMachines] = useState<Machine[]>(INITIAL_MACHINES);
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);

  // Simulate machine status & timer ticks
  useEffect(() => {
    const interval = setInterval(() => {
      setMachines((prevMachines) =>
        prevMachines.map((m) => {
          if (m.status !== "active") return m;
          const nextProgress = m.progress + 2;
          if (nextProgress >= 100) {
            return { ...m, status: "idle", progress: 0, timeRemaining: 0 };
          }
          return {
            ...m,
            progress: nextProgress,
            timeRemaining: Math.max(1, Math.round(m.timeRemaining - 0.2)),
          };
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleToggleMachine = (id: string) => {
    setMachines((prev) =>
      prev.map((m) => {
        if (m.id !== id) return m;
        if (m.status === "idle") {
          return { ...m, status: "active", progress: 1, timeRemaining: 30 };
        } else if (m.status === "active") {
          return { ...m, status: "error", progress: 0, timeRemaining: 0 };
        } else {
          return { ...m, status: "idle", progress: 0, timeRemaining: 0 };
        }
      })
    );
  };

  const activeCount = machines.filter((m) => m.status === "active").length;
  const errorCount = machines.filter((m) => m.status === "error").length;

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-[#cbd5e1] bg-[#f7f8fa] text-[#0f172a] shadow-2xl overflow-hidden font-sans select-none">
      {/* Mockup Header/Window Controls */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#cbd5e1] bg-[#e2e8f0]">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#f1f5f9] border border-[#cbd5e1] text-[11px] font-mono text-[#475569]">
          <Storefront size={12} className="text-indigo-600" />
          <span>laundrylink.io/ops/manila_south</span>
        </div>
        <div className="w-8" />
      </div>

      <div className="flex h-[380px] md:h-[420px]">
        {/* Mockup Sidebar */}
        <aside className="w-16 md:w-48 bg-[#131a29] text-[#e5e8ec] p-4 flex flex-col justify-between border-r border-[#cbd5e1]">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 px-2">
              <Sparkle size={20} className="text-[#70a1ff]" />
              <span className="font-bold text-[14px] tracking-tight hidden md:inline">LaundryLink</span>
            </div>

            <nav className="flex flex-col gap-1">
              {[
                { id: "overview", label: "Overview", icon: ChartLineUp },
                { id: "machines", label: "Live System", icon: Cpu },
                { id: "analytics", label: "Analytics", icon: DeviceMobile },
              ].map((item) => {
                const IconComp = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as any)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-left text-xs transition-colors ${
                      isActive
                        ? "bg-[#70a1ff]/20 text-[#70a1ff]"
                        : "text-[#b4b7bd] hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <IconComp size={16} />
                    <span className="hidden md:inline font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-2 px-2 border-t border-white/10 pt-3">
            <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold">
              RA
            </div>
            <div className="hidden md:block">
              <p className="text-[10px] font-medium leading-none">Branch Manager</p>
              <p className="text-[9px] text-[#9c9ea2]">ID: #0294</p>
            </div>
          </div>
        </aside>

        {/* Mockup Main Panel */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto bg-[#f7f8fa]">
          <AnimatePresence mode="wait">
            {activeTab === "overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-5 h-full"
              >
                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-xl border border-[#cbd5e1] shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                    <p className="text-[9px] text-[#475569] uppercase font-bold tracking-wider">Revenue</p>
                    <p className="text-base md:text-lg font-bold mt-1 text-[#0f172a]">₱14,820</p>
                    <span className="text-[8px] text-[#3aa85b] font-medium">+12.4% today</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#cbd5e1] shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                    <p className="text-[9px] text-[#475569] uppercase font-bold tracking-wider">Active Loads</p>
                    <p className="text-base md:text-lg font-bold mt-1 text-[#0f172a]">{activeCount}/6</p>
                    <span className="text-[8px] text-[#475569] font-medium">Running cycles</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#cbd5e1] shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                    <p className="text-[9px] text-[#475569] uppercase font-bold tracking-wider">Status</p>
                    <p className="text-base md:text-lg font-bold mt-1 text-[#0f172a] flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${errorCount > 0 ? "bg-[#d74745]" : "bg-[#3aa85b]"}`} />
                      <span className="text-xs md:text-sm font-semibold">{errorCount > 0 ? "Alert" : "Online"}</span>
                    </p>
                    <span className="text-[8px] text-[#475569] font-medium">All nodes reporting</span>
                  </div>
                </div>

                {/* Cloud Hub Display */}
                <div className="relative rounded-xl p-4 bg-gradient-to-br from-[#0c1936] via-[#0e0f23] to-[#050b18] text-white flex-1 overflow-hidden shadow-inner flex flex-col justify-between min-h-[140px]">
                  <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                    <Cpu size={120} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-full bg-[#70a1ff]/20 text-[#70a1ff] text-[9px] uppercase tracking-wider font-semibold border border-[#70a1ff]/30">
                        Integrated POS Sync
                      </span>
                    </div>
                    <h3 className="text-sm md:text-base font-semibold mt-2 max-w-sm text-slate-100">
                      Cloud Sync & Automation
                    </h3>
                    <p className="text-[10px] md:text-xs text-[#b4b7bd] mt-1 max-w-[280px]">
                      Real-time IoT gateway connecting physically automated terminals to your billing app database.
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-3 mt-2">
                    <div className="flex gap-4 text-[10px] text-[#b4b7bd]">
                      <div>
                        <span className="block text-white font-mono">1.2s</span>
                        <span>API Latency</span>
                      </div>
                      <div>
                        <span className="block text-white font-mono">99.98%</span>
                        <span>Uptime</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveTab("machines")}
                      className="px-2.5 py-1.5 rounded-lg bg-[#70a1ff] hover:bg-[#7bb2ff] active:scale-95 text-xs text-[#050608] font-bold transition-all flex items-center gap-1"
                    >
                      <span>Control Panel</span>
                      <Play size={10} weight="fill" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "machines" && (
              <motion.div
                key="machines"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-3 h-full"
              >
                <div className="flex items-center justify-between pb-1 border-b border-[#cbd5e1]">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#475569]">
                    Interactive Machine Terminals
                  </h3>
                  <span className="text-[9px] text-[#64748b]">Click any card to toggle cycle</span>
                </div>

                <div className="grid grid-cols-2 gap-3 flex-1 overflow-y-auto max-h-[280px] pr-1">
                  {machines.map((m) => {
                    const isActive = m.status === "active";
                    const isError = m.status === "error";
                    return (
                      <div
                        key={m.id}
                        onClick={() => handleToggleMachine(m.id)}
                        className={`p-3 rounded-xl border text-left cursor-pointer transition-all hover:shadow-md ${
                          isActive
                            ? "bg-white border-[#70a1ff] shadow-[0_0_12px_rgba(112,161,255,0.15)]"
                            : isError
                            ? "bg-red-50 border-[#d74745]/30"
                            : "bg-white border-[#cbd5e1]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-tight text-[#475569]">
                              {m.id}
                            </span>
                            <h4 className="text-xs font-semibold text-[#0f172a]">{m.name}</h4>
                          </div>
                          <div className="flex items-center">
                            <span
                              className={`w-2.5 h-2.5 rounded-full ${
                                isActive
                                  ? "bg-[#3aa85b]"
                                  : isError
                                  ? "bg-[#d74745]"
                                  : "bg-[#636363]"
                              }`}
                            />
                          </div>
                        </div>

                        {isActive ? (
                          <div className="mt-3">
                            <div className="flex justify-between text-[8px] text-[#475569] mb-1 font-mono">
                              <span>Running Cycle</span>
                              <span>{m.timeRemaining}m left</span>
                            </div>
                            <div className="w-full bg-[#e2e8f0] h-1.5 rounded-full overflow-hidden">
                              <div
                                className="bg-[#70a1ff] h-full rounded-full transition-all duration-300"
                                style={{ width: `${m.progress}%` }}
                              />
                            </div>
                          </div>
                        ) : isError ? (
                          <div className="mt-3 flex items-center gap-1 text-[9px] text-[#d74745] font-medium">
                            <WarningCircle size={12} />
                            <span>Needs Maintenance</span>
                          </div>
                        ) : (
                          <div className="mt-4 flex items-center gap-1 text-[9px] text-[#475569] font-medium">
                            <Play size={10} weight="fill" />
                            <span>Click to Start Cycle</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {activeTab === "analytics" && (
              <motion.div
                key="analytics"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-4 h-full"
              >
                <div className="bg-white p-4 rounded-xl border border-[#cbd5e1] flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-[#0f172a]">Weekly Peak Hours Analysis</h4>
                    <p className="text-[10px] text-[#475569] mt-0.5">Automated branch load metrics from core servers.</p>
                  </div>

                  {/* SVG Bar Chart */}
                  <div className="h-32 w-full flex items-end justify-between gap-1.5 pt-4">
                    {[
                      { day: "Mon", val: 40, active: false },
                      { day: "Tue", val: 55, active: false },
                      { day: "Wed", val: 75, active: false },
                      { day: "Thu", val: 45, active: false },
                      { day: "Fri", val: 90, active: true },
                      { day: "Sat", val: 120, active: true },
                      { day: "Sun", val: 110, active: true },
                    ].map((d, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full relative bg-[#e2e8f0] rounded-t-sm h-24 flex items-end">
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${(d.val / 120) * 100}%` }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className={`w-full rounded-t-sm ${
                              d.active ? "bg-[#70a1ff]" : "bg-slate-400"
                            }`}
                          />
                        </div>
                        <span className="text-[8px] font-medium font-mono text-[#64748b]">{d.day}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-[#cbd5e1] pt-3 text-[9px] text-[#475569]">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle size={12} className="text-[#3aa85b]" />
                      <span>Data generated 4 mins ago</span>
                    </div>
                    <span className="font-bold text-slate-800">Peak Load: Sat 4PM</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
