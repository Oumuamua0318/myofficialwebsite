import Image from "next/image"
import { cn } from "@/lib/utils"

interface ScreenshotProps {
  srcLight: string
  srcDark: string
  alt: string
  width: number
  height: number
  className?: string
}

export default function Screenshot({
  srcLight,
  srcDark,
  alt,
  width,
  height,
  className
}: ScreenshotProps) {
  return (
    <div className={cn("relative", className)}>
      <Image
        src={srcLight}
        alt={alt}
        width={width}
        height={height}
        className="block dark:hidden w-full h-auto"
        priority
      />
      <Image
        src={srcDark}
        alt={alt}
        width={width}
        height={height}
        className="hidden dark:block w-full h-auto"
        priority
      />
    </div>
  )
}
