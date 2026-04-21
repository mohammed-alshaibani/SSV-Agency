'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Users, Target, Zap } from 'lucide-react'

const features = [
  {
    icon: TrendingUp,
    title: 'نمو مستدام',
    description: 'نساعدك على تحقيق نمو حقيقي وقابل للقياس من خلال استراتيجيات مدروسة.',
  },
  {
    icon: Users,
    title: 'فريق متكامل',
    description: 'نعمل كامتداد لفريقك، نفهم أهدافك ونسعى لتحقيقها معك.',
  },
  {
    icon: Target,
    title: 'نتائج دقيقة',
    description: 'نركز على النتائج القابلة للقياس والتحسين المستمر.',
  },
  {
    icon: Zap,
    title: 'تنفيذ سريع',
    description: 'نحول الأفكار إلى واقع بسرعة وكفاءة عالية.',
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="bg-[#0F172A] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            <span className="inline-block text-[#0BAFB4] text-sm font-bold tracking-wider mb-4">
              من نحن
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#F8FAFC] leading-tight mb-6 text-balance">
              شريكك في رحلة النمو والتميز
            </h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
              نحن وكالة متخصصة في التسويق الرقمي والإنتاج المرئي، نعمل مع العلامات التجارية الطموحة
              لمساعدتها على تحقيق أهدافها. نؤمن بأن النجاح يبدأ من فهم عميق لاحتياجات عملائنا
              وتقديم حلول مبتكرة تحقق نتائج ملموسة.
            </p>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              من خلال فريقنا المتخصص وخبرتنا الممتدة، نقدم خدمات متكاملة تشمل الإنتاج المرئي،
              الموشن جرافيك، والتسويق الرقمي، كل ذلك تحت سقف واحد.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-[#1E293B] p-6 lg:p-8 rounded-xl shadow-xl shadow-black/20"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0F172A] flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#0BAFB4]" />
                </div>
                <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
