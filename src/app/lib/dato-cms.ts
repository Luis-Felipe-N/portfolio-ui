export const fetchCMSApi = async (query: string) => {
  const ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY

  if (!ENDPOINT || !API_KEY) {
    throw new Error('You environment variable')
  }

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: API_KEY,
    },
    body: JSON.stringify({
      query,
      variables: {},
    }),
  })

  const json = await response.json()

  if (json.erros) {
    return new Error('Failed to fetch API')
  }

  return json.data
}

// export async function getHomeProjects(): Promise<Project[]> {
//   const { allHomeProjects } = await fetchCMSApi(`{
//     allHomeProjects {
//       idDoProjeto
//     }
//   }
//   `)

//   const idsProjects = allHomeProjects.map((project: {idDoProjeto: number}) => {
//     return project.idDoProjeto
//   })

//   const data = await fetchCMSApi(`
//   {
//     allProjects(filter: {id: {in: [${idsProjects}]}}) {
//       id
//       _firstPublishedAt
//       title
//       thumb {
//         alt
//         url
//         title
//       }
//       languages
//       preview
//       description
//       code
//       createdAt
//       video {
//         url
//         provider
//         providerUid
//         thumbnailUrl
//       }
//     }
//   }
//   `)

//   return data.allProjects
// }

// export async function getProjects(): Promise<Project[]> {

//   const data = await fetchCMSApi(`
//     {
//       allProjects(orderBy: _createdAt_DESC, first: "100") {
//         id
//         _firstPublishedAt
//         title
//         thumb {
//           alt
//           url
//           title
//         }
//         languages
//         preview
//         description
//         code
//         createdAt
//         video {
//           url
//           provider
//           providerUid
//           thumbnailUrl
//         }
//       }
//     }
//     `)

//     return data.allProjects
// }

// export async function getSkills(): Promise<Skill[]> {
//   const data = await fetchCMSApi(`{
//     allSkills(orderBy: _createdAt_ASC) {
//       id
//       name
//       image {
//         url
//       }
//     }
//   }`)

//   return data.allSkills
// }

// export async function getProject( id: string ) {
//   const data = await fetchCMSApi(`{
//     project(filter: {id: {eq: "${id}"}}) {
//       id
//       _firstPublishedAt
//       title
//       thumb {
//         alt
//         url
//         title
//         width
//         height
//       }
//       languages
//       preview
//       description
//       code
//       createdAt
//       video {
//         url
//         provider
//         providerUid
//         thumbnailUrl
//       }
//     }
//   }`)

//   return data.project
// }
