export interface PrismicAPI {
  getDocTypeByID: (
    docType: string,
    UID: string,
    prismicEndpoint: string
  ) => any;
  getSingleDocByType: (prismicEndpoint: string, docType: string) => any;
  getAllDocs: (prismicEndpoint: string) => any;
  getAllPosts: (prismicEndpoint: string, params) => any;
  getPostCategories: (prismicEndpoint: string) => any;
  getPostsByCategory: (prismicEndpoint: string, params) => any;
  getPostBySlug: (prismicEndpoint: string, slug: string) => any;
  getAllCaseStudies: (prismicEndpoint: string) => any;
  getCaseStudyBySlug: (prismicEndpoint: string, slug: string) => any;
  getAllServices: (prismicEndpoint: string) => any;
  getServiceBySlug: (prismicEndpoint: string, slug: string) => any;
  getAllSinglePages: (prismicEndpoint: string) => any;
  getSingleBySlug: (prismicEndpoint: string, slug: string) => any;
  getGlobalSections: (prismicEndpoint: string) => any;
  getInlineSVG: (prismicEndpoint: string, imageSrc: string) => any;
}

export interface PrismicDocument {
  isBroken: boolean;
  type: string;
  uid: string;
}
