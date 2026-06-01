"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "@/components/MotionWrapper";

export default function About() {
  return (
    <div className="bg-bone-white text-terrene-charcoal min-h-screen">
      {/* 1. INTRO HERO SECTION */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-[10px] tracking-[0.4em] uppercase text-raw-clay font-medium block">
              Behind the Thread
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-light italic leading-tight text-pretty">
              Quiet Elegance & Conscious Creation
            </h1>
            <p className="text-stone-600 font-light text-sm md:text-base leading-relaxed max-w-xl text-pretty mt-2">
              Magari Studio is a woman-led contemporary Indian fashion label based in Indore, founded on the values of slow fashion, handcrafted textiles, and uncompromised structural design.
            </p>
          </div>

          <div className="lg:col-span-5 group overflow-hidden border border-stone-200/40 relative">
            <MotionWrapper className="aspect-[4/3] overflow-hidden bg-muted-alabaster">
              <img
                src="/images/hero/customer2.jpg"
                alt="Slow drape philosophy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
            </MotionWrapper>
          </div>

        </div>
      </section>

      {/* 2. THE FOUNDER'S JOURNEY */}
      <section className="py-24 px-6 md:px-12 bg-muted-alabaster border-b border-stone-200/50">
        <div className="max-w-4xl mx-auto">
          <MotionWrapper className="flex flex-col gap-8">
            <span className="text-[10px] tracking-[0.3em] uppercase text-raw-clay font-medium block">
              The Journey
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light italic leading-snug tracking-wide">
              "We began Magari to build a bridge between traditional Indian weaver clusters and the clean architectural lines of contemporary global fashion."
            </h2>
            
            <div className="h-[1px] w-24 bg-raw-clay/60 my-2" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-stone-600 font-light text-sm md:text-base leading-relaxed text-pretty">
              <p>
                Magari was born out of a desire to create something enduring. Witnessing the rapid cycles of fast fashion and the systemic devaluation of handloom weavers, our founder set out to build an inclusive design house in Indore. A sanctuary where garments are crafted, not manufactured.
              </p>
              <p>
                We collaborate directly with local artisan clusters in Madhya Pradesh and across central India. By combining ancient dyeing techniques and hand-rolled finishing with geometric, comfortable modern tailoring, we bring to life pieces that offer ease of wear and depth of character.
              </p>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* 3. CORE PILLARS OF SLOW CREATION */}
      <section className="py-24 px-6 md:px-12 bg-bone-white text-terrene-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <MotionWrapper>
              <span className="text-[10px] tracking-[0.3em] uppercase text-raw-clay font-medium block mb-2">
                Conscious Design
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light italic tracking-wide">
                Our Editorial Standards
              </h2>
            </MotionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Pillar 1 */}
            <MotionWrapper className="flex flex-col gap-4 border border-stone-200/50 p-8 bg-muted-alabaster/40 rounded-sm">
              <span className="font-serif text-3xl font-light text-raw-clay italic">01.</span>
              <h3 className="font-serif text-xl font-medium tracking-wide">Artisan Craftsmanship</h3>
              <p className="text-stone-500 font-light text-xs md:text-sm leading-relaxed text-pretty">
                We believe the human hand is the ultimate designer. Every stitch is finished by local craftsmen, ensuring that no two pieces are identical, preserving traditional textile drapes.
              </p>
            </MotionWrapper>

            {/* Pillar 2 */}
            <MotionWrapper delay={0.2} className="flex flex-col gap-4 border border-stone-200/50 p-8 bg-muted-alabaster/40 rounded-sm">
              <span className="font-serif text-3xl font-light text-raw-clay italic">02.</span>
              <h3 className="font-serif text-xl font-medium tracking-wide">Quiet Elegance</h3>
              <p className="text-stone-500 font-light text-xs md:text-sm leading-relaxed text-pretty">
                No loud colors, no heavy prints, and no aggressive logos. Inspired by modern minimalism, we design elegant and structural silhouettes that enhance the natural posture of the wearer.
              </p>
            </MotionWrapper>

            {/* Pillar 3 */}
            <MotionWrapper delay={0.4} className="flex flex-col gap-4 border border-stone-200/50 p-8 bg-muted-alabaster/40 rounded-sm">
              <span className="font-serif text-3xl font-light text-raw-clay italic">03.</span>
              <h3 className="font-serif text-xl font-medium tracking-wide">Conscious Slow Pacing</h3>
              <p className="text-stone-500 font-light text-xs md:text-sm leading-relaxed text-pretty">
                We operate strictly outside the commercial fashion calendar. By releasing curated edits instead of mass collections, we ensure minimal material waste and complete artistic integrity.
              </p>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* 4. VISUAL DECORATION BLOCK */}
      <section className="bg-stone-900 py-24 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-40 z-0">
          <img
            src="/images/studio/inside magari.jpg"
            alt="Organic studio interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-stone-950/50" />
        
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <span className="text-[10px] tracking-[0.4em] uppercase text-raw-clay font-medium">
            Join the Conversation
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-bone-white italic leading-snug tracking-wide">
            Experience slow-woven fashion firsthand at our Indore Studio sanctuary.
          </h2>
          <div className="flex gap-4 mt-2">
            <Link
              href="/visit"
              className="bg-bone-white text-terrene-charcoal hover:bg-raw-clay hover:text-bone-white transition-colors duration-500 py-3.5 px-8 text-[10px] tracking-[0.2em] uppercase font-semibold"
            >
              The Indore Studio
            </Link>
            <Link
              href="/contact"
              className="border border-stone-400 hover:border-bone-white text-bone-white py-3.5 px-8 text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-500"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
