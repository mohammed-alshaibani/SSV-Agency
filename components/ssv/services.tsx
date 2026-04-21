'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Video, Layers, Camera, Megaphone, PenTool, BarChart3 } from 'lucide-react'

const servicePillars = [
  {
    id: 'strategy',
    icon: BarChart3,
    title: 'الاستراتيجية (Strategy)',
    description: 'بناء خارطة طريق واضحة لنمو علامتك التجارية.',
    details: [
      'تحليل السوق',
      'تحديد الجمهور',
      'بناء خطة تسويقية واضحة'
    ]
  },
  {
    id: 'support',
    icon: Layers,
    title: 'التنفيذ (Support)',
    description: 'تحويل الخطط إلى واقع ملموس عبر فريق إبداعي.',
    details: [
      'إدارة السوشيال ميديا',
      'تصميم الهوية والمحتوى',
      'الحملات الإعلانية',
      'المواقع والمتاجر'
    ]
  },
  {
    id: 'value',
    icon: PenTool,
    title: 'القياس والتطوير (Value)',
    description: 'تحسين مستمر لضمان أعلى عائد على الاستثمار.',
    details: [
      'تحليل الأداء',
      'تقارير دورية',
      'تحسين مستمر',
      'زيادة العائد على الاستثمار'
    ]
  }
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="services" className="bg-[#0F172A] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[#0BAFB4] text-sm font-bold tracking-wider mb-4 uppercase">
            خدمات الشركة
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#F8FAFC] mb-8">
            3 محاور رئيسية لنمو مبيعاتك
          </h2>
          <p className="text-[#94A3B8] text-xl max-w-3xl mx-auto leading-relaxed">
            نحن لا نقدم مجرد خدمات، نحن نصمم رحلة شاملة تبدأ بالاستراتيجية وتنتهي بالقيمة المضافة.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicePillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 1, 0.5, 1],
              }}
              onClick={() => window.location.href = `/services/${pillar.id}`}
              className="group bg-[#1E293B] p-10 rounded-3xl cursor-pointer hover:bg-[#1F3C64] transition-all duration-500 border border-white/5 hover:border-[#0BAFB4]/30 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0BAFB4]/10 rounded-full blur-3xl group-hover:bg-[#0BAFB4]/20 transition-colors duration-500" />

              <div className="w-16 h-16 rounded-2xl bg-[#0F172A] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <pillar.icon className="w-8 h-8 text-[#0BAFB4]" />
              </div>

              <h3 className="text-2xl font-black text-[#F8FAFC] mb-6">
                {pillar.title}
              </h3>

              <ul className="space-y-4 mb-8">
                {pillar.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#94A3B8] group-hover:text-white/80 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0BAFB4]" />
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 text-[#0BAFB4] font-bold group-hover:gap-4 transition-all">
                اقرأ المزيد
                <span className="text-xl">←</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
