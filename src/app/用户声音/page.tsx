import { Suspense } from 'react'
import { UserVoicePage } from '@/components/user-voice-page'

export default function UserVoicePageRoute() {
  return (
    <Suspense fallback={<div className="h-screen" />}>
      <UserVoicePage />
    </Suspense>
  )
}
