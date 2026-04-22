'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface SSVLogoProps {
  className?: string
}

export function SSVLogo({ className = "" }: SSVLogoProps) {
  return (
    <motion.div
      className={`relative inline-block select-none overflow-hidden ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src="/LogoCutting.png"
        alt="SSV Logo"
        className="h-full w-auto object-contain brightness-110 drop-shadow-[0_0_20px_rgba(11,175,180,0.3)]"
      />
    </motion.div>
  )
}
