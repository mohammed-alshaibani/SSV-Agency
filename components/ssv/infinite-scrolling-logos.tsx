'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const LOGOS = [
  'bnm', 'bvdfgh', 'cvbnm', 'cvgy', 'dfgHJ', 'dfgh',
  'dfghertyu', 'ertyu', 'ertyui', 'fg', 'fghjkl', 'iuytrew',
  'jhgf', 'kjhgnbv', 'lkjhg', 'nbv', 'oiouy', 'oiuytdfghj',
  'qwert', 'qwertasdf', 'rtyu', 'rtyui', 'sxcvb', 'tyui',
  'tyuio', 'uiop', 'wert', 'werty', 'xcvbnm', 'yuio',
]

// Triple the logos to ensure the track is long enough and seamless
const TRACK = [...LOGOS, ...LOGOS, ...LOGOS]

export function InfiniteScrollingLogos() {
  return (
    <section className="relative w-full overflow-hidden py-24 bg-[#1F3C64] border-y border-white/5">
      {/* ── Section Title (Matching Testimonials Style) ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 text-center">
        <span className="text-[#0BAFB4] text-sm font-bold tracking-wider mb-4 block uppercase leading-none font-sans">
          ثقة متبادلة
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#F8FAFC] font-sans">
          شركاؤنا الاستراتيجيون
        </h2>
      </div>

      {/* ── Gradient Overlays (Adapted for darker BG) ── */}
      <div className="absolute inset-y-0 left-0 w-32 sm:w-64 bg-gradient-to-r from-[#1F3C64] via-[#1F3C64]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 sm:w-64 bg-gradient-to-l from-[#1F3C64] via-[#1F3C64]/80 to-transparent z-10 pointer-events-none" />

      {/* ── Framer Motion Marquee ── */}
      <div className="flex w-full overflow-hidden" style={{ direction: 'ltr' }}>
        <motion.div
           className="flex items-center gap-16 sm:gap-32 px-10 sm:px-20"
           animate={{
             x: [0, "-33.33%"],
           }}
           transition={{
             x: {
               repeat: Infinity,
               repeatType: "loop",
               duration: 60,
               ease: "linear",
             },
           }}
           style={{ width: 'max-content' }}
        >
          {TRACK.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="relative flex-shrink-0 w-[200px] h-[80px] sm:w-[280px] sm:h-[100px] flex items-center justify-center p-2"
            >
              <Image
                src={`/partners/${name}.png`}
                alt={`Partner Logo ${name}`}
                fill
                className="object-contain"
                style={{
                  filter: 'brightness(0) invert(1)',
                  opacity: 0.95
                }}
                sizes="(max-width: 768px) 200px, 280px"
                priority={i < 15}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
