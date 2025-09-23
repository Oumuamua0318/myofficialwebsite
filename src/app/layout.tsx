import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${siteConfig.name} - 助力汽车行业AI智能化转型`,
  description: siteConfig.description,
  keywords: ['AI智能体', '汽车行业', '智能化转型', '智能体开发', '汽车营销'],
  authors: [{ name: siteConfig.name }],
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteConfig.name,
    description: '助力汽车行业AI智能化转型',
    type: 'website',
    locale: 'zh_CN',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    site: siteConfig.links?.twitter,
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
