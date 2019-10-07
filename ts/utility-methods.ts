import { camelCase, forEach, isArray, isPlainObject } from 'lodash'

export function convertSingleObjectToArray(obj: object): object[] {
  return Array.isArray(obj) ? obj : [obj]
}

export function objectKeysToCamelCase(snake_case_object): object {
  const camelCaseObject = {}
  forEach(snake_case_object, function(value, key) {
    if (isPlainObject(value)) {
      // checks that a value is a plain object or an array - for recursive key conversion
      value = objectKeysToCamelCase(value) // recursively update keys of any values that are also objects
    }
    if (isArray(value)) {
      value = value.map(v => {
        if (isPlainObject(v)) {
          return objectKeysToCamelCase(v) // recursion again on objects in arrays
        } else {
          return v
        }
      })
    }
    camelCaseObject[camelCase(key)] = value
  })
  return camelCaseObject
}

export function convertSnakeToCamel(data): any {
  if (Array.isArray(data)) {
    return data.map(d => {
      return objectKeysToCamelCase(JSON.parse(JSON.stringify(d)))
    })
  } else {
    return objectKeysToCamelCase(JSON.parse(JSON.stringify(data)))
  }
}

export function flatten(data): object {
  const result = {}
  function recurse(cur, prop): void {
    if (Object(cur) !== cur) {
      result[prop] = cur
    } else if (Array.isArray(cur)) {
      for (let i = 0, l = cur.length || 0; i < l; i++) {
        recurse(cur[i], prop + '[' + i + ']')
        if (l === 0) result[prop] = []
      }
    } else {
      let isEmpty = true
      for (const p in cur) {
        isEmpty = false
        recurse(cur[p], prop ? prop + '.' + p : p)
      }
      if (isEmpty && prop) result[prop] = {}
    }
  }
  recurse(data, '')
  return result
}

export function queuePreLoadedImages(nestedDataSet, filter): string[] {
  const flatRes = flatten(nestedDataSet)
  const imageUrls = []
  const imageTypes = ['.jpg', '.jpeg', '.gif', '.svg', '.png']
  Object.keys(flatRes).map(node => {
    if (
      typeof node !== 'string' ||
      !node.toLowerCase().endsWith('url') ||
      (filter && !node.toLowerCase().includes(filter))
    )
      return
    imageTypes.map(imageType => {
      if (flatRes[node].toLowerCase().endsWith(imageType)) {
        imageUrls.push(flatRes[node])
      }
    })
  })
  return imageUrls
}

export function preloadImages(imageArray): void {
  //@ts-ignore
  if (!preloadImages.list) {
    //@ts-ignore
    preloadImages.list = []
  }
  //@ts-ignore
  const list = preloadImages.list
  for (let i = 0; i < imageArray.length; i++) {
    const img: HTMLImageElement = new Image()
    img.onload = function(): void {
      const index = list.indexOf(this)
      if (index !== -1) {
        list.splice(index, 1)
      }
    }
    list.push(img)
    img.src = imageArray[i]
  }
}
