/**
 * @prettier
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

import { edges } from '../../../_mock_/mock-graphql-articles.json'
import { flatten } from './index'

/**
 * Testing utility function that transforms array of objects
 */
describe('Transform objects', () => {
  it('flatten - flatten a nested object', () => {
    const arrayWithFlattenObjects = edges.map( edge => {
      return flatten(edge)
    })

    const expected = {
      "date": "November, 2019",
      "publishedBy": "Henrik Grönvall",
      "slug": "/articles/worker-threads/",
      "title": "Node.js worker threads"
    }

    expect(arrayWithFlattenObjects[0]).toEqual(expected)
  })
})
