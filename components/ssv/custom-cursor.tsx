'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion'

export function CustomCursor() {
    const [isMobile, setIsMobile] = useState(false)
    const [cursorType, setCursorType] = useState('default') // 'default' | 'hover' | 'view'
    const [isVisible, setIsVisible] = useState(false)

    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 250 }
    const x = useSpring(cursorX, springConfig)
    const y = useSpring(cursorY, springConfig)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
            if (!isVisible) setIsVisible(true)

            // Dynamic cursor logic based on hover targets
            const target = e.target as HTMLElement
            const isClickable = target.closest('a, button, [role="button"]')
            const isPortfolio = target.closest('.portfolio-card')

            if (isPortfolio) {
                setCursorType('view')
            } else if (isClickable) {
                setCursorType('hover')
            } else {
                setCursorType('default')
            }
        }

        const checkMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window)
        }

        window.addEventListener('mousemove', handleMouseMove)
        checkMobile()
        window.addEventListener('resize', checkMobile)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('resize', checkMobile)
        }
    }, [isVisible])

    if (isMobile) return null

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[9999] pointer-events-none mix-blend-difference"
                    style={{ x, y, left: -12, top: -12 }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{
                            scale: cursorType === 'hover' ? 4 : cursorType === 'view' ? 8 : 1,
                            backgroundColor: cursorType === 'view' ? '#0BAFB4' : '#E7F7F8',
                            opacity: cursorType === 'hover' ? 0.3 : 1
                        }}
                        className="w-6 h-6 rounded-full flex items-center justify-center overflow-hidden"
                    >
                        {cursorType === 'view' && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-[2px] font-black uppercase text-[#1F3C64]"
                            >
                                عرض
                            </motion.span>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
