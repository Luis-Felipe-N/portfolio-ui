import { NextRequest, NextResponse } from 'next/server'
import { fetchCMSApi } from '@/lib/dato-cms'

export async function GET(request: NextRequest) {
  const data = await fetchCMSApi(`{
    allSkills(orderBy: _createdAt_ASC) {
      id
      name
      image {
        url
      }
    }
  }`)

  const skills = data.allSkills

  return NextResponse.json({
    skills,
  })
}
