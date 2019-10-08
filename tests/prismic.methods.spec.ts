import * as methods from '../ts/prismic-methods'
import {  nestedResponseObject, imageArrayFromNestedResponseObject } from './mock/utilities.mock'
import {  prismicResponse, mergedPrismicResponse, loopableSliceResponse, page } from './mock/prismic.mock'

describe(`the mergeResponse method`, () => {
  it('merges important nested data from the orgiginal response object to the topmost level of the object and returns that object', () => {
    expect(methods.mergeResponse(prismicResponse)).toEqual(
      mergedPrismicResponse
    )
  })
})

describe(`the createLoopableSections method`, () => {
  it('returns the merged prismic response object with a formatted array of loopable slice sections', () => {
    expect(methods.createLoopableSections(mergedPrismicResponse)).toEqual(
      loopableSliceResponse
    )
  })
})

describe(`the createPage method`, () => {
  it('returns the intitial prismic response object as a fully merged, loopable, and camelcased object for easier component consumtion and to comply with Vue standards', () => {
    expect(methods.createPage(prismicResponse)).toEqual(
      page
    )
  })
})

describe(`the queuePreLoadedImages method`, () => {
  it('intelligentaly parses a deeply nested prismic response object and returns an array of image url strings', () => {
    expect(methods.queuePreLoadedImages(nestedResponseObject)).toEqual(
      imageArrayFromNestedResponseObject
    )
  })
})
