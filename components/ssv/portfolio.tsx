'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowUpLeft } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const categories = ['الكل', 'موشن جرافيك', 'إنتاج مرئي', 'تصوير تجاري']

const projects = [
  {
    src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070',
    title: 'حملة إعلانية - موسم الرياض',
    category: 'إنتاج مرئي',
  },
  {
    src: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000',
    title: 'فيديو ترويجي - تطبيق مالي',
    category: 'موشن جرافيك',
  },
  {
    src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071',
    title: 'تصوير منتجات - علامة فاخرة',
    category: 'تصوير تجاري',
  },
  {
    src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062',
    title: 'فيلم وثائقي - رؤية 2030',
    category: 'إنتاج مرئي',
  },
  {
    src: 'https://images.unsplash.com/photo-1551817958-d9d86fb29431?q=80&w=2070',
    title: 'هوية بصرية متحركة',
    category: 'موشن جرافيك',
  },
  {
    src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070',
    title: 'جولة افتراضية - مشروع العلا',
    category: 'إنتاج مرئي',
  }
]

export function Portfolio() {
  const containerRef = useRef<HTMLElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState('الكل')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const filteredProjects = activeCategory === 'الكل'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  useGSAP(() => {
    if (!wrapperRef.current || !containerRef.current) return;

    let ctx = gsap.context(() => {
      const getScrollAmount = () => {
        let maxScroll = wrapperRef.current ? wrapperRef.current.scrollWidth - window.innerWidth : 0;
        return typeof maxScroll === "number" && maxScroll > 0 ? maxScroll + 100 : 0;
      }

      gsap.to(wrapperRef.current, {
        x: () => getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="portfolio" className="bg-[#1F3C64] h-screen relative overflow-hidden flex flex-col justify-center">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-10 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="text-[#0BAFB4] text-xs font-black tracking-[0.6em] uppercase mb-4 block opacity-60">
              Showcase
            </span>
            <h2 className="text-4xl md:text-8xl font-black text-[#E7F7F8] tracking-tighter sm:whitespace-nowrap">
              مشاريع نفخر بها
            </h2>
          </div>

          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat ? 'bg-[#0BAFB4] text-white' : 'bg-white/5 text-[#E7F7F8] hover:bg-white/10'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div ref={wrapperRef} className="flex gap-8 px-6 lg:px-12 w-max relative z-10">
        {filteredProjects.map((project, index) => (
          <Link
            key={index}
            href="/portfolio"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`project-card portfolio-card group relative bg-[#1F3C64] h-[45vh] w-[75vw] md:w-[38vw] lg:w-[22vw] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl transition-all duration-700 ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-40 scale-[0.98]' : 'opacity-100 scale-100'
              }`}
          >
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover scale-110 group-hover:scale-125 transition-transform duration-1000 ease-[0.16, 1, 0.3, 1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F3C64] via-[#1F3C64]/20 to-transparent opacity-80 transition-opacity group-hover:opacity-60" />

            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-right">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 justify-end">
                  <span className="text-[#0BAFB4] text-sm font-black tracking-widest uppercase">{project.category}</span>
                  <div className="h-0.5 w-12 bg-[#0BAFB4]" />
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-[#E7F7F8] tracking-tight leading-none mb-4 group-hover:text-[#0BAFB4] transition-colors duration-500">
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-[#E7F7F8] text-[#1F3C64] flex items-center justify-center shadow-2xl scale-0 group-hover:scale-100 transition-transform delay-100">
              <ArrowUpLeft size={30} strokeWidth={2.5} />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 w-full flex justify-center relative z-50">
        <Link
          href="/portfolio"
          className="inline-block border-2 border-[#E7F7F8] text-[#E7F7F8] px-10 py-3 rounded-full hover:bg-[#E7F7F8] hover:text-[#1F3C64] transition-all duration-500 font-black"
        >
          عرض التفاصيل
        </Link>
      </div>
    </section>
  )
}
