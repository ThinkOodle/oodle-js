import Prismic from 'prismic-javascript'
import { PrismicAPI } from '../types'
import { Document } from '../node_modules/prismic-javascript/d.ts/documents.d'
import ApiSearchResponse from '../node_modules/prismic-javascript/d.ts/ApiSearchResponse.d'

export async function getByID(
  prismicEndpoint: string,
  ID: string,
  req: Request,
): Promise<Document> {
  const api = await Prismic.getApi(prismicEndpoint, { req })
  return api
    .getByID(ID)
    .then(res => {
      if (res) return res
    })
    .catch(err => {
      throw err
    })
}

export async function getDocTypeByUID(
  prismicEndpoint: string,
  docType: string,
  UID: string,
  req: Request,
): Promise<Document> {
  const api = req
    ? await Prismic.getApi(prismicEndpoint, { req })
    : await Prismic.getApi(prismicEndpoint)
  return api
    .getByUID(docType, UID)
    .then(res => {
      if (res) return res
    })
    .catch(err => {
      throw err
    })
}

export async function getSingleDocByType(
  prismicEndpoint: string,
  docType: string,
  req: Request,
): Promise<Document> {
  const api = req
    ? await Prismic.getApi(prismicEndpoint, { req })
    : await Prismic.getApi(prismicEndpoint)
  return api
    .getSingle(docType)
    .then(res => {
      if (res) return res
    })
    .catch(err => {
      throw err
    })
}

export async function getAllDocs(
  prismicEndpoint: string,
  req: Request,
): Promise<ApiSearchResponse> {
  const api = req
    ? await Prismic.getApi(prismicEndpoint, { req })
    : await Prismic.getApi(prismicEndpoint)
  return api
    .query('', { pageSize: 100 })
    .then(res => (res ? res : undefined))
    .catch(err => {
      throw err
    })
}

export const prismic: PrismicAPI = {
  getByID,
  getDocTypeByUID,
  getSingleDocByType,
  getAllDocs,
}
