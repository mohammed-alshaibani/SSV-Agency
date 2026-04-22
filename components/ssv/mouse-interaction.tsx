'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export function MouseInteraction() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring configuration for smooth high-inertia following
  const springConfig = { damping: 30, stiffness: 150, mass: 1 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{
        background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(11, 175, 180, 0.15), transparent 80%)`,
      }}
    >
      {/* Small focused core dot (Highly visible) */}
      <motion.div
        className="absolute h-4 w-4 rounded-full bg-[#0BAFB4] opacity-50 blur-sm"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </motion.div>
  )
}

export function Magnetic({ children, distance = 0.5 }: { children: React.ReactNode, distance?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    const deltaX = clientX - centerX
    const deltaY = clientY - centerY
    
    setPosition({ x: deltaX * distance, y: deltaY * distance })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  )
}
