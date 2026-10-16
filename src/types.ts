export type Status = 'done' | 'ongoing' | 'planned'

export interface Category {
  id: string
  label: string
  icon: string
}

export interface Project {
  id: string
  title: string
  category: string
  status: Status
  summary: string
  places?: string[]
  scale?: string
  image?: string
  year?: number
}

export interface Plan {
  icon: string
  title: string
  text: string
  points: string[]
}