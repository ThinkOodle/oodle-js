// Generate Comment

import {Browser} from '../types'

export function isSafari(): boolean {
  const ua: string = window.navigator.userAgent.toLowerCase()
  return ua.indexOf('safari') > -1 && ua.indexOf('chrome') == -1
}

export function isChrome(): boolean {
  const ua: string = window.navigator.userAgent.toLowerCase()
  return ua.indexOf('chrome') > -1 && ua.indexOf('edge') === -1
}

export function isFirefox(): boolean {
  const ua: string = window.navigator.userAgent.toLowerCase()
  return ua.indexOf('firefox') > -1
}

export function isIE(): boolean {
  return (window.document as any).documentMode !== undefined
}

export function isEdge(): boolean {
  const ua: string = window.navigator.userAgent.toLowerCase()
  return ua.indexOf('edge') >= 0
}

export function isOpera(): boolean {
  const ua: string = window.navigator.userAgent.toLowerCase()
  return ua.indexOf('op') > -1
}

export function getBrowser(): 'chrome' | 'safari' | 'firefox' | 'ie' | 'edge' | 'opera' | undefined {
  if (isChrome()) return 'chrome'
  else if (isSafari()) return 'safari'
  else if (isFirefox()) return 'firefox'
  else if (isIE()) return 'ie'
  else if (isEdge) return 'edge'
  else if (isOpera()) return 'opera'
  else return undefined
}

export const browser: Browser = {
  isChrome,
  isSafari,
  isFirefox,
  isOpera,
  isEdge,
  isIE,
  get: getBrowser
}
