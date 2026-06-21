import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { LogoWall } from "./components/LogoWall";
import { Services } from "./components/Services";
import { Products } from "./components/Products";
import { Pricing } from "./components/Pricing";
import { Capabilities } from "./components/Capabilities";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LaundryLinkPage } from "./components/LaundryLinkPage";

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || "#/");

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || "#/");
      if (window.location.hash.startsWith("#/laundrylink") || window.location.hash === "#/") {
        window.scrollTo({ top: 0, behavior: "instant" as any });
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderContent = () => {
    if (currentHash.startsWith("#/laundrylink")) {
      return <LaundryLinkPage />;
    }
    
    return (
      <>
        <Hero />
        <LogoWall />
        <Services />
        <Products />
        <Pricing />
        <Capabilities />
        <Contact />
      </>
    );
  };

  return (
    <div className="relative min-h-[100dvh] bg-[#050608] text-[#e5e8ec] selection:bg-[#70a1ff]/30 selection:text-white">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#70a1ff]/5 to-transparent pointer-events-none z-0" />
      
      {/* Universal brand shell */}
      <Navbar />
      
      <main className="relative z-10 pt-16">
        {renderContent()}
      </main>
      
      <Footer />
    </div>
  );
}
