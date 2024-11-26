import axios from 'axios'
import { printHttpLogs } from '../logs/printHttpLogs'

const HTTP_LOGS = process.env.HTTP_LOGS
interface Props {
  method: 'POST' | 'GET' | 'PUT'
  data?: any
  params?: any
  endPoint: string
  baseUrl?: string,
  headers?: any
}

export interface httpClientResult {
  statusCode: number
  body: any
}

export const httpClient = async ({ baseUrl , endPoint, method, data, headers, params }: Props): Promise<httpClientResult> => {
  try {
    const result = await axios(`${endPoint}`, {
      baseURL: baseUrl,
      method,
      data,
      params,
      headers,
      timeout: 10000
    })
  

    if(HTTP_LOGS !== 'true') printHttpLogs({statusCode: result.status, url: baseUrl + endPoint})

    return {
      statusCode: result.status,
      body: result.data
    }
  } catch (error: any) {
    if(HTTP_LOGS !== 'true') printHttpLogs({statusCode: error?.response?.status, url: baseUrl + endPoint})
    return {
      statusCode: error?.response?.status ?? 500,
      body: error?.response?.data ?? undefined
    }
  }
}