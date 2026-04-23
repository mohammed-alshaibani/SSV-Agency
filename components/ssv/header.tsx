'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { SSVLogo } from './ssv-logo'

const navLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '#about', label: 'من نحن' },
  {
    label: 'خدماتنا',
    dropdown: [
      { href: '/services/strategy', label: 'الاستراتيجية (Strategy)' },
      { href: '/services/support', label: 'التنفيذ (Support)' },
      { href: '/services/value', label: 'القياس والتطوير (Value)' },
    ]
  },
  { href: '#portfolio', label: 'أعمالنا' },
  { href: '#testimonials', label: 'الآراء' },
  { href: '#partners', label: 'شركاؤنا' },
  { href: '/offers', label: 'العروض' },
  { href: '/contact', label: 'تواصل بنا' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
        setIsMobileMenuOpen(false)
      }
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'glass-dark border-b border-white/5 shadow-2xl'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <SSVLogo className="h-16 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-5">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => link.dropdown && setIsServicesOpen(true)}
                  onMouseLeave={() => link.dropdown && setIsServicesOpen(false)}
                >
                  {link.dropdown ? (
                    <div className="flex items-center gap-1 cursor-pointer py-4 text-sm font-medium transition-colors duration-300 hover:text-[#0BAFB4] text-[#E7F7F8]">
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />

                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 w-64 bg-[#1F3C64]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl"
                          >
                            <div className="flex flex-col gap-2">
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="p-3 rounded-xl hover:bg-[#0BAFB4]/10 hover:text-[#0BAFB4] transition-all text-right text-sm"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href!)}
                      className="text-sm font-medium transition-colors duration-300 hover:text-[#0BAFB4] text-[#E7F7F8]"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact"
                className="btn-accent px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 text-[#E7F7F8]"
              >
                <Phone className="w-4 h-4" />
                إحجز استشارة مجانية
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 transition-colors text-[#E7F7F8]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-[#1F3C64]/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="absolute top-0 left-0 w-80 h-full bg-[#1F3C64] shadow-2xl"
            >
              <div className="p-6 pt-24 text-right">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <div key={link.label}>
                      {link.dropdown ? (
                        <div className="flex flex-col gap-2">
                          <button
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className="flex justify-between items-center text-lg font-black text-[#0BAFB4] pr-2 mb-2 w-full text-right transition-colors"
                          >
                            <span>{link.label}</span>
                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {isServicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden flex flex-col gap-2"
                              >
                                {link.dropdown.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false)
                                      setIsServicesOpen(false)
                                    }}
                                    className="text-base font-medium text-[#E7F7F8]/80 hover:text-[#0BAFB4] transition-colors py-2 pr-6 border-r border-[#0BAFB4]/30"
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <a
                          href={link.href}
                          onClick={(e) => {
                            handleNavClick(e, link.href!)
                            setIsMobileMenuOpen(false)
                          }}
                          className="text-lg font-medium text-[#E7F7F8] hover:text-[#0BAFB4] transition-colors py-2 border-b border-white/5 block"
                        >
                          {link.label}
                        </a>
                      )}
                    </div>
                  ))}
                </nav>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-accent w-full mt-8 px-6 py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 text-[#E7F7F8]"
                >
                  <Phone className="w-4 h-4" />
                  إحجز استشارة مجانية
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
