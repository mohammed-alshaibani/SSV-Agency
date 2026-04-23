'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { Play, ArrowUpLeft } from 'lucide-react'
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
    title: 'تصوير معماري - مشروع نيوم',
    category: 'تصوير تجاري',
  },
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

    // We only want to pin and horizontal scroll if the screen is large enough and has scrollable width
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card');

      // Calculate how much we need to move horizontally
      // For RTL, X moves positively to show content that is overflowing to the left
      const getScrollAmount = () => {
        let maxScroll = wrapperRef.current ? wrapperRef.current.scrollWidth - window.innerWidth : 0;
        return typeof maxScroll === "number" && maxScroll > 0 ? maxScroll + 100 : 0; // +100 for some padding
      }

      const tween = gsap.to(wrapperRef.current, {
        x: () => getScrollAmount(), // for RTL this should be positive
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1, // smooth scrubbing
          invalidateOnRefresh: true,
          end: () => `+=${getScrollAmount()}`,
        }
      });

      // Velocity-based Skew Effect
      const proxy = { skew: 0 };
      const skewSetter = gsap.quickSetter('.project-card', 'skewX', 'deg');
      const clamp = gsap.utils.clamp(-8, 8); // clamp the skew

      ScrollTrigger.create({
        onUpdate: (self) => {
          let velocity = self.getVelocity();
          // Adjust velocity multiplier based on scroll speed you prefer
          let skewAmount = clamp(velocity / -300);

          if (Math.abs(skewAmount) > Math.abs(proxy.skew)) {
            proxy.skew = skewAmount;
            gsap.to(proxy, {
              skew: 0,
              duration: 0.8,
              ease: "power3",
              overwrite: true,
              onUpdate: () => skewSetter(proxy.skew)
            });
          }
        }
      });

      // Simple Parallax for images inside the cards during horizontal scroll
      cards.forEach((card: any) => {
        const img = card.querySelector('.parallax-img');
        if (img) {
          gsap.to(img, {
            x: -50, // Move image slightly in opposite direction
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              containerAnimation: tween,
              start: "left right",
              end: "right left",
              scrub: true,
            }
          });
        }
      });

    }, containerRef);
    return () => ctx.revert();
  }, { dependencies: [filteredProjects], scope: containerRef });

  return (
    <section ref={containerRef} id="portfolio" className="bg-[#1F3C64] py-24 lg:py-32 overflow-hidden h-screen flex flex-col justify-center">
      <div className="w-full px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <span className="inline-block text-[#0BAFB4] text-sm font-bold tracking-wider mb-4">
              أعمالنا
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#E7F7F8]">
              مشاريع نفخر بها
            </h2>
            <div className="mt-8">
              <Link
                href="/portfolio"
                className="inline-block border-2 border-[#E7F7F8] text-[#E7F7F8] px-10 py-3 rounded-full hover:bg-[#E7F7F8] hover:text-[#1F3C64] transition-all duration-500 font-black pointer-events-auto"
              >
                عرض التفاصيل
              </Link>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${activeCategory === category
                  ? 'bg-[#0BAFB4] text-[#E7F7F8]'
                  : 'bg-[#1F3C64] text-[#E7F7F8] hover:text-[#E7F7F8] hover:bg-[#1F3C64]'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontally scrolling wrapper */}
      <div ref={wrapperRef} className="flex gap-8 px-6 lg:px-8 w-max">
        {filteredProjects.map((project, index) => (
          <div
            key={project.title}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`project-card portfolio-card group relative bg-[#1F3C64] rounded-xl overflow-hidden cursor-pointer w-[80vw] md:w-[45vw] lg:w-[30vw] flex-shrink-0 shadow-2xl transition-all duration-700 ease-[0.16,1,0.3,1] ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-40 scale-[0.98] grayscale' : 'opacity-100 scale-100 grayscale-0'
              }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="parallax-img object-cover scale-110 group-hover:scale-125 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#1F3C64]/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                {/* Content handled by Custom Cursor 'عرض' */}
              </div>
            </div>

            {/* Project Info */}
            <div className="p-5 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-[#E7F7F8] mb-1 group-hover:text-[#0BAFB4] transition-colors">
                  {project.title}
                </h3>
                <span className="text-sm text-[#E7F7F8]">{project.category}</span>
              </div>
              <ArrowUpLeft className="w-5 h-5 text-[#E7F7F8] group-hover:text-[#0BAFB4] transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
