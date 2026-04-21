'use client'

import { motion } from 'framer-motion'
import { Play, ArrowDown } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1] as any,
    },
  },
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Reveal & Scale in
    gsap.fromTo(
      bgRef.current,
      { scale: 1.15, filter: 'brightness(0)' },
      { scale: 1, filter: 'brightness(1)', duration: 2.5, ease: 'power3.out' }
    )

    // Scroll Parallax
    gsap.to(bgRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, { scope: containerRef })

  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={containerRef} id="home" className="relative h-screen w-full overflow-hidden bg-[#0F172A]">
      {/* YouTube Video Background with true cover logic */}
      <div ref={bgRef} className="absolute inset-0 z-0 origin-center bg-[#0F172A] overflow-hidden pointer-events-none">
        <iframe
          src="https://www.youtube.com/embed/nVAoth0s-TY?autoplay=1&mute=1&loop=1&playlist=nVAoth0s-TY&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&start=15&enablejsapi=1"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-80"
          style={{
            width: 'max(100vw, (100vh * 16 / 9))',
            height: 'max(100vh, (100vw * 9 / 16))',
          }}
          allow="autoplay; encrypted-media"
          title="Hero Background Video"
        />
        {/* Dark Overlay for cinematic depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/90 via-[#0F172A]/40 to-[#0F172A]" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8 text-balance"
          style={{ textShadow: '0 4px 30px rgba(0, 0, 0, 0.5)' }}
        >
          نحن لسنا مجرد شركة
          <br />
          <span className="text-[#55D9DE]">تسويق...</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/80 font-medium mb-12 max-w-2xl leading-relaxed"
        >
          نحن شريك نمو، نعمل معك كفريقك الداخلي لنخطط، ننفذ، ونحقق نتائج قابلة للقياس.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <motion.a
            href="#services"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="btn-accent px-10 py-4 rounded-lg text-base font-bold shadow-lg"
          >
            اكتشف خدماتنا
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 text-white font-medium px-6 py-4 rounded-lg border border-white/20 hover:bg-white/10 transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center animate-subtle-pulse">
              <Play className="w-4 h-4 text-white fill-white mr-[-2px]" />
            </div>
            شاهد أعمالنا
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={handleScrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer"
      >
        <span className="text-xs font-medium tracking-wider">اكتشف المزيد</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  )
}
