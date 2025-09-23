import Image from "next/image";

export default function CompanyLogo() {
  return (
    <div className="w-10 h-10 relative rounded-lg overflow-hidden">
      <Image
        src="/Logo.png" // 使用您的Logo文件
        alt="灵犀智能体"
        width={40}
        height={40}
        className="object-contain rounded-lg"
      />
    </div>
  );
}
