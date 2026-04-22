import type { Metadata, Viewport } from 'next'
import { Tajawal, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700', '800', '900'],
  variable: '--font-tajawal',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '600', '800'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'ssv | نحن شريك نموك',
  description: 'نحن لسنا مجرد شركة تسويق... نحن شريك نمو، نعمل معك كفريقك الداخلي لنخطط، ننفذ، ونحقق نتائج قابلة للقياس.',
  generator: 'v0.app',
  keywords: ['وكالة تسويق', 'إنتاج مرئي', 'موشن جرافيك', 'تصوير احترافي', 'السعودية', 'marketing'],
}

export const viewport: Viewport = {
  themeColor: '#0F172A',
  width: 'device-width',
  initialScale: 1,
}

import { SmoothScroll } from '@/components/ssv/smooth-scroll'
import { Preloader } from '@/components/ssv/preloader'
import { MouseInteraction } from '@/components/ssv/mouse-interaction'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${manrope.variable} dark`}>
      <body className="font-sans antialiased bg-[#0F172A] text-[#F8FAFC]">
        <SmoothScroll>
          <Preloader />
          <MouseInteraction />
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </SmoothScroll>
      </body>
    </html>
  )
}
