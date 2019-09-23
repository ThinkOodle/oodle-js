import Prismic from "prismic-javascript";
import { prepareSnakeCaseData } from "./utility-methods";
export function getDocTypeByID(docType, UID, prismicEndpoint) {
    return Prismic.getApi(prismicEndpoint).then(api => {
        return api
            .getByUID(docType, UID)
            .then(res => {
            const formattedRes = prepareSnakeCaseData(res);
            return Object.assign({}, formattedRes.data, { id: formattedRes.id, uid: formattedRes.uid });
        })
            .catch(err => {
            throw err;
        });
    });
}
export function getAllDocs(prismicEndpoint) {
    return Prismic.getApi(prismicEndpoint).then(api => {
        // @ts-ignore
        return api
            .query()
            .then(res => res)
            .catch(err => {
            throw err;
        });
    });
}
export function getAllPosts(prismicEndpoint, params = {}) {
    return Prismic.getApi(prismicEndpoint).then(api => {
        return api
            .query(Prismic.Predicates.at("document.type", "blog_page"), {
            orderings: "[my.blog_page.creation_date desc]",
            // @ts-ignore
            pageSize: params.numPostsToLoad,
            // @ts-ignore
            page: params.page
        })
            .then(res => res)
            .catch(err => {
            throw err;
        });
    });
}
export function getPostCategories(prismicEndpoint) {
    return Prismic.getApi(prismicEndpoint).then(api => {
        // @ts-ignore
        return api
            .query(Prismic.Predicates.at("document.type", "blog_post_categories"))
            .then(res => {
            return Object.assign({}, res.results[0].data);
        })
            .catch(err => {
            throw err;
        });
    });
}
export function getPostsByCategory(prismicEndpoint, params = {}) {
    return Prismic.getApi(prismicEndpoint).then(api => {
        return api
            .query([
            Prismic.Predicates.at("document.type", "blog_page"),
            // @ts-ignore
            Prismic.Predicates.at("document.tags", [params.category])
        ], {
            orderings: "[my.blog_page.creation_date desc]",
            // @ts-ignore
            pageSize: params.numPostsToLoad,
            // @ts-ignore
            page: params.page
        })
            .then(res => res)
            .catch(err => {
            throw err;
        });
    });
}
export function getPostBySlug(prismicEndpoint, slug) {
    return Prismic.getApi(prismicEndpoint).then(api => {
        return api
            .getByUID("blog_page", slug)
            .then(res => res)
            .catch(err => {
            throw err;
        });
    });
}
export function getAllCaseStudies(prismicEndpoint) {
    return Prismic.getApi(prismicEndpoint).then(api => {
        return api
            .query(Prismic.Predicates.at("document.type", "case_study"), {
            pageSize: 100
        })
            .then(res => res)
            .catch(err => {
            throw err;
        });
    });
}
export function getCaseStudyBySlug(prismicEndpoint, slug) {
    return Prismic.getApi(prismicEndpoint).then(api => {
        return api
            .getByUID("case_study", slug)
            .then(res => res)
            .catch(err => {
            throw err;
        });
    });
}
export function getAllServices(prismicEndpoint) {
    return Prismic.getApi(prismicEndpoint).then(api => {
        return api
            .query(Prismic.Predicates.at("document.type", "service"), {
            orderings: "[my.service.date desc]",
            pageSize: 100
        })
            .then(res => res)
            .catch(err => {
            throw err;
        });
    });
}
export function getServiceBySlug(prismicEndpoint, slug) {
    return Prismic.getApi(prismicEndpoint).then(api => {
        return api
            .getByUID("service", slug)
            .then(res => res)
            .catch(err => {
            throw err;
        });
    });
}
export function getAllSinglePages(prismicEndpoint) {
    return Prismic.getApi(prismicEndpoint).then(api => {
        return api
            .query(Prismic.Predicates.at("document.type", "single_page"), {
            pageSize: 100
        })
            .then(res => res)
            .catch(err => {
            throw err;
        });
    });
}
export function getSingleBySlug(prismicEndpoint, slug) {
    return Prismic.getApi(prismicEndpoint).then(api => {
        return api
            .getByUID("single_page", slug)
            .then(res => {
            return Object.assign({}, res.data, { id: res.id, uid: res.uid });
        })
            .catch(err => {
            throw err;
        });
    });
}
export function getGlobalSections(prismicEndpoint) {
    return Prismic.getApi(prismicEndpoint).then(api => {
        // @ts-ignore
        return api
            .query(Prismic.Predicates.at("document.type", "global_sections"))
            .then(res => res.results[0].data)
            .catch(err => {
            throw err;
        });
    });
}
export function getInlineSVG(imageSrc) {
    return fetch(imageSrc, { cache: "reload" }).then(res => {
        return res.text();
    });
}
export const prismic = {
    getDocTypeByID,
    getAllDocs,
    getAllPosts,
    getPostCategories,
    getPostsByCategory,
    getPostBySlug,
    getAllCaseStudies,
    getCaseStudyBySlug,
    getAllServices,
    getServiceBySlug,
    getAllSinglePages,
    getSingleBySlug,
    getGlobalSections,
    getInlineSVG
};
