import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted-alabaster border-t border-stone-200/50 py-16 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-16 border-b border-stone-200/40">
          
          {/* Brand Philosophy column */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <img
                src="/Magari logo.svg"
                alt="Magari Studio"
                className="h-6 w-auto object-contain"
              />
            </Link>
            <p className="font-serif text-lg md:text-xl font-light italic text-terrene-charcoal/80 max-w-sm leading-relaxed text-pretty">
              "A quiet workspace for contemporary Indian design, crafted by hand, dedicated to the beauty of slow, deliberate creation."
            </p>
            <span className="text-[10px] tracking-[0.2em] uppercase font-light text-stone-400 mt-2 block">
              Indore, Madhya Pradesh, India
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] tracking-[0.25em] uppercase font-semibold text-terrene-charcoal/90">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { name: "The Collection", href: "/collections" },
                { name: "Our Philosophy", href: "/about" },
                { name: "Visit Indore Studio", href: "/visit" },
                { name: "Bespoke Inquiries", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-terrene-charcoal/70 hover:text-raw-clay transition-colors duration-300 font-light tracking-wider"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Inquiries & Connect */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] tracking-[0.25em] uppercase font-semibold text-terrene-charcoal/90">
              Connect
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://instagram.com/magaristudio_in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-xs text-terrene-charcoal/70 hover:text-raw-clay transition-colors duration-300 font-light tracking-wider"
                >
                  Instagram
                  <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919893027861"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-xs text-terrene-charcoal/70 hover:text-raw-clay transition-colors duration-300 font-light tracking-wider"
                >
                  WhatsApp Consultation
                  <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <span className="block text-xs text-terrene-charcoal/50 font-light tracking-wider">
                  studio@magaristudio.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4 text-[10px] tracking-[0.2em] uppercase font-light text-terrene-charcoal/50">
          <div>
            © {currentYear} Magari Studio. Contemporary Indian Couture.
          </div>
          <div className="flex gap-6">
            <span>Indore Atelier</span>
            <span className="text-stone-300">•</span>
            <span>Slow Fashion India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
