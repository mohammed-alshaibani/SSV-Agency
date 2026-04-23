'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const steps = [
    {
        number: '01',
        title: 'اكتشاف وفهم العميل',
        description: 'نجلس معك نغوص في تفاصيل علامتك التجارية، طموحاتك، والتحديات التي تقلقك لنصل إلى جذور احتياجاتك الحقيقية.'
    },
    {
        number: '02',
        title: 'تحليل السوق والمنافسين',
        description: 'نحلل المنافسين ونراقب اتجاهات السوق لنكتشف الثغرات والفرص التنافسية التي ستحولها إلى نقاط قوة لعلامتك.'
    },
    {
        number: '03',
        title: 'تحديد الجمهور المستهدف',
        description: 'نرسم ملفات شخصية دقيقة لمن سيهتم بك، لندرك أين وكيف يمكننا الوصول لقلبه وعقله بفعالية.'
    },
    {
        number: '04',
        title: 'وضع أهداف ومؤشرات أداء (KPIs)',
        description: 'نضع معاً أهم مؤشرات الأداء الحقيقية لنركز بثبات على النتائج التي يمكنك لمسها وملاحظتها.'
    },
    {
        number: '05',
        title: 'بناء الاستراتيجية',
        description: 'نبني خارطة طريق احترافية تجمع بين الإبداع البصري المبهر والذكاء التسويقي الموجه لضمان الوصول لأهدافك بدقة.'
    },
    {
        number: '06',
        title: 'تنفيذ الخطة',
        description: 'ينطلق فريقنا المحترف لتنفيذ كل تفصيل صغير في الخطة الاستراتيجية المعدة، من التصميم للمحتوى للإعلانات.'
    },
    {
        number: '07',
        title: 'قياس وتحسين الأداء',
        description: 'نراقب بدقة، نحلل البيانات، ونطور الأداء لنضمن تحقيق أفضل عائد على الاستثمار واستدامة النمو.'
    }
]

export function Workflow() {
    const containerRef = useRef<HTMLElement>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!wrapperRef.current || !containerRef.current) return;

        let ctx = gsap.context(() => {
            const getScrollAmount = () => {
                let maxScroll = wrapperRef.current ? wrapperRef.current.scrollWidth - window.innerWidth : 0;
                // Add positive offset for RTL horizontal scroll overflow
                return typeof maxScroll === "number" && maxScroll > 0 ? maxScroll + 100 : 0;
            }

            gsap.to(wrapperRef.current, {
                x: () => getScrollAmount(), // RTL positive movement
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    start: "top top",
                    end: () => `+=${getScrollAmount()}`,
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="bg-[#1F3C64] h-screen relative overflow-hidden flex flex-col justify-center">
            {/* Cinematic Background Accents */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vw] bg-[#0BAFB4]/[0.02] rounded-full blur-[250px] animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1F3C64] via-transparent to-[#1F3C64]" />
            </div>

            <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-10 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-[#0BAFB4] text-xs font-black tracking-[0.6em] uppercase mb-4 block opacity-60">
                        Methodology
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-[#E7F7F8] tracking-tighter">
                        رحلة صناعة القيمة
                    </h2>
                </motion.div>
            </div>

            {/* GSAP Driven Horizontal Wrapper */}
            <div ref={wrapperRef} className="flex gap-8 px-6 lg:px-12 w-max relative z-10">
                {steps.map((step) => (
                    <div
                        key={step.number}
                        className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[28vw] group"
                    >
                        <div className="h-full bg-white/[0.03] backdrop-blur-2xl border border-white/5 p-10 rounded-[3rem] transition-all duration-500 hover:bg-white/[0.06] hover:border-[#0BAFB4]/20 flex flex-col gap-8 relative overflow-hidden min-h-[420px]">
                            {/* Large Number Background */}
                            <div className="absolute -top-10 -right-10 text-[14rem] font-black text-[#E7F7F8]/[0.03] select-none group-hover:text-[#0BAFB4]/[0.05] transition-colors duration-700">
                                {step.number}
                            </div>

                            <div className="relative z-10 flex flex-col gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-0.5 w-8 bg-[#0BAFB4]" />
                                    <span className="text-[#0BAFB4] text-xs font-black tracking-[0.4em] uppercase">Step {step.number}</span>
                                </div>
                                <h3 className="text-3xl font-black text-[#E7F7F8] leading-tight tracking-tight group-hover:text-[#0BAFB4] transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-[#E7F7F8]/80 text-lg leading-relaxed font-medium">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View Details Button */}
            <div className="mt-16 w-full flex justify-center relative z-50">
                <Link
                    href="/services"
                    className="inline-block border-2 border-[#E7F7F8] text-[#E7F7F8] px-10 py-3 rounded-full hover:bg-[#E7F7F8] hover:text-[#1F3C64] transition-all duration-500 font-black text-xl"
                >
                    عرض التفاصيل
                </Link>
            </div>
        </section>
    )
}
