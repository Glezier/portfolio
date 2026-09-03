export type ExperienceType =
  | 'education'
  | 'research'
  | 'competition'
  | 'professional'

export interface Experience {
  id: string
  type: ExperienceType
  title: string
  organization: string
  period: string
  description: string
  highlights?: string[]
  link?: {
    label: string
    url: string
  }
}