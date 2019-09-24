export interface PrismicAPI {
  getDocTypeByID: (
    docType: string,
    UID: string,
    prismicEndpoint: string
  ) => any;
  getSingleDocByType: (prismicEndpoint: string, docType: string) => any;
  getAllDocs: (prismicEndpoint: string) => any;
}

export interface PrismicSlice {
  index?: number;
  items: [];
  primary: object;
  slice_label?: string;
  slice_type: string;
}

export interface PrismicDocument {
  isBroken: boolean;
  type: string;
  uid: string;
}
