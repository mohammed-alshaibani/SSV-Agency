'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'

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
    const stepsRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!containerRef.current || !stepsRef.current) return

        const cards = gsap.utils.toArray('.workflow-layer')

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: `+=${steps.length * 120}%`, // Extended for more pause time
                pin: true,
                scrub: 1,
            }
        })

        const premiumEase = "expo.out"

        cards.forEach((card: any, i) => {
            const content = card.querySelector('.workflow-content')
            const number = card.querySelector('.workflow-number')

            // Reveal Stage
            tl.fromTo(card,
                { opacity: 0, scale: 0.9, filter: 'blur(30px)' },
                { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.5, ease: premiumEase }
            )

            // Inner Parallax for number and content
            tl.fromTo(number, { y: 100, opacity: 0 }, { y: -50, opacity: 1, duration: 2, ease: "none" }, `-=1.5`)
            tl.fromTo(content, { y: 50 }, { y: -20, duration: 2, ease: "none" }, `-=2`)

            // Stay pinned/visible pause
            tl.to({}, { duration: 2 })

            // Fade out unless it's the last one
            if (i < cards.length - 1) {
                tl.to(card, {
                    opacity: 0,
                    scale: 1.1,
                    filter: 'blur(20px)',
                    duration: 1.5,
                    ease: "power2.inOut"
                })
            }
        })
    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="bg-[#1F3C64] min-h-screen relative overflow-hidden flex items-center justify-center">
            {/* Cinematic Background Accents */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vw] bg-[#0BAFB4]/[0.02] rounded-full blur-[250px] animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1F3C64] via-transparent to-[#1F3C64]" />
            </div>

            <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10 h-full flex flex-col items-center justify-center">

                {/* Vertical Progress Trace (Elite Styling) */}
                <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 flex flex-col gap-6 pointer-events-none hidden xl:flex z-50">
                    <span className="text-[#0BAFB4] text-[10px] font-black uppercase tracking-tighter rotate-90 mb-8 opacity-40">Process</span>
                    {steps.map((_, i) => (
                        <div key={i} className="w-[1px] h-12 bg-white/5 relative">
                            <div className="absolute top-0 left-0 w-full h-full bg-[#0BAFB4] origin-top scale-y-0 opacity-20" />
                        </div>
                    ))}
                </div>

                {/* Section Header */}
                <div className="absolute top-16 md:top-24 left-1/2 -translate-x-1/2 text-center w-full z-20 select-none">
                    <span className="text-[#0BAFB4] text-xs font-black tracking-[0.6em] uppercase mb-4 block opacity-60">
                        Methodology
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-[#E7F7F8] tracking-tighter drop-shadow-2xl">
                        رحلة صناعة القيمة
                    </h2>
                </div>

                {/* Scrollytelling Layers Container */}
                <div ref={stepsRef} className="relative w-full h-full flex items-center justify-center">
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className="workflow-layer absolute inset-0 w-full h-full flex items-center justify-center"
                        >
                            {/* ZigZag Grid for Elite Flow */}
                            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 w-full items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                }`}>

                                {/* Naked Step Number (Massive Background Element) */}
                                <div className={`relative flex items-center justify-center pointer-events-none select-none order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                                    }`}>
                                    <div className="absolute inset-0 bg-[#0BAFB4]/5 blur-[150px] rounded-full scale-150 z-0 opacity-30" />
                                    <span className="workflow-number text-[30vw] md:text-[25vw] font-black text-[#E7F7F8]/[0.1] leading-none tracking-tighter drop-shadow-[0_0_80px_rgba(11,175,180,0.05)]">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Content Card (Borderless Glassmorphism) */}
                                <div className={`workflow-content flex flex-col items-start gap-8 z-10 order-2 ${index % 2 === 0 ? 'lg:order-2 lg:pl-12' : 'lg:order-1 lg:pr-12'
                                    }`}>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-0.5 w-8 bg-[#0BAFB4]" />
                                            <span className="text-[#0BAFB4] text-xs font-black tracking-[0.4em] uppercase">Step {step.number}</span>
                                        </div>
                                        <h3 className="text-5xl lg:text-8xl font-black text-[#E7F7F8] leading-none tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                                            {step.title}
                                        </h3>
                                    </div>

                                    <p className="text-[#E7F7F8] text-xl lg:text-3xl leading-relaxed font-medium max-w-2xl opacity-90">
                                        {step.description}
                                    </p>


                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* View Details Button */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
                <Link
                    href="/services"
                    className="inline-block border border-[#0BAFB4] text-[#0BAFB4] px-8 py-3 rounded-full hover:bg-[#0BAFB4]/10 transition-colors font-semibold"
                >
                    View Details
                </Link>
            </div>
        </section>
    )
}

