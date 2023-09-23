'use client'

import { Project } from '@/(app)/projects/page'
import { api } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from './ui/skeleton'
import { CardProject } from './card-project'

const getProjects = async (): Promise<Project[]> => {
  const response = await api.get('projects/')
  return response.data.projects
}

export function ListProjects() {
  const { data: projects, isLoading } = useQuery<Project[]>(
    ['Projects'],
    async (): Promise<Project[]> => {
      const response = await getProjects()
      return response
    },
  )

  if (isLoading) {
    return (
      <div className="grid gap-4 grid-cols-2 w-full mt-12">
        <Skeleton className="w-full rounded-2xl h-96" />
        <Skeleton className="w-full rounded-2xl h-96" />
        <Skeleton className="w-full rounded-2xl h-96" />
        <Skeleton className="w-full rounded-2xl h-96" />
      </div>
    )
  }

  if (!projects) {
    return <h1>Nao foi possível buscar os projetos</h1>
  }

  return (
    <div className="max-w-5xl w-full items-start justify-between flex-col text-sm flex">
      <ul className="grid lg:grid-cols-2 gap-4">
        {projects.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </ul>
    </div>
  )
}
