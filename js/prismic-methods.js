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
import htmlSerializer from '../utils/html-serializer';
import prismicDOM from 'prismic-dom';
export const setSectionRichText = function (section) {
    const keys = Object.keys(section);
    keys.map((key) => {
        if (section[key]) {
            if (section[key]['primary']) {
                const primeKeys = Object.keys(section[key]['primary']);
                primeKeys.map((pKey) => {
                    if (Array.isArray(section[key]['primary'][pKey])) {
                        section[key]['primary'][`${pKey}_serialized`] = prismicDOM.RichText.asHtml(section[key]['primary'][pKey], linkResolver, htmlSerializer);
                    }
                });
            }
            if (section[key]['items']) {
                const items = section[key]['items'];
                items.map(item => {
                    const itemKeys = Object.keys(item);
                    itemKeys.map(iKey => {
                        if (Array.isArray(item[iKey])) {
                            item[`${iKey}_serialized`] = prismicDOM.RichText.asHtml(item[iKey], linkResolver, htmlSerializer);
                        }
                    });
                });
            }
        }
    });
    return section;
};
export function sectionBySliceType(data, section, i) {
    const slice = data.find(obj => {
        return obj === section;
    });
    if (i) {
        slice.index = i;
    }
    return slice;
}
export function createSectionsBySlice(doc) {
    if (!doc.body)
        return doc;
    const newObject = Object.assign({}, doc);
    const body = [...doc.body];
    const count = {};
    body.map(section => {
        const label = section.slice_type;
        count[label] = 1;
    });
    body.map((section, i) => {
        const label = section.slice_type;
        if (newObject[label] !== undefined) {
            newObject[`${label}_${count[label] + 1}`] = sectionBySliceType(body, section, i);
            count[label] += 1;
        }
        else {
            newObject[label] = sectionBySliceType(body, section, i);
        }
    });
    const allSectionsReady = setSectionRichText(newObject);
    if (allSectionsReady.body) {
        delete allSectionsReady.body;
    }
    return allSectionsReady;
}
export function createLoopableSections(pageObject) {
    const sections = {};
    const sectionTypes = Object.keys(Object.assign({}, pageObject));
    sectionTypes.map(sectionType => {
        let duplicate = false;
        let dupeSection;
        sectionTypes.map(sectionTypeB => {
            if (sectionType.includes(sectionTypeB) &&
                sectionType !== sectionTypeB &&
                Number.isInteger(parseInt(sectionType.substring(sectionType.lastIndexOf('_') + 1)))) {
                duplicate = true;
                dupeSection = sectionTypeB;
            }
        });
        if (duplicate) {
            sections[dupeSection].push(pageObject[sectionType]);
        }
        else {
            sections[sectionType] = [];
            sections[sectionType].push(pageObject[sectionType]);
        }
    });
    return sections;
}
import { cloneDeep } from 'lodash';
import { convertSnakeToCamel } from './utility-methods';
export function createLoopablePage(page) {
    const pageClone = createSectionsBySlice(cloneDeep(page));
    const loopableSections = convertSnakeToCamel(createLoopableSections((pageClone)));
    pageClone.loopableSections = loopableSections;
    return convertSnakeToCamel(pageClone);
}
