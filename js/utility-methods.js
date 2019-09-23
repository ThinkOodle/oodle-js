"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
function convertSingleObjectToArray(obj) {
    return Array.isArray(obj) ? obj : [obj];
}
exports.convertSingleObjectToArray = convertSingleObjectToArray;
function objectKeysToCamelCase(snake_case_object) {
    var camelCaseObject = {};
    lodash_1.forEach(snake_case_object, function (value, key) {
        if (lodash_1.isPlainObject(value)) {
            // checks that a value is a plain object or an array - for recursive key conversion
            value = objectKeysToCamelCase(value); // recursively update keys of any values that are also objects
        }
        if (lodash_1.isArray(value)) {
            value = value.map(function (v) {
                if (lodash_1.isPlainObject(v)) {
                    return objectKeysToCamelCase(v); // recursion again on objects in arrays
                }
                else {
                    return v;
                }
            });
        }
        camelCaseObject[lodash_1.camelCase(key)] = value;
    });
    return camelCaseObject;
}
exports.objectKeysToCamelCase = objectKeysToCamelCase;
function prepareSnakeCaseData(data) {
    if (Array.isArray(data)) {
        return data.map(function (d) {
            return objectKeysToCamelCase(JSON.parse(JSON.stringify(d)));
        });
    }
    else {
        return objectKeysToCamelCase(JSON.parse(JSON.stringify(data)));
    }
}
exports.prepareSnakeCaseData = prepareSnakeCaseData;
