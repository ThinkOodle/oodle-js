import { Document } from '../node_modules/prismic-javascript/d.ts/documents.d'
import ApiSearchResponse from '../node_modules/prismic-javascript/d.ts/ApiSearchResponse.d'

export interface MergerdPrismicSingleDocResponse {
  id: string;
  uid?: string;
  type: string;
  href: string;
  tags: string[];
  slugs: string[];
  lang?: string;
  alternate_languages: string[];
  first_publication_date: string | null;
  last_publication_date: string | null;
  body: [];
}

export interface FormattedDocument extends MergerdPrismicSingleDocResponse {
  slices: Slice[];
}

export interface CamelCasedFormattedDocument {
  id: string;
  uid?: string;
  type: string;
  href: string;
  tags: string[];
  slugs: string[];
  lang?: string;
  alternateLanguages: string[];
  firstPublication_date: string | null;
  lastPublicationDate: string | null;
  slices: ModifiedSlice;
}

export interface Slice {
  slice_type?: string;
  slice_label?: string;
  sliceType?: string;
  sliceLabel?: string;
  items: object[];
  primary: object;
}

export interface ModifiedSlice {
  items: object[];
  primary: object;
  order: string|number;
}

export interface PrismicAPI {
  getByID: (
    prismicEndpoint: string,
    ID: string,
    req?: Request,
  ) => Promise<Document>;
  getDocTypeByUID: (
    docType: string,
    UID: string,
    prismicEndpoint: string,
    req?: Request,
  ) => Promise<Document>;
  getSingleDocByType: (
    prismicEndpoint: string,
    docType: string,
    req?: Request,
  ) => Promise<Document>;
  getAllDocs: (prismicEndpoint: string, req?: Request) => Promise<ApiSearchResponse>;
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
