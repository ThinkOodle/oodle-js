var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Prismic from 'prismic-javascript';
export function getByID(prismicEndpoint, ID, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const req = options.req;
        const api = yield Prismic.getApi(prismicEndpoint, { req });
        return api
            .getByID(ID)
            .then(res => {
            if (res)
                return res;
        })
            .catch(err => {
            throw err;
        });
    });
}
export function getDocTypeByUID(prismicEndpoint, docType, UID, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const req = options.req;
        const api = yield Prismic.getApi(prismicEndpoint, { req });
        return api
            .getByUID(docType, UID, { 'fetchLinks': options.fetchLinks })
            .then(res => {
            if (res)
                return res;
        })
            .catch(err => {
            throw err;
        });
    });
}
export function getSingleDocByType(prismicEndpoint, docType, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const req = options.req;
        const api = yield Prismic.getApi(prismicEndpoint, { req });
        return api
            .getSingle(docType, { 'fetchLinks': options.fetchLinks })
            .then(res => {
            if (res)
                return res;
        })
            .catch(err => {
            throw err;
        });
    });
}
export function getAllDocs(prismicEndpoint, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const req = options.req;
        const api = yield Prismic.getApi(prismicEndpoint, { req });
        return api
            .query('', { pageSize: 100 })
            .then(res => (res ? res : undefined))
            .catch(err => {
            throw err;
        });
    });
}
export const prismic = {
    getByID,
    getDocTypeByUID,
    getSingleDocByType,
    getAllDocs,
};
