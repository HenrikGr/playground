/**
 * @prettier
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

import { people } from '../../../_mock_/mock-arrays'
import { edges } from '../../../_mock_/mock-graphql-articles.json'
import { groupByNestedProperty, groupByProperty } from './index'

/**
 * Testing utility function that transforms array of objects
 */
describe("Transform array of objects to an object with keys", () => {

  it("groupByProperty - groups an array of flat objects by object property", () => {
    const groupedPeople = groupByProperty(people, 'country');
    const expected = {
      Sweden: [
        { firstname: 'Kalle', lastName: 'Kula', country: 'Sweden' },
        { firstname: 'Kajsa', lastName: 'Andersson', country: 'Sweden' }
      ],
      Finland: [ { firstname: 'Arne', lastName: 'Arneson', country: 'Finland' } ]
    }

    expect(groupedPeople).toEqual(expected)

  })


  it("groupByNestedProperty - groups an array of nested objects by object property", () => {
    const groupedBy = groupByNestedProperty(edges, 'date');
    const expected = {
      "January, 2019": [
        {
          "date": "January, 2019",
          "publishedBy": "Henrik Grönvall",
          "slug": "/articles/nodejs-architecture-details/",
          "title": "Node.js architecture"
        },
        {
          "date": "January, 2019",
          "publishedBy": "Henrik Grönvall",
          "slug": "/articles/nodejs-architecture-overview/",
          "title": "Node.js architecture"
        }
      ],
      "November, 2019": [
        {
          "date": "November, 2019",
          "publishedBy": "Henrik Grönvall",
          "slug": "/articles/worker-threads/",
          "title": "Node.js worker threads"
        },
        {
          "date": "November, 2019",
          "publishedBy": "Henrik Grönvall",
          "slug": "/articles/react-how-to-use-context-part1/",
          "title": "How to use context in React - part 2"
        },
        {
          "date": "November, 2019",
          "publishedBy": "Henrik Grönvall",
          "slug": "/articles/react-how-to-use-context-part1/",
          "title": "How to use context in React - part 1"
        },
        {
          "date": "November, 2019",
          "publishedBy": "Henrik Grönvall",
          "slug": "/articles/js-object-explained/",
          "title": "JavaScript prototype"
        },
        {
          "date": "November, 2019",
          "publishedBy": "Henrik Grönvall",
          "slug": "",
          "title": "JavaScript Object"
        }
      ]
    }

    expect(groupedBy).toEqual(expected)
  })



});
