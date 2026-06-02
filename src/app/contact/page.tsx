"use client";

import Link from "next/link";
import { ArrowUpRight, MessageCircle, Send, ShieldAlert, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "@/components/MotionWrapper";

export default function Contact() {
  return (
    <div className="bg-bone-white text-terrene-charcoal min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Title Header */}
        <div className="border-b border-stone-200/50 pb-16 max-w-2xl">
          <MotionWrapper>
            <span className="text-[10px] tracking-[0.4em] uppercase text-raw-clay font-medium block mb-3">
              Begin a Conversation
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-light italic leading-tight mb-6">
              Bespoke Inquiries
            </h1>
            <p className="text-stone-500 font-light text-sm md:text-base leading-relaxed text-pretty">
              Every garment we create is tailored specifically for the wearer. If you are interested in a specific piece, custom styling advice, or custom sizing, we invite you to connect directly with our studio tailors.
            </p>
          </MotionWrapper>
        </div>

        {/* Channels Grid Section */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Detailed Inquiries Information Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <MotionWrapper className="flex flex-col gap-3">
              <span className="text-[10px] tracking-[0.3em] uppercase text-raw-clay font-medium">
                The Process
              </span>
              <h2 className="font-serif text-2xl font-light italic">
                How We Consult
              </h2>
              <p className="text-stone-600 font-light text-xs md:text-sm leading-relaxed tracking-wider text-pretty">
                Because we value slow, tailored pacing, we do not support direct cart checkouts. Rather, we conduct intimate virtual or physical consultations to understand your dimensions, fabric preferences, and desired drape before crafting.
              </p>
            </MotionWrapper>

            {/* Timings and FAQ details */}
            <div className="flex flex-col gap-4 border-t border-stone-200 pt-6 text-xs font-light">
              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-raw-clay mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-terrene-charcoal block mb-0.5">Sizing and Fitting</span>
                  <span className="text-stone-500 block leading-relaxed text-pretty">Custom tailors in Indore coordinate fittings. Standard sizing is also tailored to absolute precision.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 mt-2">
                <ShieldAlert className="w-4 h-4 text-raw-clay mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-terrene-charcoal block mb-0.5">Worldwide Delivery</span>
                  <span className="text-stone-500 block leading-relaxed text-pretty">We ship our slow-crafted silhouettes from our Indore workshop worldwide with secure tracking.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Primary Action Portals Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            
            {/* WhatsApp CTA Card */}
            <MotionWrapper delay={0.2} className="flex flex-col gap-6 border border-stone-200/50 p-8 bg-muted-alabaster/40 rounded-sm">
              <div className="bg-bone-white border border-stone-200 p-3 rounded-full text-raw-clay w-fit">
                <MessageCircle className="w-5 h-5 stroke-[1.2]" />
              </div>
              
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-xl font-medium tracking-wide">WhatsApp Studio</h3>
                <p className="text-stone-500 font-light text-xs leading-relaxed text-pretty">
                  Connect instantly with our design coordinator. Discuss garment availability, request high-resolution photos of drapes, and place sizing orders.
                </p>
              </div>

              <a
                href="https://wa.me/919893027861?text=Hello%20Magari%20Studio%2C%20I%20would%20love%20to%20inquire%20about%20your%20contemporary%20garments."
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full bg-terrene-charcoal hover:bg-artisanal-sage text-bone-white py-3.5 px-6 text-center text-[10px] tracking-[0.2em] uppercase font-semibold transition-colors duration-500 flex items-center justify-center gap-1.5 shadow-sm mt-auto"
              >
                Start WhatsApp Inquiry
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </MotionWrapper>

            {/* Instagram CTA Card */}
            <MotionWrapper delay={0.4} className="flex flex-col gap-6 border border-stone-200/50 p-8 bg-muted-alabaster/40 rounded-sm">
              <div className="bg-bone-white border border-stone-200 p-3 rounded-full text-raw-clay w-fit">
                <Send className="w-5 h-5 stroke-[1.2]" />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-xl font-medium tracking-wide">Instagram Messaging</h3>
                <p className="text-stone-500 font-light text-xs leading-relaxed text-pretty">
                  Send a Direct Message on Instagram. Explore our daily showroom curation, styling inspirations, and browse highlights of clients showcasing our drapes.
                </p>
              </div>

              <a
                href="https://instagram.com/magaristudio_in"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full border border-stone-300 hover:border-terrene-charcoal py-3.5 px-6 text-center text-[10px] tracking-[0.2em] uppercase font-semibold text-terrene-charcoal bg-transparent transition-all duration-300 flex items-center justify-center gap-1.5 mt-auto"
              >
                Message on Instagram
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </MotionWrapper>

          </div>

        </div>

      </div>
    </div>
  );
}
