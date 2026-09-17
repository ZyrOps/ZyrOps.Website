import test from 'node:test'
import assert from 'node:assert/strict'

import { getPageSeo } from './seoMeta.js'

test('home page metadata is default homepage values', () => {
  const meta = getPageSeo('/')
  assert.equal(meta.title, 'ZyrOps Technologies LLP — Complete Enterprise SaaS Suite | Operational Intelligence')
  assert.equal(meta.canonical, 'https://zyrops.com/')
  assert.equal(meta.h1, 'ZyrOps')
})

test('products route metadata uses product page values', () => {
  const meta = getPageSeo('/products/zyrohr')
  assert.equal(meta.title, 'ZyroHR — AI-Powered Enterprise HRMS | ZyrOps')
  assert.equal(meta.canonical, 'https://zyrops.com/products/zyrohr')
  assert.equal(meta.h1, 'ZyroHR')
})

test('careers route metadata stays distinct from homepage', () => {
  const meta = getPageSeo('/careers')
  assert.equal(meta.title, 'Careers — Join ZyrOps Technologies LLP | Operational Intelligence Engineering')
  assert.equal(meta.canonical, 'https://zyrops.com/careers')
  assert.equal(meta.h1, 'Engineer better. Grow with us.')
})

test('solution landing pages get route-specific metadata', () => {
  const hrms = getPageSeo('/solutions/hrms-software')
  assert.equal(hrms.title, 'HRMS Software for Attendance, Payroll and Employee Management | ZyrOps')
  assert.equal(hrms.canonical, 'https://zyrops.com/solutions/hrms-software')
  assert.equal(hrms.h1, 'HRMS software for smarter workforce operations')

  const retail = getPageSeo('/solutions/retail-pos-software')
  assert.equal(retail.title, 'Retail POS Software for Supermarkets and Multi-Store Operations | ZyrOps')
  assert.equal(retail.canonical, 'https://zyrops.com/solutions/retail-pos-software')
  assert.equal(retail.h1, 'Retail POS software for faster checkout and better control')
})
