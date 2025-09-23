import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

// FAQ数据
const faqData = [
  {
    question: "什么是智能体？",
    answer: "智能体是一种能够自主感知环境、做出决策并执行行动的AI系统。它可以理解复杂指令，持续学习用户需求，并独立完成特定领域的任务，就像一位不知疲倦的智能助手。在汽车行业，智能体可以应用于客户服务、销售咨询、数据分析等多个场景。"
  },
  {
    question: "智能体和大模型是什么关系，有什么区别？",
    answer: "大模型是智能体的基础能力来源，就像人的大脑；而智能体则是在大模型基础上，针对特定行业需求开发的专业应用，就像具备专业技能的人。区别在于：大模型通用性强但缺乏行业针对性，智能体则拥有专业知识、任务执行能力和持续进化机制，能够解决汽车行业的具体业务问题。"
  },
      {
        question: "哪里可以开发智能体？",
        answer: "是的，一些开源智能体平台是可以部署到企业本地的。国内有多个成熟的智能体开发平台可供选择，如扣子、元器、百炼等。这些平台提供直观的可视化开发界面和丰富的功能组件，让您无需复杂编程即可快速构建专属智能体。对于有数据安全和隐私要求的企业，您还可以选择部署私有平台如Dify到本地环境。值得一提的是，扣子平台近期已开放源代码，支持企业进行私有化部署，更好地满足个性化需求和数据管控要求。"
      },
  {
    question: "智能体平台可以部署到本地吗？",
    answer: "是的，我们的智能体平台支持多种部署方式。对于有数据安全和隐私保护特殊要求的企业客户，我们提供本地化部署方案，将智能体系统部署在企业自有服务器环境中。同时也支持云端部署和混合部署模式，满足不同企业的IT架构需求。"
  }
];

// 开发步骤数据
const developmentSteps = [
  {
    step: "第一步",
    title: "确定场景",
    description: "深入分析业务流程，识别AI智能体可以创造最大价值的具体应用场景。例如：汽车销售咨询、售后服务支持、客户投诉处理或市场数据分析等。明确场景边界和核心目标，为后续开发奠定基础。",
    imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/259031078658/attachment/CG动画图片生成_20250805160843.png"
  },
  {
    step: "第二步",
    title: "搜集行业最佳实践",
    description: "系统梳理汽车行业相关场景的最佳实践和标准流程，整合企业内部知识库、历史案例和专家经验。这一步是智能体具备专业能力的基础，确保解决方案符合行业规律和企业实际需求。",
  imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/259031078658/attachment/CG动画图片生成 (1)_20250805161601.png"
  },
  {
    step: "第三步",
    title: "拆解最佳实践，提炼SOP",
    description: "将复杂业务流程拆解为标准化步骤，提炼可复用的操作规范(SOP)。通过流程优化和知识结构化，形成智能体可执行的任务路径，确保AI系统能够高效、一致地完成工作。",
    imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/259031078658/attachment/CG动画图片生成 (2)_20250805162453.png"
  },
  {
    step: "第四步",
    title: "利用智能体平台进行开发制作",
    description: "基于灵犀智能体平台，配置对话流程、知识问答和任务执行能力。通过可视化界面拖拽组件，无需编程即可快速构建。平台提供汽车行业专属技能库和API接口，支持与现有系统无缝集成。",
  imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/259031078658/attachment/CG动画图片生成 (4)_20250805162628.png"
  },
  {
    step: "第五步",
    title: "优化测试上线",
    description: "通过多轮测试和实际场景验证，持续优化智能体性能和用户体验。采用灰度发布策略，逐步扩大应用范围，同时建立监控和反馈机制，确保智能体持续满足业务需求并不断进化。",
  imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/259031078658/attachment/CG动画图片生成 (3)_20250805162756.png"
  }
];

export default function AboutSmartAgent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showQrCode, setShowQrCode] = useState(false);
  const qrCodeRef = useRef<HTMLDivElement>(null);
  
  // 监听滚动事件，用于导航栏样式变化
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    // 点击外部区域关闭二维码卡片
    const handleClickOutside = (event: MouseEvent) => {
      if (qrCodeRef.current && !qrCodeRef.current.contains(event.target as Node)) {
        setShowQrCode(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 处理FAQ展开/折叠
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                走进智能体
              </h1>
              <p className="text-xl text-blue-100">
                探索AI智能体如何重塑汽车行业，开启智能化转型新篇章
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* 智能体定义部分 */}
        <section className="container mx-auto px-4 md:px-6 mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                智能体的定义
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                智能体是一种能够理解环境、自主决策并执行任务的高级AI系统。它不仅仅是简单的聊天机器人，而是具备专业知识、任务执行能力和持续学习能力的数字化助手。
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                在汽车行业，智能体可以像经验丰富的行业专家一样，处理销售咨询、售后服务、数据分析等复杂任务，为车企和经销商创造实实在在的业务价值。
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800"
            >
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=AI%E6%99%BA%E8%83%BD%E4%BD%93%E6%A6%82%E5%BF%B5%E5%9B%BE%EF%BC%8C%E6%B1%BD%E8%BD%A6%E8%A1%8C%E4%B8%9A%E5%BA%94%E7%94%A8%EF%BC%8C%E7%A7%91%E6%8A%80%E9%A3%8E%E6%A0%BC%EF%BC%8C%E8%93%9D%E8%89%B2%E7%B4%AB%E8%89%B2%E6%B8%90%E5%8F%98&sign=aab06a20515325d6c50b2161ebef8436" 
                alt="智能体定义示意图" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </section>
        
        {/* 智能体价值部分 */}
        <section className="bg-gray-50 dark:bg-gray-800/50 py-24 mb-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-2 md:order-1 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800"
              >
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=AI%E6%99%BA%E8%83%BD%E4%BD%93%E4%BB%B7%E5%80%BC%EF%BC%8C%E6%B1%BD%E8%BD%A6%E8%A1%8C%E4%B8%9A%EF%BC%8C%E6%95%88%E7%8E%87%E6%8F%90%E5%8D%87%EF%BC%8C%E7%A7%91%E6%8A%80%E9%A3%8E%E6%A0%BC&sign=7085d700dd94bcfff8d3a606c9cdd105" 
                  alt="智能体价值示意图" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
               
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  智能体的价值
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  为什么汽车行业需要智能体？
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-blue-500 mt-1 mr-3 text-xl"></i>
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>解决特定业务问题</strong> - AI智能体通过预设标准和流程，可高效完成特定的任务（如生成营销活动文案、周报整理、分析报告等）。
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-blue-500 mt-1 mr-3 text-xl"></i>
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>维护核心竞争力</strong> - 智能体封装了企业对业务的独特理解和标准（如特定文案结构、沟通话术），形成难以复制的壁垒。通用提示词或工具无法替代这种基于企业经验的定制化智能体。
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-blue-500 mt-1 mr-3 text-xl"></i>
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>稳定执行与标准化输出</strong> - 智能体确保任务执行不受人员技能差异影响。例如，4S店的销售流程拆解后，通过智能体辅助邀约和话术优化，即使新手销售也能快速上手，减少培训成本。
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-blue-500 mt-1 mr-3 text-xl"></i>
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>数据沉淀与持续优化</strong> - 智能体在使用中不断积累数据（如客户反馈、方案模板），迭代过程即企业认知升级的过程。
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-blue-500 mt-1 mr-3 text-xl"></i>
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>降本增效</strong> - 智能体能将原有手工流程自动化，显著降低成本。
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* 开发步骤部分 */}
        <section className="container mx-auto px-4 md:px-6 mb-24">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="text-center max-w-3xl mx-auto mb-16"
           >
             <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
               人人都可以成为智能体的开发者，只要掌握开发步骤和一定的开发技巧，你就可以在自己的业务场景中创造各种智能体了，它们会成为你的数智员工，帮助你降本增效。
             </p>
             <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
               智能体的开发步骤
            </h2>

          </motion.div>
          
          <div className="space-y-24">
            {developmentSteps.map((step, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="order-2 md:order-1"
                >
                  <div className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + 0.1 * index }}
                  viewport={{ once: true }}
                  className={`order-1 md:order-2 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 ${index % 2 === 1 ? 'md:ml-auto' : 'md:mr-auto'}`}
                  style={{ maxWidth: '500px' }}
                 >
                       <img 
                         src={step.imageUrl}
                    alt={`${step.title}示意图`} 
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </section>
        
        {/* FAQ部分 */}
        <section className="container mx-auto px-4 md:px-6 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              常见问题解答
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              关于智能体的常见疑问，我们为您一一解答
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className="mb-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium text-gray-900 dark:text-white">
                    {item.question}
                  </span>
                  <i className={`fa-solid ${openFaqIndex === index ? 'fa-minus' : 'fa-plus'} text-blue-500 transition-transform`}></i>
                </button>
                
                <motion.div
                  initial={{ maxHeight: 0, opacity: 0 }}
                  animate={{ 
                    maxHeight: openFaqIndex === index ? '500px' : 0,
                    opacity: openFaqIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
                    {item.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </section>
        
        {/* CTA部分 */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-20 mb-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                准备好开启智能体之旅了吗？
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                联系我们，获取专属汽车行业智能体解决方案
              </p>
               <button
                 onClick={() => setShowQrCode(true)}
                 className="inline-block group"
               >
                 <div className="relative overflow-hidden rounded-lg bg-white px-8 py-4 text-blue-600 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
                   <span className="relative z-10 flex items-center gap-2">
                     联系我们
                     <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                   </span>
                   <div className="absolute inset-0 bg-gray-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                 </div>
               </button>
            </motion.div>
          </div>
        </section>
      </main>
      
       <Footer />
      
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
          src="https://lf-code-agent.coze.cn/obj/x-ai-cn/259031078658/attachment/微信图片_2025-08-05_152412_131_20250805170136.jpg" 
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
    </div>
  );
}