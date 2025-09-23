import { Suspense } from 'react'
import { ContactPage } from '@/components/contact-page'

export default function ContactPageRoute() {
  return (
    <Suspense fallback={<div className="h-screen" />}>
      <ContactPage />
    </Suspense>
  )
}
