'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SSVLogo } from './ssv-logo'

export function Preloader() {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        const timeout = setTimeout(() => {
            setIsVisible(false)
            setTimeout(() => (document.body.style.overflow = 'auto'), 800)
        }, 2200)

        return () => {
            clearTimeout(timeout)
            document.body.style.overflow = 'auto'
        }
    }, [])

    const columnVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[9999] bg-[#1F3C64] flex flex-col items-center justify-center pointer-events-auto"
                    dir="ltr"
                >
                    {/* Big White Logo Animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8"
                    >
                        <SSVLogo className="w-56 md:w-80 h-auto" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
                        className="flex items-center justify-center gap-12 md:gap-24"
                    >
                        {/* Column 1: Strategy */}
                        <motion.div variants={columnVariants} className="flex flex-col items-center justify-center gap-4">
                            <span className="text-[100px] md:text-[140px] font-black text-[#0BAFB4] leading-none tracking-tighter">S</span>
                            <span className="text-2xl md:text-3xl font-bold text-[#E7F7F8]">استراتيجية</span>
                        </motion.div>

                        {/* Column 2: Support */}
                        <motion.div variants={columnVariants} className="flex flex-col items-center justify-center gap-4">
                            <span className="text-[100px] md:text-[140px] font-black text-[#0BAFB4] leading-none tracking-tighter">S</span>
                            <span className="text-2xl md:text-3xl font-bold text-[#E7F7F8]">دعم</span>
                        </motion.div>

                        {/* Column 3: Vision */}
                        <motion.div variants={columnVariants} className="flex flex-col items-center justify-center gap-4">
                            <span className="text-[100px] md:text-[140px] font-black text-[#0BAFB4] leading-none tracking-tighter">V</span>
                            <span className="text-2xl md:text-3xl font-bold text-[#E7F7F8]">رؤية</span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
