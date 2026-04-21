'use client'

import { Header } from '@/components/ssv/header'
import { Footer } from '@/components/ssv/footer'
import { Contact as ContactSection } from '@/components/ssv/contact'
import { WhatsAppButton } from '@/components/ssv/whatsapp-button'
import { motion } from 'framer-motion'

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#0F172A]">
            <Header />

            <section className="pt-32 pb-12 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-black text-[#F8FAFC] mb-6"
                    >
                        إحجز استشارتك <span className="text-[#0BAFB4]">المجانية</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-[#94A3B8] text-xl max-w-3xl mx-auto mb-16"
                    >
                        دعنا نبدأ رحلة النجاح معاً. املأ النموذج أدناه وسيتواصل معك أحد خبرائنا في أسرع وقت.
                    </motion.p>
                </div>

                <ContactSection />
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    )
}
