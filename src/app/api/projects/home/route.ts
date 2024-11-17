import { NextRequest, NextResponse } from 'next/server'
import { fetchCMSApi } from '@/lib/dato-cms'
import { Project } from '@/(app)/projects/page'

export async function GET(request: NextRequest) {
  const { allHomeProjects } = await fetchCMSApi(`{
    allHomeProjects {
      idDoProjeto
    }
  }
  `)

  const idsProjects = allHomeProjects.map(
    (project: { idDoProjeto: number }) => {
      return project.idDoProjeto
    },
  )

  const data = await fetchCMSApi(`
  {
    allProjects(orderBy: _createdAt_DESC, first: "100") {
      id
      _firstPublishedAt
      title
      thumb {
        alt
        url
        title
      }
      languages
      preview
      description
      code
      createdAt
      video {
        url
        provider
        providerUid
        thumbnailUrl
      }
    }
  }
`)

  const projects = data.allProjects.filter((item: Project) => idsProjects.includes(item.id))

  return NextResponse.json({
    projects,
  })
}
