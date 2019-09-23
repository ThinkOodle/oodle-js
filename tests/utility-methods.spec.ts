import * as methods from "../ts/utility-methods";
import { camelCaseObject, snakeCaseObject } from "./mock/utilities.mock";

describe(`the convertSingleObjectToArray method`, () => {
  it("returns an array if an object is passed in", () => {
    const object = {};
    expect(methods.convertSingleObjectToArray(object)).toEqual([object]);
  });

  it("returns an array if an array is passed in", () => {
    const array = [];
    expect(methods.convertSingleObjectToArray(array)).toEqual(array);
  });
});

describe(`the objectKeysToCamelCase method`, () => {
  it("Converts object keys from snake case to camel case.", () => {
    expect(methods.objectKeysToCamelCase(snakeCaseObject)).toEqual(
      camelCaseObject
    );
  });
});

describe(`the prepareSnakeCaseData method`, () => {
  it("returns camelCaseObject from a snake_cased_object", () => {
    expect(methods.prepareSnakeCaseData(snakeCaseObject)).toEqual(
      camelCaseObject
    );
  });

  it("returns an array of camelCaseObjects from an array of snake_cased_objects", () => {
    expect([methods.prepareSnakeCaseData(snakeCaseObject)]).toEqual([
      camelCaseObject
    ]);
  });
});
