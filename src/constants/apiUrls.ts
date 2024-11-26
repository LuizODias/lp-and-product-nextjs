const url = process.env.NEXT_PRIVATE_API

export const API_URLS = {
  nextServerSide: {
    createNewProject: '/api/project/create'
  },
  url: url,
  endPoints: {
    createProject: '/api/create/'
  }
}
