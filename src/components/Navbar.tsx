"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" },
    { name: "About", href: "/about" },
    { name: "Visit Studio", href: "/visit" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${isScrolled
          ? "bg-bone-white/90 backdrop-blur-md py-4 border-b-[0.5px] border-stone-200/60"
          : "bg-transparent py-6 border-b-[0.5px] border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="relative z-50 flex items-center">
            {/* Using the provided Magari logo.svg asset */}
            <img
              src="/Magari logo.png"
              alt="Magari Studio Logo"
              className="h-20 w-auto -mt-6 object-contain transition-all duration-500 ease-in-out"
              style={{
                filter: isScrolled || isMobileMenuOpen ? "none" : "brightness(0.9) contrast(1.1)",
              }}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-[11px] tracking-[0.25em] uppercase font-light text-terrene-charcoal/80 hover:text-terrene-charcoal transition-colors duration-300 py-1"
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-raw-clay"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA/Inquiry Button - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase font-medium text-raw-clay hover:text-artisanal-sage transition-colors duration-300"
            >
              Inquire
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 p-2 text-terrene-charcoal/90 hover:text-terrene-charcoal transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 stroke-[1.2]" />
            ) : (
              <Menu className="w-5 h-5 stroke-[1.2]" />
            )}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-bone-white flex flex-col justify-between px-8 py-24 md:hidden"
          >
            {/* Background design accents */}
            <div className="absolute right-0 bottom-0 w-72 h-72 rounded-full bg-muted-alabaster/40 blur-3xl -z-10 pointer-events-none" />

            <div className="flex flex-col gap-12 mt-12">
              <span className="text-[10px] tracking-[0.3em] uppercase text-raw-clay font-medium">
                Menu
              </span>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05, duration: 0.5 }}
                    >
                      <Link
                        href={link.href}
                        className={`font-serif text-3xl font-light italic transition-colors duration-300 flex items-center justify-between ${isActive
                          ? "text-raw-clay"
                          : "text-terrene-charcoal hover:text-artisanal-sage"
                          }`}
                      >
                        {link.name}
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-raw-clay inline-block" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Menu Footer Info */}
            <div className="flex flex-col gap-6 border-t border-stone-200/60 pt-8">
              <div className="flex justify-between items-center text-[10px] tracking-[0.2em] uppercase font-light text-terrene-charcoal/60">
                <span>Indore, India</span>
                <Link
                  href="/visit"
                  className="text-raw-clay hover:underline flex items-center gap-1"
                >
                  Visit Studio <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/919893027861"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-terrene-charcoal hover:bg-artisanal-sage text-bone-white py-3.5 text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 font-medium"
                >
                  WhatsApp Inquiry
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
