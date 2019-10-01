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
        return '/' + doc.uid;
    }
    return '/not-found';
}
export function mergeResponse(res) {
    if (res) {
        const wholeObject = Object.assign({}, res, res.data, { slices: undefined });
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
    if (!doc.body)
        return doc;
    const slices = {};
    doc.body.map((slice, index) => {
        const modSlice = {
            items: slice.items,
            primary: slice.primary,
            order: index * 2
        };
        if (slices[slice.sliceType || slice.slice_type]) {
            slices[slice.sliceType || slice.slice_type].push(setSectionRichText(modSlice));
        }
        else {
            slices[slice.sliceType || slice.slice_type] = [];
            slices[slice.sliceType || slice.slice_type].push(setSectionRichText(modSlice));
        }
    });
    delete doc.body;
    return Object.assign({}, doc, { slices: slices });
}
export function createPage(res) {
    // always convertSnakeToCamel last
    return convertSnakeToCamel(createLoopableSections(mergeResponse(res)));
}
