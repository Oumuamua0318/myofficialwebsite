import { cn } from "@/lib/utils"

interface MockupProps {
  type?: "desktop" | "mobile" | "responsive"
  className?: string
  children?: React.ReactNode
}

export function Mockup({ type = "desktop", className, children }: MockupProps) {
  const getMockupClass = () => {
    switch (type) {
      case "mobile":
        return "max-w-xs mx-auto"
      case "responsive":
        return "w-full"
      case "desktop":
      default:
        return "w-full max-w-4xl mx-auto"
    }
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border bg-background shadow-lg",
        getMockupClass(),
        className
      )}
    >
      {children}
    </div>
  )
}

interface MockupFrameProps {
  size?: "small" | "medium" | "large"
  className?: string
  children?: React.ReactNode
}

export function MockupFrame({ size = "medium", className, children }: MockupFrameProps) {
  const getSizeClass = () => {
    switch (size) {
      case "small":
        return "max-w-2xl"
      case "large":
        return "max-w-6xl"
      case "medium":
      default:
        return "max-w-4xl"
    }
  }

  return (
    <div
      className={cn(
        "relative mx-auto",
        getSizeClass(),
        className
      )}
    >
      {children}
    </div>
  )
}
