'use client'

import { api } from '@/lib/api'

import { useQuery } from '@tanstack/react-query'
import { Skeleton } from '../ui/skeleton'
import { CardProject } from '../card-project'

import { Project } from '@/(app)/projects/page'

const getProjects = async (): Promise<Project[]> => {
  const response = await api.get('projects/home')
  return response.data.projects
}

export function MainProjects() {
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
    return <h1 className="mt-4">Nao foi possível buscar os projetos</h1>
  }

  return (
    <div className="grid lg:grid-cols-2 mt-12 gap-2">
      {projects.map((project) => (
        <CardProject key={project.id} project={project} />
      ))}
    </div>
  )
}
