'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { Play, ArrowUpLeft } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070',
    title: 'أول طموحاتنا',
    category: 'إنتاج مرئي',
    description: 'حملة إعلانية متكاملة',
  },
  {
    src: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000',
    title: 'عزاوي',
    category: 'موشن جرافيك',
    description: 'هوية بصرية متحركة',
  },
  {
    src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071',
    title: 'ريادة ممتدة',
    category: 'تصوير تجاري',
    description: 'فيلم وثائقي قصير',
  },
]

export function Portfolio() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section ref={containerRef} id="portfolio" className="bg-[#0F172A] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#0BAFB4] text-sm font-bold tracking-wider mb-4 uppercase">
            شف أعمالنا
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#F8FAFC] mb-8">
            مشاريع نفخر بها
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#0BAFB4]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-[#1E293B]/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/5 group-hover:border-[#0BAFB4]/20 transition-all duration-500">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-xl flex items-center justify-center cursor-pointer"
                    >
                      <Play className="w-6 h-6 text-[#0F172A] fill-current mr-[-2px]" />
                    </motion.div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-[#0BAFB4]/20 backdrop-blur-xl text-[#0BAFB4] text-xs font-bold">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-2 group-hover:text-[#0BAFB4] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#94A3B8] text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#0BAFB4] font-bold text-sm group-hover:gap-4 transition-all">
                    شاهد المشروع
                    <ArrowUpLeft className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-white font-bold hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            شاهد جميع الأعمال
            <span className="mr-2 text-[#0BAFB4]">←</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
