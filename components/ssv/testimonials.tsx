'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const reviews = [
    {
        name: 'أحمد العتيبي',
        role: 'رئيس تنفيذي، شركة ريادة',
        content: 'تجربة استثنائية مع فريق SSV. حولوا رؤيتنا الرقمية إلى واقع ملموس وفاقوا توقعاتنا في النتائج.',
        rating: 5
    },
    {
        name: 'سارة القحطاني',
        role: 'مديرة تسويق، ريف العالمية',
        content: 'الالتزام بالمواعيد والجودة العالية في التنفيذ هو ما يميزهم. شريك موثوق للنجاح المسستمر.',
        rating: 5
    },
    {
        name: 'محمد الدوسري',
        role: 'مؤسس ستارت أب إكس',
        content: 'خبرة واسعة في تحليل السوق وبناء الاستراتيجيات. زادت مبيعاتنا بنسبة 40% بعد التعاون معهم.',
        rating: 5
    }
]

export function Testimonials() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section ref={ref} id="testimonials" className="bg-[#1F3C64] py-24 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#0BAFB4] text-sm font-bold tracking-wider mb-4 block uppercase leading-none">
                        أراء العملاء
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-[#E7F7F8]">
                        قصص نجاح شركائنا
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-[#1F3C64] p-8 rounded-2xl relative border border-white/5 hover:border-[#0BAFB4]/30 transition-all duration-300 group shadow-xl shadow-black/20"
                        >
                            <Quote className="absolute top-6 left-6 w-10 h-10 text-[#E7F7F8]/5 group-hover:text-[#0BAFB4]/10 transition-colors duration-500" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-[#0BAFB4] text-[#0BAFB4]" />
                                ))}
                            </div>

                            <p className="text-[#E7F7F8] text-lg leading-relaxed mb-8 italic">
                                "{review.content}"
                            </p>

                            <div>
                                <h4 className="text-[#E7F7F8] font-bold text-lg">{review.name}</h4>
                                <p className="text-[#0BAFB4] text-sm">{review.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
