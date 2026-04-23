'use client'

import { Header } from '@/components/ssv/header'
import { Footer } from '@/components/ssv/footer'
import { WhatsAppButton } from '@/components/ssv/whatsapp-button'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpLeft, LayoutGrid, List } from 'lucide-react'

// ── Portfolio Data ──
const categories = ['الكل', 'التسويق الرقمي', 'إنتاج الفيديو', 'الهوية البصرية', 'تصميم المواقع']

const projects = [
  {
    id: 1,
    title: 'موسم الرياض - المحتوى الرقمي',
    category: 'التسويق الرقمي',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070',
    tags: ['سوشيال ميديا', 'حملات ممولة']
  },
  {
    id: 2,
    title: 'تطبيق مالي - فيديو ترويجي',
    category: 'إنتاج الفيديو',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000',
    tags: ['موشن جرافيك', '3D']
  },
  {
    id: 3,
    title: 'علامة سدير - هوية بصرية',
    category: 'الهوية البصرية',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071',
    tags: ['براندينج', 'دليل الهوية']
  },
  {
    id: 4,
    title: 'منصة عقار - تجربة المستخدم',
    category: 'تصميم المواقع',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062',
    tags: ['UI/UX', 'تطوير ويب']
  },
  {
    id: 5,
    title: 'حملة إيراد - استراتيجية نمو',
    category: 'التسويق الرقمي',
    image: 'https://images.unsplash.com/photo-1551817958-d9d86fb29431?q=80&w=2070',
    tags: ['SEO', 'ADS']
  },
  {
    id: 6,
    title: 'فندق نارسيس - جولة افتراضية',
    category: 'إنتاج الفيديو',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070',
    tags: ['تصوير سينمائي', 'درون']
  },
  {
    id: 7,
    title: 'مجمع روشن - هوية المكان',
    category: 'الهوية البصرية',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069',
    tags: ['تصميم بيئي', 'لافتات']
  },
  {
    id: 8,
    title: 'متجر سلة - تطوير الواجهة',
    category: 'تصميم المواقع',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026',
    tags: ['E-commerce', 'Next.js']
  }
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('الكل')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredProjects = activeCategory === 'الكل'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <main className="min-h-screen bg-[#1F3C64] font-tajawal">
      <Header />

      {/* ── Page Hero ── */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Abstract Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0BAFB4]/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1F3C64]/20 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[#0BAFB4] text-sm font-black tracking-[0.5em] uppercase mb-4 block">
              Portfolio
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-[#E7F7F8] tracking-tighter mb-8 leading-none">
              أعمالنا.. تجسيد <br /> لقصص <span className="text-[#0BAFB4]">النجاح</span>
            </h1>
            <p className="text-lg md:text-2xl text-[#E7F7F8] max-w-3xl mx-auto font-medium leading-relaxed">
              نحن لا نصنع تصاميم فقط، نحن نبني هويات رقمية تترك أثراً عابراً للزمان والمكان، عبر مزيج من الإبداع والذكاء التسويقي.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Filter & View Toggle Section ── */}
      <section className="sticky top-20 z-40 py-6 bg-[#1F3C64]/80 backdrop-blur-xl border-y border-white/5 shadow-xl shadow-black/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Navigation Categories */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 text-sm font-bold rounded-full transition-all duration-500 whitespace-nowrap ${activeCategory === category
                  ? 'bg-[#0BAFB4] text-white shadow-[0_10px_20px_rgba(11,175,180,0.3)] scale-105'
                  : 'text-[#E7F7F8] hover:text-white hover:bg-white/5'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* View Toggles */}
          <div className="hidden md:flex items-center gap-4 bg-white/5 p-1.5 rounded-2xl border border-white/5">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2.5 rounded-xl transition-all duration-300 ${viewMode === 'grid' ? 'bg-[#0BAFB4] text-white' : 'text-[#E7F7F8] hover:text-[#E7F7F8]'}`}
            >
              <LayoutGrid size={20} strokeWidth={2.5} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2.5 rounded-xl transition-all duration-300 ${viewMode === 'list' ? 'bg-[#0BAFB4] text-white' : 'text-[#E7F7F8] hover:text-[#E7F7F8]'}`}
            >
              <List size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Portfolio Gallery Section ── */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            layout
            className={viewMode === 'grid'
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start"
              : "flex flex-col gap-8"
            }
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.95, filter: 'blur(20px)' }}
                  transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className={`${viewMode === 'grid'
                    ? 'lg:col-span-4'
                    : 'w-full'
                    }`}
                >
                  <Link href={`/portfolio/${project.id}`} className="block">
                    <div className={`group relative bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:bg-white/[0.04] p-3 ${viewMode === 'list' ? 'flex items-center gap-8' : ''
                      }`}>
                      {/* Project Image Container */}
                      <div className={`relative overflow-hidden rounded-[2rem] bg-slate-900 ${viewMode === 'grid' ? 'aspect-[16/10]' : 'w-48 aspect-square flex-shrink-0'
                        }`}>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover scale-110 group-hover:scale-125 transition-transform duration-1000 ease-[0.16, 1, 0.3, 1]"
                        />
                        {/* Interactive Hover Layer */}
                        <div className="absolute inset-0 bg-[#0BAFB4]/20 opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-sm" />

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <div className="w-16 h-16 rounded-full bg-white text-[#1F3C64] flex items-center justify-center shadow-2xl scale-0 group-hover:scale-100 transition-transform delay-100">
                            <ArrowUpLeft size={30} strokeWidth={2.5} />
                          </div>
                        </div>
                      </div>

                      {/* Project Information */}
                      <div className={`flex flex-col justify-between p-6 ${viewMode === 'list' ? 'flex-grow' : ''}`}>
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <span className="bg-[#0BAFB4]/10 text-[#0BAFB4] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-[#0BAFB4]/20">
                              {project.category}
                            </span>
                            <div className="h-px flex-grow bg-white/[0.05]" />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-black text-[#E7F7F8] tracking-tighter mb-4 group-hover:text-[#0BAFB4] transition-colors duration-500">
                            {project.title}
                          </h3>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex gap-2">
                            {project.tags.map(tag => (
                              <span key={tag} className="text-[#E7F7F8] text-xs font-semibold">{tag} •</span>
                            ))}
                          </div>
                          <span className="text-[#0BAFB4] group-hover:translate-x-[-8px] transition-transform duration-500 opacity-0 group-hover:opacity-100 font-black text-sm">التفاصيل</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>



      <Footer />
      <WhatsAppButton />
    </main>
  )
}
