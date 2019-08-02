// Generate Comment

import Prismic from 'prismic-javascript';
export const prismicEndpoint = 'https://oodle-vue.cdn.prismic.io/api/v2'

export class Api {
  getDocByID(ID) {
    return Prismic.getApi(prismicEndpoint).then(api => {
      return api
        .getByID(ID)
        .then(res => res)
        .catch(err => {
          throw err;
        });
    });
  }

  getAllDocs() {
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

  getAllPosts(params = {}) {
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

  getPostCategories() {
    return Prismic.getApi(prismicEndpoint).then(api => {
      // @ts-ignore
      return api
        .query(Prismic.Predicates.at("document.type", "blog_post_categories"))
        .then(res => {
          return { ...res.results[0].data };
        })
        .catch(err => {
          throw err;
        });
    });
  }

  getPostsByCategory(params = {}) {
    return Prismic.getApi(prismicEndpoint).then(api => {
      return api
        .query(
          [
            Prismic.Predicates.at("document.type", "blog_page"),
            // @ts-ignore
            Prismic.Predicates.at("document.tags", [params.category])
          ],
          {
            orderings: "[my.blog_page.creation_date desc]",
            // @ts-ignore
            pageSize: params.numPostsToLoad,
            // @ts-ignore
            page: params.page
          }
        )
        .then(res => res)
        .catch(err => {
          throw err;
        });
    });
  }

  getPostBySlug(slug) {
    return Prismic.getApi(prismicEndpoint).then(api => {
      return api
        .getByUID("blog_page", slug)
        .then(res => res)
        .catch(err => {
          throw err;
        });
    });
  }

  getAllCaseStudies() {
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

  getCaseStudyBySlug(slug) {
    return Prismic.getApi(prismicEndpoint).then(api => {
      return api
        .getByUID("case_study", slug)
        .then(res => res)
        .catch(err => {
          throw err;
        });
    });
  }

  getAllServices() {
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

  getServiceBySlug(slug) {
    return Prismic.getApi(prismicEndpoint).then(api => {
      return api
        .getByUID("service", slug)
        .then(res => res)
        .catch(err => {
          throw err;
        });
    });
  }

  getAllSinglePages() {
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

  getSingleBySlug(slug) {
    return Prismic.getApi(prismicEndpoint).then(api => {
      return api
        .getByUID("single_page", slug)
        .then(res => {
          return { ...res.data, id: res.id, uid: res.uid };
        })
        .catch(err => {
          throw err;
        });
    });
  }

  getGlobalSections() {
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

  getInlineSVG(imageSrc) {
    return fetch(imageSrc, { cache: "reload" }).then(res => {
      return res.text();
    });
  }
}
