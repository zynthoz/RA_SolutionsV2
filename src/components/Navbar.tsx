import { Logo } from "./Logo";

export function Navbar() {
  const handleNav = (hash: string, sectionId?: string) => {
    window.location.hash = hash;
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 md:h-[72px] z-50 glass-effect border-b border-white/5 flex items-center justify-between px-6 md:px-12 max-w-[1400px] left-1/2 -translate-x-1/2 rounded-b-xl">
      <div className="flex items-center cursor-pointer" onClick={() => handleNav("#/")}>
        <Logo />
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#b4b7bd]">
        <button onClick={() => handleNav("#/", "services")} className="hover:text-white transition-colors cursor-pointer">
          Services
        </button>
        <button onClick={() => handleNav("#/", "products")} className="hover:text-[#70a1ff] text-[#70a1ff]/90 transition-colors cursor-pointer flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-[#70a1ff]" />
          <span>LaundryLink Product</span>
        </button>
        <button onClick={() => handleNav("#/", "pricing")} className="hover:text-white transition-colors cursor-pointer">
          Pricing
        </button>
        <button onClick={() => handleNav("#/", "about")} className="hover:text-white transition-colors cursor-pointer">
          Capabilities
        </button>
      </div>

      <div>
        <button
          onClick={() => handleNav("#/", "contact")}
          className="px-4 py-2 rounded-lg bg-white text-[#050608] hover:bg-[#e5e8ec] active:scale-95 text-xs font-bold transition-all shadow-[0_4px_12px_rgba(255,255,255,0.1)] cursor-pointer font-sans"
        >
          Start Project
        </button>
      </div>
    </nav>
  );
}
