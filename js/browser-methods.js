"use strict";
exports.__esModule = true;
var ua = navigator.userAgent.toLowerCase();
function isSafari() {
    return ua.indexOf('safari') > -1 ? true : false;
}
exports.isSafari = isSafari;
function isFirefox() {
    return ua.indexOf('firefox') > -1 ? true : false;
}
exports.isFirefox = isFirefox;
function isIE() {
    return ua.indexOf('msie') > -1 ? true : false;
}
exports.isIE = isIE;
function isEdge() {
    return ua.indexOf('edge') > -1 ? true : false;
}
exports.isEdge = isEdge;
function isOpera() {
    return ua.indexOf('op') > -1 ? true : false;
}
exports.isOpera = isOpera;
