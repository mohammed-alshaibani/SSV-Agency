'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Header } from '@/components/ssv/header'
import { Footer } from '@/components/ssv/footer'
import { WhatsAppButton } from '@/components/ssv/whatsapp-button'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const serviceData = {
    strategy: {
        title: 'الاستراتيجية (Strategy)',
        description: 'بناء خارطة طريق واضحة لنمو علامتك التجارية في السوق الرقمي المزدحم.',
        features: [
            'تحليل السوق والمنافسين بعمق',
            'تحديد الجمهور المستهدف بدقة',
            'بناء خطة تسويقية شاملة وقابلة للتنفيذ',
            'تحديد قنوات التواصل الأكثر فعالية'
        ],
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070'
    },
    support: {
        title: 'التنفيذ (Support)',
        description: 'تحويل الخطط إلى واقع ملموس عبر فريق فني متكامل يغطي كافة الجوانب الإبداعية والتقنية.',
        features: [
            'إدارة السوشيال ميديا باحترافية',
            'تصميم الهوية البصرية والمحتوى الإبداعي',
            'إطلاق وإدارة الحملات الإعلانية الممولة',
            'تطوير المواقع والمتاجر الإلكترونية الحديثة'
        ],
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070'
    },
    value: {
        title: 'القياس والتطوير (Value)',
        description: 'نحن لا نتوقف عند التنفيذ، بل نقيس كل خطوة لضمان تحقيق أعلى عائد على الاستثمار.',
        features: [
            'تحليل الأداء الشامل عبر الأدوات المتقدمة',
            'تقديم تقارير دورية شفافة ومفصلة',
            'التحسين المستمر بناءً على لغة الأرقام',
            'زيادة العائد على الاستثمار وتطوير الأداء'
        ],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015'
    }
}

export default function ServiceDetail() {
    const params = useParams()
    const slug = params.slug as keyof typeof serviceData
    const service = serviceData[slug]

    if (!service) return <div>Service not found</div>

    return (
        <main className="min-h-screen bg-[#0F172A]">
            <Header />

            <section className="pt-32 pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <Link
                        href="/#services"
                        className="inline-flex items-center gap-2 text-[#0BAFB4] font-bold mb-12 hover:translate-x-1 transition-transform"
                    >
                        <ArrowLeft className="w-5 h-5 rotate-180" />
                        العودة للرئيسية
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-black text-[#F8FAFC] mb-8 leading-tight">
                                {service.title}
                            </h1>
                            <p className="text-[#94A3B8] text-xl leading-relaxed mb-12">
                                {service.description}
                            </p>

                            <div className="space-y-6">
                                {service.features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-4 text-[#F8FAFC] text-lg font-medium"
                                    >
                                        <CheckCircle2 className="w-6 h-6 text-[#0BAFB4] flex-shrink-0" />
                                        {feature}
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-16">
                                <Link
                                    href="/contact"
                                    className="btn-accent px-10 py-5 rounded-xl text-lg font-black shadow-2xl shadow-[#0BAFB4]/20"
                                >
                                    إحجز استشارة مجانية الآن
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-black/40 rotate-1"
                        >
                            <div className="absolute inset-0 bg-[#0BAFB4]/20 mix-blend-overlay z-10" />
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    )
}
