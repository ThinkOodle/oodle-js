"use strict";
// THESE ARE GENERATED FILES - DO NOT EDIT 
// PLEASE MODIFY THE TYPESCRIPT SOURCE FILES

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var prismic_javascript_1 = require("prismic-javascript");
exports.prismicEndpoint = 'https://oodle-vue.cdn.prismic.io/api/v2';
function getDocByID(ID) {
    return prismic_javascript_1["default"].getApi(exports.prismicEndpoint).then(function (api) {
        return api
            .getByID(ID)
            .then(function (res) { return res; })["catch"](function (err) {
            throw err;
        });
    });
}
exports.getDocByID = getDocByID;
function getAllDocs() {
    return prismic_javascript_1["default"].getApi(exports.prismicEndpoint).then(function (api) {
        // @ts-ignore
        return api
            .query()
            .then(function (res) { return res; })["catch"](function (err) {
            throw err;
        });
    });
}
exports.getAllDocs = getAllDocs;
function getAllPosts(params) {
    if (params === void 0) { params = {}; }
    return prismic_javascript_1["default"].getApi(exports.prismicEndpoint).then(function (api) {
        return api
            .query(prismic_javascript_1["default"].Predicates.at('document.type', 'blog_page'), {
            orderings: '[my.blog_page.creation_date desc]',
            // @ts-ignore
            pageSize: params.numPostsToLoad,
            // @ts-ignore
            page: params.page
        })
            .then(function (res) { return res; })["catch"](function (err) {
            throw err;
        });
    });
}
exports.getAllPosts = getAllPosts;
function getPostCategories() {
    return prismic_javascript_1["default"].getApi(exports.prismicEndpoint).then(function (api) {
        // @ts-ignore
        return api
            .query(prismic_javascript_1["default"].Predicates.at('document.type', 'blog_post_categories'))
            .then(function (res) {
            return __assign({}, res.results[0].data);
        })["catch"](function (err) {
            throw err;
        });
    });
}
exports.getPostCategories = getPostCategories;
function getPostsByCategory(params) {
    if (params === void 0) { params = {}; }
    return prismic_javascript_1["default"].getApi(exports.prismicEndpoint).then(function (api) {
        return api
            .query([
            prismic_javascript_1["default"].Predicates.at('document.type', 'blog_page'),
            // @ts-ignore
            prismic_javascript_1["default"].Predicates.at('document.tags', [params.category])
        ], {
            orderings: '[my.blog_page.creation_date desc]',
            // @ts-ignore
            pageSize: params.numPostsToLoad,
            // @ts-ignore
            page: params.page
        })
            .then(function (res) { return res; })["catch"](function (err) {
            throw err;
        });
    });
}
exports.getPostsByCategory = getPostsByCategory;
function getPostBySlug(slug) {
    return prismic_javascript_1["default"].getApi(exports.prismicEndpoint).then(function (api) {
        return api
            .getByUID('blog_page', slug)
            .then(function (res) { return res; })["catch"](function (err) {
            throw err;
        });
    });
}
exports.getPostBySlug = getPostBySlug;
function getAllCaseStudies() {
    return prismic_javascript_1["default"].getApi(exports.prismicEndpoint).then(function (api) {
        return api
            .query(prismic_javascript_1["default"].Predicates.at('document.type', 'case_study'), {
            pageSize: 100
        })
            .then(function (res) { return res; })["catch"](function (err) {
            throw err;
        });
    });
}
exports.getAllCaseStudies = getAllCaseStudies;
function getCaseStudyBySlug(slug) {
    return prismic_javascript_1["default"].getApi(exports.prismicEndpoint).then(function (api) {
        return api
            .getByUID('case_study', slug)
            .then(function (res) { return res; })["catch"](function (err) {
            throw err;
        });
    });
}
exports.getCaseStudyBySlug = getCaseStudyBySlug;
function getAllServices() {
    return prismic_javascript_1["default"].getApi(exports.prismicEndpoint).then(function (api) {
        return api
            .query(prismic_javascript_1["default"].Predicates.at('document.type', 'service'), {
            orderings: '[my.service.date desc]',
            pageSize: 100
        })
            .then(function (res) { return res; })["catch"](function (err) {
            throw err;
        });
    });
}
exports.getAllServices = getAllServices;
function getServiceBySlug(slug) {
    return prismic_javascript_1["default"].getApi(exports.prismicEndpoint).then(function (api) {
        return api
            .getByUID('service', slug)
            .then(function (res) { return res; })["catch"](function (err) {
            throw err;
        });
    });
}
exports.getServiceBySlug = getServiceBySlug;
function getAllSinglePages() {
    return prismic_javascript_1["default"].getApi(exports.prismicEndpoint).then(function (api) {
        return api
            .query(prismic_javascript_1["default"].Predicates.at('document.type', 'single_page'), {
            pageSize: 100
        })
            .then(function (res) { return res; })["catch"](function (err) {
            throw err;
        });
    });
}
exports.getAllSinglePages = getAllSinglePages;
function getSingleBySlug(slug) {
    return prismic_javascript_1["default"].getApi(exports.prismicEndpoint).then(function (api) {
        return api
            .getByUID('single_page', slug)
            .then(function (res) {
            return __assign({}, res.data, { id: res.id, uid: res.uid });
        })["catch"](function (err) {
            throw err;
        });
    });
}
exports.getSingleBySlug = getSingleBySlug;
function getGlobalSections() {
    return prismic_javascript_1["default"].getApi(exports.prismicEndpoint).then(function (api) {
        // @ts-ignore
        return api
            .query(prismic_javascript_1["default"].Predicates.at('document.type', 'global_sections'))
            .then(function (res) { return res.results[0].data; })["catch"](function (err) {
            throw err;
        });
    });
}
exports.getGlobalSections = getGlobalSections;
function getInlineSVG(imageSrc) {
    return fetch(imageSrc, { cache: 'reload' }).then(function (res) {
        return res.text();
    });
}
exports.getInlineSVG = getInlineSVG;
exports.prismic = {
    getDocByID: getDocByID,
    getAllDocs: getAllDocs,
    getAllPosts: getAllPosts,
    getPostCategories: getPostCategories,
    getPostsByCategory: getPostsByCategory,
    getPostBySlug: getPostBySlug,
    getAllCaseStudies: getAllCaseStudies,
    getCaseStudyBySlug: getCaseStudyBySlug,
    getAllServices: getAllServices,
    getServiceBySlug: getServiceBySlug,
    getAllSinglePages: getAllSinglePages,
    getSingleBySlug: getSingleBySlug,
    getGlobalSections: getGlobalSections,
    getInlineSVG: getInlineSVG
};
