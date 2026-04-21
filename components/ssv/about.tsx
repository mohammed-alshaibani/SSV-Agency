'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Users, Target, Zap, Sparkles, Globe } from 'lucide-react'

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
    <section id="about" className="bg-[#0F172A] py-24 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0BAFB4]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1F3C64]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-[#0BAFB4] text-sm font-bold tracking-wider mb-4 px-4 py-2 rounded-full bg-[#0BAFB4]/10">
              <Sparkles className="w-4 h-4" />
              من نحن
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#F8FAFC] leading-tight mb-6 text-balance">
              شريكك في رحلة النمو والتميز
            </h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
              نحن وكالة متخصصة في التسويق الرقمي والإنتاج المرئي، نعمل مع العلامات التجارية الطموحة
              لمساعدتها على تحقيق أهدافها. نؤمن بأن النجاح يبدأ من فهم عميق لاحتياجات عملائنا
              وتقديم حلول مبتكرة تحقق نتائج ملموسة.
            </p>
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
              من خلال فريقنا المتخصص وخبرتنا الممتدة، نقدم خدمات متكاملة تشمل الإنتاج المرئي،
              الموشن جرافيك، والتسويق الرقمي، كل ذلك تحت سقف واحد.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {[
                { value: '+50', label: 'عميل سعيد' },
                { value: '+200', label: 'مشروع منجز' },
                { value: '+5', label: 'سنوات خبرة' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-black text-[#0BAFB4] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#94A3B8]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-4 lg:gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#0BAFB4]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-[#1E293B]/60 backdrop-blur-xl p-6 lg:p-8 rounded-2xl border border-white/5 group-hover:border-[#0BAFB4]/20 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-[#0F172A] flex items-center justify-center mb-4 group-hover:bg-[#0BAFB4]/10 transition-colors duration-500">
                    <feature.icon className="w-6 h-6 text-[#0BAFB4]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed group-hover:text-[#B4C6D4] transition-colors">
                    {feature.description}
                  </p>

                  {/* Floating accent */}
                  <motion.div
                    className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-[#0BAFB4]"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
