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
    <section ref={ref} className="bg-[#0F172A] py-16 border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-[#0BAFB4] text-sm font-bold tracking-wider uppercase">
            شركاؤنا في النجاح
          </span>
        </motion.div>
      </div>

      {/* Infinite Logo Marquee */}
      <div className="relative flex overflow-hidden">
        <div className="flex animate-infinite-scroll whitespace-nowrap py-4">
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex items-center justify-center min-w-[150px] md:min-w-[200px] px-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <img
                src={`/partners/${logo}`}
                alt="Partner Logo"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
