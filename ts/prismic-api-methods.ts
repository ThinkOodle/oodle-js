import Prismic from 'prismic-javascript'
import { PrismicAPI, PrismicFetchOptions } from '../types'
import { Document } from '../node_modules/prismic-javascript/d.ts/documents.d'
import ApiSearchResponse from '../node_modules/prismic-javascript/d.ts/ApiSearchResponse.d'

export async function getByID(
  prismicEndpoint: string,
  ID: string,
  maybeOptions: PrismicFetchOptions = {}
): Promise<Document> {
  const req = maybeOptions.req as Request
  const api = await Prismic.getApi(prismicEndpoint, { req })
  return api
    .getByID(ID, maybeOptions.options)
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
  maybeOptions: PrismicFetchOptions = {}
): Promise<Document> {
  const req = maybeOptions.req as Request
  const api = await Prismic.getApi(prismicEndpoint, { req })
  return api
    .getByUID(docType, UID,  maybeOptions.options)
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
  maybeOptions: PrismicFetchOptions = {}
): Promise<Document> {
  const req = maybeOptions.req as Request
  const api = await Prismic.getApi(prismicEndpoint,  { req } )
  return api
    .getSingle(docType, maybeOptions.options)
    .then(res => {
      if (res) return res
    })
    .catch(err => {
      throw err
    })
}

export async function getAllDocs(
  prismicEndpoint: string,
  maybeOptions: PrismicFetchOptions = {}
): Promise<ApiSearchResponse> {
  const req = maybeOptions.req as Request
  const api = await Prismic.getApi(prismicEndpoint, { req })
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
