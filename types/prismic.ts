export interface PrismicAPI {
  getDocByID: (ID: any) => any,
  getAllDocs: () => any,
  getAllPosts: (params) => any,
  getPostCategories: () => any,
  getPostsByCategory: (params) => any,
  getPostBySlug: (slug: string) => any,
  getAllCaseStudies: () => any,
  getCaseStudyBySlug: (slug: string) => any,
  getAllServices: () => any,
  getServiceBySlug: (slug: string) => any,
  getAllSinglePages: () => any,
  getSingleBySlug: (slug: string) => any,
  getGlobalSections: () => any,
  getInlineSVG: (imageSrc: string) => any,
}

export interface PrismicDocument {
  isBroken: boolean
  type: string
  uid: string
}