import { useState, useEffect } from "react";
import { Sparkle, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { motion } from "motion/react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  metric?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "LaundryLink completely streamlined our TAFT branch. We went from manual ticketing to fully automated washer triggers, saving 15 hours of staff time per week.",
    author: "Ricardo Santos",
    role: "Managing Director",
    company: "QuickWash Solutions",
    metric: "40% faster queue processing",
  },
  {
    quote: "Our local bookings doubled in Quezon City within three months of launching the customized portal. The site speed is incredible compared to our old WordPress builder.",
    author: "Dr. Elena Lim",
    role: "Operations Lead",
    company: "Metro Care Clinics",
    metric: "2.1x increase in appointments",
  },
  {
    quote: "The AI agent answers customer questions on WhatsApp perfectly, qualifying leads and syncing them right into our system. We no longer miss late-night requests.",
    author: "Marc Carpio",
    role: "Founder",
    company: "Apex Real Estate",
    metric: "98% chatbot auto-resolution",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3500); // 3.5 seconds per slide
    return () => clearInterval(timer);
  }, [currentIndex, isHovered]);

  const getOffset = (idx: number, current: number, total: number) => {
    const diff = idx - current;
    if (diff === 0) return 0;
    if (diff === 1 || (current === total - 1 && idx === 0)) return 1;
    if (diff === -1 || (current === 0 && idx === total - 1)) return -1;
    return diff;
  };

  return (
    <section id="testimonials" className="py-24 border-t border-white/5 relative bg-[#0b0d11]/10 overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-[#70a1ff]/3 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 flex flex-col items-center"
        >
          <span className="font-mono text-[10px] text-[#70a1ff] uppercase tracking-wider block mb-2 font-bold">
            Client Success & ROI
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-black tracking-tighter text-white uppercase">
            Proven in Operations
          </h2>
        </motion.div>

        {/* Carousel */}
        <div 
          className="relative min-h-[350px] md:min-h-[300px] flex items-center justify-center w-full overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {TESTIMONIALS.map((t, idx) => {
            const offset = getOffset(idx, currentIndex, TESTIMONIALS.length);
            const isCenter = offset === 0;

            return (
              <motion.div
                key={idx}
                initial={false}
                animate={{
                  x: `${offset * 105}%`,
                  scale: isCenter ? 1 : 0.85,
                  opacity: isCenter ? 1 : 0.25,
                  zIndex: isCenter ? 10 : 5,
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-[85%] md:w-full max-w-2xl cursor-pointer"
                onClick={() => !isCenter && setCurrentIndex(idx)}
              >
                <div className="rounded-2xl border border-white/5 bg-[#0b0d11]/80 p-8 md:p-10 flex flex-col items-center text-center mx-auto backdrop-blur-md shadow-2xl">
                  {/* Metric Badge */}
                  {t.metric && (
                    <div className="inline-flex items-center gap-1 bg-[#3aa85b]/10 border border-[#3aa85b]/20 text-[#3aa85b] font-mono text-[9px] font-bold uppercase px-3 py-1 rounded-full mb-6">
                      <Sparkle size={10} weight="fill" />
                      <span>{t.metric}</span>
                    </div>
                  )}
                  
                  <p className="text-lg md:text-xl text-[#e5e8ec] italic leading-relaxed mb-8">
                    "{t.quote}"
                  </p>

                  {/* Attribution */}
                  <div>
                    <span className="block text-sm font-bold text-white mb-1">{t.author}</span>
                    <span className="block text-xs text-[#9c9ea2]">
                      {t.role}, <span className="text-white">{t.company}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Controls */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <button 
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#b4b7bd] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Previous testimonial"
          >
            <CaretLeft size={16} />
          </button>
          
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? "bg-[#70a1ff] w-6" : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#b4b7bd] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Next testimonial"
          >
            <CaretRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
