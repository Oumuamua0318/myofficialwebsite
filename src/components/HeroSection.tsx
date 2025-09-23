import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient with animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 opacity-90 z-0">
        {/* Animated particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [
                  `${Math.random() * 100 - 50}vh`,
                  `${Math.random() * 100 - 50}vh`,
                ],
                x: [
                  `${Math.random() * 100 - 50}vw`,
                  `${Math.random() * 100 - 50}vw`,
                ],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-white space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
               助力汽车行业 <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                AI智能化转型
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-lg">
              为车企和经销商提供专业AI解决方案，结合行业最佳实践，加速智能化升级，创造卓越用户体验
            </p>
            
    <Link 
       href="/服务板块"
      className="inline-block group"
    >
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <span className="relative z-10 flex items-center gap-2">
          探索解决方案
          <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
    </Link>
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
              
              {/* Abstract data visualization lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Abstract%20data%20visualization%20with%20blue%20and%20purple%20hues%20representing%20AI%20technology%20in%20automotive%20industry&sign=d16ed36d2dc63e6c36ac4c03d7bef6d4" 
                  alt="AI智能汽车解决方案" 
                  className="w-full h-full object-cover opacity-80 mix-blend-lighten"
                />
              </div>
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
          <i className="fa-solid fa-chevron-down"></i>
        </motion.div>
      </div>
    </section>
  );
}