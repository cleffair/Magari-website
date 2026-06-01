"use client";

import Link from "next/link";
import { ArrowUpRight, Play, Volume2, VolumeX } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import MotionWrapper from "@/components/MotionWrapper";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative h-[92vh] md:h-screen w-full flex items-center justify-center overflow-hidden bg-stone-900">
        {/* Dynamic Ken Burns Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.45 }}
            transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full relative"
          >
            <img
              src="/images/collections/ivory saree.jpg"
              alt="Magari Studio Ivory Drape"
              className="w-full h-full object-cover object-[center_35%]"
            />
          </motion.div>
          {/* Subtle Warm Sand Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-stone-950/20 to-stone-950/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center flex flex-col items-center gap-6 mt-12">
          {/* Refined Small Tagline */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-[10px] tracking-[0.4em] uppercase text-raw-clay font-medium"
          >
            Bespoke Contemporary Indian Couture
          </motion.span>

          {/* Large Editorial Serif Header */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="font-serif text-5xl md:text-8xl font-light text-bone-white italic leading-tight max-w-4xl tracking-wide text-pretty"
          >
            Woven with patience,<br />crafted for quiet elegance.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-stone-300 font-light text-xs md:text-sm tracking-[0.15em] max-w-lg leading-relaxed uppercase"
          >
            A slow fashion studio dedicated to handcrafted Indian textiles.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 mt-6"
          >
            <Link
              href="/collections"
              className="bg-bone-white text-terrene-charcoal hover:bg-raw-clay hover:text-bone-white transition-colors duration-500 py-3.5 px-8 text-[10px] tracking-[0.2em] uppercase font-semibold border border-transparent shadow-lg"
            >
              Explore Collection
            </Link>
            <Link
              href="/visit"
              className="border border-stone-400 hover:border-bone-white text-bone-white py-3.5 px-8 text-[10px] tracking-[0.2em] uppercase font-medium bg-black/10 backdrop-blur-sm transition-colors duration-500"
            >
              The Indore Studio
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none">
          <span className="text-[9px] tracking-[0.3em] uppercase text-stone-400 font-light">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-raw-clay/60"
          />
        </div>
      </section>

      {/* 2. BRAND PHILOSOPHY */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-bone-white text-terrene-charcoal">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          <MotionWrapper delay={0.2}>
            <span className="text-[10px] tracking-[0.3em] uppercase text-raw-clay font-medium block mb-4">
              Our Ethos
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light italic leading-snug tracking-wide text-pretty">
              "We believe garments should carry the weight of memory, the touch of the artisan's hand, and the breathability of slow-woven natural fibers."
            </h2>
          </MotionWrapper>

          <MotionWrapper delay={0.4} className="grid grid-cols-1 md:grid-cols-2 gap-8 text-stone-600 font-light leading-relaxed text-sm md:text-base">
            <p className="text-pretty">
              At Magari Studio, each piece is conceived as a work of slow design. Inspired by the quiet aesthetic grids of modern architecture and the organic textures of Indian soil, we celebrate raw, unhurried handloom textiles. We stand in direct opposition to fast fashion.
            </p>
            <p className="text-pretty">
              Our designs are made for women who value quiet luxury. By partnering with small clusters of local master artisans, we bring forth garments defined by exquisite tailoring, structural minimalism, and conscious luxury.
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* 3. FEATURED COLLECTIONS (Asymmetrical Editorial Layout) */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-muted-alabaster border-y border-stone-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <MotionWrapper>
              <span className="text-[10px] tracking-[0.3em] uppercase text-raw-clay font-medium block mb-2">
                Curated Edits
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light italic tracking-wide">
                The Narrative Pieces
              </h2>
            </MotionWrapper>
            <MotionWrapper delay={0.2}>
              <Link
                href="/collections"
                className="group inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase font-semibold text-raw-clay hover:text-artisanal-sage transition-colors duration-300"
              >
                View All Silhouettes
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </MotionWrapper>
          </div>

          {/* Asymmetrical Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start">
            
            {/* Left Block - The White Canvas (Kurti) */}
            <div className="md:col-span-5 flex flex-col gap-6">
              <MotionWrapper className="group overflow-hidden bg-bone-white border border-stone-200/40 relative">
                <div className="overflow-hidden aspect-[3/4]">
                  <img
                    src="/images/collections/white kurti full.jpg"
                    alt="The White Canvas Linen Kurti"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-bone-white/80 backdrop-blur-sm px-3 py-1 text-[9px] tracking-[0.2em] uppercase font-light text-terrene-charcoal border border-stone-200/40">
                  Linen Core
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.2} className="flex flex-col gap-2">
                <span className="font-serif text-2xl font-light italic">
                  The White Canvas
                </span>
                <p className="text-xs text-stone-500 font-light leading-relaxed tracking-wider">
                  Hand-stitched structural kurtis crafted from pristine organic linen, boasting fine detailed hems.
                </p>
                <div className="flex gap-4 items-center mt-2">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-raw-clay">
                    Linen / Bone
                  </span>
                  <span className="text-stone-300 font-thin">|</span>
                  <Link
                    href="/collections"
                    className="text-[9px] tracking-[0.25em] uppercase font-semibold text-terrene-charcoal hover:underline"
                  >
                    Details
                  </Link>
                </div>
              </MotionWrapper>

              {/* Inset Close-up Photo */}
              <div className="hidden md:block w-2/3 self-end -mt-6 pr-4">
                <MotionWrapper delay={0.3} className="group overflow-hidden border border-stone-200/40">
                  <div className="overflow-hidden aspect-[4/3]">
                    <img
                      src="/images/collections/white kurti.jpg"
                      alt="The White Canvas Detail View"
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                  </div>
                </MotionWrapper>
              </div>
            </div>

            {/* Spacer */}
            <div className="hidden md:col-span-1" />

            {/* Right Block - The Emerald Festive (Saree) */}
            <div className="md:col-span-6 flex flex-col gap-6 md:mt-24">
              <MotionWrapper className="group overflow-hidden bg-bone-white border border-stone-200/40 relative">
                <div className="overflow-hidden aspect-[4/5] md:aspect-[3/4]">
                  <img
                    src="/images/collections/green saaree full.jpg"
                    alt="The Emerald Saree Festive Drape"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-bone-white/80 backdrop-blur-sm px-3 py-1 text-[9px] tracking-[0.2em] uppercase font-light text-terrene-charcoal border border-stone-200/40">
                  Festive Silk
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.2} className="flex flex-col gap-2">
                <span className="font-serif text-2xl font-light italic">
                  The Emerald Festive
                </span>
                <p className="text-xs text-stone-500 font-light leading-relaxed tracking-wider">
                  Artisanal mulberry silk sarees hand-dyed in deep botanical sage and emerald drapes.
                </p>
                <div className="flex gap-4 items-center mt-2">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-raw-clay">
                    Raw Mulberry Silk
                  </span>
                  <span className="text-stone-300 font-thin">|</span>
                  <Link
                    href="/collections"
                    className="text-[9px] tracking-[0.25em] uppercase font-semibold text-terrene-charcoal hover:underline"
                  >
                    Details
                  </Link>
                </div>
              </MotionWrapper>

              {/* Inset Close-up Saree Photo */}
              <div className="hidden md:block w-3/5 self-start -mt-6">
                <MotionWrapper delay={0.3} className="group overflow-hidden border border-stone-200/40">
                  <div className="overflow-hidden aspect-square">
                    <img
                      src="/images/collections/green saree.jpg"
                      alt="The Emerald Detail Texture View"
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                  </div>
                </MotionWrapper>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CRAFTSMANSHIP (Sewing Video Immersive Section) */}
      <section className="relative min-h-[75vh] w-full flex items-center justify-center overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            src="/videos/sewing vid.mp4"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-stone-950/40" />
        </div>

        {/* Video Mute Controller Overlay */}
        <button
          onClick={toggleMute}
          className="absolute bottom-8 right-8 z-10 bg-bone-white/10 hover:bg-bone-white/20 backdrop-blur-md border border-stone-400/40 text-bone-white p-3 rounded-full transition-all duration-300 focus:outline-none"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <span className="text-[10px] tracking-[0.4em] uppercase text-raw-clay font-medium">
            Artisanal Precision
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-bone-white italic leading-snug tracking-wide text-pretty">
            Garments stitched, hand-finished,<br />and packaged with soul.
          </h2>
          <p className="text-stone-300 font-light text-xs md:text-sm tracking-widest uppercase leading-relaxed max-w-lg mt-2">
            Inside the Indore atelier, master tailors focus on minute elements — flat-felled seams, delicate bindings, and hand-rolled drapes.
          </p>
          <div className="w-[1px] h-12 bg-raw-clay/80 mt-4" />
        </div>
      </section>

      {/* 5. FOUNDER STORY */}
      <section className="py-24 md:py-36 bg-bone-white text-terrene-charcoal border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Story Image Column */}
            <div className="lg:col-span-5 relative group overflow-hidden border border-stone-200/40">
              <div className="aspect-[3/4] overflow-hidden bg-muted-alabaster">
                <img
                  src="/images/hero/customer1.jpg"
                  alt="Magari Studio Muse and Narrative"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute right-4 bottom-4 bg-bone-white/90 backdrop-blur-sm p-4 border border-stone-200/40 max-w-[200px]">
                <span className="font-serif italic text-xs block text-raw-clay mb-1">Contemporary Muse</span>
                <span className="text-[9px] tracking-wider uppercase font-light text-stone-500 block leading-tight">Celebrating local Indian craftsmanship.</span>
              </div>
            </div>

            {/* Narrative Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-8">
              <span className="text-[10px] tracking-[0.3em] uppercase text-raw-clay font-medium">
                Founder Journey
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light italic leading-tight text-pretty">
                Dedicated to Handcrafted Textiles
              </h2>
              <div className="h-[1px] w-24 bg-raw-clay/60 my-2" />
              
              <div className="flex flex-col gap-5 text-stone-600 font-light text-sm md:text-base leading-relaxed max-w-xl text-pretty">
                <p>
                  Magari Studio was founded as a passionate response to fast-fashion acceleration. Born and raised in Indore, our founder envisioned a workspace dedicated entirely to slow-lived curation. We honor the artisan communities of central India, transforming raw fibers into contemporary apparel that lasts generations.
                </p>
                <p>
                  "We do not design for a single season. We design for a lifetime of ease, comfort, and elegant expression," says our founder. Every stitch tells a story of local handloom preservation, women-led initiative, and absolute artistic integrity.
                </p>
              </div>

              <div className="mt-4">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase font-semibold text-terrene-charcoal hover:text-raw-clay transition-colors duration-300"
                >
                  Read Our Full Story
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. STUDIO EXPERIENCE */}
      <section className="py-24 bg-muted-alabaster text-terrene-charcoal relative">
        {/* Decorative ambient blur */}
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-raw-clay/10 blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            
            {/* Details and Actions Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-[10px] tracking-[0.3em] uppercase text-raw-clay font-medium">
                The Physical Space
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light italic leading-tight text-pretty">
                The Sanctuary
              </h2>
              <p className="text-stone-600 font-light text-sm leading-relaxed max-w-sm text-pretty mt-2">
                Situated in the quiet heart of Indore, the Magari Atelier is designed as a peaceful, minimalist sanctuary. Here, you are invited to feel our raw linens, organic silks, and discuss custom tailoring with our master stylists.
              </p>

              <div className="flex flex-col gap-4 border-t border-stone-200 pt-6 mt-4">
                <div>
                  <span className="text-[9px] tracking-[0.2em] uppercase font-semibold text-stone-400 block mb-1">Location</span>
                  <span className="text-xs text-terrene-charcoal font-medium">Indore, Madhya Pradesh, India</span>
                </div>
                <div>
                  <span className="text-[9px] tracking-[0.2em] uppercase font-semibold text-stone-400 block mb-1">Hours</span>
                  <span className="text-xs text-terrene-charcoal">Monday – Saturday: 11:00 AM – 8:00 PM</span>
                </div>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://maps.google.com/?q=Magari+Studio+Indore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-terrene-charcoal hover:bg-artisanal-sage text-bone-white text-center transition-colors duration-500 py-3.5 px-8 text-[10px] tracking-[0.2em] uppercase font-semibold inline-flex items-center justify-center gap-1.5"
                >
                  Get Directions
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/visit"
                  className="border border-stone-300 hover:border-terrene-charcoal text-center text-terrene-charcoal py-3.5 px-8 text-[10px] tracking-[0.2em] uppercase font-medium bg-transparent transition-colors duration-500 inline-flex items-center justify-center"
                >
                  Explore Studio
                </Link>
              </div>
            </div>

            {/* Media Block Column (Dynamic split display) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Studio Interior Image Card */}
              <div className="flex flex-col gap-4">
                <MotionWrapper className="group overflow-hidden border border-stone-200/40">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src="/images/studio/inside magari.jpg"
                      alt="Inside Magari Studio Sanctuary"
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                  </div>
                </MotionWrapper>
                <span className="text-[10px] tracking-widest uppercase text-stone-400 font-light italic">
                  Minimalist showroom interior
                </span>
              </div>

              {/* Atmospheric Outside Board Video Card */}
              <div className="flex flex-col gap-4 sm:mt-12">
                <MotionWrapper delay={0.2} className="group overflow-hidden border border-stone-200/40 bg-stone-900">
                  <div className="aspect-[3/4] overflow-hidden">
                    <video
                      src="/videos/magari board outside.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  </div>
                </MotionWrapper>
                <span className="text-[10px] tracking-widest uppercase text-stone-400 font-light italic">
                  Atelier storefront board
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 7. INSTAGRAM SECTION (Curated Muse Gallery) */}
      <section className="py-24 bg-bone-white text-terrene-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col items-center text-center mb-16 gap-3">
            <span className="text-[10px] tracking-[0.35em] uppercase text-raw-clay font-medium">
              Social Journal
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light italic tracking-wide">
              Magari Muses
            </h2>
            <p className="text-xs text-stone-500 font-light max-w-sm tracking-wider leading-relaxed mt-1">
              Curated styling and daily snapshots from our Instagram journal.
            </p>
          </div>

          {/* Curated Instagram grid using customer photos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            
            {/* Customer Image 1 */}
            <MotionWrapper className="group flex flex-col gap-3">
              <div className="relative aspect-[3/4] overflow-hidden border border-stone-200/40 bg-muted-alabaster">
                <img
                  src="/images/hero/customer2.jpg"
                  alt="Customer in Magari Studio Drape"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <a
                  href="https://instagram.com/magaristudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-stone-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10"
                >
                  <span className="text-bone-white text-[10px] tracking-[0.25em] uppercase border border-bone-white/40 py-2.5 px-6 bg-black/10 backdrop-blur-sm">
                    View Post
                  </span>
                </a>
              </div>
              <div className="flex justify-between items-center text-[10px] tracking-wider font-light text-stone-500">
                <span>The Organic Drape</span>
                <span className="text-raw-clay">@magaristudio</span>
              </div>
            </MotionWrapper>

            {/* Customer Image 2 */}
            <MotionWrapper delay={0.2} className="group flex flex-col gap-3">
              <div className="relative aspect-[3/4] overflow-hidden border border-stone-200/40 bg-muted-alabaster">
                <img
                  src="/images/hero/customer1.jpg"
                  alt="Customer styling Magari Silhouette"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <a
                  href="https://instagram.com/magaristudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-stone-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10"
                >
                  <span className="text-bone-white text-[10px] tracking-[0.25em] uppercase border border-bone-white/40 py-2.5 px-6 bg-black/10 backdrop-blur-sm">
                    View Post
                  </span>
                </a>
              </div>
              <div className="flex justify-between items-center text-[10px] tracking-wider font-light text-stone-500">
                <span>Linen Textures</span>
                <span className="text-raw-clay">@magaristudio</span>
              </div>
            </MotionWrapper>

            {/* Customer Image 3 */}
            <MotionWrapper delay={0.4} className="group flex flex-col gap-3">
              <div className="relative aspect-[3/4] overflow-hidden border border-stone-200/40 bg-muted-alabaster">
                <img
                  src="/images/hero/customer 3.jpg"
                  alt="Customer showcase"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <a
                  href="https://instagram.com/magaristudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-stone-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10"
                >
                  <span className="text-bone-white text-[10px] tracking-[0.25em] uppercase border border-bone-white/40 py-2.5 px-6 bg-black/10 backdrop-blur-sm">
                    View Post
                  </span>
                </a>
              </div>
              <div className="flex justify-between items-center text-[10px] tracking-wider font-light text-stone-500">
                <span>The Contemporary Muse</span>
                <span className="text-raw-clay">@magaristudio</span>
              </div>
            </MotionWrapper>

          </div>

          <div className="flex justify-center mt-16">
            <a
              href="https://instagram.com/magaristudio"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-stone-300 hover:border-terrene-charcoal py-3.5 px-8 text-[10px] tracking-[0.25em] uppercase font-semibold text-terrene-charcoal transition-colors duration-500 inline-flex items-center gap-1.5"
            >
              Follow Our Daily Musings
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
