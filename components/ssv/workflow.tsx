'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const workflowSteps = [
  {
    number: '01',
    title: 'الاشتعال',
    description: 'نكتب أفكار إبداعية نوصل لها بعد مشوار طويل من البحث والتحليل والعصف الذهني!',
    color: '#0BAFB4',
  },
  {
    number: '02',
    title: 'التصور',
    description: 'نحول الفكرة الإبداعية المعتمدة إلى سيناريو وتصورات بصرية رهيبة تناسب علامتك.',
    color: '#55D9DE',
  },
  {
    number: '03',
    title: 'التنفيذ',
    description: 'ننتج وننفذ مخرجات الحملة من فيديوهات، تصاميم إبداعية، أو تفعيلات ميدانية.',
    color: '#0BAFB4',
  },
  {
    number: '04',
    title: 'الإدارة',
    description: 'ندير الحملة التسويقية ونتابع كل تفصيلة فيها، ونقدم تقارير دورية لعميلنا.',
    color: '#55D9DE',
  },
]

export function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  useGSAP(() => {
    if (!stepsRef.current) return

    const steps = gsap.utils.toArray('.workflow-step') as HTMLElement[]

    steps.forEach((step, index) => {
      gsap.fromTo(
        step,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="bg-[#0F172A] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[#0BAFB4] text-sm font-bold tracking-wider mb-4 uppercase">
            شلون يعني؟
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#F8FAFC] mb-8 text-balance">
            رحلتنا مع كل مشروع
          </h2>
          <p className="text-[#94A3B8] text-xl max-w-3xl mx-auto leading-relaxed">
            من الفكرة الأولى إلى التنفيذ النهائي، نرافقك في كل خطوة
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div ref={stepsRef} className="relative">
          {/* Connecting Line */}
          <div className="absolute top-0 bottom-0 right-1/2 lg:right-[calc(50%-1px)] w-0.5 bg-gradient-to-b from-[#0BAFB4]/50 via-[#55D9DE]/30 to-transparent hidden lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {workflowSteps.map((step, index) => (
              <div
                key={step.number}
                className={`workflow-step relative ${index % 2 === 0 ? 'lg:pr-[52%]' : 'lg:pl-[52%]'
                  }`}
              >
                {/* Step Number Badge - Center */}
                <div className="hidden lg:flex absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-black"
                    style={{ backgroundColor: step.color, color: '#0F172A' }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0BAFB4]/10 to-[#55D9DE]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-[#1E293B]/80 backdrop-blur-xl p-8 lg:p-10 rounded-2xl border border-white/5 group-hover:border-[#0BAFB4]/20 transition-all duration-500">
                    {/* Mobile Number */}
                    <div
                      className="lg:hidden w-12 h-12 rounded-full flex items-center justify-center text-base font-black mb-6"
                      style={{ backgroundColor: step.color, color: '#0F172A' }}
                    >
                      {step.number}
                    </div>

                    <h3
                      className="text-2xl lg:text-3xl font-black mb-4"
                      style={{ color: step.color }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[#94A3B8] text-lg leading-relaxed">
                      {step.description}
                    </p>

                    {/* Floating accent */}
                    <motion.div
                      className="absolute -top-3 -left-3 w-6 h-6 rounded-full opacity-30"
                      style={{ backgroundColor: step.color }}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
