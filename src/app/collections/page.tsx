"use client";

import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "@/components/MotionWrapper";

export default function Collections() {
  const collectionsList = [
    {
      id: "white-canvas",
      title: "The White Canvas",
      tagline: "Linen Core & Timeless Structure",
      description:
        "Designed to be the foundation of a conscious wardrobe, The White Canvas is a study of structure and breathability. Handcrafted from organic flax linen, these pieces feature minute, hand-finished flat seams and detailed architectural hems. Perfect for slow summer afternoons and quiet, enduring strength.",
      primaryImage: "/images/collections/white kurti full.jpg",
      secondaryImage: "/images/collections/white kurti.jpg",
      colorNotes: "Ivory / Bone / Raw Linen",
      fabric: "100% Organic Flax Linen",
      details: ["Hand-finished flat seams", "Minimal architectural hems", "Breathable organic weave", "Bespoke tailoring available"],
      whatsappText: "I would love to inquire about The White Canvas Linen Kurti collection."
    },
    {
      id: "emerald-drapes",
      title: "The Emerald Drapes",
      tagline: "Festive Silk & Natural Pigments",
      description:
        "An exploration of color flow and festive luxury. The Emerald Drapes are hand-dyed in small, botanical batches by local master craftsmen. Made from raw, premium mulberry silk, these sarees represent contemporary elegance combined with age-old weaver artistry. Each drape is heavy with memory and light to wear.",
      primaryImage: "/images/collections/green saaree full.jpg",
      secondaryImage: "/images/collections/green saree.jpg",
      colorNotes: "Deep Sage / Emerald / Moss",
      fabric: "100% Raw Mulberry Silk",
      details: ["Hand-dyed botanical batches", "Traditional central Indian weave", "Intricate gold thread borders", "Custom blouse tailoring included"],
      whatsappText: "I would love to inquire about The Emerald Festive Saree collection."
    }
  ];

  return (
    <div className="bg-bone-white text-terrene-charcoal min-h-screen py-16 md:py-24">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-b border-stone-200/50 pb-16">
        <MotionWrapper className="max-w-2xl">
          <span className="text-[10px] tracking-[0.4em] uppercase text-raw-clay font-medium block mb-3">
            The Curation
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light italic leading-tight mb-6">
            Contemporary Silhouettes
          </h1>
          <p className="text-stone-500 font-light text-sm md:text-base leading-relaxed text-pretty">
            We do not design fast collections. We create slow, deliberate visual edits that honor handcrafted textiles, local weaver communities, and structural elegance.
          </p>
        </MotionWrapper>
      </div>

      {/* Featured Collection Spreads */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-28 md:gap-36">
        {collectionsList.map((col, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <section
              key={col.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image Grid Column */}
              <div
                className={`lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-4 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                {/* Large Main Photo */}
                <div className="sm:col-span-8 group overflow-hidden border border-stone-200/40 relative">
                  <MotionWrapper className="aspect-[3/4] overflow-hidden bg-muted-alabaster">
                    <img
                      src={col.primaryImage}
                      alt={col.title}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  </MotionWrapper>
                  <div className="absolute top-4 left-4 bg-bone-white/80 backdrop-blur-sm px-3 py-1 text-[9px] tracking-[0.2em] uppercase font-light text-terrene-charcoal border border-stone-200/40">
                    Artisanal Classic
                  </div>
                </div>

                {/* Detail Crop Photo */}
                <div className="hidden sm:block sm:col-span-4 self-end pr-2">
                  <div className="group overflow-hidden border border-stone-200/40">
                    <MotionWrapper delay={0.2} className="aspect-[3/4] sm:aspect-square overflow-hidden bg-muted-alabaster">
                      <img
                        src={col.secondaryImage}
                        alt={`${col.title} Detail`}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      />
                    </MotionWrapper>
                  </div>
                  <span className="text-[9px] tracking-widest uppercase text-stone-400 font-light italic mt-2 block">
                    Close-up detailing
                  </span>
                </div>
              </div>

              {/* Storytelling Details Column */}
              <div
                className={`lg:col-span-6 flex flex-col gap-6 ${
                  isEven ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8"
                }`}
              >
                <MotionWrapper>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-raw-clay font-medium block mb-2">
                    {col.tagline}
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-light italic leading-tight text-pretty">
                    {col.title}
                  </h2>
                </MotionWrapper>

                <div className="h-[1px] w-20 bg-raw-clay/60 my-1" />

                <MotionWrapper delay={0.2}>
                  <p className="text-stone-600 font-light text-sm md:text-base leading-relaxed text-pretty">
                    {col.description}
                  </p>
                </MotionWrapper>

                {/* Garment Details List */}
                <MotionWrapper delay={0.3} className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-stone-200/60 pt-6 mt-2 text-xs">
                  <div>
                    <span className="block text-[9px] tracking-wider uppercase font-semibold text-stone-400 mb-1">Color palette</span>
                    <span className="font-medium text-terrene-charcoal">{col.colorNotes}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] tracking-wider uppercase font-semibold text-stone-400 mb-1">Fabric structure</span>
                    <span className="font-medium text-terrene-charcoal">{col.fabric}</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="block text-[9px] tracking-wider uppercase font-semibold text-stone-400 mb-1.5">Artisanal hallmarks</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-[11px] text-stone-500 font-light">
                      {col.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-raw-clay" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </MotionWrapper>

                {/* Inquiry button */}
                <MotionWrapper delay={0.4} className="mt-4">
                  <a
                    href={`https://wa.me/919893027861?text=${encodeURIComponent(col.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-terrene-charcoal hover:bg-artisanal-sage text-bone-white py-3.5 px-6 text-[10px] tracking-[0.2em] uppercase font-semibold transition-colors duration-500 inline-flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Inquire About Collection
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </MotionWrapper>
              </div>
            </section>
          );
        })}
      </div>

      {/* Standalone Backdrop - Saree Highlight */}
      <section className="bg-muted-alabaster py-24 border-t border-stone-200/50 mt-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-[10px] tracking-[0.35em] uppercase text-raw-clay font-medium">
                Editorial Highlight
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light italic leading-tight text-pretty">
                The Ivory Silk
              </h2>
              <p className="text-stone-600 font-light text-xs md:text-sm leading-relaxed tracking-wider text-pretty mt-1">
                A single-piece classic drape spun from traditional handloom tussar silk. Soft ivory accents offset by gold weaves—designed as an absolute masterwork of slow festive design.
              </p>
              <div className="mt-4">
                <a
                  href="https://wa.me/919893027861?text=I%20am%20interested%20in%20The%20Ivory%20Silk%20Saree."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-stone-300 hover:border-terrene-charcoal text-terrene-charcoal py-3.5 px-8 text-[10px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Consult Stylist
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 group overflow-hidden border border-stone-200/40 relative bg-stone-900">
              <MotionWrapper className="aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                <img
                  src="/images/collections/ivory saree.jpg"
                  alt="Ivory Silk Saree Highlight"
                  className="w-full h-full object-cover object-[center_35%] transition-transform duration-[1200ms] ease-out group-hover:scale-105 opacity-90"
                />
              </MotionWrapper>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
