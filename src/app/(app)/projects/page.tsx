import { ListProjects } from '@/components/projects'

export interface Project {
  id: string
  code: string
  preview: string
  createdAt: string
  description: string
  title: string
  thumb: {
    url: string
    width?: number
    height?: number
  }
  languages: string
  video: {
    providerUid: string
  } | null
}

export default async function Projects() {
  return (
    <div className="px-12 max-w-5xl w-full items-start justify-between flex-col text-sm flex pt-24 ">
      <ListProjects />
    </div>
  )
}
