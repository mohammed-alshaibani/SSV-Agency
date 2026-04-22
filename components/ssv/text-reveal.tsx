'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface TextRevealProps {
    children: string
    className?: string
    delay?: number
}

export function TextReveal({ children, className, delay = 0 }: TextRevealProps) {
    const words = children.split(' ')

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: delay * i },
        }),
    }

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            skewY: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            } as any,
        },
        hidden: {
            opacity: 0,
            y: 70,
            skewY: 10,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            } as any,
        },
    }

    return (
        <motion.div
            style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={className}
        >
            {words.map((word, index) => (
                <span key={index} style={{ overflow: 'hidden', display: 'inline-block', paddingRight: '0.2em' }}>
                    <motion.span
                        variants={child}
                        style={{ display: 'inline-block' }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </motion.div>
    )
}
