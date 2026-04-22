'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Preloader() {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        // Lock scroll
        document.body.style.overflow = 'hidden'

        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setTimeout(() => setIsVisible(false), 500)
                    // Re-enable scroll after reveal
                    setTimeout(() => (document.body.style.overflow = 'auto'), 1100)
                    return 100
                }
                return prev + 1
            })
        }, 20)

        return () => {
            clearInterval(interval)
            document.body.style.overflow = 'auto'
        }
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[9999] bg-[#1F3C64] flex flex-col items-center justify-center pointer-events-auto"
                >
                    {/* Logo Animation / Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8"
                    >
                        <div className="w-16 h-16 border-2 border-[#E7F7F8] rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-[#E7F7F8] rounded-full animate-ping" />
                        </div>
                    </motion.div>

                    {/* Number Counter */}
                    <div className="relative overflow-hidden h-[120px] flex items-center">
                        <motion.span
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[100px] md:text-[140px] font-black text-[#F8FAFC] tabular-nums leading-none"
                        >
                            {count}
                        </motion.span>
                        <span className="text-2xl md:text-4xl font-bold text-[#E7F7F8] mt-8 mr-2">%</span>
                    </div>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '200px' }}
                        className="h-[1px] bg-white/10 mt-4 relative"
                    >
                        <motion.div
                            className="absolute inset-y-0 left-0 bg-[#E7F7F8]"
                            style={{ width: `${count}%` }}
                        />
                    </motion.div>

                    <span className="mt-8 text-xs font-black tracking-[0.3em] uppercase text-[#94A3B8] pr-2">
                        جاري تهيئة التجربة
                    </span>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
