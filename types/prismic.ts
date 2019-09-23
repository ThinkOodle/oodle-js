export interface PrismicAPI {
  getDocTypeByID: (
    docType: string,
    UID: string,
    prismicEndpoint: string
  ) => any;
  getAllDocs: (prismicEndpoint: string) => any;
  getAllPosts: (params) => any;
  getPostCategories: (prismicEndpoint: string) => any;
  getPostsByCategory: (params) => any;
  getPostBySlug: (slug: string) => any;
  getAllCaseStudies: () => any;
  getCaseStudyBySlug: (slug: string) => any;
  getAllServices: (prismicEndpoint: string) => any;
  getServiceBySlug: (prismicEndpoint: string, slug: string) => any;
  getAllSinglePages: (prismicEndpoint: string) => any;
  getSingleBySlug: (prismicEndpoint: string, slug: string) => any;
  getGlobalSections: (prismicEndpoint: string) => any;
  getInlineSVG: (imageSrc: string) => any;
}

export interface PrismicDocument {
  isBroken: boolean;
  type: string;
  uid: string;
}
