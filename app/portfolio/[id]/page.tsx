'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Header } from '@/components/ssv/header'
import { Footer } from '@/components/ssv/footer'
import { WhatsAppButton } from '@/components/ssv/whatsapp-button'
import { ArrowLeft, ExternalLink, Calendar, User, Layers, Tag } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// ── Project Data Map ──
const projectsMap = {
  '1': {
    title: 'موسم الرياض - المحتوى الرقمي',
    client: 'وزارة الثقافة / هيئة الترفيه',
    date: 'أكتوبر 2023',
    service: 'التسويق الرقمي',
    industry: 'ترفيه وفعاليات',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070',
    description: 'تم تطوير استراتيجية محتوى متكاملة تهدف إلى تعزيز الوصول الرقمي لفعاليات موسم الرياض، محققة أكثر من 50 مليون مشاهدة خلال الربع الأول.',
    challenge: 'التحدي كان في خلق محتوى متنوع يتناسب مع كافة الأذواق ويغطي مئات الفعاليات المتزامنة مع الحفاظ على هوية بصرية موحدة.',
    solution: 'قمنا ببناء غرفة عمليات رقمية تعمل على مدار الساعة لإنتاج محتوى "لحظي" يواكب أحداث الموسم، مع استخدام تقنيات الموشن جرافيك المتقدمة.',
    gallery: [
      'https://images.unsplash.com/photo-1531050171659-07df97426665?q=80&w=2070',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070'
    ]
  },
  '4': {
    title: 'منصة عقار - تجربة المستخدم',
    client: 'عقار السعودية',
    date: 'يناير 2024',
    service: 'تصميم المواقع (UI/UX)',
    industry: 'العقارات',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062',
    description: 'إعادة تصميم شاملة لمنصة "عقار" تهدف لتبسيط عملية البحث عن السكن المثالي وتحسين معدل التحويل.',
    challenge: 'واجهة المستخدم القديمة كانت تعاني من تعقيد في التنقل، مما أدى إلى ارتفاع نسبة الخروج من الموقع (Bounce Rate).',
    solution: 'ركزنا على تصميم "المستخدم أولاً" مع تبسيط الفلاتر وتحسين أداء خرائط البحث، مما أدى لزيادة رضا المستخدم بنسبة 45%.',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055'
    ]
  }
}

export default function ProjectDetailPage() {
  const params = useParams()
  const id = params.id as string
  const project = (projectsMap as any)[id] || Object.values(projectsMap)[0] // Default to first for demo

  return (
    <main className="min-h-screen bg-[#1F3C64] font-tajawal">
      <Header />

      {/* ── Project Hero ── */}
      <section className="relative pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Link 
                href="/portfolio" 
                className="group flex items-center gap-3 text-[#0BAFB4] font-bold mb-10 transition-all hover:gap-5"
            >
                <ArrowLeft className="w-5 h-5 rotate-180" />
                <span>العودة لجميع الأعمال</span>
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16"
            >
                <h1 className="text-5xl md:text-8xl font-black text-[#E7F7F8] tracking-tighter mb-6 leading-none">
                    {project.title}
                </h1>
                <div className="flex flex-wrap gap-6 items-center border-t border-white/5 pt-8 mt-12">
                     <div className="flex items-center gap-3">
                        <User className="w-5 h-5 text-[#0BAFB4]" />
                        <span className="text-[#E7F7F8] font-bold">العميل:</span>
                        <span className="text-[#E7F7F8]">{project.client}</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <Layers className="w-5 h-5 text-[#0BAFB4]" />
                        <span className="text-[#E7F7F8] font-bold">الخدمة:</span>
                        <span className="text-[#E7F7F8]">{project.service}</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-[#0BAFB4]" />
                        <span className="text-[#E7F7F8] font-bold">التاريخ:</span>
                        <span className="text-[#E7F7F8]">{project.date}</span>
                     </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative aspect-video rounded-[3.5rem] overflow-hidden shadow-2xl shadow-black/40 group mb-24"
            >
                <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-[3s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F3C64] via-transparent opacity-40" />
                
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-[#0BAFB4] text-[#1F3C64] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl shadow-[#0BAFB4]/30">
                    <ExternalLink size={32} strokeWidth={2.5} />
                </button>
            </motion.div>

            {/* ── Case Study Content ── */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                <div className="lg:col-span-4 sticky top-32">
                    <h3 className="text-[#0BAFB4] text-xs font-black tracking-widest uppercase mb-6 flex items-center gap-3">
                        <div className="h-0.5 w-8 bg-[#0BAFB4]" />
                        About Project
                    </h3>
                    <p className="text-[#E7F7F8] text-xl font-medium leading-relaxed opacity-80">
                        {project.description}
                    </p>
                </div>

                <div className="lg:col-span-8 space-y-20">
                    <div className="bg-white/[0.02] border border-white/5 p-12 rounded-[2.5rem]">
                        <h4 className="text-[#E7F7F8] text-3xl font-black mb-6">التحدي</h4>
                        <p className="text-[#E7F7F8] text-lg leading-relaxed">{project.challenge}</p>
                    </div>

                    <div className="bg-[#1F3C64]/30 border border-[#0BAFB4]/10 p-12 rounded-[2.5rem]">
                        <h4 className="text-[#0BAFB4] text-3xl font-black mb-6">الحل الفني</h4>
                        <p className="text-[#E7F7F8] text-lg leading-relaxed">{project.solution}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {project.gallery.map((img: string, i: number) => (
                            <div key={i} className="relative aspect-[4/3] rounded-[2rem] overflow-hidden group">
                                <Image src={img} alt="Project Gallery" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* ── Next Project CTA ── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-[#E7F7F8] text-sm font-bold uppercase mb-4 block">مشروع آخر</span>
            <Link 
                href="/portfolio/4" 
                className="group inline-flex items-center gap-6 text-2xl md:text-5xl font-black text-[#E7F7F8] hover:text-[#0BAFB4] transition-colors"
            >
                 عرض المشروع التالي
                 <ArrowLeft className="w-10 h-10 group-hover:-translate-x-4 transition-transform" />
            </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
