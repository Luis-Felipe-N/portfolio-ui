import { NextRequest, NextResponse } from 'next/server'
import { fetchCMSApi } from '@/lib/dato-cms'

export async function GET(request: NextRequest) {
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

  const projects = data.allProjects

  return NextResponse.json({
    projects,
  })
}
