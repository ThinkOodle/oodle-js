// THESE ARE GENERATED FILES - DO NOT EDIT 
// PLEASE MODIFY THE TYPESCRIPT SOURCE FILES

export function isSafari() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') > -1 && ua.indexOf('chrome') == -1;
}
export function isChrome() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('chrome') > -1 && ua.indexOf('edge') === -1;
}
export function isFirefox() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('firefox') > -1;
}
export function isIE() {
    return window.document.documentMode !== undefined;
}
export function isEdge() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('edge') >= 0;
}
export function isOpera() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('op') > -1;
}
export function getBrowser() {
    if (isChrome())
        return 'chrome';
    else if (isSafari())
        return 'safari';
    else if (isFirefox())
        return 'firefox';
    else if (isIE())
        return 'ie';
    else if (isEdge)
        return 'edge';
    else if (isOpera())
        return 'opera';
    else
        return undefined;
}
export const browser = {
    isChrome,
    isSafari,
    isFirefox,
    isOpera,
    isEdge,
    isIE,
    get: getBrowser
};
