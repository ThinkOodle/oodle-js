import prismicDOM from 'prismic-dom';
import { convertSnakeToCamel, flatten } from './utility-methods';
export function mergeResponse(res) {
    if (res) {
        const wholeObject = Object.assign({}, res, res.data, { slices: undefined });
        delete wholeObject.data;
        return Object.assign({}, wholeObject);
    }
}
export function setSectionRichText(section, linkResolver, htmlSerializer) {
    if (section['primary']) {
        const primeKeys = Object.keys(section['primary']);
        primeKeys.map(pKey => {
            if (Array.isArray(section['primary'][pKey])) {
                section['primary'][`${pKey}Serialized`] = prismicDOM.RichText.asHtml(section['primary'][pKey], linkResolver, htmlSerializer);
            }
        });
    }
    if (section['items']) {
        const items = section['items'];
        items.map(item => {
            const itemKeys = Object.keys(item);
            itemKeys.map(iKey => {
                if (Array.isArray(item[iKey])) {
                    item[`${iKey}Serialized`] = prismicDOM.RichText.asHtml(item[iKey], linkResolver, htmlSerializer);
                }
            });
        });
    }
    return section;
}
export function createLoopableSections(doc, linkResolver, htmlSerializer) {
    if (doc && !doc.body) {
        return doc;
    }
    else if (doc && doc.body) {
        const slices = {};
        doc.body.map((slice, index) => {
            if (linkResolver && htmlSerializer) {
                slice = setSectionRichText(slice, linkResolver, htmlSerializer);
            }
            const modSlice = {
                items: slice.items,
                primary: slice.primary,
                order: index * 2,
            };
            if (slices[slice.sliceType || slice.slice_type]) {
                slices[slice.sliceType || slice.slice_type].push(modSlice);
            }
            else {
                slices[slice.sliceType || slice.slice_type] = [];
                slices[slice.sliceType || slice.slice_type].push(modSlice);
            }
        });
        delete doc.body;
        return Object.assign({}, doc, { slices: slices });
    }
    else {
        return undefined;
    }
}
export function createPage(res, linkResolver, htmlSerializer) {
    // always convertSnakeToCamel last
    const doc = createLoopableSections(mergeResponse(res), linkResolver, htmlSerializer);
    return doc ? convertSnakeToCamel(doc) : undefined;
}
export function queuePreLoadedImages(nestedDataSet, filter) {
    const flatRes = flatten(nestedDataSet);
    const imageUrls = [];
    const imageTypes = ['.jpg', '.jpeg', '.gif', '.svg', '.png'];
    Object.keys(flatRes).map(key => {
        if (typeof key !== 'string' ||
            !key.toLowerCase().includes('url') ||
            (filter && !key.toLowerCase().includes(filter)))
            return;
        imageTypes.map((imageType) => {
            if (flatRes[key].toLowerCase().includes(imageType)) {
                imageUrls.push(flatRes[key]);
            }
        });
    });
    return imageUrls;
}
