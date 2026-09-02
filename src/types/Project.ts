export interface Project {
  id: string
  title: string
  category: string
  description: string
  technologies: string[]
  featured: boolean
  image?: string
  imageAlt?: string
  githubUrl?: string
  liveUrl?: string
}