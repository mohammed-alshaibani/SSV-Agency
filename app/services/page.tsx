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
    title: 'الاستراتيجية الرقمية',
    arabicTitle: 'Digital Strategy',
    description: 'نبني لك خارطة طريق واضحة تعتمد على البيانات لتحويل أهدافك التجارية إلى واقع ملموس.',
    icon: Rocket,
    features: ['تحليل السوق والمنافسين', 'تحديد الجمهور المستهدف', 'بناء رحلة العميل'],
    color: '#0BAFB4'
  },
  {
    title: 'الإنتاج المرئي والمحتوى',
    arabicTitle: 'Video & Content',
    description: 'نروي قصة علامتك التجارية عبر محتوى مرئي إبداعي، من الأفلام السينمائية إلى الموشن جرافيك.',
    icon: Video,
    features: ['أفلام إعلانية', 'موشن جرافيك 2D/3D', 'تصوير المنتجات'],
    color: '#38BDF8'
  },
  {
    title: 'إدارة التواصل الاجتماعي',
    arabicTitle: 'Social Media',
    description: 'إدارة احترافية لمنصاتك تضمن لك تفاعلاً حقيقياً ونمواً مستداماً لمجتمعك الرقمي.',
    icon: Share2,
    features: ['جدولة ونشر المحتوى', 'إدارة المجتمع والردود', 'تحليل الأداء الدوري'],
    color: '#818CF8'
  },
  {
    title: 'التسويق بالأداء (Ads)',
    arabicTitle: 'Performance Marketing',
    description: 'حملات إعلانية ذكية تستهدف النتائج، لضمان أعلى عائد على الاستثمار (ROI) لعلامتك.',
    icon: BarChart3,
    features: ['إعلانات Google & Meta', 'سناب شات وتيك توك', 'تحليل التحويلات'],
    color: '#F472B6'
  },
  {
    title: 'الهوية البصرية والبراندينج',
    arabicTitle: 'Visual Identity',
    description: 'نصمم شخصية بصرية فريدة تعبر عن قيمك وتترك انطباعاً لا ينسى في أذهان عملائك.',
    icon: Palette,
    features: ['تصميم الشعار (Logo)', 'دليل استخدام الهوية', 'التصاميم الدعائية'],
    color: '#FB923C'
  },
  {
    title: 'تطوير المواقع والمنصات',
    arabicTitle: 'Web Development',
    description: 'واجهات مستخدم (UI/UX) مبتكرة وحلول برمجية سريعة وآمنة تلبي تطلعاتك.',
    icon: Globe,
    features: ['تصميم واجهات UI/UX', 'تطوير المواقع التعريفية', 'المتاجر الإلكترونية'],
    color: '#A78BFA'
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0F172A] font-tajawal">
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
            <h1 className="text-5xl md:text-8xl font-black text-[#F8FAFC] tracking-tighter mb-8 leading-none">
              خدمات تصنع <br /> <span className="text-[#0BAFB4]">فرقاً حقيقياً</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#94A3B8] max-w-4xl mx-auto font-medium leading-relaxed">
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
                    <p className="text-[#94A3B8] text-lg leading-relaxed mb-10 opacity-80 group-hover:opacity-100 transition-opacity">
                      {service.description}
                    </p>

                    <ul className="space-y-4 mb-10">
                        {service.features.map(feature => (
                            <li key={feature} className="flex items-center gap-3 text-[#E2E8F0] font-bold text-sm">
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

      {/* ── Value Proposition Section ── */}
      <section className="py-32 bg-[#1F3C64] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#0BAFB4] text-sm font-black tracking-widest uppercase mb-4 block">ليماذا SSV؟</span>
              <h2 className="text-4xl md:text-6xl font-black text-[#F8FAFC] tracking-tighter mb-8 leading-tight">
                نهجنا يجمع بين <br /> <span className="text-[#0BAFB4]">الفن والذكاء</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-xl bg-white/5 flex-shrink-0 flex items-center justify-center font-black text-2xl text-[#0BAFB4]">01</div>
                    <div>
                        <h4 className="text-[#F8FAFC] text-xl font-black mb-2">فهم عميق للسوق الخليجي</h4>
                        <p className="text-[#94A3B8] leading-relaxed">ندرك خصوصية الثقافة المحلية ونبني محتوى يلامس مشاعر الجمهور فعلاً.</p>
                    </div>
                </div>
                <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-xl bg-white/5 flex-shrink-0 flex items-center justify-center font-black text-2xl text-[#0BAFB4]">02</div>
                    <div>
                        <h4 className="text-[#F8FAFC] text-xl font-black mb-2">تركيز مطلق على العائد (ROI)</h4>
                        <p className="text-[#94A3B8] leading-relaxed">أي قرش تصرفه معنا، هدفنا أن يعود لك بأضعاف عبر نمو حقيقي وقابل للقياس.</p>
                    </div>
                </div>
                <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-xl bg-white/5 flex-shrink-0 flex items-center justify-center font-black text-2xl text-[#0BAFB4]">03</div>
                    <div>
                        <h4 className="text-[#F8FAFC] text-xl font-black mb-2">شريك تقني وإبداعي واحد</h4>
                        <p className="text-[#94A3B8] leading-relaxed">من الاستراتيجية إلى الكود، نحن هنا لنغنيك عن تعدد مقدمي الخدمات وتشتت الجهود.</p>
                    </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden group shadow-3xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070" 
                alt="SSV Work Process"
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F3C64] to-transparent opacity-60" />
              <div className="absolute bottom-12 left-12 right-12">
                <div className="bg-white/10 backdrop-blur-3xl p-8 rounded-[2rem] border border-white/10">
                    <h5 className="text-white text-2xl font-black mb-2">أكثر من مجرد وكالة..</h5>
                    <p className="text-white/80">نحن ذراعك التسويقي والإبداعي الذي يضمن لك الاستدامة.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
