// Generate Comment

export function isSafari(): boolean {
  const ua: string = window.navigator.userAgent.toLowerCase()
  return ua.indexOf('safari') > -1 && ua.indexOf('chrome') == -1 ? true : false 
}

export function isChrome(): boolean {
  const ua: string = window.navigator.userAgent.toLowerCase()
  return ua.indexOf('chrome') > -1 && ua.indexOf('edge') === -1 ? true : false
}

export function isFirefox(): boolean {
  const ua: string = window.navigator.userAgent.toLowerCase()
  return ua.indexOf('firefox') > -1 ? true : false
}

export function isIE(): boolean {
  const ua: string = window.navigator.userAgent.toLowerCase()
  return ua.indexOf('msie') > -1 ? true : false
}

export function isEdge(): boolean {
  const ua: string = window.navigator.userAgent.toLowerCase()
  return ua.indexOf('edge') >= 0 ? true : false
}

export function isOpera(): boolean {
  const ua: string = window.navigator.userAgent.toLowerCase()
  return ua.indexOf('op') > -1 ? true : false
}
