'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const servicePillars = [
  {
    id: 'strategy',
    letter: 'S',
    title: 'الاستراتيجية',
    subtitle: 'بناء خارطة طريق واضحة لنمو علامتك التجارية.',
    details: [
      { id: '1', text: 'تحليل السوق' },
      { id: '2', text: 'تحديد الجمهور' },
      { id: '3', text: 'بناء خطة تسويقية' },
    ]
  },
  {
    id: 'support',
    letter: 'S',
    title: 'التنفيذ',
    subtitle: 'تحويل الرؤية إلى واقع ملموس عبر فريق إبداعي متكامل.',
    details: [
      { id: '1', text: 'إدارة السوشيال ميديا' },
      { id: '2', text: 'تصميم الهوية والمحتوى' },
      { id: '3', text: 'الحملات الإعلانية' },
    ]
  },
  {
    id: 'vision',
    letter: 'V',
    title: 'القياس والتطوير',
    subtitle: 'متابعة الأداء وتحسين النتائج لضمان أفضل عائد.',
    details: [
      { id: '1', text: 'تحليل الأداء' },
      { id: '2', text: 'تقارير دورية' },
      { id: '3', text: 'تحسين مستمر' },
    ]
  }
]

export function Services() {
  const wrapperRef = useRef<HTMLElement>(null)

  // Height = Initial Stage + 3 Pillars = 4 Stages (Reduced multiplier from 80 to 50 for max speed)
  const dynamicHeight = `${(servicePillars.length + 1) * 50}vh`;

  useGSAP(() => {
    if (!wrapperRef.current) return;

    const initialStage = document.querySelector('.stage-initial') as HTMLElement;
    const stages = gsap.utils.toArray('.stage-layer') as HTMLElement[];

    // Initial States
    gsap.set(initialStage, { opacity: 1, y: 0 });
    gsap.set(stages, { opacity: 0, scale: 0.9, filter: 'blur(20px)' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    const premiumEase = "expo.out"; // Mimics [0.16, 1, 0.3, 1]

    // 1st Transition: Initial Logo -> Stage 1
    tl.to(initialStage, {
      opacity: 0,
      y: -150,
      duration: 0.7,
      ease: "power4.inOut"
    }, "transition-init");

    tl.to(stages[0], {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      duration: 0.7,
      ease: premiumEase
    }, "transition-init");

    // Next Transitions: Stage 1 -> 2 -> 3
    stages.forEach((stage, i) => {
      const letter = stage.querySelector('.pillar-letter');
      const centerCard = stage.querySelector('.center-card');

      // Add scroll-based mini-parallax for letters and cards within the scrub
      tl.to(letter, {
        y: -120,
        scale: 1.3,
        duration: 2,
        ease: "none"
      }, `stage-${i}`);

      tl.to(centerCard, {
        y: -30,
        duration: 2,
        ease: "none"
      }, `stage-${i}`);

      if (i < stages.length - 1) {
        const nextStage = stages[i + 1];

        tl.to(stage, {
          opacity: 0,
          scale: 1.1,
          filter: 'blur(20px)',
          duration: 0.8,
          ease: "power2.inOut"
        }, `transition-${i}`);

        tl.to(nextStage, {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: premiumEase
        }, `transition-${i}`);
      }
    });

  }, { scope: wrapperRef });

  return (
    <section ref={wrapperRef} id="services" className="relative w-full bg-[#1F3C64]" style={{ height: dynamicHeight }}>
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* Cinematic Smoky Background Placeholder */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1F3C64] via-transparent to-[#1F3C64] z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-[#0BAFB4]/[0.03] rounded-full blur-[300px] animate-pulse" />
        </div>

        {/* Branded Central Text Stage */}
        <div className="stage-initial absolute inset-0 flex flex-col items-center justify-center z-40 px-6">
          <h2 className="text-[#E7F7F8] flex flex-col items-center justify-center gap-4 text-center">
            <span className="text-[#0BAFB4] text-xs font-black tracking-[0.8em] uppercase opacity-60 mb-2">خدماتنا</span>
            <span dir="ltr" className="text-[12vw] md:text-[14vw] font-black leading-none tracking-tighter flex items-center justify-center transition-all hover:tracking-widest duration-700 select-none drop-shadow-[0_0_80px_rgba(11,175,180,0.1)]">
              SS<span className="text-[#0BAFB4]">V</span>
            </span>
            <p className="text-xl md:text-2xl font-medium text-[#E7F7F8] max-w-xl leading-relaxed">
              نحن لا نقدم خدمات فقط، نحن نصنع تجارب رقمية متكاملة تضع علامتك في المقدمة.
            </p>
          </h2>
        </div>

        <div className="relative w-full h-full max-w-[1600px] mx-auto flex items-center justify-center">
          {servicePillars.map((pillar) => (
            <div key={pillar.id} className="stage-layer absolute inset-0 w-full h-full flex items-center justify-center px-6 md:px-12">

              {/* Asymmetrical 3-Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1.2fr] items-center gap-4 lg:gap-16 w-full max-w-full relative">

                {/* 1. Right Column (RTL Start): 01 only — centered vertically */}
                <div className="hidden lg:flex flex-col justify-center items-end">
                  <div className="quadrant-card group relative bg-white/[0.02] backdrop-blur-3xl p-8 rounded-[2.5rem] w-full max-w-[340px] transition-all duration-500 hover:bg-white/[0.05] pointer-events-auto">
                    <div className="absolute top-6 right-8 text-[#E7F7F8]/[0.12] text-7xl font-black select-none z-0">01</div>
                    <div className="relative z-10 pt-4">
                      <h4 className="text-[#E7F7F8] text-xl md:text-2xl font-bold leading-tight mb-2">
                        {pillar.details[0].text}
                      </h4>
                      <div className="h-1 w-12 bg-[#0BAFB4]/30 rounded-full group-hover:w-24 transition-all duration-700" />
                    </div>
                  </div>
                </div>

                {/* 2. Center Column: NAKED Typography Identity (Highest Z-Index) */}
                <div className="relative z-50 flex flex-col items-center justify-center text-center select-none pointer-events-none">
                  <div className="relative flex flex-col items-center">
                    <div className="absolute inset-0 bg-[#0BAFB4]/10 blur-[120px] rounded-full scale-[2] z-0" />

                    <span className="pillar-letter relative text-[15rem] md:text-[22rem] font-bold text-[#E7F7F8]/[0.15] leading-none tracking-tighter mb-[-6rem] select-none z-0 drop-shadow-[0_0_120px_rgba(11,175,180,0.1)]">
                      {pillar.letter}
                    </span>

                    <h3 className="relative z-10 text-6xl md:text-8xl font-black text-[#E7F7F8] tracking-tight drop-shadow-[0_10px_40px_rgba(0,0,0,0.7)] pointer-events-auto">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="relative z-10 text-[#E7F7F8] text-lg md:text-xl font-medium leading-relaxed max-w-sm px-6 opacity-90 mt-8 pointer-events-auto">
                    {pillar.subtitle}
                  </p>

                  {/* 03 card — centered below subtitle on desktop */}
                  <div className="hidden lg:block quadrant-card group relative bg-white/[0.02] backdrop-blur-3xl p-6 rounded-[2rem] mt-10 max-w-[280px] transition-all duration-500 hover:bg-white/[0.05] pointer-events-auto w-full">
                    <div className="absolute top-4 right-6 text-[#E7F7F8]/[0.12] text-5xl font-black select-none z-0">03</div>
                    <div className="relative z-10 pt-2 text-center">
                      <h4 className="text-[#E7F7F8] text-lg font-bold leading-tight mb-2">
                        {pillar.details[2].text}
                      </h4>
                      <div className="h-px w-10 bg-[#0BAFB4]/30 rounded-full mx-auto group-hover:w-20 transition-all duration-700" />
                    </div>
                  </div>
                </div>

                {/* 3. Left Column (RTL End): 02 only — centered vertically */}
                <div className="hidden lg:flex flex-col justify-center items-start">
                  <div className="quadrant-card group relative bg-white/[0.02] backdrop-blur-3xl p-8 rounded-[2.5rem] w-full max-w-[340px] transition-all duration-500 hover:bg-white/[0.05] pointer-events-auto">
                    <div className="absolute top-6 left-8 text-[#E7F7F8]/[0.12] text-7xl font-black select-none z-0">02</div>
                    <div className="relative z-10 pt-4 text-left">
                      <h4 className="text-[#E7F7F8] text-xl md:text-2xl font-bold leading-tight mb-2">
                        {pillar.details[1].text}
                      </h4>
                      <div className="h-1 w-12 bg-[#0BAFB4]/30 rounded-full ml-auto group-hover:w-24 transition-all duration-700" />
                    </div>
                  </div>
                </div>

                {/* Mobile Tablet View - 3-column grid */}
                <div className="lg:hidden grid grid-cols-3 gap-3 mt-6 w-full z-10">
                  {pillar.details.map((detail, idx) => (
                    <div key={detail.id} className="bg-white/[0.03] backdrop-blur-2xl p-4 rounded-2xl">
                      <div className="text-[#0BAFB4] text-xs font-black mb-2 opacity-40">0{idx + 1}</div>
                      <p className="text-[#E7F7F8] text-xs font-bold leading-tight">{detail.text}</p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* View Details Button */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
          <Link
            href="/services"
            className="inline-block border-2 border-[#E7F7F8] text-[#E7F7F8] px-10 py-3 rounded-full hover:bg-[#E7F7F8] hover:text-[#1F3C64] transition-all duration-500 font-black"
          >
            عرض التفاصيل
          </Link>
        </div>
      </div>
    </section>
  )
}
