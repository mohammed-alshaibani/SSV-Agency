'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const partners = [
  { name: 'Partner 1', color: '#0F172A' },
  { name: 'Partner 2', color: '#334155' },
  { name: 'Partner 3', color: '#475569' },
  { name: 'Partner 4', color: '#64748B' },
  { name: 'Partner 5', color: '#0F172A' },
  { name: 'Partner 6', color: '#334155' },
]

export function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="bg-[#0F172A] py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#94A3B8] text-sm font-medium tracking-wider">
            شركاؤنا في النجاح
          </span>
        </motion.div>

        {/* Swiss Grid Logo Layout with Dark Surfaces */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1E293B] p-8 flex items-center justify-center group cursor-pointer hover:bg-[#334155] rounded-xl transition-all duration-300 shadow-lg shadow-black/20"
            >
              <div
                className="text-2xl font-black tracking-tighter opacity-10 group-hover:opacity-100 group-hover:text-[#55D9DE] transition-all duration-300"
                style={{ color: '#F8FAFC' }}
              >
                LOGO
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
