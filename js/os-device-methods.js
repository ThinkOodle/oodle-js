"use strict";
exports.__esModule = true;
function isIOS() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('iphone') > -1 && ua.indexOf('safari') > -1;
}
exports.isIOS = isIOS;
function isAndroid() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('android') > -1;
}
exports.isAndroid = isAndroid;
/* Desktop Operating Systems
----------------------------------------- */
function isMacOS() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('macintosh') > -1;
}
exports.isMacOS = isMacOS;
function isChromeOS() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('cros') > -1;
}
exports.isChromeOS = isChromeOS;
function isWindows() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('win64') > -1 || ua.indexOf('wow64') > -1;
}
exports.isWindows = isWindows;
function isLinux() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('linux') > -1;
}
exports.isLinux = isLinux;
exports.operatingSystem = {
    isIOS: isIOS,
    isAndroid: isAndroid,
    isMacOS: isMacOS,
    isChromeOS: isChromeOS,
    isWindows: isWindows,
    isLinux: isLinux
};
