import { API_URLS } from "@/constants/apiUrls"
import { httpClient } from "@/shared/http/httpClient"
import { modelTypes } from "@/shared/types/modelTypes"

const token = process.env.NEXT_PRIVATE_TOKEN 

interface Entry {
  ground?:string
}

interface Result {
  Results: modelTypes[]
}

export const listModelsByGroup = async (data:Entry):Promise<Result> => {

  try {
    const result = await httpClient({
      baseUrl: API_URLS.url,
      endPoint: API_URLS.endPoints.createProject,
      method: 'GET',
      params: data,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if(result.statusCode !== 200) {
      return {
        Results: []
      }
    }

  
    return result.body
  } catch (error) {
    return {
      Results: []
    }
  }
}