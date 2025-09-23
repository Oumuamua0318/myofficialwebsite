import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UserVoice from '@/components/UserVoice';

export default function UserVoicePage() {
  // 页面滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      
       <main className="pt-0 pb-16">
        {/* 页面标题区域 */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 py-20 mb-16">
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                用户声音
              </h1>
              <p className="text-xl text-blue-100">
                听听我们的客户如何评价AI智能体解决方案带来的价值
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* 用户声音组件 */}
        <UserVoice />
      </main>
      
      <Footer />
    </div>
  );
}