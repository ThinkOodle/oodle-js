"use strict";
exports.__esModule = true;
function isSafari() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') > -1 && ua.indexOf('chrome') == -1 ? true : false;
}
exports.isSafari = isSafari;
function isChrome() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('chrome') > -1 && ua.indexOf('edge') === -1 ? true : false;
}
exports.isChrome = isChrome;
function isFirefox() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('firefox') > -1 ? true : false;
}
exports.isFirefox = isFirefox;
function isIE() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('msie') > -1 ? true : false;
}
exports.isIE = isIE;
function isEdge() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('edge') >= 0 ? true : false;
}
exports.isEdge = isEdge;
function isOpera() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('op') > -1 ? true : false;
}
exports.isOpera = isOpera;
