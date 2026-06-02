"use client";

import { useState, useEffect } from "react";
import { MessageSquare, MessageCircle, Send, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function InquiryCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 200px
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isVisible && (
          <div className="flex flex-col items-end gap-3">
            {/* Expanded panel with channels */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-bone-white/95 backdrop-blur-md border border-stone-200/80 shadow-2xl p-6 rounded-2xl w-72 flex flex-col gap-4 text-terrene-charcoal"
                >
                  <div className="flex justify-between items-center pb-2 border-b border-stone-200/50">
                    <span className="font-serif italic text-sm text-terrene-charcoal font-medium">
                      Bespoke Consultations
                    </span>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-stone-400 hover:text-terrene-charcoal transition-colors duration-300"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-[11px] text-terrene-charcoal/70 leading-relaxed font-light">
                    Every garment is custom-tailored with precision at our Indore atelier. Let us guide your selection.
                  </p>

                  <div className="flex flex-col gap-2 mt-1">
                    {/* WhatsApp CTA */}
                    <a
                      href="https://wa.me/+919893027861"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between bg-terrene-charcoal hover:bg-artisanal-sage text-bone-white py-2.5 px-4 text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 font-medium"
                    >
                      <span className="flex items-center gap-2">
                        <MessageCircle className="w-3.5 h-3.5" />
                        WhatsApp
                      </span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>

                    {/* Instagram CTA */}
                    <a
                      href="https://instagram.com/magaristudio_in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between border border-stone-300 hover:border-terrene-charcoal py-2.5 px-4 text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 font-medium"
                    >
                      <span className="flex items-center gap-2">
                        <Send className="w-3.5 h-3.5 stroke-[1.5]" />
                        Instagram DMs
                      </span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setIsOpen(!isOpen)}
              className="bg-raw-clay hover:bg-artisanal-sage text-bone-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors duration-500 focus:outline-none"
              aria-label="Inquire button"
            >
              {isOpen ? (
                <X className="w-5 h-5 stroke-[1.2]" />
              ) : (
                <MessageSquare className="w-5 h-5 stroke-[1.2]" />
              )}
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
