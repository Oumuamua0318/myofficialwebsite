import { cn } from "@/lib/utils"

interface GlowProps {
  variant?: "top" | "bottom" | "left" | "right" | "center"
  className?: string
}

export default function Glow({ variant = "center", className }: GlowProps) {
  const getGradientClass = () => {
    switch (variant) {
      case "top":
        return "bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent"
      case "bottom":
        return "bg-gradient-to-t from-blue-500/20 via-purple-500/20 to-transparent"
      case "left":
        return "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-transparent"
      case "right":
        return "bg-gradient-to-l from-blue-500/20 via-purple-500/20 to-transparent"
      case "center":
      default:
        return "bg-gradient-radial from-blue-500/20 via-purple-500/20 to-transparent"
    }
  }

  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 blur-3xl",
        getGradientClass(),
        className
      )}
    />
  )
}
