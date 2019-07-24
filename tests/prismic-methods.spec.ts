import * as methods from '../ts/prismic-methods'
import { PrismicDocument } from '../types/prismic';

it('returns "/not-found" if document is broken', () => {
  const doc: PrismicDocument = {
    isBroken: true,
    type: 'home',
    uid: ''
  }

  expect(methods.linkResolver(doc)).toEqual('/not-found')
})

it('returns "/" if document type is "home', () => {
  const doc: PrismicDocument = {
    isBroken: false,
    type: 'home',
    uid: ''
  }

  expect(methods.linkResolver(doc)).toEqual('/')
})

it('returns "/page" (plus uid) if document type is "page"', () => {
  const doc: PrismicDocument = {
    isBroken: false,
    type: 'page',
    uid: '12345'
  }

  expect(methods.linkResolver(doc)).toEqual(`/page/${doc.uid}`)
})