"use client";

import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "@/components/MotionWrapper";

export default function VisitStudio() {
  return (
    <div className="bg-bone-white text-terrene-charcoal min-h-screen">
      {/* Page Header */}
      <section className="py-20 md:py-28 px-6 md:px-12 border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-[10px] tracking-[0.4em] uppercase text-raw-clay font-medium block">
              The Sanctuary
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-light italic leading-tight text-pretty">
              Visit Our Indore Studio
            </h1>
            <p className="text-stone-600 font-light text-sm md:text-base leading-relaxed max-w-xl text-pretty mt-2">
              Step into a space of absolute quiet and tactile beauty. Designed to reflect the earthy warm neutrals of our garments, the Indore Studio is where we custom-tailor our silhouettes.
            </p>
          </div>

          <div className="lg:col-span-5 group overflow-hidden border border-stone-200/40 relative bg-stone-900">
            <MotionWrapper className="aspect-[4/3] overflow-hidden">
              <video
                src="/videos/magari board outside.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-80"
              />
            </MotionWrapper>
          </div>

        </div>
      </section>

      {/* Visits and Address Details Grid */}
      <section className="py-20 px-6 md:px-12 bg-muted-alabaster border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Split Information Column */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <MotionWrapper className="flex flex-col gap-3">
                <span className="text-[10px] tracking-[0.35em] uppercase text-raw-clay font-medium">
                  Atelier Sanctuary
                </span>
                <h2 className="font-serif text-3xl font-light italic text-pretty">
                  The Experience
                </h2>
                <p className="text-stone-600 font-light text-xs md:text-sm leading-relaxed tracking-wider text-pretty mt-1">
                  We welcome you to book a private consultation, touch our handloom flax linens, mulberry silks, and discuss custom fittings directly with our in-house master tailors.
                </p>
              </MotionWrapper>

              <div className="flex flex-col gap-6 border-t border-stone-200/60 pt-6 text-xs md:text-sm">
                
                {/* Location Item */}
                <MotionWrapper delay={0.2} className="flex gap-4 items-start">
                  <div className="bg-bone-white border border-stone-200 p-2.5 rounded-full text-raw-clay">
                    <MapPin className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <span className="block text-[9px] tracking-wider uppercase font-semibold text-stone-400 mb-1">
                      Our Address
                    </span>
                    <span className="font-medium text-terrene-charcoal leading-relaxed block max-w-xs">
                      Magari Studio Atelier, Indore, Madhya Pradesh, India
                    </span>
                  </div>
                </MotionWrapper>

                {/* Hours Item */}
                <MotionWrapper delay={0.3} className="flex gap-4 items-start">
                  <div className="bg-bone-white border border-stone-200 p-2.5 rounded-full text-raw-clay">
                    <Clock className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <span className="block text-[9px] tracking-wider uppercase font-semibold text-stone-400 mb-1">
                      Working Hours
                    </span>
                    <span className="font-medium text-terrene-charcoal block">
                      Monday – Saturday: 11:00 AM – 8:00 PM
                    </span>
                    <span className="text-[11px] text-stone-400 font-light mt-0.5 block">
                      Sunday by prior private appointment.
                    </span>
                  </div>
                </MotionWrapper>

                {/* Consultations Item */}
                <MotionWrapper delay={0.4} className="flex gap-4 items-start">
                  <div className="bg-bone-white border border-stone-200 p-2.5 rounded-full text-raw-clay">
                    <PhoneCall className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <span className="block text-[9px] tracking-wider uppercase font-semibold text-stone-400 mb-1">
                      Contact Phone & WhatsApp
                    </span>
                    <span className="font-medium text-terrene-charcoal block">
                      +91 98930 27861
                    </span>
                    <span className="text-[11px] text-stone-400 font-light mt-0.5 block">
                      studio@magaristudio.com
                    </span>
                  </div>
                </MotionWrapper>

              </div>

              {/* Get Directions Action */}
              <MotionWrapper delay={0.5} className="mt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://maps.google.com/?q=Magari+Studio+Indore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-terrene-charcoal hover:bg-artisanal-sage text-bone-white text-center transition-colors duration-500 py-4 px-8 text-[10px] tracking-[0.2em] uppercase font-semibold flex items-center justify-center gap-1.5 shadow-md"
                >
                  Get Directions
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://wa.me/919893027861?text=I%20would%20love%20to%20schedule%20a%20private%20studio%20visit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-stone-300 hover:border-terrene-charcoal text-terrene-charcoal py-4 px-8 text-center text-[10px] tracking-[0.2em] uppercase font-medium bg-transparent transition-colors duration-500 flex items-center justify-center"
                >
                  Schedule A Visit
                </a>
              </MotionWrapper>

            </div>

            {/* Asymmetrical Visual Columns */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Studio Interior Image Card */}
              <div className="flex flex-col gap-4">
                <MotionWrapper className="group overflow-hidden border border-stone-200/40 relative">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src="/images/studio/inside magari.jpg"
                      alt="Inside Magari Studio Sanctuary"
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                  </div>
                </MotionWrapper>
                <span className="text-[10px] tracking-widest uppercase text-stone-400 font-light italic">
                  Showroom Display & Racks
                </span>
              </div>

              {/* Interactive Video Loop Card (inside studio) */}
              <div className="flex flex-col gap-4 sm:mt-12">
                <MotionWrapper delay={0.2} className="group overflow-hidden border border-stone-200/40 bg-stone-900">
                  <div className="aspect-[3/4] overflow-hidden">
                    <video
                      src="/videos/magari board inside.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover opacity-85 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  </div>
                </MotionWrapper>
                <span className="text-[10px] tracking-widest uppercase text-stone-400 font-light italic">
                  Inside embroidery work detailing
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
