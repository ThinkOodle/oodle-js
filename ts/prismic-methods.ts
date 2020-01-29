import prismicDOM from 'prismic-dom'
import { convertSnakeToCamel, flatten } from './utility-methods'
import {
  MergerdPrismicSingleDocResponse,
  FormattedDocument,
  ModifiedSlice,
  Slice,
  CamelCasedFormattedDocument,
} from '../types/prismic'
import { Document } from '../node_modules/prismic-javascript/d.ts/documents.d'

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

export function setSectionRichText(
  section: Slice,
  linkResolver: any,
  htmlSerializer: any,
): Slice {
  if (section['primary']) {
    const primeKeys = Object.keys(section['primary'])
    primeKeys.map(pKey => {
      if (Array.isArray(section['primary'][pKey])) {
        section['primary'][`${pKey}Serialized`] = prismicDOM.RichText.asHtml(
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
          item[`${iKey}Serialized`] = prismicDOM.RichText.asHtml(
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
  linkResolver?,
  htmlSerializer?,
): FormattedDocument | MergerdPrismicSingleDocResponse {
  if (!doc.body) return doc
  const slices = {}
  doc.body.map((slice: Slice, index) => {
    if (linkResolver && htmlSerializer) {
      slice = setSectionRichText(slice, linkResolver, htmlSerializer)
    }
    const modSlice: ModifiedSlice = {
      items: slice.items,
      primary: slice.primary,
      order: index * 2,
    }
    if (slices[slice.sliceType || slice.slice_type]) {
      slices[slice.sliceType || slice.slice_type].push(modSlice)
    } else {
      slices[slice.sliceType || slice.slice_type] = []
      slices[slice.sliceType || slice.slice_type].push(modSlice)
    }
  })
  delete doc.body
  return { ...doc, slices: slices }
}

export function createPage(
  res: Document,
  linkResolver,
  htmlSerializer,
): CamelCasedFormattedDocument {
  // always convertSnakeToCamel last
  return convertSnakeToCamel(
    createLoopableSections(mergeResponse(res), linkResolver, htmlSerializer),
  )
}

export function queuePreLoadedImages(
  nestedDataSet: object | [],
  filter?: string,
): string[] {
  const flatRes: object = flatten(nestedDataSet)
  const imageUrls = []
  const imageTypes = ['.jpg', '.jpeg', '.gif', '.svg', '.png']
  Object.keys(flatRes).map(key => {
    if (
      typeof key !== 'string' ||
      !key.toLowerCase().includes('url') ||
      (filter && !key.toLowerCase().includes(filter))
    )
      return
    imageTypes.map((imageType: string) => {
      if (flatRes[key].toLowerCase().includes(imageType)) {
        imageUrls.push(flatRes[key])
      }
    })
  })
  return imageUrls as string[]
}
