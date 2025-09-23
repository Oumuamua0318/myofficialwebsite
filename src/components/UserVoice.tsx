"use client"

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// 用户声音数据
const userVoices = [
  {
    id: 1,
    name: "某宝马店总经理",
    position: "宝马4S店",
    content: "学习了提示词技巧，AI输出的结果靠谱很多，我们的自媒体账号运营效率高了很多…"
  },
  {
    id: 2,
    name: "某广汽传祺店DCC经理",
    position: "广汽传祺4S店 DCC经理",
    content: "我们利用AI来分析客户，给我们提供邀约策略和话术，培训完第二个月，我们团队邀约进店量提升15.5%，成交台次提升59%…"
  },
  {
    id: 3,
    name: "某玛莎拉蒂店市场经理",
    position: "玛莎拉蒂4S店 市场经理",
    content: "智能体太神奇了，以前让AI写文案，虽然也挺快，但是需要反复调，输出结果也不太稳定，但是智能体不一样了，5分钟就能做出稳定风格的文案，拿来几乎直接就能用…"
  },
  {
    id: 4,
    name: "某奔驰店总经理",
    position: "奔驰4S店 总经理",
    content: "用好AI其实就是写好提示词，我们很多市场方案都会用到AI，学过和没学过，我觉得差别是挺大的，培训时给的结构化提示词和模版确实能有更好的效果…"
  },
  {
    id: 5,
    name: "某零跑店投资人",
    position: "零跑汽车 投资人",
    content: "原来我们培养一个新人需要3个月才能上岗，我们用了AI陪练智能体之后，我这个月招的3个新人，3周就上岗卖车了，其中一个首月就卖了6台，我很满意…"
  },
  {
    id: 6,
    name: "某上汽大众店销售经理",
    position: "上汽大众4S店 销售经理",
    content: "AI陪练后邀约话术统一，顾问更自信，周转化率稳步提升，客户评价明显变好…"
  },
  {
    id: 7,
    name: "某比亚迪店市场经理",
    position: "比亚迪4S店 市场经理",
    content: "AI出图模板在手，节日海报两小时做完一周量，风格统一，互动率提升，外包成本直降…"
  },
  {
    id: 8,
    name: "某广汽丰田店售后总监",
    position: "广汽丰田4S店 售后总监",
    content: "智能客服7*24小时接待咨询，晚高峰也不堵，预约更顺畅，坐席压力小了，投诉率持续下降…"
  },
  {
    id: 9,
    name: "某雷克萨斯店客户运营经理",
    position: "雷克萨斯4S店 客户运营经理",
    content: "AI做标签与分层触达，社群活跃度明显回升，我希望能有智能体跟CRM系统打通，个性化对待每一位客户，效果会更好…"
  },
  {
    id: 10,
    name: "某福特店销售总监",
    position: "福特4S店 销售总监",
    content: "我们虽然有智能工牌，但是那个智能化其实不太高，试用了这个销售质量分析智能体，我感觉就像一个销售老师傅在现场倾听整个过程，结束就能提供反馈，比我们用的产品更厉害…"
  }
];

export default function UserVoice() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  // 响应式处理，根据屏幕宽度调整显示的卡片数量
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };

    // 初始化
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 上一张
  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? userVoices.length - visibleSlides : prev - 1
    );
  };

  // 下一张
  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev >= userVoices.length - visibleSlides ? 0 : prev + 1
    );
  };

  // 跳转到指定 slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // 触摸滑动相关状态
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // 计算触摸滑动距离
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }
    if (touchEnd - touchStart > 50) {
      prevSlide();
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 md:px-6">

        
        <div 
          ref={carouselRef}
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* 轮播卡片容器 */}
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
            >
               {userVoices.map((voice, index) => (
                 <div 
                   key={voice.id}
                   className={`min-w-[${100 / visibleSlides}%] px-4`}
                 >
                     <div className={`relative rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full p-8 flex flex-col max-w-sm mx-auto ${
                       index % 2 === 0 
                         ? 'bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700' 
                         : 'bg-gray-100 dark:bg-gray-750 border border-gray-200 dark:border-gray-700'
                     }`}>
                      {/* 大引号 */}
                      <div className={`absolute top-4 left-4 text-9xl font-bold ${
                        index % 2 === 0 
                          ? 'text-gray-200 dark:text-gray-700' 
                          : 'text-gray-300 dark:text-gray-600'
                      }`}>
                        "
                      </div>
                      
                      {/* 用户评价内容 */}
                       <p className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-8 flex-grow pt-12 leading-relaxed">
                        {voice.content}
                      </p>
                      
                      {/* 用户信息 */}
                      <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                        <h4 className="text-gray-900 dark:text-white font-medium">{voice.name}</h4>
                      </div>
                   </div>
                 </div>
              ))}
            </motion.div>
          </div>
          
          {/* 导航按钮 */}
          <div className="flex justify-center mt-12 space-x-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
              aria-label="上一页"
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
              aria-label="下一页"
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          
          {/* 指示器 */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(Math.ceil(userVoices.length / visibleSlides))].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  currentIndex === index 
                    ? "bg-blue-600 w-8" 
                    : "bg-gray-300 dark:bg-gray-600"
                )}
                aria-label={`转到第${index + 1}页`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}