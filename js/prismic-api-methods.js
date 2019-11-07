var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Prismic from 'prismic-javascript';
export function getByID(prismicEndpoint, ID, maybeOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const req = maybeOptions.req;
        const api = yield Prismic.getApi(prismicEndpoint, { req });
        return api
            .getByID(ID, maybeOptions.options)
            .then(res => {
            if (res)
                return res;
        })
            .catch(err => {
            throw err;
        });
    });
}
export function getDocTypeByUID(prismicEndpoint, docType, UID, maybeOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const req = maybeOptions.req;
        const api = yield Prismic.getApi(prismicEndpoint, { req });
        return api
            .getByUID(docType, UID, maybeOptions.options)
            .then(res => {
            if (res)
                return res;
        })
            .catch(err => {
            throw err;
        });
    });
}
export function getSingleDocByType(prismicEndpoint, docType, maybeOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const req = maybeOptions.req;
        const api = yield Prismic.getApi(prismicEndpoint, { req });
        return api
            .getSingle(docType, maybeOptions.options)
            .then(res => {
            if (res)
                return res;
        })
            .catch(err => {
            throw err;
        });
    });
}
export function getAllDocs(prismicEndpoint, maybeOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const req = maybeOptions.req;
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
