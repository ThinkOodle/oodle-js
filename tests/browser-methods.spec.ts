import * as methods from '../ts/browser-methods'
import * as mockAgents from './mock/user-agents'

/* isSafari()
-------------------------- */
describe('the isSafari() browser method returns', () => {
  it('true if the userAgent is Safari', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.safari
    expect(methods.isSafari()).toEqual(true)
  })

  it('false if the userAgent is Chrome', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.chrome
    expect(methods.isSafari()).toEqual(false)
  })

  it('false if the userAgent is Firefox', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.firefox
    expect(methods.isSafari()).toEqual(false)
  })

  it('false if the userAgent is Edge', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.edge
    expect(methods.isSafari()).toEqual(false)
  })

  it('false if the userAgent is IE', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.ie
    expect(methods.isSafari()).toEqual(false)
  })

  it('false if the userAgent is Opera', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.opera
    expect(methods.isSafari()).toEqual(false)
  })
})

/* isChrome()
-------------------------- */
describe('the isChrome() browser method returns', () => {
  it('false if the userAgent is Safari', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.safari
    expect(methods.isChrome()).toEqual(false)
  })

  it('true if the userAgent is Chrome', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.chrome
    expect(methods.isChrome()).toEqual(true)
  })

  it('false if the userAgent is Firefox', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.firefox
    expect(methods.isChrome()).toEqual(false)
  })

  it('false if the userAgent is Edge', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.edge
    expect(methods.isChrome()).toEqual(false)
  })

  it('false if the userAgent is IE', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.ie
    expect(methods.isChrome()).toEqual(false)
  })

  it('false if the userAgent is Opera', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.opera
    expect(methods.isChrome()).toEqual(false)
  })
})

/* isFirefox()
-------------------------- */
describe('the isFirefox() browser method returns', () => {
  it('false if the userAgent is Safari', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.safari
    expect(methods.isFirefox()).toEqual(false)
  })

  it('false if the userAgent is Chrome', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.chrome
    expect(methods.isFirefox()).toEqual(false)
  })

  it('true if the userAgent is Firefox', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.firefox
    expect(methods.isFirefox()).toEqual(true)
  })

  it('false if the userAgent is Edge', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.edge
    expect(methods.isFirefox()).toEqual(false)
  })

  it('false if the userAgent is IE', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.ie
    expect(methods.isFirefox()).toEqual(false)
  })

  it('false if the userAgent is Opera', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.opera
    expect(methods.isFirefox()).toEqual(false)
  })
})

/* isEdge()
-------------------------- */
describe('the isEdge() browser method returns', () => {
  it('false if the userAgent is Safari', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.safari
    expect(methods.isEdge()).toEqual(false)
  })

  it('false if the userAgent is Chrome', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.chrome
    expect(methods.isEdge()).toEqual(false)
  })

  it('false if the userAgent is Firefox', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.firefox
    expect(methods.isEdge()).toEqual(false)
  })

  it('true if the userAgent is Edge', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.edge
    expect(methods.isEdge()).toEqual(true)
  })

  it('false if the userAgent is IE', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.ie
    expect(methods.isEdge()).toEqual(false)
  })

  it('false if the userAgent is Opera', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.opera
    expect(methods.isEdge()).toEqual(false)
  })
})

/* isIE()
-------------------------- */
describe('the isIE() browser method returns', () => {
  it('false if the userAgent is Safari', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.safari
    expect(methods.isIE()).toEqual(false)
  })

  it('false if the userAgent is Chrome', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.chrome
    expect(methods.isIE()).toEqual(false)
  })

  it('false if the userAgent is Firefox', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.firefox
    expect(methods.isIE()).toEqual(false)
  })

  it('false if the userAgent is Edge', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.edge
    expect(methods.isIE()).toEqual(false)
  })

  it('true if the userAgent is IE', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.ie
    expect(methods.isIE()).toEqual(true)
  })

  it('false if the userAgent is Opera', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.opera
    expect(methods.isIE()).toEqual(false)
  })
})

describe('the isOpera() browser method returns', () => {
  it('false if the userAgent is Safari', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.safari
    expect(methods.isOpera()).toEqual(false)
  })

  it('false if the userAgent is Chrome', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.chrome
    expect(methods.isOpera()).toEqual(false)
  })

  it('false if the userAgent is Firefox', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.firefox
    expect(methods.isOpera()).toEqual(false)
  })

  it('false if the userAgent is Edge', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.edge
    expect(methods.isOpera()).toEqual(false)
  })

  it('false if the userAgent is IE', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.ie
    expect(methods.isOpera()).toEqual(false)
  })

  it('true if the userAgent is Opera', () => {
    // @ts-ignore
    window.navigator.userAgent = mockAgents.opera
    expect(methods.isOpera()).toEqual(true)
  })
})