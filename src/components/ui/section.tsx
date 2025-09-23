import { cn } from "@/lib/utils"

interface SectionProps {
  className?: string
  children?: React.ReactNode
}

export function Section({ className, children }: SectionProps) {
  return (
    <section className={cn("relative", className)}>
      {children}
    </section>
  )
}
