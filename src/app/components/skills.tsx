import { api } from '@/lib/api'

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

export async function Skills() {
  const skills = await getSkills()

  return (
    <section className="z-10 px-12 max-w-5xl w-full items-start justify-between flex-col text-sm flex py-24">
      <h2 className="text-slate-900 font-semibold text-xl sm:text-3xl lg:text-4xl tracking-tight dark:text-white">
        skills
      </h2>

      <div className="mt-4 p-8 dark:bg-slate-800 bg-slate-100 w-full rounded-lg">
        <ul className="flex gap-4 flex-wrap">
          {skills.map((skill) => (
            <li
              key={skill.id}
              className="dark:bg-slate-800 bg-slate-200 px-8 py-2 text-lg rounded"
            >
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
