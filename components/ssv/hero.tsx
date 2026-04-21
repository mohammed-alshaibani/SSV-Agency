'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const cyclingWords = [
  { text: 'الفكرة', color: '#0BAFB4' },
  { text: 'الخطة', color: '#55D9DE' },
  { text: 'الهوية', color: '#0BAFB4' },
  { text: 'النمو', color: '#55D9DE' },
]

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
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const ssvRef = useRef<HTMLSpanElement>(null)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  // Cycling words effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % cyclingWords.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

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

    // SSV glow animation
    if (ssvRef.current) {
      gsap.to(ssvRef.current, {
        textShadow: '0 0 40px rgba(11, 175, 180, 0.8), 0 0 80px rgba(11, 175, 180, 0.4)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }
  }, { scope: containerRef })

  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen w-full overflow-hidden bg-[#0F172A]">
      {/* YouTube Video Background with true cover logic */}
      <div ref={bgRef} className="absolute inset-0 z-0 origin-center bg-[#0F172A] overflow-hidden pointer-events-none">
        <iframe
          src="https://www.youtube.com/embed/nVAoth0s-TY?autoplay=1&mute=1&loop=1&playlist=nVAoth0s-TY&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&start=15&enablejsapi=1"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-60"
          style={{
            width: 'max(100vw, (100vh * 16 / 9))',
            height: 'max(100vh, (100vw * 9 / 16))',
          }}
          allow="autoplay; encrypted-media"
          title="Hero Background Video"
        />
        {/* Dark Overlay for cinematic depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/95 via-[#0F172A]/70 to-[#0F172A]" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 max-w-6xl mx-auto"
      >
        {/* Animated cycling word badge */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
            <span className="text-[#94A3B8] text-sm font-medium">نحول إلى</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg font-bold min-w-[80px]"
                style={{ color: cyclingWords[currentWordIndex].color }}
              >
                {cyclingWords[currentWordIndex].text}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.1] mb-8"
          style={{ textShadow: '0 4px 30px rgba(0, 0, 0, 0.5)' }}
        >
          <span className="block mb-2">حنا</span>
          <span
            ref={ssvRef}
            className="inline-block text-[#0BAFB4] relative"
          >
            SSV
            <motion.span
              className="absolute -inset-2 bg-[#0BAFB4]/10 rounded-lg blur-xl -z-10"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </span>
          <span className="block mt-2">شريك إبداعي</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl text-white/70 font-medium mb-12 max-w-3xl leading-relaxed"
        >
          نقدم حلول تسويقية إبداعية متكاملة لعملائنا
          <br className="hidden md:block" />
          من الفكرة إلى التنفيذ
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="/contact"
            className="group relative px-10 py-5 rounded-xl text-base font-bold overflow-hidden"
          >
            <span className="absolute inset-0 bg-[#0BAFB4] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
            <span className="absolute inset-0 bg-gradient-to-r from-[#0BAFB4] to-[#55D9DE] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative text-[#0F172A]">مهتم بالتعاون؟ تواصل معنا</span>
          </Link>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const portfolioSection = document.querySelector('#portfolio')
              if (portfolioSection) {
                portfolioSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="flex items-center gap-3 text-white font-medium px-8 py-5 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            شف أعمالنا
            <span className="text-[#0BAFB4]">←</span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={handleScrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-white/80 transition-colors cursor-pointer"
      >
        <span className="text-xs font-medium tracking-wider">اكتشف المزيد</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.button>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-[#0BAFB4]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#1F3C64]/20 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}
