import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import CompanyLogo from '@/components/logos/company-logo'

interface FooterLink {
  name: string
  path: string
}

const footerLinks: FooterLink[] = [
  { name: '首页', path: '/' },
  { name: '走进智能体', path: '/zou-jin-zhi-neng-ti' },
  { name: '服务板块', path: '/#services' },
  { name: '用户声音', path: '/#voices' },
  { name: '联系我们', path: '/#contact' }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <CompanyLogo />
              <span className="text-xl font-bold">灵犀智能体工作室</span>
            </div>
            <p className="text-gray-400 mb-6">
              助力汽车行业AI智能化转型<br />
              为车企和经销商提供专业AI解决方案
            </p>
            {/* 社交图标已移除 */}
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">快速链接</h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">联系我们</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-gray-400 mt-1 h-4 w-4 flex-shrink-0" />
                <span className="text-gray-400">杭州滨江高新区物联网小镇</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-gray-400 h-4 w-4 flex-shrink-0" />
                <span className="text-gray-400">18652076653</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-gray-400 h-4 w-4 flex-shrink-0" />
                <span className="text-gray-400">guanyq01@insightmc.com.cn</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} 灵犀智能体. 保留所有权利.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">隐私政策</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">服务条款</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">法律声明</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}