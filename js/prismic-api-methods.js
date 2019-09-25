import Prismic from 'prismic-javascript';
export function getDocTypeByID(prismicEndpoint, docType, UID) {
    return Prismic.getApi(prismicEndpoint).then(api => {
        return api
            .getByUID(docType, UID)
            .then(res => {
            return res ? Object.assign({}, res.data, { id: res.id, uid: res.uid }) : undefined;
        })
            .catch(err => {
            throw err;
        });
    });
}
export function getSingleDocByType(prismicEndpoint, docType) {
    return Prismic.getApi(prismicEndpoint).then(api => {
        return api
            .getSingle(docType)
            .then(res => {
            return res ? Object.assign({}, res.data, { id: res.id, uid: docType }) : undefined;
        })
            .catch(err => {
            throw err;
        });
    });
}
export function getAllDocs(prismicEndpoint) {
    return Prismic.getApi(prismicEndpoint).then(api => {
        // @ts-ignore
        return api
            .query()
            .then(res => res ? res : undefined)
            .catch(err => {
            throw err;
        });
    });
}
export const prismic = {
    getDocTypeByID,
    getSingleDocByType,
    getAllDocs
};
