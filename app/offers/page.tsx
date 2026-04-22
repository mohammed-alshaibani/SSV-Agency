'use client'

import { Header } from '@/components/ssv/header'
import { Footer } from '@/components/ssv/footer'
import { WhatsAppButton } from '@/components/ssv/whatsapp-button'
import { motion } from 'framer-motion'
import { Check, X, Zap, Crown, Rocket, Star, ShieldCheck, Clock } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: 'الباقة التأسيسية',
    en: 'Startup Plan',
    price: '4,900',
    duration: 'شهرياً',
    description: 'مثالية للشركات الناشئة التي تسعى لبناء حضور رقمي قوي واحترافي من البداية.',
    icon: Rocket,
    features: [
      'إدارة منصتين للتواصل الاجتماعي',
      '8 تصاميم إبداعية شهرياً',
      'إدارة حملات ممولة (ميزانية محدودة)',
      'تقارير أداء شهرية مبسطة',
      'دعم فني عبر الواتساب'
    ],
    notIncluded: [
      'إنتاج فيديوهات احترافية',
      'تحسين محركات البحث SEO',
      'تصوير فوتوغرافي ميداني'
    ],
    highlight: false
  },
  {
    name: 'باقة نمو SSV',
    en: 'Growth Specialist',
    price: '9,500',
    duration: 'شهرياً',
    description: 'الباقة الأكثر طلباً للشركات المتوسطة التي تطمح لسيطرة أكبر على السوق وزيادة المبيعات.',
    icon: Zap,
    features: [
      'إدارة 4 منصات للتواصل الاجتماعي',
      '15 تصميم إبداعي شهرياً',
      'فيديو موشن جرافيك واحد (15 ثانية)',
      'إدارة حملات ممولة متقدمة',
      'تحسين كفاءة محركات البحث (SEO)',
      'تقارير أداء تفصيلية كل أسبوعين'
    ],
    notIncluded: [
      'تصوير فوتوغرافي ميداني (شهري)'
    ],
    highlight: true
  },
  {
    name: 'باقة النخبة الشاملة',
    en: 'Elite Enterprise',
    price: '18,000',
    duration: 'شهرياً',
    description: 'حل متكامل لإدارة كافة تفاصيل علامتك التجارية بلمسات إبداعية واستراتيجية عالمية.',
    icon: Crown,
    features: [
      'إدارة كافة منصات التواصل',
      'محتوى إبداعي غير محدود',
      '2 فيديو (موشن أو تصوير سينمائي)',
      'حملات إعلانية ذكية (نظام التحطيم)',
      'تصوير فوتوغرافي ميداني دوري',
      'مدير حساب مخصص 24/7',
      'استراتيجية نمو سنوية مطورة'
    ],
    notIncluded: [],
    highlight: false
  }
]

export default function OffersPage() {
  return (
    <main className="min-h-screen bg-[#0F172A] font-tajawal">
      <Header />

      {/* ── Page Hero ── */}
      <section className="relative pt-40 pb-20 overflow-hidden text-center">
        <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-20">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0BAFB4]/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1F3C64]/20 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 bg-[#0BAFB4]/10 border border-[#0BAFB4]/20 px-6 py-2 rounded-full mb-8">
                <Clock className="w-4 h-4 text-[#0BAFB4] animate-pulse" />
                <span className="text-[#0BAFB4] text-xs font-black uppercase tracking-widest">عروض محدودة لفترة الربيع</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-[#F8FAFC] tracking-tighter mb-8 leading-none">
              استثمر بذكاء.. <br /> اختر <span className="text-[#0BAFB4]">باقتك المثالية</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#94A3B8] max-w-4xl mx-auto font-medium leading-relaxed">
              لقد قمنا بتصميم باقاتنا لتناسب مختلف أحجام الأعمال، لضمان حصولك على أقصى قيمة مقابل استثمارك التسويقي.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Pricing Tiers ── */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col p-10 rounded-[3rem] border transition-all duration-500 overflow-hidden group ${
                    plan.highlight 
                    ? 'bg-[#1F3C64] border-[#0BAFB4] shadow-[0_20px_50px_rgba(11,175,180,0.2)] scale-105 z-10' 
                    : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04]'
                }`}
              >
                {plan.highlight && (
                    <div className="absolute top-0 right-0 left-0 bg-[#0BAFB4] text-[#0F172A] text-center py-2 text-xs font-black tracking-widest uppercase">
                        الأكثر توصية
                    </div>
                )}

                <div className="mb-10">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${plan.highlight ? 'bg-[#0BAFB4] text-[#1F3C64]' : 'bg-white/5 text-[#0BAFB4]'}`}>
                        <plan.icon size={32} strokeWidth={2.5} />
                    </div>
                    <div className="mb-2">
                        <span className="text-[#0BAFB4]/60 text-[10px] font-black uppercase tracking-widest">{plan.en}</span>
                        <h3 className="text-3xl font-black text-white leading-none mt-1">{plan.name}</h3>
                    </div>
                </div>

                <div className="mb-10 flex items-baseline gap-2">
                    <span className="text-5xl font-black text-white">{plan.price}</span>
                    <span className="text-[#94A3B8] font-bold text-lg">ريال / {plan.duration}</span>
                </div>

                <p className="text-[#94A3B8] text-sm leading-relaxed mb-10 opacity-80 h-12">
                    {plan.description}
                </p>

                <div className="flex-grow">
                    <div className="text-white font-black text-sm uppercase tracking-widest mb-6 opacity-30">ماذا ستحصل:</div>
                    <ul className="space-y-4 mb-10">
                        {plan.features.map(f => (
                           <li key={f} className="flex items-start gap-4 text-white/90 text-sm font-bold">
                               <Check className="w-5 h-5 text-[#0BAFB4] flex-shrink-0" />
                               {f}
                           </li> 
                        ))}
                        {plan.notIncluded.map(f => (
                            <li key={f} className="flex items-start gap-4 text-white/30 text-sm font-medium">
                                <X className="w-5 h-5 flex-shrink-0" />
                                {f}
                            </li>
                        ))}
                    </ul>
                </div>

                <Link 
                    href="/contact"
                    className={`block w-full text-center py-5 rounded-2xl text-lg font-black transition-all ${
                        plan.highlight 
                        ? 'bg-[#0BAFB4] text-white shadow-xl shadow-[#0BAFB4]/20 hover:scale-105' 
                        : 'bg-white/5 text-white hover:bg-white/10'
                    }`}
                >
                    تعاقد الآن
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Custom Solution Section ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-[#1F3C64]/30 border border-white/5 p-16 rounded-[4rem] text-center">
                <div className="flex justify-center mb-8">
                    <div className="flex -space-x-4 space-x-reverse">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="w-14 h-14 rounded-full border-4 border-[#0F172A] bg-slate-800 overflow-hidden">
                                <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Expert" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">باقة تناسب <br /> احتياجك الخاص؟</h2>
                <p className="text-[#94A3B8] text-xl font-medium max-w-2xl mx-auto mb-10">
                    إذا كانت لديك متطلبات فريدة أو حجم عمل ضخم، يمكننا تفصيل باقة مخصصة تماماً لأهدافك.
                </p>
                <Link href="/contact" className="text-[#0BAFB4] font-black text-xl hover:underline underline-offset-8">
                    احصل على تسعيرة مخصصة
                </Link>
            </div>
        </div>
      </section>

      {/* ── Trust Icons ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                <ShieldCheck size={64} className="text-[#0BAFB4]" />
                <Star size={64} className="text-[#0BAFB4]" />
                <Zap size={64} className="text-[#0BAFB4]" />
            </div>
            <p className="mt-12 text-[#64748B] text-sm font-bold uppercase tracking-[0.4em]">Guaranteed Quality & Speed</p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
