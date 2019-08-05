// THESE ARE GENERATED FILES - DO NOT EDIT 
// PLEASE MODIFY THE TYPESCRIPT SOURCE FILES

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