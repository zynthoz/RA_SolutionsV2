import { SiOpenai, SiStripe, SiGooglemaps, SiWhatsapp, SiVercel, SiTypescript } from "@icons-pack/react-simple-icons";

export function LogoWall() {
  const logos = [
    { name: "OpenAI", Icon: SiOpenai },
    { name: "Stripe", Icon: SiStripe },
    { name: "Google Maps", Icon: SiGooglemaps },
    { name: "WhatsApp", Icon: SiWhatsapp },
    { name: "Vercel", Icon: SiVercel },
    { name: "TypeScript", Icon: SiTypescript },
  ];

  return (
    <section className="border-y border-white/5 bg-[#0b0d11]/30 py-8 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#9c9ea2]">
          Engineered With Modern Industry Standards
        </span>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-65 text-white">
          {logos.map((logo) => (
            <div
              key={logo.name}
              title={logo.name}
              className="h-6 w-auto flex items-center justify-center hover:opacity-100 transition-opacity duration-200"
            >
              <logo.Icon className="h-full w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
