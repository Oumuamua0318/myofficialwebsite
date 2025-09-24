"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { QrCode } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function ContactSection() {
  const [showQrCode, setShowQrCode] = useState(false)
  const qrCodeRef = useRef<HTMLDivElement>(null)
  
  // 点击其他区域关闭二维码卡片
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (qrCodeRef.current && !qrCodeRef.current.contains(event.target as Node)) {
        setShowQrCode(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              联系我们，获取更多服务细节
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-white/70 max-w-2xl mx-auto"
            >
              无论您有任何问题或需求，我们的团队都将竭诚为您提供专业支持和解决方案
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Button
              onClick={() => setShowQrCode(true)}
              size="lg"
              variant="outline-gray"
              className="group"
            >
              联系方式
              <QrCode className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* 微信二维码卡片 */}
      <AnimatePresence>
        {showQrCode && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowQrCode(false)}>
            <motion.div
              ref={qrCodeRef}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700 max-w-sm w-full"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">扫码添加微信咨询</h3>
                <p className="text-gray-600 dark:text-gray-300">我们的顾问将为您提供专业服务</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md flex justify-center mb-6">
                <Image 
                  src="https://lf-code-agent.coze.cn/obj/x-ai-cn/259031078658/attachment/微信图片_2025-08-05_152412_131_20250805152424.jpg"
                  alt="微信二维码"
                  width={192}
                  height={192}
                  className="w-48 h-48 object-contain"
                />
              </div>
              
              <div className="text-center text-gray-700 dark:text-gray-300 text-sm">
                <p>微信号：lingxi_agent</p>
                <p className="mt-1">工作时间：周一至周五 9:00-18:00</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
