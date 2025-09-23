import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '灵犀智能体工作室 - 助力汽车行业AI智能化转型',
  description: '为车企和经销商提供专业AI解决方案，结合行业最佳实践，加速智能化升级，创造卓越用户体验',
  keywords: ['AI智能体', '汽车行业', '智能化转型', '智能体开发', '汽车营销'],
  authors: [{ name: '灵犀智能体工作室' }],
  openGraph: {
    title: '灵犀智能体工作室',
    description: '助力汽车行业AI智能化转型',
    type: 'website',
    locale: 'zh_CN',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
