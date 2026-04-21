'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

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
    <section ref={ref} className="bg-[#0F172A] py-20 overflow-hidden relative">
      {/* Subtle gradient borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-[#0BAFB4] text-sm font-bold tracking-wider uppercase">
            شركاء SSV
          </span>
          <p className="text-[#94A3B8] text-sm mt-2">
            نفتخر بثقة عملائنا ونعمل معهم كشركاء نجاح
          </p>
        </motion.div>
      </div>

      {/* Infinite Logo Marquee */}
      <div className="relative flex overflow-hidden">
        {/* Gradient masks */}
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0F172A] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0F172A] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-infinite-scroll whitespace-nowrap py-6">
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex items-center justify-center min-w-[140px] md:min-w-[180px] px-6 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <img
                src={`/partners/${logo}`}
                alt="Partner Logo"
                className="h-10 md:h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
