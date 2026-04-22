'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Rocket, TrendingUp, Building2, Target } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'الشركات الناشئة',
    description: 'لبناء انطلاقة قوية وتأسيس حضور مؤثر في السوق من اليوم الأول.',
  },
  {
    icon: TrendingUp,
    title: 'الشركات المتوسطة',
    description: 'للتوسع وزيادة الحصة السوقية واستهداف شرائح جديدة من العملاء.',
  },
  {
    icon: Building2,
    title: 'الشركات الكبيرة',
    description: 'لتطوير الأداء وتعزيز التمركز الاستراتيجي في المشهد التنافسي.',
  },
  {
    icon: Target,
    title: 'حلول بالنتائج',
    description: 'نعتمد على الأرقام والتحليل وليس التخمين، بتركيز على النتائج الملموسة.',
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20%' })

  return (
    <section id="about" className="bg-[#1F3C64] py-32 lg:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="flex flex-col items-center text-center mb-32">
          {/* Main Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <span className="inline-block text-[#0BAFB4] text-xs font-black tracking-[0.6em] uppercase mb-12 opacity-60">
              Company Overview
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#E7F7F8] leading-[1.1] mb-12 tracking-tighter">
              SSV = تخطيط + تنفيذ + قياس = <span className="text-[#0BAFB4]">نمو حقيقي</span>
            </h2>
            <div className="flex flex-col gap-8 max-w-4xl mx-auto">
              <p className="text-[#94A3B8] text-xl md:text-2xl leading-relaxed font-medium opacity-80">
                شركة SSV (Strategy, Support, Value) هي شركة متخصصة في تقديم حلول تسويقية متكاملة، تعمل كـ ذراع التسويق الداخلي للشركات، حيث لا تكتفي بوضع الاستراتيجيات فقط، بل تقوم بتنفيذها وقياس نتائجها لتحقيق نمو حقيقي ومستدام للأعمال.
              </p>
              <p className="text-[#94A3B8] text-xl md:text-2xl leading-relaxed font-medium opacity-80">
                تعتمد الشركة على منهجية واضحة تبدأ من فهم عميق للسوق والعملاء، ثم بناء استراتيجية تسويقية مخصصة، وتنفيذها بشكل عملي، مع متابعة الأداء وتحسين النتائج بشكل مستمر لضمان تحقيق أفضل عائد على الاستثمار.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Staggered Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#E7F7F8]/5 backdrop-blur-3xl border border-[#E7F7F8]/5 p-10 rounded-[2.5rem] hover:bg-[#E7F7F8]/10 transition-colors duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#0BAFB4]/10 flex items-center justify-center mb-8 group-hover:bg-[#0BAFB4] transition-colors duration-500">
                <feature.icon className="w-8 h-8 text-[#0BAFB4] group-hover:text-[#1F3C64] transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-black text-[#E7F7F8] mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-[#94A3B8] leading-relaxed font-medium">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
