"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { QrCode } from 'lucide-react'

interface ParticleProps {
  index: number
}

function Particle({ index }: ParticleProps) {
  return (
    <motion.div
      className="absolute rounded-full bg-white/20"
      style={{
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [
          `${Math.random() * 50 - 25}vh`,
          `${Math.random() * 50 - 25}vh`,
        ],
        x: [
          `${Math.random() * 50 - 25}vw`,
          `${Math.random() * 50 - 25}vw`,
        ],
        opacity: [0.2, 0.8, 0.2],
      }}
      transition={{
        duration: Math.random() * 15 + 10,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    />
  )
}

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
  
  const particles = Array.from({ length: 30 }, (_, i) => i)

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 py-20">
      {/* 粒子背景效果 */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {particles.map((index) => (
          <Particle key={index} index={index} />
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              联系我们，获取专属解决方案
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-blue-100 max-w-2xl mx-auto"
            >
              无论您有任何问题或需求，我们的团队都将竭诚为您提供专业支持和解决方案
            </motion.p>
          </div>
          
          <div className="flex justify-center">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              onClick={() => setShowQrCode(true)}
              className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-6 text-white font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                联系方式
                <QrCode className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </motion.button>
          </div>
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
              className="bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-gray-200 max-w-sm w-full"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">扫码添加微信咨询</h3>
                <p className="text-gray-600">我们的顾问将为您提供专业服务</p>
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
              
              <div className="text-center text-gray-700 text-sm">
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

