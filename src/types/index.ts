export interface UserVoice {
  id: number
  name: string
  position: string
  content: string
}

export interface Service {
  id: number
  title: string
  briefDescription: string
  icon: string
  details: (string | { title: string; content: string })[]
  imageUrl: string
}

export interface CoreValue {
  title: string
  description: string
  icon: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface DevelopmentStep {
  step: string
  title: string
  description: string
  imageUrl: string
}
