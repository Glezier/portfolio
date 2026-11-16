export type ExperienceType =
  | 'education'
  | 'research'
  | 'competition'
  | 'professional'
  | 'event'

export interface ExperienceImage {
  src: string
  alt: string
}

export interface Experience {
  id: string
  type: ExperienceType
  title: string
  organization: string
  period: string
  description: string
  highlights?: string[]
  images?: ExperienceImage[]
  link?: {
    label: string
    url: string
  }
}