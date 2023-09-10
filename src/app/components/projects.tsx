'use client'

import { api } from '@/lib/api'
import { CardProject } from './card-project'
import { useQuery } from '@tanstack/react-query'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

export interface Project {
  id: string
  code: string
  preview: string
  createdAt: string
  description: string
  title: string
  thumb: {
    url: string
    width?: number
    height?: number
  }
  languages: string
  video: {
    providerUid: string
  } | null
}

export function Projects() {
  const {
    data: projects,
    isFetched,
    isLoading,
  } = useQuery<Project[]>(['projects'], async (): Promise<Project[]> => {
    const response = await api.get('projects')
    return response.data.projects
  })

  console.log(projects)

  return (
    <section className="z-10 w-full items-start justify-between flex-col text-sm flex py-24">
      <div className="w-full">
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {projects &&
            projects.map((project) => (
              <SwiperSlide key={project.id}>
                <CardProject project={project} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  )
}
