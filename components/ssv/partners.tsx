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

      {/* Premium Infinite Marquee */}
      <div className="relative overflow-hidden py-16 bg-[#1F3C64]">
        <div className="flex animate-infinite-scroll whitespace-nowrap gap-24 w-max">
          {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex items-center justify-center transition-all duration-700 ease-in-out cursor-pointer hover:scale-110 px-4"
            >
              <img
                src={`/partners/${logo}`}
                alt={`Partner`}
                className="h-16 md:h-20 w-auto object-contain filter invert brightness-[2] opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
