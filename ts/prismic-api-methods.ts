import Prismic from 'prismic-javascript'
import { PrismicAPI } from '../types'

interface PrismicDoc {
  data: any;
  id?: string | number;
  uid?: string | number;
}

export function getDocTypeByID(
  prismicEndpoint: string,
  docType: string,
  UID: string
): Promise<PrismicDoc> {
  return Prismic.getApi(prismicEndpoint).then(api => {
    return api
      .getByUID(docType, UID)
      .then(res => {
        return {
          ...res.data,
          id: res.id,
          uid: res.uid
        }
      })
      .catch(err => {
        throw err
      })
  })
}

export function getSingleDocByType(
  prismicEndpoint: string,
  docType: string
): Promise<PrismicDoc> {
  return Prismic.getApi(prismicEndpoint).then(api => {
    return api
      .getSingle(docType)
      .then(res => {
        return {
          ...res.data,
          id: res.id,
          uid: docType
        }
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
      .then(res => res)
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
