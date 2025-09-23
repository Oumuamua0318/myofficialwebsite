"use client"

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

export function HeroSection() {
  function scrollToServices() {
    const element = document.querySelector('#services')
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800">
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-white space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  leading-tight tracking-tight">
              助力汽车行业 <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                AI智能化转型
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-lg">
              为车企和经销商提供专业AI解决方案，结合行业最佳实践，加速智能化升级，创造卓越用户体验
            </p>
            
            <button 
              onClick={scrollToServices}
              className="inline-block group"
            >
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <span className="relative z-10 flex items-center gap-2">
                  探索解决方案
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </button>
          </motion.div>
          
          {/* Abstract geometric image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main geometric shape */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 shadow-xl transform rotate-3"></div>
              
              {/* Secondary shapes */}
              <div className="absolute -top-6 -left-6 w-64 h-64 rounded-xl bg-blue-500/30 backdrop-blur-sm border border-white/10 shadow-lg transform -rotate-6"></div>
              <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-purple-500/20 backdrop-blur-sm border border-white/10 shadow-lg transform rotate-12"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70 flex flex-col items-center"
        >
          <span className="text-sm mb-2">向下滚动探索更多</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </div>
    </section>
  )
}