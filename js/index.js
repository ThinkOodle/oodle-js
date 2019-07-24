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
System.register("ts/browser-methods", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function isSafari() {
        var ua = window.navigator.userAgent.toLowerCase();
        return ua.indexOf('safari') > -1 && ua.indexOf('chrome') == -1 ? true : false;
    }
    exports_1("isSafari", isSafari);
    function isChrome() {
        var ua = window.navigator.userAgent.toLowerCase();
        return ua.indexOf('chrome') > -1 && ua.indexOf('edge') === -1 ? true : false;
    }
    exports_1("isChrome", isChrome);
    function isFirefox() {
        var ua = window.navigator.userAgent.toLowerCase();
        return ua.indexOf('firefox') > -1 ? true : false;
    }
    exports_1("isFirefox", isFirefox);
    function isIE() {
        var ua = window.navigator.userAgent.toLowerCase();
        return ua.indexOf('msie') > -1 ? true : false;
    }
    exports_1("isIE", isIE);
    function isEdge() {
        var ua = window.navigator.userAgent.toLowerCase();
        return ua.indexOf('edge') >= 0 ? true : false;
    }
    exports_1("isEdge", isEdge);
    function isOpera() {
        var ua = window.navigator.userAgent.toLowerCase();
        return ua.indexOf('op') > -1 ? true : false;
    }
    exports_1("isOpera", isOpera);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("types/prismic", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("ts/prismic-methods", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    function linkResolver(doc) {
        if (doc.isBroken) {
            return '/not-found';
        }
        if (doc.type === 'home') {
            return '/';
        }
        if (doc.type === 'page') {
            return '/page/' + doc.uid;
        }
        return '/not-found';
    }
    exports_3("linkResolver", linkResolver);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("ts/service-methods", ["axios"], function (exports_4, context_4) {
    "use strict";
    var axios_1, service;
    var __moduleName = context_4 && context_4.id;
    function getService(url) {
        return axios_1["default"].get(url)
            .then(function (res) { return res.data; })["catch"](function (e) { return e; });
    }
    exports_4("getService", getService);
    function postService(url, body) {
        return axios_1["default"].post(url, body)
            .then(function (res) { return res.data; })["catch"](function (e) { return e; });
    }
    exports_4("postService", postService);
    return {
        setters: [
            function (axios_1_1) {
                axios_1 = axios_1_1;
            }
        ],
        execute: function () {
            exports_4("service", service = {
                get: getService,
                post: postService
            });
        }
    };
});
System.register("ts/prismic-api-methods", ["prismic-javascript"], function (exports_5, context_5) {
    "use strict";
    var prismic_javascript_1, prismicEndpoint, Api;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (prismic_javascript_1_1) {
                prismic_javascript_1 = prismic_javascript_1_1;
            }
        ],
        execute: function () {
            exports_5("prismicEndpoint", prismicEndpoint = 'https://oodle-vue.cdn.prismic.io/api/v2');
            Api = (function () {
                function Api() {
                }
                Api.prototype.getDocByID = function (ID) {
                    return prismic_javascript_1["default"].getApi(prismicEndpoint).then(function (api) {
                        return api
                            .getByID(ID)
                            .then(function (res) { return res; })["catch"](function (err) {
                            throw err;
                        });
                    });
                };
                Api.prototype.getAllDocs = function () {
                    return prismic_javascript_1["default"].getApi(prismicEndpoint).then(function (api) {
                        return api
                            .query()
                            .then(function (res) { return res; })["catch"](function (err) {
                            throw err;
                        });
                    });
                };
                Api.prototype.getAllPosts = function (params) {
                    if (params === void 0) { params = {}; }
                    return prismic_javascript_1["default"].getApi(prismicEndpoint).then(function (api) {
                        return api
                            .query(prismic_javascript_1["default"].Predicates.at("document.type", "blog_page"), {
                            orderings: "[my.blog_page.creation_date desc]",
                            pageSize: params.numPostsToLoad,
                            page: params.page
                        })
                            .then(function (res) { return res; })["catch"](function (err) {
                            throw err;
                        });
                    });
                };
                Api.prototype.getPostCategories = function () {
                    return prismic_javascript_1["default"].getApi(prismicEndpoint).then(function (api) {
                        return api
                            .query(prismic_javascript_1["default"].Predicates.at("document.type", "blog_post_categories"))
                            .then(function (res) {
                            return __assign({}, res.results[0].data);
                        })["catch"](function (err) {
                            throw err;
                        });
                    });
                };
                Api.prototype.getPostsByCategory = function (params) {
                    if (params === void 0) { params = {}; }
                    return prismic_javascript_1["default"].getApi(prismicEndpoint).then(function (api) {
                        return api
                            .query([
                            prismic_javascript_1["default"].Predicates.at("document.type", "blog_page"),
                            prismic_javascript_1["default"].Predicates.at("document.tags", [params.category])
                        ], {
                            orderings: "[my.blog_page.creation_date desc]",
                            pageSize: params.numPostsToLoad,
                            page: params.page
                        })
                            .then(function (res) { return res; })["catch"](function (err) {
                            throw err;
                        });
                    });
                };
                Api.prototype.getPostBySlug = function (slug) {
                    return prismic_javascript_1["default"].getApi(prismicEndpoint).then(function (api) {
                        return api
                            .getByUID("blog_page", slug)
                            .then(function (res) { return res; })["catch"](function (err) {
                            throw err;
                        });
                    });
                };
                Api.prototype.getAllCaseStudies = function () {
                    return prismic_javascript_1["default"].getApi(prismicEndpoint).then(function (api) {
                        return api
                            .query(prismic_javascript_1["default"].Predicates.at("document.type", "case_study"), {
                            pageSize: 100
                        })
                            .then(function (res) { return res; })["catch"](function (err) {
                            throw err;
                        });
                    });
                };
                Api.prototype.getCaseStudyBySlug = function (slug) {
                    return prismic_javascript_1["default"].getApi(prismicEndpoint).then(function (api) {
                        return api
                            .getByUID("case_study", slug)
                            .then(function (res) { return res; })["catch"](function (err) {
                            throw err;
                        });
                    });
                };
                Api.prototype.getAllServices = function () {
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
                };
                Api.prototype.getServiceBySlug = function (slug) {
                    return prismic_javascript_1["default"].getApi(prismicEndpoint).then(function (api) {
                        return api
                            .getByUID("service", slug)
                            .then(function (res) { return res; })["catch"](function (err) {
                            throw err;
                        });
                    });
                };
                Api.prototype.getAllSinglePages = function () {
                    return prismic_javascript_1["default"].getApi(prismicEndpoint).then(function (api) {
                        return api
                            .query(prismic_javascript_1["default"].Predicates.at("document.type", "single_page"), {
                            pageSize: 100
                        })
                            .then(function (res) { return res; })["catch"](function (err) {
                            throw err;
                        });
                    });
                };
                Api.prototype.getSingleBySlug = function (slug) {
                    return prismic_javascript_1["default"].getApi(prismicEndpoint).then(function (api) {
                        return api
                            .getByUID("single_page", slug)
                            .then(function (res) {
                            return __assign({}, res.data, { id: res.id, uid: res.uid });
                        })["catch"](function (err) {
                            throw err;
                        });
                    });
                };
                Api.prototype.getGlobalSections = function () {
                    return prismic_javascript_1["default"].getApi(prismicEndpoint).then(function (api) {
                        return api
                            .query(prismic_javascript_1["default"].Predicates.at("document.type", "global_sections"))
                            .then(function (res) { return res.results[0].data; })["catch"](function (err) {
                            throw err;
                        });
                    });
                };
                Api.prototype.getInlineSVG = function (imageSrc) {
                    return fetch(imageSrc, { cache: "reload" }).then(function (res) {
                        return res.text();
                    });
                };
                return Api;
            }());
            exports_5("Api", Api);
        }
    };
});
System.register("ts/index", ["ts/browser-methods", "ts/prismic-methods", "ts/service-methods", "ts/prismic-api-methods"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_6(exports);
    }
    return {
        setters: [
            function (browser_methods_1_1) {
                exportStar_1(browser_methods_1_1);
            },
            function (prismic_methods_1_1) {
                exportStar_1(prismic_methods_1_1);
            },
            function (service_methods_1_1) {
                exportStar_1(service_methods_1_1);
            },
            function (prismic_api_methods_1_1) {
                exportStar_1(prismic_api_methods_1_1);
            }
        ],
        execute: function () {
        }
    };
});
