'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Header } from '@/components/ssv/header'
import { Footer } from '@/components/ssv/footer'
import { WhatsAppButton } from '@/components/ssv/whatsapp-button'
import { ArrowLeft, CheckCircle2, Star, Zap, Target, TrendingUp, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// ── Expanded Service Map ──
const servicesMap = {
  // Main Categories
  'الاستراتيجية الرقمية': {
    title: 'الاستراتيجية الرقمية',
    en: 'Digital Strategy',
    description: 'نبني لك خارطة طريق واضحة تعتمد على البيانات لتحويل أهدافك التجارية إلى واقع ملموس في الفضاء الرقمي.',
    icon: Target,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070',
    details: 'تبدأ كل رحلة نجاح بخطة محكمة. في SSV، نقوم بتحليل السوق والمنافسين بعمق، وتحديد دقيق لشريحة عملائك المثاليين، لنرسم لك مساراً يحقق أعلى درجات التأثير والانتشار.',
    features: ['تحليل SWOT للمنافسين', 'تحديد مؤشرات الأداء (KPIs)', 'رسم رحلة العميل (User Journey)', 'ميزانية تسويقية محسنة'],
    benefits: ['توفير المهدر المالي', 'استهداف دقيق للنتائج', 'وضوح في الرؤية المستقبلية']
  },
  'الإنتاج المرئي والمحتوى': {
    title: 'الإنتاج المرئي والمحتوى',
    en: 'Video & Content Production',
    description: 'نروي قصة علامتك التجارية عبر محتوى مرئي إبداعي يلامس المشاعر ويترك أثراً لا ينسى.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071',
    details: 'المحتوى هو الملك، والمحتوى المرئي هو تاجه. فريقنا المتخصص في الإنتاج السينمائي والموشن جرافيك يعمل على تحويل الأفكار المجردة إلى تجارب بصرية مبهرة.',
    features: ['أفلام إعلانية قصيرة', 'موشن جرافيك 2D & 3D', 'تصوير فوتوغرافي للمنتجات', 'كتابة المحتوى الإبداعي'],
    benefits: ['زيادة التفاعل بنسبة 300%', 'ترسيخ الصورة الذهنية', 'إيصال الرسالة بدقة']
  },
  'إدارة التواصل الاجتماعي': {
    title: 'إدارة التواصل الاجتماعي',
    en: 'Social Media Management',
    description: 'إدارة احترافية شاملة تضمن لعلامتك حضوراً قوياً وتفاعلاً حقيقياً على كافة المنصات.',
    icon: Star,
    image: 'https://images.unsplash.com/photo-1551817958-d9d86fb29431?q=80&w=2070',
    details: 'منصات التواصل هي واجهتك أمام العالم. نحن نتولى عنك عناء التخطيط، النشر، وإدارة المجتمع الرقمي بطريقة تعزز الانتماء لعلامتك التجارية.',
    features: ['تخطيط التقويم الشهري', 'إدارة الحسابات (نشر وردود)', 'تحليل المنافسين اليومي', 'تقارير أداء نصف شهرية'],
    benefits: ['نمو مجتمع العلامة', 'تحسين خدمة العملاء', 'تحديث مستمر للتوجهات']
  },
  'التسويق بالأداء (Ads)': {
    title: 'التسويق بالأداء والإعلانات',
    en: 'Performance Marketing',
    description: 'نطلق حملات إعلانية ذكية تستهدف النتائج، لضمان أعلى عائد على الاستثمار لعلامتك.',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015',
    details: 'لا نؤمن بالوصول العشوائي. نستخدم خوارزميات الاستهداف المتقدمة لضمان وصول رسالتك للشخص المناسب في الوقت المناسب بالسعر الأنسب.',
    features: ['حملات Google Ads & SEO', 'إعلانات Snapchat & TikTok', 'إعلانات Meta الشاملة', 'تحسين معدلات التحويل (CRO)'],
    benefits: ['زيادة فورية في المبيعات', 'تحكم كامل في الميزانية', 'بيانات دقيقة للنمو']
  }
}

export default function ServiceDetailPage() {
  const params = useParams()
  // Decode URL slug because it will be in Arabic
  const decodedSlug = decodeURIComponent(params.slug as string)
  const service = (servicesMap as any)[decodedSlug]

  if (!service) {
    return (
      <div className="min-h-screen bg-[#1F3C64] flex items-center justify-center text-white">
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">الخدمة غير موجودة</h1>
            <Link href="/services" className="text-[#0BAFB4] hover:underline">العودة لصفحة الخدمات</Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#1F3C64] font-tajawal">
      <Header />

      {/* ── Section Title & Navigation ── */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Link 
                href="/services" 
                className="group flex items-center gap-3 text-[#0BAFB4] font-bold mb-8 transition-all hover:gap-5"
            >
                <ArrowLeft className="w-5 h-5 rotate-180" />
                <span>العودة للخدمات</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[#0BAFB4] text-xs font-black tracking-[0.5em] mb-4 block uppercase opacity-60">
                        Service Detail • {service.en}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-[#E7F7F8] tracking-tighter mb-8 leading-none">
                        {service.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-[#E7F7F8] font-medium leading-relaxed mb-12">
                        {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {service.features.map((feature: string, idx: number) => (
                            <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 transition-all hover:bg-white/[0.05]">
                                <CheckCircle2 className="w-6 h-6 text-[#0BAFB4] flex-shrink-0" />
                                <span className="text-[#E7F7F8] font-bold text-sm">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative aspect-square lg:aspect-video rounded-[3rem] overflow-hidden"
                >
                    <Image 
                        src={service.image} 
                        alt={service.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F3C64] via-transparent to-transparent opacity-60" />
                    
                    {/* Floating Info Box */}
                    <div className="absolute bottom-8 right-8 left-8">
                        <div className="bg-[#1F3C64]/80 backdrop-blur-3xl p-8 rounded-3xl border border-white/10 flex items-center gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-[#0BAFB4] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#0BAFB4]/20">
                                <service.icon className="w-8 h-8 text-[#1F3C64]" />
                            </div>
                            <div>
                                <h4 className="text-white font-black text-lg mb-1">لماذا هذه الخدمة؟</h4>
                                <p className="text-white/60 text-sm">نحن نؤمن بأن كل تفصيل يصنع الفرق في رحلة نموك.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* ── Value Section ── */}
      <section className="py-24 bg-[#1F3C64]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                    <h2 className="text-4xl font-black text-[#E7F7F8] tracking-tighter mb-6">ماذا ستحقق <br /> بمجرد البدء؟</h2>
                    <p className="text-[#E7F7F8] leading-relaxed">نهجنا المتكامل يضمن لعلامتك التجارية القيمة والاستدامة في سوق تنافسي للغاية.</p>
                </div>
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {service.benefits.map((benefit: string, idx: number) => (
                        <div key={idx} className="bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] flex flex-col justify-between group hover:bg-white/[0.05] transition-all">
                             <ShieldCheck className="w-10 h-10 text-[#0BAFB4] mb-6 opacity-40 group-hover:opacity-100 transition-opacity" />
                             <h4 className="text-[#E7F7F8] font-bold text-lg leading-snug">{benefit}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* ── Deep Detail Section ── */}
      <section className="py-24 lg:py-40">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-[#E7F7F8] text-xl md:text-3xl font-medium leading-relaxed mb-16 italic">
                "{service.details}"
            </h3>
            <Link 
                href="/contact"
                className="inline-block bg-[#0BAFB4] text-white px-14 py-6 rounded-2xl text-xl font-black shadow-2xl hover:scale-105 transition-all duration-500"
            >
                تحدث مع متخصص الآن
            </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
