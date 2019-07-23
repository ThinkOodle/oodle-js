const ua = navigator.userAgent.toLowerCase();

export function isSafari(): boolean {
  console.log('in function')
  console.log(ua)
  return ua.indexOf('safari') > -1 ? true : false
}

export function isChrome(): boolean {
  return ua.indexOf('chrome') > -1 ? true : false
}

export function isFirefox(): boolean {
  return ua.indexOf('firefox') > -1 ? true : false
}

export function isIE(): boolean {
  return ua.indexOf('msie') > -1 ? true : false
}

export function isEdge(): boolean {
  return ua.indexOf('edge') > -1 ? true : false
}

export function isOpera(): boolean {
  return ua.indexOf('op') > -1 ? true : false
}
