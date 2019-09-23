import { camelCase, forEach, isArray, isPlainObject } from "lodash";

export function convertSingleObjectToArray(obj: object): object[] {
  return Array.isArray(obj) ? obj : [obj];
}

export function objectKeysToCamelCase(snake_case_object): any {
  const camelCaseObject = {};
  forEach(snake_case_object, function(value, key) {
    if (isPlainObject(value)) {
      // checks that a value is a plain object or an array - for recursive key conversion
      value = objectKeysToCamelCase(value); // recursively update keys of any values that are also objects
    }
    if (isArray(value)) {
      value = value.map(v => {
        if (isPlainObject(v)) {
          return objectKeysToCamelCase(v); // recursion again on objects in arrays
        } else {
          return v;
        }
      });
    }
    camelCaseObject[camelCase(key)] = value;
  });
  return camelCaseObject;
}

export function prepareSnakeCaseData(data): any {
  if (Array.isArray(data)) {
    return data.map(d => {
      return objectKeysToCamelCase(JSON.parse(JSON.stringify(d)));
    });
  } else {
    return objectKeysToCamelCase(JSON.parse(JSON.stringify(data)));
  }
}
