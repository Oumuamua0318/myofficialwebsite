import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const [showQrCode, setShowQrCode] = useState(false);
  const qrCodeRef = useRef<HTMLDivElement>(null);
  
  // 点击其他区域关闭二维码卡片
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (qrCodeRef.current && !qrCodeRef.current.contains(event.target as Node)) {
        setShowQrCode(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      
      <main className="pt-0 pb-16">
        {/* 页面标题区域 */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 py-20 mb-20">
          {/* 粒子背景效果 */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
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
            ))}
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
             >
            </motion.div>
          </div>
        </section>
        
        {/* 联系表单区域 */}
        <section className="container mx-auto px-4 md:px-6 mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                联系我们，获取更多服务细节
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                无论您有任何问题或需求，我们的团队都将竭诚为您提供专业支持和解决方案
              </p>
            </div>
            
            <div className="flex justify-center">
              <Button
                onClick={() => setShowQrCode(true)}
                variant="outline-glow"
                size="lg"
                className="group"
              >
                联系方式
                <i className="fa-solid fa-qrcode ml-2 group-hover:scale-110 transition-transform"></i>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      {/* 微信二维码卡片 - 半透明动画效果 */}
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
                 <img 
                  src="https://lf-code-agent.coze.cn/obj/x-ai-cn/259031078658/attachment/微信图片_2025-08-05_152412_131_20250805152424.jpg" 
                  alt="微信二维码" 
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
      
      <Footer />
    </div>
  );
}