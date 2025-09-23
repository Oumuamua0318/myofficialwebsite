"use client"

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Lightbulb, Bot, Server, Cpu } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

// 服务数据
const services = [
  {
    id: 1,
    title: "AI 认知与赋能（培训&工作坊）",
    briefDescription: "提升团队AI素养，打造持续创新能力。面向仍处起步阶段的汽车企业，提供系统化培训与咨询，帮助快速理解AI价值并制定落地路径。",
    icon: Lightbulb,
    imageSrc: "/weservice1.png",
    details: [
      "提升团队AI素养，打造持续创新能力。面向仍处起步阶段的汽车企业，提供系统化培训与咨询，帮助快速理解AI价值并制定落地路径。",
      {
        title: "AI基础认知课程（1-2h）",
        content: "面向管理层与骨干，讲解大模型（LLM）原理、基础概念、数据与训练方法、汽车营销/服务的典型应用与边界，结合案例明确'能做/不能做/业务价值'。"
      },
      {
        title: "提示词工程工作坊（0.5-1天）",
        content: "面向各部门员工，实战编写与优化Prompt；完成日常工作中的常用模板，掌握让AI稳定产出有用结果的方法。"
      },
      {
        title: "AI智能体工作坊（2天1夜）",
        content: "从需求分析到原型开发，完成1个贴合营销/客服的智能体原型（含调试与评测），提升团队自建能力。"
      },
      {
        title: "新媒体运营 × AI 绘画实战课（2天）",
        content: "面向市场与新媒体团队，掌握AI图片、海报生成技巧（文生图/图生图）与模板化工作流，实现多平台高效产出、降本增效。"
      },
      {
        title: "专项咨询与规划",
        content: "梳理流程与数据资产，识别可落地环节，制定路线图与KPI；提供隐私与合规建议（数据分级/本地化必要性等）。"
      }
    ],
  },
  {
    id: 2,
    title: "智能体与应用定制开发",
    briefDescription: "定制大模型能力，打造专属AI应用。提供针对汽车行业的定制化智能体开发服务。",
    icon: Bot,
    imageSrc: "/weservice2.png",
    details: [
      "定制大模型能力，打造专属AI应用。提供针对汽车行业的定制化智能体开发服务。",
      {
        title: "智能体开发",
        content: "基于垂直领域知识和业务流程，开发定制的 AI 智能体。例如，为经销商打造自媒体运营助手、营销助手、销售助理 Bot、客户服务 Bot、内部知识问答 Bot 等。这些智能体支持多轮对话、一键生成、写入数据库等复杂任务，帮助团队降本增效。"
      },
      {
        title: "AI应用开发",
        content: "基于核心业务目标与客户旅程，构建可即用的 AI 应用模块。例如，智能获客、智能客服、培训陪练、营销自动化、内部知识门户等。这些应用可接入官网/小程序/公众号/自媒体账号，提高工作效率和客户响应，获得更高的客户满意，提升销售转化率。"
      }
    ]
  },
  {
    id: 3,
    title: "AI平台本地部署与集成",
    briefDescription: "构建专属AI能力平台，保障数据安全与系统连通。",
    icon: Server,
    imageSrc: "/weservice3.png",
    details: [
      "构建专属AI能力平台，保障数据安全与系统连通。",
      {
        title: "平台部署",
        content: "落地开源智能体平台（如 Coze、Dify 等），接入企业知识库、对话流程与插件管理；支持本地/私有云，数据私有、低延迟。"
      },
      {
        title: "系统集成与API/插件",
        content: "对接 CRM/ERP/DMS/工单/消息通道等，开发API与工作流连接件，让AI无缝融入官网/公众号/小程序/企业系统等渠道。"
      }
    ]
  },
  {
    id: 4,
    title: "智能硬件开发（采集终端、质检与智能展厅等）",
    briefDescription: "软硬一体，拓展AI在现场的数据与交互能力。",
    icon: Cpu,
    imageSrc: "/weservice4.png",
    details: [
      "软硬一体，拓展AI在现场的数据与交互能力。",
      {
        title: "销售过程质检与辅导",
        content: "佩戴式录音/摄像＋会话分析，对话术、流程与情绪进行质检与改进建议，实现高覆盖率的质量管理与即时辅导。"
      },
      {
        title: "智能展厅与导购",
        content: "客流与驻留分析、交互大屏/AR导购，识别关注点并优化展车布局，打造沉浸式、数据驱动的体验。"
      },
      {
        title: "车载与售后智能终端",
        content: "接待区语音助手自动建单；试驾行为分析辅助个性化推荐；沉淀数据用于服务与营销优化。"
      }
    ]
  }
]

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

interface ServiceCardProps {
  service: typeof services[0]
  index: number
  onViewDetails: (id: number) => void
}

function ServiceCard({ service, index, onViewDetails }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="p-0 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 h-full flex flex-col border-blue-500/30 hover:border-blue-400/50 overflow-hidden">
        <div className="relative h-36 w-full">
          <Image src={service.imageSrc} alt={service.title} fill className="object-cover" />
        </div>
        <CardContent className="flex-grow flex flex-col p-6">
          <h3 className="text-xl font-semibold text-white mb-3">
            {service.title}
          </h3>
          <p className="text-white/70 leading-relaxed mb-6 flex-grow">
            {service.briefDescription}
          </p>
          <div className="mt-auto pt-4">
            <Button
              onClick={() => onViewDetails(service.id)}
              variant="outline-glow"
              className="w-full"
            >
              查看详情
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ServiceSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  function handleViewDetails(serviceId: number) {
    setSelectedService(serviceId)
  }

  function handleBack() {
    setSelectedService(null)
  }

  // 选中服务变化时，滚动到区块顶部，避免视口停留在底部
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [selectedService])

  const currentService = selectedService 
    ? services.find(service => service.id === selectedService) 
    : null

  const particles = Array.from({ length: 30 }, (_, i) => i)

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-background scroll-mt-24 md:scroll-mt-28">
      {/* 页面标题区域 */}
      <div className="container mx-auto px-4 md:px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            我们的服务
          </h2>
          <p className="text-xl text-white/70">
            为汽车行业提供全方位AI解决方案，助力企业智能化转型
          </p>
        </motion.div>
      </div>
      
      {/* 服务卡片区域或详情区域 */}
      <div className="container mx-auto px-4 md:px-6">
        {!selectedService ? (
          // 服务卡片网格
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        ) : (
          // 服务详情区域
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-6 md:p-8 border-blue-500/30 shadow-lg shadow-blue-500/20">
              <CardContent>
                <div className="flex justify-between items-center mb-6">
                  <Button
                    onClick={handleBack}
                    variant="outline-glow"
                    className="inline-flex items-center"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    返回服务列表
                  </Button>
                </div>
                
                {currentService && (
                  <>
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mr-4 text-white">
                        <currentService.icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-3xl font-bold text-white">
                        {currentService.title}
                      </h3>
                    </div>
                    
                    <div className="prose prose-lg max-w-none">
                      <p className="text-white/90 mb-8">
                        {typeof currentService.details[0] === 'string' ? currentService.details[0] : ''}
                      </p>
                      
                      <div className="space-y-8">
                        {currentService.details.slice(1).map((item: any, index: number) => (
                          <Card key={index} className="p-6 border-blue-500/20 hover:border-blue-400/40 hover:shadow-md hover:shadow-blue-500/15 transition-all duration-300">
                            <CardContent>
                              <h4 className="text-xl font-semibold text-white mb-3">
                                {item.title}
                              </h4>
                              <p className="text-white/70">
                                {item.content}
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                    
                    {currentService.id < services.length && (
                      <div className="flex justify-end mt-8">
                        <Button
                          onClick={() => handleViewDetails(currentService.id + 1)}
                          variant="outline-glow"
                          className="inline-flex items-center"
                        >
                          下一页
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  )
}