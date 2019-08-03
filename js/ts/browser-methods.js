// Generate Comment
export function isSafari() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') > -1 && ua.indexOf('chrome') == -1 ? true : false;
}
export function isChrome() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('chrome') > -1 && ua.indexOf('edge') === -1 ? true : false;
}
export function isFirefox() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('firefox') > -1 ? true : false;
}
export function isIE() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('msie') > -1 ? true : false;
}
export function isEdge() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('edge') >= 0 ? true : false;
}
export function isOpera() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('op') > -1 ? true : false;
}
