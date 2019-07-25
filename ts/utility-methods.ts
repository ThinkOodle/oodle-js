export function convertSingleObjectToArray(obj: object): object[] {
  if (Array.isArray(obj)) {
    return obj;
  } else {
    return [obj]
  }
}