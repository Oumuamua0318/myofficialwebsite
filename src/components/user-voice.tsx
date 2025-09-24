"use client"

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface UserVoice {
  id: number
  name: string
  content: string
}

const userVoices: UserVoice[] = [
  {
    id: 1,
    name: "某宝马店总经理",
    content: "学习了提示词技巧，AI输出的结果靠谱很多，我们的自媒体账号运营效率高了很多…"
  },
  {
    id: 2,
    name: "某广汽传祺店DCC经理",
    content: "我们利用AI来分析客户，给我们提供邀约策略和话术，培训完第二个月，我们团队邀约进店量提升15.5%，成交台次提升59%…"
  },
  {
    id: 3,
    name: "某玛莎拉蒂店市场经理",
    content: "智能体太神奇了，以前让AI写文案，虽然也挺快，但是需要反复调，输出结果也不太稳定，但是智能体不一样了，5分钟就能做出稳定风格的文案，拿来几乎直接就能用…"
  },
  {
    id: 4,
    name: "某奔驰店总经理",
    content: "用好AI其实就是写好提示词，我们很多市场方案都会用到AI，学过和没学过，我觉得差别是挺大的，培训时给的结构化提示词和模版确实能有更好的效果…"
  },
  {
    id: 5,
    name: "某零跑店投资人",
    content: "原来我们培养一个新人需要3个月才能上岗，我们用了AI陪练智能体之后，我这个月招的3个新人，3周就上岗卖车了，其中一个首月就卖了6台，我很满意…"
  },
  {
    id: 6,
    name: "某上汽大众店销售经理",
    content: "AI陪练后邀约话术统一，顾问更自信，周转化率稳步提升，客户评价明显变好…"
  },
  {
    id: 7,
    name: "某比亚迪店市场经理",
    content: "AI出图模板在手，节日海报两小时做完一周量，风格统一，互动率提升，外包成本直降…"
  },
  {
    id: 8,
    name: "某广汽丰田店售后总监",
    content: "智能客服7*24小时接待咨询，晚高峰也不堵，预约更顺畅，坐席压力小了，投诉率持续下降…"
  },
  {
    id: 9,
    name: "某雷克萨斯店客户运营经理",
    content: "AI做标签与分层触达，社群活跃度明显回升，我希望能有智能体跟CRM系统打通，个性化对待每一位客户，效果会更好…"
  },
  {
    id: 10,
    name: "某福特店销售总监",
    content: "我们虽然有智能工牌，但是那个智能化其实不太高，试用了这个销售质量分析智能体，我感觉就像一个销售老师傅在现场倾听整个过程，结束就能提供反馈，比我们用的产品更厉害…"
  }
]

export function UserVoice() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleSlides, setVisibleSlides] = useState(3)
  const carouselRef = useRef<HTMLDivElement>(null)

  // 响应式处理，根据屏幕宽度调整显示的卡片数量
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setVisibleSlides(1)
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2)
      } else {
        setVisibleSlides(3)
      }
    }

    // 初始化
    handleResize()
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // 根据可见卡片数量计算页数与当前页
  const pageCount = Math.ceil(userVoices.length / visibleSlides)
  const currentPage = Math.floor(currentIndex / visibleSlides)

  // 上一页
  function prevSlide() {
    setCurrentIndex((prev) =>
      prev === 0 ? (pageCount - 1) * visibleSlides : prev - visibleSlides
    )
  }

  // 下一页
  function nextSlide() {
    setCurrentIndex((prev) =>
      prev >= (pageCount - 1) * visibleSlides ? 0 : prev + visibleSlides
    )
  }

  // 跳转到指定 slide
  function goToSlide(index: number) {
    setCurrentIndex(index * visibleSlides)
  }

  // 触摸滑动相关状态
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // 计算触摸滑动距离
  function handleTouchStart(e: React.TouchEvent) {
    setTouchStart(e.targetTouches[0].clientX)
  }

  function handleTouchMove(e: React.TouchEvent) {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 50) {
      nextSlide()
    }
    if (touchEnd - touchStart > 50) {
      prevSlide()
    }
  }

  return (
    <section id="voices" className="py-20 bg-background scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            用户声音
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-white/70"
          >
            听听我们的客户如何评价AI智能体解决方案带来的价值
          </motion.p>
        </div>

        <div 
          ref={carouselRef}
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* 轮播容器 */}
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
            >
              {userVoices.map((voice, index) => (
                <div 
                  key={voice.id}
                  className={`flex-shrink-0 px-4`}
                  style={{ width: `${100 / visibleSlides}%` }}
                >
                  <Card className="h-full p-8 flex flex-col border-blue-500/20 hover:border-blue-400/40 hover:shadow-md hover:shadow-blue-500/15 transition-all duration-300">
                    <CardContent className="flex flex-col h-full">
                      {/* 大引号 */}
                      <div className="text-6xl font-bold text-blue-400/30 mb-4">
                        "
                      </div>
                      
                      {/* 用户评价内容 */}
                      <p className="text-2xl text-white/90 mb-8 flex-grow leading-relaxed">
                        {voice.content}
                      </p>
                      
                      {/* 用户信息 */}
                      <div className="mt-auto pt-4 border-t border-white/10">
                        <h4 className="text-white font-medium">{voice.name}</h4>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* 导航按钮 */}
          <div className="flex justify-center mt-12 space-x-4">
            <Button
              onClick={prevSlide}
              variant="outline-gray"
              size="icon"
              className="w-12 h-12 rounded-full"
              aria-label="上一页"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              onClick={nextSlide}
              variant="outline-gray"
              size="icon"
              className="w-12 h-12 rounded-full"
              aria-label="下一页"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          {/* 指示器 */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(pageCount)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentPage === index 
                    ? "bg-blue-500 w-8 shadow-lg shadow-blue-500/25" 
                    : "bg-white/30 w-3 hover:bg-white/50"
                }`}
                aria-label={`转到第${index + 1}页`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}