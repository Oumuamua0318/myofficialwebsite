"use client"

import { motion } from 'framer-motion'
import { Car, Brain, Users, Lightbulb } from 'lucide-react'

interface CoreValue {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const coreValues: CoreValue[] = [
  {
    title: "汽车行业垂直解决方案",
    description: "AI赋能项目很多，但极少有针对汽车垂类的专业解决方案，我们专注于汽车行业的AI应用落地。",
    icon: Car
  },
  {
    title: "资深AI技术积累",
    description: "创始团队从2023年初即开始使用AI大模型，并持续探索在汽车营销领域的落地应用，拥有丰富经验。",
    icon: Brain
  },
  {
    title: "顶尖专家团队",
    description: "团队包含AI专家、汽车行业咨询师以及国内一线大厂技术顾问，跨界组合带来创新视角。",
    icon: Users
  },
  {
    title: "行业深度理解",
    description: "了解行业需求、听得懂行业黑话，具备丰富的行业Know How经验，提供真正定制化的解决方案。",
    icon: Lightbulb
  }
]

interface CoreValueCardProps {
  value: CoreValue
  index: number
}

function CoreValueCard({ value, index }: CoreValueCardProps) {
  const IconComponent = value.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
    >
      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 text-white text-2xl">
        <IconComponent className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        {value.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {value.description}
      </p>
    </motion.div>
  )
}

export function CoreValues() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            为什么选择我们？
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            我们专注于为汽车行业提供最前沿的AI智能化解决方案，助力企业数字化转型
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <CoreValueCard key={index} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
