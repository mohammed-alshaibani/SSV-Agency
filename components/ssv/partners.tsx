'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const partnerLogos = [
  'bnm.png', 'bvdfgh.png', 'cvbnm.png', 'cvgy.png', 'dfgHJ.png',
  'dfgh.png', 'dfghertyu.png', 'ertyu.png', 'ertyui.png', 'fg.png',
  'fghjkl.png', 'iuytrew.png', 'jhgf.png', 'kjhgnbv.png', 'lkjhg.png',
  'nbv.png', 'oiouy.png', 'oiuytdfghj.png', 'qwert.png', 'qwertasdf.png',
  'rtyu.png', 'rtyui.png', 'sxcvb.png', 'tyui.png', 'tyuio.png',
  'uiop.png', 'wert.png', 'werty.png', 'xcvbnm.png', 'yuio.png'
]

export function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} id="partners" className="bg-[#1F3C64] py-24 lg:py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[#0BAFB4] text-xs font-black tracking-[0.5em] uppercase mb-6 block opacity-60">
            Global Recognition
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#E7F7F8] tracking-tighter drop-shadow-2xl">
            ثقة تجتاز الحدود
          </h2>
        </motion.div>
      </div>

      {/* Premium Glassmorphic Marquee */}
      <div
        className="relative overflow-hidden py-24 bg-[#1F3C64]"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <div className="flex flex-nowrap w-max animate-marquee">
          {/* Group 1: 30 Logos */}
          <div className="flex shrink-0 items-center gap-12 px-6">
            {partnerLogos.map((logo, index) => (
              <div key={`g1-${logo}-${index}`} className="flex-shrink-0 p-6">
                <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:bg-white/20 transition-all duration-500 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl" />
                  <img
                    src={`/partners/${logo}`}
                    alt={`${logo}`}
                    className="h-16 md:h-20 w-auto object-contain relative z-10 filter invert brightness-[2] drop-shadow-[0_0_15px_rgba(231,247,248,0.2)] transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-black/20 blur-md rounded-full opacity-50" />
                </div>
              </div>
            ))}
          </div>

          {/* Group 2: Exact Duplicate for Seamless Loop */}
          <div className="flex shrink-0 items-center gap-12 px-6">
            {partnerLogos.map((logo, index) => (
              <div key={`g2-${logo}-${index}`} className="flex-shrink-0 p-6">
                <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:bg-white/20 transition-all duration-500 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl" />
                  <img
                    src={`/partners/${logo}`}
                    alt={`${logo}`}
                    className="h-16 md:h-20 w-auto object-contain relative z-10 filter invert brightness-[2] drop-shadow-[0_0_15px_rgba(231,247,248,0.2)] transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-black/20 blur-md rounded-full opacity-50" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
