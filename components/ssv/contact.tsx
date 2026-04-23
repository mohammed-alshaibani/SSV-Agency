'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, ChevronDown } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'البريد الإلكتروني',
    value: 'hello@ssv.com',
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
    <section ref={ref} id="contact" className="bg-[#1F3C64] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="space-y-10"
          >
            <div>
              <span className="inline-block text-[#0BAFB4] text-sm font-bold tracking-wider mb-4">
                تواصل معنا
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#E7F7F8] leading-tight mb-6 text-balance">
                دعنا نصنع شيئاً مذهلاً معاً
              </h2>
              <p className="text-[#E7F7F8] text-lg leading-relaxed">
                نحن هنا للإجابة على استفساراتك وتحويل رؤيتك إلى واقع ملموس. فريقنا جاهز للتواصل معك في أي وقت.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  className="flex items-center gap-5 p-4 bg-[#1F3C64] rounded-xl group hover:bg-[#1F3C64] transition-all duration-300 shadow-xl shadow-black/20 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#1F3C64] flex items-center justify-center text-[#0BAFB4] group-hover:bg-[#0BAFB4] group-hover:text-[#1F3C64] transition-all duration-300">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm text-[#E7F7F8] mb-1">
                      {info.label}
                    </span>
                    <span className="text-[#E7F7F8] font-bold" dir={info.dir}>
                      {info.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="bg-[#1F3C64] p-8 lg:p-10 rounded-xl shadow-2xl shadow-black/40"
          >
            <h3 className="text-xl font-bold text-[#E7F7F8] mb-6">
              أرسل لنا رسالة
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#E7F7F8] mb-2">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-12 bg-[#1F3C64] rounded-lg px-4 text-[#E7F7F8] border border-[#1F3C64] focus:border-[#0BAFB4] transition-all focus:outline-none"
                  placeholder="أدخل اسمك"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#E7F7F8] mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-12 bg-[#1F3C64] rounded-lg px-4 text-[#E7F7F8] border border-[#1F3C64] focus:border-[#0BAFB4] transition-all focus:outline-none"
                  placeholder="example@email.com"
                  dir="ltr"
                />
              </div>

              {/* Service Type Dropdown */}
              <div className="relative">
                <label htmlFor="service" className="block text-sm font-medium text-[#E7F7F8] mb-2">
                  نوع الخدمة
                </label>
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full h-12 bg-[#1F3C64] rounded-lg px-4 text-[#E7F7F8] border border-[#1F3C64] focus:border-[#0BAFB4] transition-all appearance-none cursor-pointer focus:outline-none"
                >
                  <option value="" disabled className="bg-[#1F3C64]">اختر الخدمة</option>
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-[#1F3C64]">
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute left-4 bottom-3.5 pointer-events-none text-[#E7F7F8] w-4 h-4" />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#E7F7F8] mb-2">
                  رسالتك
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#1F3C64] rounded-lg px-4 py-3 text-[#E7F7F8] border border-[#1F3C64] focus:border-[#0BAFB4] transition-all resize-none focus:outline-none"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                className="w-full btn-accent py-4 rounded-lg font-bold flex items-center justify-center gap-3 text-[#1F3C64]"
              >
                إرسال الرسالة
                <Send className="w-4 h-4 text-[#1F3C64]" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
