import htmlSerializer from '../utils/html-serializer';
import prismicDOM from 'prismic-dom';
import { convertSnakeToCamel } from './utility-methods';
export function linkResolver(doc) {
    if (doc.isBroken) {
        return '/not-found';
    }
    if (doc.type === 'home') {
        return '/';
    }
    if (doc.type === 'page') {
        return '/page/' + doc.uid;
    }
    return '/not-found';
}
export function mergeResponse(res) {
    if (res) {
        const wholeObject = Object.assign({}, res, res.data);
        delete wholeObject.data;
        return Object.assign({}, wholeObject);
    }
}
export function setSectionRichText(section) {
    if (section['primary']) {
        const primeKeys = Object.keys(section['primary']);
        primeKeys.map(pKey => {
            if (Array.isArray(section['primary'][pKey])) {
                section['primary'][`${pKey}_serialized`] = prismicDOM.RichText.asHtml(section['primary'][pKey], linkResolver, htmlSerializer);
            }
        });
    }
    if (section['items']) {
        const items = section['items'];
        items.map(item => {
            const itemKeys = Object.keys(item);
            itemKeys.map(iKey => {
                if (Array.isArray(item[iKey])) {
                    item[`${iKey}_serialized`] = prismicDOM.RichText.asHtml(item[iKey], linkResolver, htmlSerializer);
                }
            });
        });
    }
    return section;
}
export function createLoopableSections(doc) {
    const slices = {};
    doc.body.map(slice => {
        const modSlice = { items: slice.items, primary: slice.primary };
        if (slices[slice.sliceType || slice.slice_type]) {
            slices[slice.sliceType || slice.slice_type].push(setSectionRichText(modSlice));
        }
        else {
            slices[slice.sliceType || slice.slice_type] = [];
            slices[slice.sliceType || slice.slice_type].push(setSectionRichText(modSlice));
        }
    });
    doc.slices = slices;
    delete doc.body;
    return doc;
}
export function createPage(res) {
    return convertSnakeToCamel(createLoopableSections(mergeResponse(res)));
}
