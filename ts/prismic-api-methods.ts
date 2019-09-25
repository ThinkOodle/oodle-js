import Prismic from 'prismic-javascript'
import { PrismicAPI, PrismicResponse } from '../types'

export function getDocTypeByID(
  prismicEndpoint: string,
  docType: string,
  UID: string
): Promise<PrismicResponse> {
  return Prismic.getApi(prismicEndpoint).then(api => {
    return api
      .getByUID(docType, UID)
      .then(res => {
        return res ? {
          ...res.data,
          id: res.id,
          uid: res.uid
        } : undefined
      })
      .catch(err => {
        throw err
      })
  })
}

export function getSingleDocByType(
  prismicEndpoint: string,
  docType: string
): Promise<PrismicResponse> {
  return Prismic.getApi(prismicEndpoint).then(api => {
    return api
      .getSingle(docType)
      .then(res => {
        return res ? {
          ...res.data,
          id: res.id,
          uid: docType
        } : undefined
      })
      .catch(err => {
        throw err
      })
  })
}

export function getAllDocs(prismicEndpoint: string): any {
  return Prismic.getApi(prismicEndpoint).then(api => {
    // @ts-ignore
    return api
      .query()
      .then(res => res ? res : undefined)
      .catch(err => {
        throw err
      })
  })
}

export const prismic: PrismicAPI = {
  getDocTypeByID,
  getSingleDocByType,
  getAllDocs
}
