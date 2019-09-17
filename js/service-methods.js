"use strict";
// THESE ARE GENERATED FILES - DO NOT EDIT 
// PLEASE MODIFY THE TYPESCRIPT SOURCE FILES

exports.__esModule = true;
var axios_1 = require("axios");
function getService(url) {
    return axios_1["default"].get(url)
        .then(function (res) { return res.data; })["catch"](function (e) { return e; });
}
exports.getService = getService;
function postService(url, body) {
    return axios_1["default"].post(url, body)
        .then(function (res) { return res.data; })["catch"](function (e) { return e; });
}
exports.postService = postService;
exports.service = {
    get: getService,
    post: postService
};
