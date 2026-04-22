'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
    const phoneNumber = '966500000000' // Replace with actual number
    const message = 'مرحباً ssv، أود الاستفسار عن خدماتكم.'

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 left-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl overflow-hidden group"
            aria-label="Contact on WhatsApp"
        >
            <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
            <MessageCircle className="w-8 h-8 relative z-10" />

            {/* Subtle pulsing ring */}
            <span className="absolute inset-0 rounded-full border-4 border-[#25D366] animate-ping opacity-20" />
        </motion.a>
    )
}
