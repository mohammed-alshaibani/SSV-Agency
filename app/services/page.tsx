'use client'

import { Header } from '@/components/ssv/header'
import { Footer } from '@/components/ssv/footer'
import { WhatsAppButton } from '@/components/ssv/whatsapp-button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Rocket,
  Video,
  Share2,
  BarChart3,
  Palette,
  Globe,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: 'الاستراتيجية',
    arabicTitle: 'Strategy',
    description: 'تحليل السوق، تحديد الجمهور، وبناء خطة تسويقية واضحة لضمان انطلاقة قوية وتواجد مؤثر.',
    icon: Rocket,
    features: ['تحليل السوق', 'تحديد الجمهور', 'بناء خطة تسويقية واضحة'],
  },
  {
    title: 'التنفيذ',
    arabicTitle: 'Support',
    description: 'فريق متكامل يدير العمليات بدءاً من إدارة السوشيال ميديا وتصميم الهوية والمحتوى، وحتى إطلاق الحملات الإعلانية وتطوير المواقع والمتاجر.',
    icon: Palette,
    features: ['إدارة السوشيال ميديا', 'تصميم الهوية والمحتوى', 'الحملات الإعلانية', 'المواقع والمتاجر'],
  },
  {
    title: 'القياس والتطوير',
    arabicTitle: 'Value',
    description: 'نتتبع نجاحك بشكل متواصل لنضمن تحقيق أفضل أداء مالي وتطور مستدام عبر تقارير دورية.',
    icon: BarChart3,
    features: ['تحليل الأداء', 'تقارير دورية', 'تحسين مستمر', 'زيادة العائد على الاستثمار'],
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#1F3C64] font-tajawal">
      <Header />

      {/* ── Page Hero ── */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-[#0BAFB4]/10 rounded-full blur-[150px] animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#0BAFB4] text-xs font-black tracking-[0.5em] uppercase mb-4 block">
              What We Do
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-[#E7F7F8] tracking-tighter mb-8 leading-none">
              خدمات تصنع <br /> <span className="text-[#0BAFB4]">فرقاً حقيقياً</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#E7F7F8] max-w-4xl mx-auto font-medium leading-relaxed">
              نقدم حلولاً تسويقية وإبداعية متكاملة مصممة خصيصاً لتسريع نمو علامتك التجارية في السوق السعودي والخليجي.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-20 lg:py-40 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative h-full"
              >
                <div className="h-full bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 flex flex-col transition-all duration-700 hover:bg-white/[0.04] hover:border-[#0BAFB4]/20 hover:-translate-y-2 group">
                  <div className="mb-10 relative">
                    <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center relative z-10 overflow-hidden group-hover:bg-[#0BAFB4]/20 transition-colors duration-500">
                      <service.icon className="w-10 h-10 text-[#0BAFB4] group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    {/* Shadow Decor */}
                    <div className="absolute top-0 left-0 w-20 h-20 bg-[#0BAFB4]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="flex-grow">
                    <span className="text-[#0BAFB4]/60 text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">{service.arabicTitle}</span>
                    <h3 className="text-3xl font-black text-[#E7F7F8] mb-6 tracking-tight group-hover:text-[#0BAFB4] transition-colors">{service.title}</h3>
                    <p className="text-[#E7F7F8] text-lg leading-relaxed mb-10 opacity-80 group-hover:opacity-100 transition-opacity">
                      {service.description}
                    </p>

                    <ul className="space-y-4 mb-10">
                      {service.features.map(feature => (
                        <li key={feature} className="flex items-center gap-3 text-[#E7F7F8] font-bold text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#0BAFB4]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/services/${service.title}`}
                    className="flex items-center gap-4 text-[#E7F7F8] font-black text-sm group-hover:gap-6 transition-all"
                  >
                    <span>استكشف المزيد</span>
                    <ArrowRight className="w-5 h-5 text-[#0BAFB4] -rotate-135" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      <Footer />
      <WhatsAppButton />
    </main>
  )
}
