import { api } from '@/lib/api'
import { CardProject } from './card-project'

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

const getProjects = async (): Promise<Project[]> => {
  const response = await api.get('projects')
  return response.data.projects
}

export async function Projects() {
  const projects = await getProjects()

  if (!projects) return null

  const widthContainerProjects = 24 * (projects.length || 0) * 2

  return (
    <section className="z-10 w-full items-start justify-between flex-col text-sm flex overflow-hidden">
      <div
        className={`w-[${widthContainerProjects}rem] flex animate-[scroll_90s_linear_infinite] hover:aaaa`}
      >
        {projects &&
          projects.map((project) => (
            <CardProject key={project.id} project={project} />
          ))}

        {projects &&
          projects.map((project) => (
            <CardProject key={project.id} project={project} />
          ))}
      </div>
    </section>
  )
}
