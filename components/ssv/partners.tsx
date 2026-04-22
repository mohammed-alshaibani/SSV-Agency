'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// ─── Logo list ────────────────────────────────────────────────────────────────
const LOGOS = [
  'bnm.png', 'bvdfgh.png', 'cvbnm.png', 'cvgy.png', 'dfgHJ.png',
  'dfgh.png', 'dfghertyu.png', 'ertyu.png', 'ertyui.png', 'fg.png',
  'fghjkl.png', 'iuytrew.png', 'jhgf.png', 'kjhgnbv.png', 'lkjhg.png',
  'nbv.png', 'oiouy.png', 'oiuytdfghj.png', 'qwert.png', 'qwertasdf.png',
  'rtyu.png', 'rtyui.png', 'sxcvb.png', 'tyui.png', 'tyuio.png',
  'uiop.png', 'wert.png', 'werty.png', 'xcvbnm.png', 'yuio.png',
]

// ─── Partners Section ─────────────────────────────────────────────────────────
export function Partners() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  /*
   * THE TRICK:
   * We render LOGOS twice inside a single flex row (no wrapping).
   * The CSS animation slides the whole row left by exactly -50% (= one copy wide).
   * At that point the visual state is identical to the start, so the reset is invisible.
   */
  const duplicated = [...LOGOS, ...LOGOS]

  return (
    <section
      ref={ref}
      id="partners"
      className="bg-[#1F3C64] py-24 lg:py-32 relative overflow-hidden"
    >
      {/* ── Heading ─────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block text-[#0BAFB4] text-xs font-black tracking-[0.6em] uppercase mb-5 opacity-60">
            Global Recognition
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#E7F7F8] tracking-tighter">
            ثقة تجتاز الحدود
          </h2>
        </motion.div>
      </div>

      {/* ── Carousel ─────────────────────────────────────────────────────────── */}
      {/*
       * Outer wrapper: hides overflow and hosts the fade masks.
       * group class lets the child track react to hover on this element.
       */}
      <div className="relative overflow-hidden group">

        {/* Left fade mask */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 md:w-56"
          style={{ background: 'linear-gradient(to right, #1F3C64 0%, transparent 100%)' }}
        />
        {/* Right fade mask */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 md:w-56"
          style={{ background: 'linear-gradient(to left, #1F3C64 0%, transparent 100%)' }}
        />

        {/*
         * The scrolling track.
         * - `w-max`        → shrinks to fit all logos on one row (no wrapping).
         * - `animate-infinite-scroll` → translateX(0→-50%) defined in tailwind.config.ts.
         * - `group-hover:[animation-play-state:paused]` → stops on hover of the wrapper.
         */}
        <div
          className="
            flex items-center
            w-max
            animate-infinite-scroll
            group-hover:[animation-play-state:paused]
          "
        >
          {duplicated.map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="shrink-0 flex items-center justify-center px-10 md:px-14"
            >
              <img
                src={`/partners/${logo}`}
                alt={logo.replace(/\.[^.]+$/, '')}
                /*
                 * Fixed height, auto width → preserves aspect ratio.
                 * brightness(0) invert(1) → renders any coloured image as pure white.
                 * opacity-50 → muted by default; full opacity on hover for subtle interactivity.
                 */
                className="
                  h-10 md:h-12 w-auto
                  object-contain
                  opacity-50 hover:opacity-100
                  transition-opacity duration-500
                "
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
