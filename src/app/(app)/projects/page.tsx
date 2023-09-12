import { Project } from '@/components/projects'
import { api } from '@/lib/api'

const getProjects = async (): Promise<Project[]> => {
  const response = await api.get('projects')
  return response.data.projects
}

export default async function Projects() {
  const projects = await getProjects()

  if (!projects) return null
  return (
    <div className="px-12 max-w-5xl w-full items-start justify-between flex-col text-sm flex pt-24 ">
      <ul>
        {projects.map((project) => (
          <li
            className="w-full text-start flex gap-4 hover:bg-slate-900 p-3 rounded-2xl transition"
            key={project.id}
          >
            <div className="lg:w-52 lg:h-52 w-32 h-32 bg-slate-800 rounded-xl grid place-items-center">
              <strong className="font-bold lg:text-lg">FRONT-END</strong>
            </div>
            <div className="flex-1 flex flex-col py-4">
              <div className="flex-1">
                <h2 className="text-xl font-bold">{project.title}</h2>

                <p
                  className="pt-2"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>
              </div>

              <ul className="flex gap-2">
                {project.languages.split(';').map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
