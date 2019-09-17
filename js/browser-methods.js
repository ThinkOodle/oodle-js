"use strict";
// THESE ARE GENERATED FILES - DO NOT EDIT 
// PLEASE MODIFY THE TYPESCRIPT SOURCE FILES

exports.__esModule = true;
function isSafari() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') > -1 && ua.indexOf('chrome') == -1;
}
exports.isSafari = isSafari;
function isChrome() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('chrome') > -1 && ua.indexOf('edge') === -1;
}
exports.isChrome = isChrome;
function isFirefox() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('firefox') > -1;
}
exports.isFirefox = isFirefox;
function isIE() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('msie') > -1;
}
exports.isIE = isIE;
function isEdge() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('edge') >= 0;
}
exports.isEdge = isEdge;
function isOpera() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('op') > -1;
}
exports.isOpera = isOpera;
function getBrowser() {
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
exports.getBrowser = getBrowser;
exports.browser = {
    isChrome: isChrome,
    isSafari: isSafari,
    isFirefox: isFirefox,
    isOpera: isOpera,
    isEdge: isEdge,
    isIE: isIE,
    get: getBrowser
};
