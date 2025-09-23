import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface AdvantageCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

function AdvantageCard({ imageSrc, title, description }: AdvantageCardProps) {
  return (
    <Card className="p-0 hover:scale-105 transition-transform duration-300 overflow-hidden">
      <div className="relative h-32 w-full">
        <Image 
          src={imageSrc} 
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-white/70 leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}

export default function WhyChooseUs() {
  const advantages = [
    {
      imageSrc: "/chooseus1.png",
      title: "汽车行业垂直解决方案",
      description: "AI赋能项目很多，但极少有针对汽车垂类的专业解决方案，我们专注于汽车行业的AI应用落地。"
    },
    {
      imageSrc: "/chooseus2.png",
      title: "资深AI技术积累",
      description: "创始团队从2023年初即开始使用AI大模型，并持续探索在汽车营销领域的落地应用，拥有丰富经验。"
    },
    {
      imageSrc: "/chooseus3.png",
      title: "顶尖专家团队",
      description: "团队包含AI专家、汽车行业咨询师以及国内一线大厂技术顾问，跨界组合带来创新视角。"
    },
    {
      imageSrc: "/choosus4.png",
      title: "行业深度理解",
      description: "了解行业需求、听得懂行业黑话，具备丰富的行业Know How经验，提供真正定制化的解决方案。"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            为什么选择我们？
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            我们专注于为汽车行业提供最前沿的AI智能化解决方案，助力企业数字化转型
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              imageSrc={advantage.imageSrc}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
