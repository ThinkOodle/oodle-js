import * as methods from '../ts/utility-methods'

describe(`the convertSingleObjectToArray method`, () => {
  it('returns an array if an object is passed in', () => {
    const object = {}
    expect(methods.convertSingleObjectToArray(object)).toEqual([object])
  })

  it('returns an array if an array is passed in', () => {
    const array = []
    expect(methods.convertSingleObjectToArray(array)).toEqual(array)
  })
})