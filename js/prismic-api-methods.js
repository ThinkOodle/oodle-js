var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Prismic from 'prismic-javascript';
export function getDocTypeByID(prismicEndpoint, docType, UID, req) {
    return __awaiter(this, void 0, void 0, function* () {
        let api;
        if (req) {
            api = yield Prismic.getApi(prismicEndpoint, { req });
        }
        else {
            api = yield Prismic.getApi(prismicEndpoint);
        }
        return api
            .getByUID(docType, UID)
            .then(res => {
            if (res)
                return res;
        })
            .catch(err => {
            throw err;
        });
    });
}
export function getSingleDocByType(prismicEndpoint, docType, req) {
    return __awaiter(this, void 0, void 0, function* () {
        let api;
        if (req) {
            api = yield Prismic.getApi(prismicEndpoint, { req });
        }
        else {
            api = yield Prismic.getApi(prismicEndpoint);
        }
        return api
            .getSingle(docType)
            .then(res => {
            if (res)
                return res;
        })
            .catch(err => {
            throw err;
        });
    });
}
export function getAllDocs(prismicEndpoint, req) {
    return __awaiter(this, void 0, void 0, function* () {
        let api;
        if (req) {
            api = yield Prismic.getApi(prismicEndpoint, { req });
        }
        else {
            api = yield Prismic.getApi(prismicEndpoint);
        }
        return api
            .query('', { pageSize: 100 })
            .then(res => (res ? res : undefined))
            .catch(err => {
            throw err;
        });
    });
}
export const prismic = {
    getDocTypeByID,
    getSingleDocByType,
    getAllDocs,
};
