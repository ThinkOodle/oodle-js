// Generate Comment

export function convertSingleObjectToArray(obj: object): object[] {
  return Array.isArray(obj) ? obj : [obj]
}