import { Suspense } from 'react'
import { ServiceSection } from '@/components/service-section'

export default function ServiceSectionPage() {
  return (
    <Suspense fallback={<div className="h-screen" />}>
      <ServiceSection />
    </Suspense>
  )
}
