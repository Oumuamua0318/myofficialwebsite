import { Suspense } from 'react'
import { AboutSmartAgent } from '@/components/about-smart-agent'

export default function AboutSmartAgentPage() {
  return (
    <Suspense fallback={<div className="h-screen" />}>
      <AboutSmartAgent />
    </Suspense>
  )
}
