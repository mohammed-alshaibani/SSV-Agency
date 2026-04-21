'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, ChevronDown, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const contactInfo = [
  {
    icon: Mail,
    label: 'البريد الإلكتروني',
    value: 'hello@ssv.agency',
  },
  {
    icon: Phone,
    label: 'الهاتف',
    value: '+966 50 000 0000',
    dir: 'ltr' as const,
  },
  {
    icon: MapPin,
    label: 'الموقع',
    value: 'الرياض، المملكة العربية السعودية',
  },
]

const serviceOptions = [
  { value: 'production', label: 'الإنتاج المرئي' },
  { value: 'motion', label: 'موشن جرافيك' },
  { value: 'photography', label: 'تصوير فوتوغرافي' },
  { value: 'marketing', label: 'تسويق رقمي' },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section ref={ref} id="contact" className="bg-[#0F172A] py-24 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#0BAFB4]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#1F3C64]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#0BAFB4] text-sm font-bold tracking-wider mb-4 uppercase">
            مهتم بالتعاون؟
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#F8FAFC] mb-6">
            تواصل معنا الحين!
          </h2>
          <p className="text-[#94A3B8] text-xl max-w-2xl mx-auto leading-relaxed">
            نحن هنا للإجابة على استفساراتك وتحويل رؤيتك إلى واقع ملموس
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ x: -4 }}
                className="group flex items-center gap-5 p-6 bg-[#1E293B]/60 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-[#0BAFB4]/20 transition-all duration-500 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-[#0F172A] flex items-center justify-center text-[#0BAFB4] group-hover:bg-[#0BAFB4] group-hover:text-[#0F172A] transition-all duration-500">
                  <info.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-sm text-[#94A3B8] mb-1">
                    {info.label}
                  </span>
                  <span className="text-[#F8FAFC] font-bold text-lg" dir={info.dir}>
                    {info.value}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Quick CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-3 w-full p-5 rounded-2xl bg-[#0BAFB4] text-[#0F172A] font-bold text-lg hover:bg-[#55D9DE] transition-all duration-500"
              >
                صفحة التواصل الكاملة
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#0BAFB4]/5 rounded-3xl blur-2xl" />

            <div className="relative bg-[#1E293B]/60 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-8">
                أرسل لنا رسالة سريعة
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#94A3B8] mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-14 bg-[#0F172A]/80 rounded-xl px-5 text-[#F8FAFC] border border-white/10 focus:border-[#0BAFB4] transition-all focus:outline-none focus:ring-2 focus:ring-[#0BAFB4]/20"
                    placeholder="أدخل اسمك"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#94A3B8] mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-14 bg-[#0F172A]/80 rounded-xl px-5 text-[#F8FAFC] border border-white/10 focus:border-[#0BAFB4] transition-all focus:outline-none focus:ring-2 focus:ring-[#0BAFB4]/20"
                    placeholder="example@email.com"
                    dir="ltr"
                  />
                </div>

                {/* Service Type Dropdown */}
                <div className="relative">
                  <label htmlFor="service" className="block text-sm font-medium text-[#94A3B8] mb-2">
                    نوع الخدمة
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full h-14 bg-[#0F172A]/80 rounded-xl px-5 text-[#F8FAFC] border border-white/10 focus:border-[#0BAFB4] transition-all appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0BAFB4]/20"
                  >
                    <option value="" disabled className="bg-[#1E293B]">اختر الخدمة</option>
                    {serviceOptions.map((option) => (
                      <option key={option.value} value={option.value} className="bg-[#1E293B]">
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute left-5 bottom-5 pointer-events-none text-[#94A3B8] w-4 h-4" />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#94A3B8] mb-2">
                    رسالتك
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0F172A]/80 rounded-xl px-5 py-4 text-[#F8FAFC] border border-white/10 focus:border-[#0BAFB4] transition-all resize-none focus:outline-none focus:ring-2 focus:ring-[#0BAFB4]/20"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01, y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-[#0BAFB4] hover:bg-[#55D9DE] py-5 rounded-xl font-bold flex items-center justify-center gap-3 text-[#0F172A] transition-all duration-300"
                >
                  إرسال الرسالة
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <h3 className="text-xl font-bold text-[#F8FAFC] mb-4">
            إذا ودك تعرف أي جديد عن SSV
          </h3>
          <p className="text-[#94A3B8] mb-6">سجل في النشرة البريدية</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="flex-1 h-14 bg-[#1E293B]/60 backdrop-blur-xl rounded-xl px-5 text-[#F8FAFC] border border-white/10 focus:border-[#0BAFB4] transition-all focus:outline-none"
              dir="ltr"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="h-14 px-8 bg-[#0BAFB4] rounded-xl font-bold text-[#0F172A] hover:bg-[#55D9DE] transition-colors"
            >
              اشترك
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
