import htmlSerializer from '../utils/html-serializer'
import prismicDOM from 'prismic-dom'
import { convertSnakeToCamel } from './utility-methods'
import {
  PrismicDocument,
  MergerdPrismicSingleDocResponse,
  FormattedDocument,
  ModifiedSlice,
  Slice,
  CamelCasedFormattedDocument,
} from '../types/prismic'
import { Document } from '../node_modules/prismic-javascript/d.ts/documents.d'

export function linkResolver(doc: PrismicDocument): string {
  if (doc.isBroken) {
    return '/not-found'
  }
  if (doc.type === 'home') {
    return '/'
  }
  if (doc.type === 'page') {
    return '/' + doc.uid
  }
  return '/not-found'
}

export function mergeResponse(res: Document): MergerdPrismicSingleDocResponse {
  if (res) {
    const wholeObject = {
      ...res,
      ...res.data,
      slices: undefined,
    }
    delete wholeObject.data
    return {
      ...wholeObject,
    }
  }
}

export function setSectionRichText(section: ModifiedSlice): ModifiedSlice {
  if (section['primary']) {
    const primeKeys = Object.keys(section['primary'])
    primeKeys.map(pKey => {
      if (Array.isArray(section['primary'][pKey])) {
        section['primary'][`${pKey}_serialized`] = prismicDOM.RichText.asHtml(
          section['primary'][pKey],
          linkResolver,
          htmlSerializer,
        )
      }
    })
  }
  if (section['items']) {
    const items = section['items']
    items.map(item => {
      const itemKeys = Object.keys(item)
      itemKeys.map(iKey => {
        if (Array.isArray(item[iKey])) {
          item[`${iKey}_serialized`] = prismicDOM.RichText.asHtml(
            item[iKey],
            linkResolver,
            htmlSerializer,
          )
        }
      })
    })
  }
  return section
}

export function createLoopableSections(
  doc: MergerdPrismicSingleDocResponse,
): FormattedDocument|MergerdPrismicSingleDocResponse {
  if (!doc.body) return doc
  const slices: any = {}
  doc.body.map((slice: Slice, index) => {
    const modSlice: ModifiedSlice = {
      items: slice.items,
      primary: slice.primary,
      order: index
    }
    if (slices[slice.sliceType || slice.slice_type]) {
      slices[slice.sliceType || slice.slice_type].push(
        setSectionRichText(modSlice),
      )
    } else {
      slices[slice.sliceType || slice.slice_type] = []
      slices[slice.sliceType || slice.slice_type].push(
        setSectionRichText(modSlice),
      )
    }
  })
  delete doc.body
  return { ...doc, slices: slices }
}

export function createPage(res: Document): CamelCasedFormattedDocument {
  // always convertSnakeToCamel last
  return convertSnakeToCamel(createLoopableSections(mergeResponse(res)))
}
