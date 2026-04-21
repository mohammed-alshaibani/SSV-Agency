'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Video, Layers, Camera, Megaphone, PenTool, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Video,
    title: 'الإنتاج المرئي',
    description: 'إنتاج سينمائي احترافي يتجاوز التوقعات، من التصور الأولي وحتى اللمسات الأخيرة.',
  },
  {
    icon: Layers,
    title: 'موشن جرافيك و 3D',
    description: 'تحويل الأفكار المعقدة إلى حركات بصرية مبهرة وقصص تروى عبر التحريك.',
  },
  {
    icon: Camera,
    title: 'تصوير استوديو وإيفنتات',
    description: 'توثيق اللحظات بأسلوب عصري وتغطية احترافية لأهم الفعاليات التجارية.',
  },
  {
    icon: Megaphone,
    title: 'التسويق الرقمي',
    description: 'استراتيجيات تسويقية متكاملة تضمن وصولك لجمهورك المستهدف بفعالية.',
  },
  {
    icon: PenTool,
    title: 'الهوية البصرية',
    description: 'تصميم هويات بصرية متميزة تعكس قيم علامتك التجارية وتميزها.',
  },
  {
    icon: BarChart3,
    title: 'تحليل البيانات',
    description: 'تحليل شامل للأداء والبيانات لاتخاذ قرارات مبنية على أرقام حقيقية.',
  },
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
          className="text-center mb-16"
        >
          <span className="inline-block text-[#55D9DE] text-sm font-bold tracking-wider mb-4">
            خدماتنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#F8FAFC] mb-6">
            حلول متكاملة لنجاحك
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات المصممة لتحقيق أهدافك التسويقية
          </p>
        </motion.div>

        {/* Services Grid - Swiss Bento Style with Tonal Shifts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="group bg-[#1E293B] p-8 lg:p-10 rounded-xl cursor-pointer hover:bg-[#334155] transition-all duration-300 shadow-xl shadow-black/20"
            >
              <div className="w-14 h-14 rounded-lg bg-[#0F172A] flex items-center justify-center mb-6 group-hover:bg-[#55D9DE]/10 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-[#55D9DE]" />
              </div>

              <h3 className="text-xl font-bold text-[#F8FAFC] mb-3 group-hover:text-[#55D9DE] transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-[#94A3B8] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
