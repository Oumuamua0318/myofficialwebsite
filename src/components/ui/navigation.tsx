"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigationItems = [
  { name: "首页", href: "/" },
  { name: "走进智能体", href: "/zou-jin-zhi-neng-ti" },
  { name: "服务板块", href: "/#services" },
  { name: "用户声音", href: "/#voices" },
  { name: "联系我们", href: "/#contact" },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center space-x-6">
      {navigationItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href
              ? "text-foreground"
              : "text-muted-foreground"
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
