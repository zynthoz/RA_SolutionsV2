export function LogoWall() {
  const logos = [
    { name: "OpenAI", slug: "openai" },
    { name: "Stripe", slug: "stripe" },
    { name: "Google Maps", slug: "googlemaps" },
    { name: "WhatsApp", slug: "whatsapp" },
    { name: "Vercel", slug: "vercel" },
    { name: "TypeScript", slug: "typescript" },
  ];

  return (
    <section className="border-y border-white/5 bg-[#0b0d11]/30 py-8 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#9c9ea2]">
          Engineered With Modern Industry Standards
        </span>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-65">
          {logos.map((logo) => (
            <img
              key={logo.slug}
              src={`https://cdn.simpleicons.org/${logo.slug}/ffffff`}
              alt={logo.name}
              title={logo.name}
              className="h-5 w-auto object-contain hover:opacity-100 transition-opacity duration-200"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
