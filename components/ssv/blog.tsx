'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ArrowUpLeft, Calendar } from 'lucide-react'

const articles = [
  {
    src: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000',
    category: 'إنتاج',
    title: 'مستقبل الفيديو في العصر الرقمي',
    excerpt: 'كيف تغير تقنيات الذكاء الاصطناعي أساليب المونتاج الحديثة وتفتح آفاقاً جديدة للإبداع.',
    date: '15 أبريل 2026',
  },
  {
    src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071',
    category: 'إضاءة',
    title: 'فن الإضاءة السينمائية للمقابلات',
    excerpt: 'دليلك الكامل لتحقيق مظهر احترافي باستخدام ثلاث نقاط إضاءة فقط.',
    date: '10 أبريل 2026',
  },
  {
    src: 'https://images.unsplash.com/photo-1551817958-d9d86fb29431?q=80&w=2070',
    category: 'موشن جرافيك',
    title: 'أهمية الحركة في هوية العلامات',
    excerpt: 'لماذا أصبحت الهويات المتحركة ضرورة وليست رفاهية للشركات اليوم.',
    date: '5 أبريل 2026',
  },
]

export function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="blog" className="bg-[#0F172A] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <span className="inline-block text-[#0BAFB4] text-sm font-bold tracking-wider mb-4">
              المدونة
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#F8FAFC]">
              إلهام وأفكار
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-[#F8FAFC] font-medium hover:text-[#0BAFB4] transition-colors"
          >
            جميع المقالات
            <ArrowUpLeft className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Articles Grid - Swiss Style with Tonal Shifts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="group bg-[#1E293B] rounded-xl overflow-hidden cursor-pointer shadow-xl shadow-black/20"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <Image
                  src={article.src}
                  alt={article.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#0BAFB4] text-xs font-bold tracking-wider">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-[#94A3B8] text-xs">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#F8FAFC] mb-3 group-hover:text-[#0BAFB4] transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="text-[#94A3B8] text-sm leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile "View All" Link */}
        <a
          href="#"
          className="md:hidden flex items-center justify-center gap-2 text-[#F8FAFC] font-medium mt-8 hover:text-[#0BAFB4] transition-colors"
        >
          جميع المقالات
          <ArrowUpLeft className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
