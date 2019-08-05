/* Mobile Operating Systems
----------------------------------------- */
export function isIOS() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('iphone') > -1 && ua.indexOf('safari') > -1;
}
export function isAndroid() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('android') > -1;
}
/* Desktop Operating Systems
----------------------------------------- */
export function isMacOS() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('macintosh') > -1;
}
export function isChromeOS() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('cros') > -1;
}
export function isWindows() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('win64') > -1 || ua.indexOf('wow64') > -1;
}
export function isLinux() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('linux') > -1;
}
