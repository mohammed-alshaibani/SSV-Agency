'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'
import { SSVLogo } from './ssv-logo'

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
  const isInView = useInView(ref, { once: true, margin: '-10%' })
  const [subscribing, setSubscribing] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribing(true)
    // Mock AJAX call
    setTimeout(() => {
      setSubscribing(false)
      setSubscribed(true)
    }, 1500)
  }

  return (
    <footer ref={ref} className="bg-[#1F3C64] text-[#E7F7F8]">

      {/* High-Contrast CTA Section */}
      <div className="relative overflow-hidden py-24 lg:py-40 border-t border-[#E7F7F8]/5">
        <div className="absolute inset-0 bg-[#0BAFB4]/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-7xl font-black text-[#E7F7F8] mb-12 tracking-tighter">
              جاهز لتحويل <span className="text-[#0BAFB4]">رؤيتك إلى واقع؟</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="#contact"
                className="px-12 py-6 bg-[#0BAFB4] text-[#1F3C64] text-xl font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_rgba(11,175,180,0.3)]"
              >
                ابدأ مشروعك الآن
              </Link>
              <Link
                href="#portfolio"
                className="px-12 py-6 bg-[#E7F7F8]/5 text-[#E7F7F8] text-xl font-black rounded-2xl border border-[#E7F7F8]/10 hover:bg-[#E7F7F8]/10 transition-all"
              >
                شاهد أعمالنا
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Archive */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">

          {/* Brand & Newsletter */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center mb-8">
              <SSVLogo className="h-10 w-auto" />
            </Link>
            <p className="text-[#E7F7F8] text-lg leading-relaxed mb-10 max-w-sm">
              اشترك في نشرتنا البريدية لتصلك أحدث الرؤى الإبداعية والحلول التقنية المبتكرة.
            </p>

            <form onSubmit={handleSubscribe} className="relative max-w-md group">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                disabled={subscribed}
                required
                className="w-full h-16 bg-[#1F3C64] border border-[#E7F7F8]/10 rounded-2xl px-6 text-[#E7F7F8] outline-none focus:border-[#0BAFB4] transition-all group-hover:border-[#E7F7F8]/20 disabled:opacity-50 text-right"
              />
              <button
                type="submit"
                disabled={subscribing || subscribed}
                className="absolute left-2 top-2 h-12 px-6 bg-[#0BAFB4] text-[#1F3C64] font-black rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
              >
                {subscribing ? 'جاري...' : subscribed ? 'تم!' : 'اشترك'}
              </button>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[#0BAFB4] text-sm mt-4 font-bold"
                >
                  شكراً لثقتك! تم اشتراكك بنجاح.
                </motion.p>
              )}
            </form>
          </div>

          <div className="lg:col-span-2 lg:offset-1">
            <h4 className="text-[#E7F7F8] font-black mb-8 uppercase tracking-widest text-sm text-right">روابط سريعة</h4>
            <ul className="space-y-4 text-right">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#E7F7F8] hover:text-[#0BAFB4] transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[#E7F7F8] font-black mb-8 uppercase tracking-widest text-sm text-right">خدماتنا</h4>
            <ul className="space-y-4 text-right">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#E7F7F8] hover:text-[#0BAFB4] transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[#E7F7F8] font-black mb-8 uppercase tracking-widest text-sm text-right">تغدينا بصرياً</h4>
            <div className="flex gap-4 justify-end">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} className="w-10 h-10 rounded-xl bg-[#E7F7F8]/5 flex items-center justify-center text-[#E7F7F8] hover:bg-[#0BAFB4] hover:text-[#1F3C64] transition-all">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Location & Copyright */}
        <div className="border-t border-[#E7F7F8]/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-right">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#0BAFB4]" />
              <span className="text-[#E7F7F8] text-sm font-medium">المملكة العربية السعودية، الرياض، العليا</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#0BAFB4]" />
              <span className="text-[#E7F7F8] text-sm font-medium">hello@ssv.agency</span>
            </div>
          </div>
          <p className="text-xs text-[#E7F7F8]/40 uppercase tracking-[0.2em]">
            © 2026 ssv agency. Crafted with Passion.
          </p>
        </div>
      </div>
    </footer>
  )
}
