'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Lightbulb, Palette, Camera, Megaphone } from 'lucide-react'

const serviceIdentities = [
  {
    id: 'idea',
    icon: Lightbulb,
    title: 'الفكرة',
    subtitle: 'التفكير الإبداعي',
    color: '#0BAFB4',
    services: [
      { number: '01', title: 'استراتيجية التواصل', description: 'نصنع استراتيجية تواصل شاملة تحدد الجمهور المستهدف والقنوات المناسبة' },
      { number: '02', title: 'إدارة المحتوى', description: 'ندير حسابات منشأتك في منصات التواصل ونصنع فيها محتوى لافت' },
      { number: '03', title: 'كتابة المحتوى', description: 'نكتب محتوى الملفات التعريفية والتقارير السنوية والعروض التقديمية' },
      { number: '04', title: 'المحتوى الرقمي', description: 'نبتكر للمواقع والتطبيقات محتويات تجذب عملائك' },
    ],
  },
  {
    id: 'identity',
    icon: Palette,
    title: 'الهوية',
    subtitle: 'التصميم البصري',
    color: '#55D9DE',
    services: [
      { number: '01', title: 'ابتكار الأسماء', description: 'نفكر بدالك ونلقى اسم إبداعي يميز مشروعك عن غيره' },
      { number: '02', title: 'قصة العلامة', description: 'نخلق قصة لعلامتك التجارية توضح رؤيتك ورسالتك وقيمك' },
      { number: '03', title: 'الهوية البصرية', description: 'نصمم الشعار والتطبيقات البصرية ضمن دليل هوية متكامل' },
      { number: '04', title: 'تصميم UI/UX', description: 'نصمم الموقع الإلكتروني أو التطبيق الرقمي الخاص بمنشأتك' },
    ],
  },
  {
    id: 'image',
    icon: Camera,
    title: 'الصورة',
    subtitle: 'الإنتاج المرئي',
    color: '#0BAFB4',
    services: [
      { number: '01', title: 'فيديوهات AI', description: 'ننتج فيديوهات إبداعية باستخدام أحدث تقنيات الذكاء الاصطناعي' },
      { number: '02', title: 'تصوير المنتجات', description: 'نصوِّر منتجات منشأتك بشكل إبداعي يلفت الانتباه' },
      { number: '03', title: 'فيديوهات UGC', description: 'نقدم منتجاتك من خلال فيديوهات تجذب عملائك وتزيد مبيعاتك' },
      { number: '04', title: 'تغطية الأحداث', description: 'نغطي الأحداث الخاصة بمنشأتك عبر كاميرتنا' },
    ],
  },
  {
    id: 'campaign',
    icon: Megaphone,
    title: 'الحملة',
    subtitle: 'التسويق والإعلان',
    color: '#55D9DE',
    services: [
      { number: '01', title: 'الأفكار الإبداعية', description: 'نكتب أفكار إبداعية نوصل لها بعد مشوار من الاشتعال' },
      { number: '02', title: 'السيناريو البصري', description: 'نحول الفكرة الإبداعية المعتمدة إلى سيناريو وتصورات بصرية' },
      { number: '03', title: 'إنتاج الحملة', description: 'ننتج وننفذ مخرجات الحملة من فيديوهات وتصاميم وتفعيلات' },
      { number: '04', title: 'إدارة الحملة', description: 'ندير الحملة التسويقية ونتابع كل تفصيلة ونقدم تقارير دورية' },
    ],
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeIdentity, setActiveIdentity] = useState('idea')

  const currentIdentity = serviceIdentities.find(i => i.id === activeIdentity) || serviceIdentities[0]

  return (
    <section ref={ref} id="services" className="bg-[#0F172A] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#0BAFB4] text-sm font-bold tracking-wider mb-4 uppercase">
            كل قطعة في SSV تقدم لعميلها شيء
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#F8FAFC] mb-8">
            خدماتنا المتكاملة
          </h2>
        </motion.div>

        {/* Identity Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {serviceIdentities.map((identity) => (
            <button
              key={identity.id}
              onClick={() => setActiveIdentity(identity.id)}
              className={`group relative px-6 py-4 rounded-xl font-bold text-base transition-all duration-500 ${activeIdentity === identity.id
                ? 'text-[#0F172A]'
                : 'text-[#94A3B8] hover:text-white bg-[#1E293B]/50 hover:bg-[#1E293B]'
                }`}
            >
              {activeIdentity === identity.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-xl"
                  style={{ backgroundColor: identity.color }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative flex items-center gap-2">
                <identity.icon className="w-5 h-5" />
                {identity.title}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          key={activeIdentity}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {currentIdentity.services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundColor: currentIdentity.color }}
              />

              {/* Card */}
              <div className="relative bg-[#1E293B]/60 backdrop-blur-xl p-8 rounded-2xl border border-white/5 group-hover:border-white/10 transition-all duration-500 h-full">
                {/* Number */}
                <span
                  className="inline-block text-5xl font-black mb-4 opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ color: currentIdentity.color }}
                >
                  {service.number}
                </span>

                <h3 className="text-xl font-bold text-[#F8FAFC] mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                <p className="text-[#94A3B8] leading-relaxed group-hover:text-[#B4C6D4] transition-colors">
                  {service.description}
                </p>

                {/* Floating accent */}
                <motion.div
                  className="absolute top-6 left-6 w-2 h-2 rounded-full"
                  style={{ backgroundColor: currentIdentity.color }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why SSV Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-black text-[#F8FAFC] mb-6">
            ليش SSV؟
          </h3>
          <p className="text-[#94A3B8] text-lg max-w-3xl mx-auto leading-relaxed mb-12">
            لأننا ببساطة ما نقدم بس خدمة تسويقية، حنا نشارك عملائنا رحلة تسويقية إبداعية متكاملة
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'التفكير الإبداعي ما يوقف', description: 'هو أساس SSV، وحالة الاشتعال تستمر معنا في كل مراحل شغلنا' },
              { title: 'نحرص، نهتم، وندقق', description: 'في كل خطوة ومرحلة تخص المشروع، لأن يهمنا عميلنا ويهمنا اسمنا' },
              { title: 'نعكس ثقافتنا', description: 'في تفكيرنا وتخطيطنا وتصميمنا نعكس الشيء اللي يتناسب مع بيئتنا السعودية' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-[#1E293B]/40 backdrop-blur-xl p-8 rounded-2xl border border-white/5"
              >
                <h4 className="text-lg font-bold text-[#0BAFB4] mb-3">{item.title}</h4>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
