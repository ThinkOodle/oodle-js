export interface Browser {
  isChrome: () => boolean
  isSafari: () => boolean,
  isFirefox: () => boolean,
  isOpera: () => boolean,
  isEdge: () => boolean,
  isIE: () => boolean,
  get: () => 'chrome' | 'safari' | 'firefox' | 'ie' | 'edge' | 'opera' | undefined
}

export interface OperatingSystem {
  isIOS: () => boolean,
  isAndroid: () => boolean,
  isMacOS: () => boolean,
  isLinux: () => boolean,
  isChromeOS: () => boolean,
  isWindows: () => boolean
}