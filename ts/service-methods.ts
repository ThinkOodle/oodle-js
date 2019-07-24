import axios from 'axios'

export function getService(url: string): Promise<any> {
  return axios.get(url)
  .then(res => res.data)
  .catch(e => e)
}

export function postService(url: string, body: any): Promise<any> {
  return axios.post(url, body)
  .then(res => res.data)
  .catch(e => e)
}

export const service = {
  get: getService,
  post: postService
}