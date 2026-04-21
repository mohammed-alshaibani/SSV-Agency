'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

const quickLinks = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'أعمالنا', href: '#portfolio' },
]

const serviceLinks = [
  { label: 'الإنتاج المرئي', href: '#services' },
  { label: 'موشن جرافيك', href: '#services' },
  { label: 'التسويق الرقمي', href: '#services' },
  { label: 'الهوية البصرية', href: '#services' },
]

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <footer ref={ref} className="bg-[#0F172A] text-[#F8FAFC] border-t border-white/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0BAFB4]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Col 1: Logo & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-black text-[#F8FAFC]">
                SSV
              </span>
              <span className="text-xs text-[#94A3B8] uppercase tracking-widest">agency</span>
            </Link>

            <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
              شريك إبداعي لعملائه يقدم حلول تسويقية إبداعية متكاملة من الفكرة إلى التنفيذ.
            </p>

            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-xl border border-white/5 flex items-center justify-center text-[#94A3B8] hover:text-[#0BAFB4] hover:border-[#0BAFB4]/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Col 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="text-base font-bold mb-6 text-[#F8FAFC]">
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#94A3B8] text-sm hover:text-[#0BAFB4] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0BAFB4] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="text-base font-bold mb-6 text-[#F8FAFC]">
              خدماتنا
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#94A3B8] text-sm hover:text-[#0BAFB4] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0BAFB4] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="text-base font-bold mb-6 text-[#F8FAFC]">
              تواصل معنا
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#0BAFB4]" />
                </div>
                <span className="text-[#94A3B8] text-sm group-hover:text-white transition-colors">hello@ssv.agency</span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#0BAFB4]" />
                </div>
                <span className="text-[#94A3B8] text-sm group-hover:text-white transition-colors" dir="ltr">+966 50 000 0000</span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#0BAFB4]" />
                </div>
                <span className="text-[#94A3B8] text-sm group-hover:text-white transition-colors">الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-[#94A3B8]/60">
            © 2026 SSV Agency. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6 text-xs text-[#94A3B8]/60">
            <a href="#" className="hover:text-[#0BAFB4] transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-[#0BAFB4] transition-colors">
              الشروط والأحكام
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
