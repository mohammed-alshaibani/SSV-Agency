'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'أحمد العتيبي',
    role: 'رئيس تنفيذي، شركة ريادة',
    content: 'تجربة استثنائية مع فريق SSV. حولوا رؤيتنا الرقمية إلى واقع ملموس وفاقوا توقعاتنا في النتائج.',
    rating: 5
  },
  {
    name: 'سارة القحطاني',
    role: 'مديرة تسويق، ريف العالمية',
    content: 'الالتزام بالمواعيد والجودة العالية في التنفيذ هو ما يميزهم. شريك موثوق للنجاح المسستمر.',
    rating: 5
  },
  {
    name: 'محمد الدوسري',
    role: 'مؤسس ستارت أب إكس',
    content: 'خبرة واسعة في تحليل السوق وبناء الاستراتيجيات. زادت مبيعاتنا بنسبة 40% بعد التعاون معهم.',
    rating: 5
  }
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="bg-[#0F172A] py-24 relative overflow-hidden">
      {/* Subtle gradient borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background decorations */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#0BAFB4]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#0BAFB4] text-sm font-bold tracking-wider mb-4 block uppercase leading-none">
            أراء العملاء
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#F8FAFC]">
            قصص نجاح شركائنا
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#0BAFB4]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-[#1E293B]/60 backdrop-blur-xl p-8 rounded-2xl border border-white/5 group-hover:border-[#0BAFB4]/20 transition-all duration-500">
                <Quote className="absolute top-6 left-6 w-10 h-10 text-white/5 group-hover:text-[#0BAFB4]/10 transition-colors duration-500" />

                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#0BAFB4] text-[#0BAFB4]" />
                  ))}
                </div>

                <p className="text-[#94A3B8] text-base leading-relaxed mb-8 group-hover:text-[#B4C6D4] transition-colors">
                  &quot;{review.content}&quot;
                </p>

                <div>
                  <h4 className="text-[#F8FAFC] font-bold text-lg group-hover:text-white transition-colors">{review.name}</h4>
                  <p className="text-[#0BAFB4] text-sm">{review.role}</p>
                </div>

                {/* Floating accent */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#0BAFB4]"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
