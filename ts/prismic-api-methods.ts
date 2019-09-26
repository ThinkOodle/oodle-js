import Prismic from 'prismic-javascript'
import { PrismicAPI } from '../types'
import { Document } from '../node_modules/prismic-javascript/d.ts/documents.d'
import ApiSearchResponse from '../node_modules/prismic-javascript/d.ts/ApiSearchResponse.d'

export function getDocTypeByID(
  prismicEndpoint: string,
  docType: string,
  UID: string,
): Promise<Document> {
  return Prismic.getApi(prismicEndpoint).then(api => {
    return api
      .getByUID(docType, UID)
      .then(res => {
        if (res) return res
      })
      .catch(err => {
        throw err
      })
  })
}

export function getSingleDocByType(
  prismicEndpoint: string,
  docType: string,
): Promise<Document> {
  return Prismic.getApi(prismicEndpoint).then(api => {
    return api
      .getSingle(docType)
      .then(res => {
        if (res) return res
      })
      .catch(err => {
        throw err
      })
  })
}

export function getAllDocs(
  prismicEndpoint: string,
): Promise<ApiSearchResponse> {
  return Prismic.getApi(prismicEndpoint).then(api => {
    return api
      .query('', { pageSize: 100 })
      .then(res => (res ? res : undefined))
      .catch(err => {
        throw err
      })
  })
}

export const prismic: PrismicAPI = {
  getDocTypeByID,
  getSingleDocByType,
  getAllDocs,
}
