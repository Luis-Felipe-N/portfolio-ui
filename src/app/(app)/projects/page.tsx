// import { CardProject } from '@/components/card-project'
// import { Project } from '@/components/projects'
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from '@/components/ui/alert-dialog'
// import { Button } from '@/components/ui/button'
// import { api } from '@/lib/api'
// import Image from 'next/image'

// import { CardProject } from "@/components/card-project"

// const getProjects = async (): Promise<Project[]> => {
//   const response = await api.get('projects')
//   return response.data.projects
// }

export default async function Projects() {
  return <h1>projetos</h1>
  // const projects = await getProjects()
  // if (!projects) return null
  // return (
  //   <div className="px-12 max-w-5xl w-full items-start justify-between flex-col text-sm flex pt-24 ">
  //     <ul className="grid grid-cols-2">
  //       {projects.map((project) => (
  //         <CardProject key={project.id} project={project} />
  //       ))}
  //     </ul>
  //   </div>
  // )
}
