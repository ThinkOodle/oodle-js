// Generate Comment

/**
 * To learn more about Link Resolving check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/link-resolving
 */

import { PrismicDocument } from '../types/prismic'

export function linkResolver(doc : PrismicDocument) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'home') {
    return '/'
  }

  if (doc.type === 'page') {
    return '/page/' + doc.uid
  }

  return '/not-found'
}