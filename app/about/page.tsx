'use client'

import { Header } from '@/components/ssv/header'
import { Footer } from '@/components/ssv/footer'
import { WhatsAppButton } from '@/components/ssv/whatsapp-button'
import { motion } from 'framer-motion'
import { Target, Users, Lightbulb, Trophy, ArrowRight, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const values = [
  {
    title: 'الإبداع بلا حدود',
    description: 'نحن لا نتبع القواعد التقليدية، بل نعيد كتابتها بما يتناسب مع روح علامتك التجارية.',
    icon: Lightbulb
  },
  {
    title: 'الشفافية المطلقة',
    description: 'نؤمن أن الثقة هي أساس النجاح، لذا نشاركك كل تفصيل في رحلة العمل والبيانات.',
    icon: Users
  },
  {
    title: 'شغف بالنتائج',
    description: 'الجمال وحده لا يكفي، نحن مهووسون بتحويل التصاميم إلى أرقام ونمو حقيقي.',
    icon: Trophy
  },
  {
    title: 'الإنسان أولاً',
    description: 'خلف كل شاشة هناك إنسان، لذا نبني تجاربنا لتمس المشاعر وتلبي الاحتياجات.',
    icon: Heart
  }
]

const stats = [
  { label: 'عام من الشغف', value: '5+' },
  { label: 'مشروع ناجح', value: '150+' },
  { label: 'علامة تجارية وثقت بنا', value: '80+' },
  { label: 'مبدع في فريقنا', value: '25+' }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#1F3C64] font-tajawal">
      <Header />

      {/* ── Page Hero ── */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] bg-[radial-gradient(#0BAFB4_1px,transparent_1px)] [background-size:60px_60px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#0BAFB4] text-xs font-black tracking-[0.5em] mb-4 block">
                Who We Are
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-[#E7F7F8] tracking-tighter mb-8 leading-[1.1]">
                نحن لسنا مجرد وكالة.. <br /> نحن <span className="text-[#0BAFB4]">شريكك في النمو</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#E7F7F8] font-medium leading-relaxed mb-10">
                في SSV، نؤمن أن التسويق ليس مجرد إعلانات، بل هو فن صناعة القيمة وبناء الروابط المستدامة بين العلامة التجارية وجمهورها.
              </p>

              <div className="grid grid-cols-2 gap-8 py-8 border-t border-white/5">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-4xl font-black text-[#0BAFB4] mb-1">{stat.value}</div>
                    <div className="text-[#E7F7F8] text-sm font-bold uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square rounded-[3.5rem] overflow-hidden group"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                alt="SSV Team"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[3s]"
              />
              <div className="absolute inset-0 bg-[#1F3C64]/20 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-24 lg:py-40 bg-[#1F3C64]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="p-12 rounded-[3rem] bg-white/5 border border-white/10 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0BAFB4]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Target className="w-16 h-16 text-[#0BAFB4] mb-8" />
              <h3 className="text-3xl font-black text-white mb-6">رؤيتنا</h3>
              <p className="text-[#E7F7F8] text-xl leading-relaxed font-medium">
                أن نكون الشريك التقني والإبداعي الأول في المنطقة، مساهمين في تحويل الشركات المحلية إلى علامات تجارية عالمية عبر الحلول الرقمية المبتكرة.
              </p>
            </div>

            <div className="p-12 rounded-[3rem] bg-white/5 border border-white/10 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0BAFB4]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Lightbulb className="w-16 h-16 text-[#0BAFB4] mb-8" />
              <h3 className="text-3xl font-black text-white mb-6">رسالتنا</h3>
              <p className="text-[#E7F7F8] text-xl leading-relaxed font-medium">
                تمكين رواد الأعمال والشركات من الوصول إلى جمهورهم بذكاء وإبداع، عبر دمج الخبرة التسويقية العمياء بالتقنيات الحديثة لتحقيق نمو مستدام.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values Grid ── */}
      <section className="py-24 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-[#0BAFB4] text-xs font-black tracking-[0.5em] mb-4 block uppercase opacity-60">Core Values</span>
          <h2 className="text-4xl md:text-7xl font-black text-[#E7F7F8] tracking-tighter mb-20 leading-none">
            المبادئ التي <br /> <span className="text-[#0BAFB4]">تحركنا</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-right">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group"
              >
                <v.icon className="w-12 h-12 text-[#0BAFB4] mb-8 group-hover:scale-110 transition-transform" />
                <h4 className="text-[#E7F7F8] text-2xl font-black mb-4">{v.title}</h4>
                <p className="text-[#E7F7F8] leading-relaxed font-medium">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Culture Intro ── */}
      <section className="py-24 lg:py-40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white/5 p-16 md:p-24 rounded-[4rem] text-center relative overflow-hidden border border-white/5">
            <div className="relative z-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 bg-[#0BAFB4] text-white px-12 py-6 rounded-2xl text-xl font-black shadow-2xl hover:scale-105 transition-all"
              >
                ابدأ رحلتك معنا
                <ArrowRight className="w-6 h-6 -rotate-45" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
