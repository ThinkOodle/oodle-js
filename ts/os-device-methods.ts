/* Mobile Operating Systems
----------------------------------------- */
import {OperatingSystem} from '../types'

export function isIOS(): boolean {
  const ua: string = window.navigator.userAgent.toLowerCase()
  return ua.indexOf('iphone') > -1 && ua.indexOf('safari') > -1
}

export function isAndroid(): boolean {
  const ua: string = window.navigator.userAgent.toLowerCase()
  return ua.indexOf('android') > -1
}

/* Desktop Operating Systems
----------------------------------------- */
export function isMacOS(): boolean {
  const ua: string = window.navigator.userAgent.toLowerCase()
  return ua.indexOf('macintosh') > -1
}

export function isChromeOS(): boolean {
  const ua: string = window.navigator.userAgent.toLowerCase()
  return ua.indexOf('cros') > -1
}

export function isWindows(): boolean {
  const ua: string = window.navigator.userAgent.toLowerCase()
  return ua.indexOf('win64') > -1 || ua.indexOf('wow64') > -1
}

export function isLinux(): boolean {
  const ua: string = window.navigator.userAgent.toLowerCase()
  return ua.indexOf('linux') > -1
}

export const operatingSystem: OperatingSystem = {
  isIOS,
  isAndroid,
  isMacOS,
  isChromeOS,
  isWindows,
  isLinux
}