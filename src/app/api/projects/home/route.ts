import { NextRequest, NextResponse } from 'next/server'
import { fetchCMSApi } from '@/lib/dato-cms'

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
    allProjects(filter: {id: {in: [${idsProjects}]}}) {
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

  const projects = data.allProjects

  return NextResponse.json({
    projects,
  })
}
