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
  document_name?: string;
  alternate_languages: string[];
  meta_title?: string;
  meta_description?: string;
  meta_image?: object;
  first_publication_date: string | null;
  last_publication_date: string | null;
  linked_documents?: [];
  slices: undefined;
  body: object[];
}

export interface Slice {
  slice_type?: string;
  slice_label?: string;
  sliceType?: string;
  sliceLabel?: string;
  items: object[];
  primary: object;
}

export interface FormattedDocument {
  id: string;
  uid?: string;
  type: string;
  href: string;
  tags: string[];
  slugs: string[];
  lang?: string;
  document_name?: string;
  alternate_languages: string[];
  meta_title?: string;
  meta_description?: string;
  meta_image?: object;
  first_publication_date: string | null;
  last_publication_date: string | null;
  linked_documents?: [];
  slices: object;
}

export interface CamelCasedFormattedDocument {
  id: string;
  uid?: string;
  type: string;
  href: string;
  tags: string[];
  slugs: string[];
  lang?: string;
  documentName?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaImage?: object;
  alternateLanguages: string[];
  firstPublicationDate: string | null;
  lastPublicationDate: string | null;
  slices: object;
}

export interface ModifiedSlice {
  items: object[];
  primary: object;
  order: string | number;
}

export interface PrismicAPI {
  getByID: (
    prismicEndpoint: string,
    ID: string,
    options: PrismicFetchOptions,
  ) => Promise<Document>;
  getDocTypeByUID: (
    docType: string,
    UID: string,
    prismicEndpoint: string,
    options: PrismicFetchOptions,
  ) => Promise<Document>;
  getSingleDocByType: (
    prismicEndpoint: string,
    docType: string,
    options: PrismicFetchOptions,
  ) => Promise<Document>;
  getAllDocs: (
    prismicEndpoint: string,
    options: PrismicFetchOptions,
  ) => Promise<ApiSearchResponse>;
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

export interface PrismicFetchOptions {
  req?: Request;
  fetchLinks?: string[] | string;
}
