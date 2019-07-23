import * as methods from '../ts/browser-methods'
import * as mockAgents from './mock/user-agents'
import { JSDOM } from 'jsdom'
const { window } = new JSDOM();

test(`detects the Safari browser`, () => {
  expect(methods.isSafari()).toBe(true)
})