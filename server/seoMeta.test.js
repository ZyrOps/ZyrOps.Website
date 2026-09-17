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
