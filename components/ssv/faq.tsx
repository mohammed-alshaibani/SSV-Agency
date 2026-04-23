'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'ما هي مدة تنفيذ مشروع الفيديو؟',
    answer: 'تختلف المدة بناءً على طبيعة المشروع وتعقيده. عادةً ما تتراوح مدة الإنتاج بين أسبوعين إلى شهر للمشاريع المتوسطة، بينما قد تستغرق المشاريع الكبيرة وقتًا أطول.',
  },
  {
    question: 'هل توفرون تصوير خارج الاستوديو؟',
    answer: 'نعم، لدينا فرق متخصصة للتصوير الخارجي وتغطية الفعاليات في كافة أنحاء المملكة بمعدات احترافية متكاملة.',
  },
  {
    question: 'ما هي أسعار خدماتكم؟',
    answer: 'نقدم عروض أسعار مخصصة بناءً على متطلبات كل مشروع. تواصل معنا لنناقش احتياجاتك ونقدم لك عرضًا مناسبًا.',
  },
  {
    question: 'هل تقدمون خدمات ما بعد الإنتاج؟',
    answer: 'نعم، نقدم خدمات شاملة تشمل المونتاج، تصحيح الألوان، المؤثرات البصرية، التصميم الصوتي، والموشن جرافيك.',
  },
]

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section ref={ref} className="bg-[#1F3C64] py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#0BAFB4] text-sm font-bold tracking-wider mb-4">
            الأسئلة الشائعة
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#E7F7F8]">
            إجابات على تساؤلاتك
          </h2>
        </motion.div>

        {/* FAQ List - Swiss Clean Style with Tonal Depth */}
        <div className="bg-[#1F3C64] rounded-xl overflow-hidden shadow-2xl shadow-black/40">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const isLast = index === faqs.length - 1

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className={`${!isLast ? 'border-b border-white/5' : ''}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 flex justify-between items-center gap-4 text-right hover:bg-white/5 transition-colors"
                >
                  <h4 className={`font-bold text-lg transition-colors duration-300 ${isOpen ? 'text-[#0BAFB4]' : 'text-[#E7F7F8]'
                    }`}>
                    {faq.question}
                  </h4>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isOpen ? 'bg-[#0BAFB4] text-[#E7F7F8]' : 'bg-[#1F3C64] text-[#E7F7F8]'
                    }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-[#E7F7F8] leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
