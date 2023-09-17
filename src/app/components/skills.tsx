'use client'
import { api } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'

export interface Skill {
  id: string
  image: {
    url: string
  }
  name: string
}

const getSkills = async (): Promise<Skill[]> => {
  const { data } = await api('/skills')

  return data.skills
}

export function Skills() {
  const { data: skills, isLoading } = useQuery<Skill[]>(
    ['Skills'],
    async (): Promise<Skill[]> => {
      const response = await getSkills()
      return response
    },
  )

  if (isLoading) return <p>carregando...</p>

  if (!skills) return null

  return (
    <section className="z-10 px-12 max-w-5xl w-full items-start justify-between flex-col text-sm flex py-24">
      <h2 className="text-slate-900 font-semibold text-xl sm:text-3xl lg:text-4xl tracking-tight dark:text-white">
        skills
      </h2>

      <div className="mt-4 w-full">
        <div className="flex font-mono flex-wrap list-disc gap-8">
          {skills.map((skill) => (
            <li key={skill.id}>{skill.name}</li>
          ))}
        </div>
      </div>
    </section>
  )
}
