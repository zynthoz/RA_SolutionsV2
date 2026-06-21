import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="border-t border-white/5 bg-[#050608] py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => handleNav("#/")}>
          <Logo />
        </div>

        {/* Links */}
        <div className="flex gap-6 text-xs text-[#9c9ea2]">
          <button onClick={() => handleNav("#/", "services")} className="hover:text-white transition-colors cursor-pointer">
            Services
          </button>
          <button onClick={() => handleNav("#/", "products")} className="hover:text-[#70a1ff] transition-colors cursor-pointer">
            LaundryLink
          </button>
          <button onClick={() => handleNav("#/", "pricing")} className="hover:text-white transition-colors cursor-pointer">
            Pricing
          </button>
          <button onClick={() => handleNav("#/", "contact")} className="hover:text-white transition-colors cursor-pointer">
            Start Project
          </button>
        </div>

        {/* Copyright */}
        <div className="text-[10px] text-[#636363] font-mono">
          &copy; {currentYear} RA Solutions. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
