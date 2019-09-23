"use strict";
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
function getDocTypeByID(docType, UID, prismicEndpoint) {
    return prismic_javascript_1["default"].getApi(prismicEndpoint).then(function (api) {
        return api
            .getByUID(docType, UID)
            .then(function (res) {
            return __assign({}, res.data, { id: res.id, uid: res.uid });
        })["catch"](function (err) {
            throw err;
        });
    });
}
exports.getDocTypeByID = getDocTypeByID;
function getAllDocs(prismicEndpoint) {
    return prismic_javascript_1["default"].getApi(prismicEndpoint).then(function (api) {
        // @ts-ignore
        return api
            .query()
            .then(function (res) { return res; })["catch"](function (err) {
            throw err;
        });
    });
}
exports.getAllDocs = getAllDocs;
function getAllPosts(prismicEndpoint, params) {
    if (params === void 0) { params = {}; }
    return prismic_javascript_1["default"].getApi(prismicEndpoint).then(function (api) {
        return api
            .query(prismic_javascript_1["default"].Predicates.at("document.type", "blog_page"), {
            orderings: "[my.blog_page.creation_date desc]",
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
function getPostCategories(prismicEndpoint) {
    return prismic_javascript_1["default"].getApi(prismicEndpoint).then(function (api) {
        // @ts-ignore
        return api
            .query(prismic_javascript_1["default"].Predicates.at("document.type", "blog_post_categories"))
            .then(function (res) {
            return __assign({}, res.results[0].data);
        })["catch"](function (err) {
            throw err;
        });
    });
}
exports.getPostCategories = getPostCategories;
function getPostsByCategory(prismicEndpoint, params) {
    if (params === void 0) { params = {}; }
    return prismic_javascript_1["default"].getApi(prismicEndpoint).then(function (api) {
        return api
            .query([
            prismic_javascript_1["default"].Predicates.at("document.type", "blog_page"),
            // @ts-ignore
            prismic_javascript_1["default"].Predicates.at("document.tags", [params.category])
        ], {
            orderings: "[my.blog_page.creation_date desc]",
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
function getPostBySlug(prismicEndpoint, slug) {
    return prismic_javascript_1["default"].getApi(prismicEndpoint).then(function (api) {
        return api
            .getByUID("blog_page", slug)
            .then(function (res) { return res; })["catch"](function (err) {
            throw err;
        });
    });
}
exports.getPostBySlug = getPostBySlug;
function getAllCaseStudies(prismicEndpoint) {
    return prismic_javascript_1["default"].getApi(prismicEndpoint).then(function (api) {
        return api
            .query(prismic_javascript_1["default"].Predicates.at("document.type", "case_study"), {
            pageSize: 100
        })
            .then(function (res) { return res; })["catch"](function (err) {
            throw err;
        });
    });
}
exports.getAllCaseStudies = getAllCaseStudies;
function getCaseStudyBySlug(prismicEndpoint, slug) {
    return prismic_javascript_1["default"].getApi(prismicEndpoint).then(function (api) {
        return api
            .getByUID("case_study", slug)
            .then(function (res) { return res; })["catch"](function (err) {
            throw err;
        });
    });
}
exports.getCaseStudyBySlug = getCaseStudyBySlug;
function getAllServices(prismicEndpoint) {
    return prismic_javascript_1["default"].getApi(prismicEndpoint).then(function (api) {
        return api
            .query(prismic_javascript_1["default"].Predicates.at("document.type", "service"), {
            orderings: "[my.service.date desc]",
            pageSize: 100
        })
            .then(function (res) { return res; })["catch"](function (err) {
            throw err;
        });
    });
}
exports.getAllServices = getAllServices;
function getServiceBySlug(prismicEndpoint, slug) {
    return prismic_javascript_1["default"].getApi(prismicEndpoint).then(function (api) {
        return api
            .getByUID("service", slug)
            .then(function (res) { return res; })["catch"](function (err) {
            throw err;
        });
    });
}
exports.getServiceBySlug = getServiceBySlug;
function getAllSinglePages(prismicEndpoint) {
    return prismic_javascript_1["default"].getApi(prismicEndpoint).then(function (api) {
        return api
            .query(prismic_javascript_1["default"].Predicates.at("document.type", "single_page"), {
            pageSize: 100
        })
            .then(function (res) { return res; })["catch"](function (err) {
            throw err;
        });
    });
}
exports.getAllSinglePages = getAllSinglePages;
function getSingleBySlug(prismicEndpoint, slug) {
    return prismic_javascript_1["default"].getApi(prismicEndpoint).then(function (api) {
        return api
            .getByUID("single_page", slug)
            .then(function (res) {
            return __assign({}, res.data, { id: res.id, uid: res.uid });
        })["catch"](function (err) {
            throw err;
        });
    });
}
exports.getSingleBySlug = getSingleBySlug;
function getGlobalSections(prismicEndpoint) {
    return prismic_javascript_1["default"].getApi(prismicEndpoint).then(function (api) {
        // @ts-ignore
        return api
            .query(prismic_javascript_1["default"].Predicates.at("document.type", "global_sections"))
            .then(function (res) { return res.results[0].data; })["catch"](function (err) {
            throw err;
        });
    });
}
exports.getGlobalSections = getGlobalSections;
function getInlineSVG(imageSrc) {
    return fetch(imageSrc, { cache: "reload" }).then(function (res) {
        return res.text();
    });
}
exports.getInlineSVG = getInlineSVG;
exports.prismic = {
    getDocTypeByID: getDocTypeByID,
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
