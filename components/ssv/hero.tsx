'use client'

import { motion } from 'framer-motion'
import { Play, ArrowDown } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import { SSVLogo } from './ssv-logo'
import { Magnetic } from './mouse-interaction'
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
      ease: 'anticipate' as any,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.5,
      ease: 'anticipate' as any,
    },
  },
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const videoWrapperRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Cinematic Reveal
    gsap.fromTo(
      videoWrapperRef.current,
      { scale: 1.3, filter: 'brightness(0)' },
      { scale: 1, filter: 'brightness(1)', duration: 3.5, ease: 'power4.out' }
    )

    // Parallax on Scroll
    gsap.to(videoWrapperRef.current, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} id="home" className="relative h-screen w-full overflow-hidden bg-[#1F3C64] flex text-right font-tajawal">
      {/* Cinematic Video Background with Depth */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={videoWrapperRef} className="absolute inset-0 origin-center pointer-events-none">
          <iframe
            src="https://www.youtube.com/embed/nVAoth0s-TY?autoplay=1&mute=1&loop=1&playlist=nVAoth0s-TY&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&start=15&enablejsapi=1"
            className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 opacity-30"
            style={{
              width: 'max(100vw, (100vh * 16 / 9))',
              height: 'max(100vh, (100vw * 9 / 16))',
            }}
            allow="autoplay; encrypted-media"
            title="Hero Background Video"
          />
        </div>
      </div>

      {/* Main Content: Perfectly Centered */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen gap-12 text-center"
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center w-full">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-[#E7F7F8] leading-[1.1] tracking-tighter mb-4 max-w-6xl drop-shadow-2xl">
            نحن لسنا مجرد شركة تسويق... نحن <span className="text-[#0BAFB4]">شريك نمو</span>
          </h1>
          <p className="text-lg md:text-3xl font-medium text-[#E7F7F8]/80 max-w-4xl leading-relaxed mt-6">
            نعمل معك كفريقك الداخلي لنخطط، ننفذ، ونحقق نتائج قابلة للقياس.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-4"
        >
          <Magnetic distance={0.3}>
            <motion.div
              whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-[#0BAFB4] text-[#E7F7F8] px-12 py-6 rounded-2xl text-xl font-black shadow-[0_25px_50px_rgba(11,175,180,0.4)] transition-all duration-500 block"
              >
                إحجز استشارة مجانية
              </Link>
            </motion.div>
          </Magnetic>

          <Magnetic distance={0.2}>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(231, 247, 248, 0.05)' }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-6 text-[#E7F7F8] font-black px-12 py-6 rounded-2xl border border-[#E7F7F8]/30 backdrop-blur-md transition-all h-full"
            >
              <div className="w-14 h-14 rounded-full bg-[#E7F7F8]/10 flex items-center justify-center group-hover:bg-[#0BAFB4] transition-colors duration-700">
                <Play className="w-5 h-5 text-[#E7F7F8] fill-[#E7F7F8] group-hover:text-[#1F3C64] group-hover:fill-[#1F3C64] mr-[-2px]" />
              </div>
              <span>شاهد أعمالنا</span>
            </motion.button>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 2 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' as any }}
          className="w-[1px] h-24 bg-gradient-to-b from-[#0BAFB4] to-transparent"
        />
      </motion.div>
    </section>
  )
}
