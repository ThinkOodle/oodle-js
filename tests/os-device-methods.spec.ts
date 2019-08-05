import * as methods from '../ts/os-device-methods'
import * as mockAgents from './mock/user-agents'

/* isSafari()
-------------------------- */
describe('the isIOS() browser method returns', () => {
  it('true if the userAgent is iOS', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.ios
    expect(methods.isIOS()).toEqual(true)
  })

  it('false if the userAgent is not iOS', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.ios
    expect(methods.isAndroid()).toEqual(false)
  })
})

describe('the isAndroid() browser method returns', () => {
  it('true if the userAgent is Android', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.android
    expect(methods.isAndroid()).toEqual(true)
  })

  it('false if the userAgent is not Android', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.android
    expect(methods.isIOS()).toEqual(false)
  })
})

describe('the isMacOS() browser method returns', () => {
  it('true if the userAgent is macOS', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.macOS
    expect(methods.isMacOS()).toEqual(true)
  })

  it('false if the userAgent is not macOS', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.windows
    expect(methods.isMacOS()).toEqual(false)
  })
})

describe('the isChromeOS() browser method returns', () => {
  it('true if the userAgent is ChromeOS', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.chromeOS
    expect(methods.isChromeOS()).toEqual(true)
  })

  it('false if the userAgent is not ChromeOS', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.windows
    expect(methods.isChromeOS()).toEqual(false)
  })
})

describe('the isWindows() browser method returns', () => {
  it('true if the userAgent is ChromeOS', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.windows
    expect(methods.isWindows()).toEqual(true)
  })

  it('false if the userAgent is not ChromeOS', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.macOS
    expect(methods.isWindows()).toEqual(false)
  })
})

describe('the isLinux() browser method returns', () => {
  it('true if the userAgent is Linux', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.linux
    expect(methods.isLinux()).toEqual(true)
  })

  it('false if the userAgent is not Linux', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.macOS
    expect(methods.isWindows()).toEqual(false)
  })
})