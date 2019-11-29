/**
 * @prettier
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import { shallow, mount, render } from 'enzyme'
import renderer from 'react-test-renderer'

import List from '../List'

/**
 * Tests of a common list pattern in react using different
 * conceptual testing
 */
describe('List tests', () => {
  /**
   * Shallow rendering is the most basic version of testing with Enzyme. As the name suggests,
   * shallow rendering limits it's scope to the component to be tested and not it's children.
   *
   * This comes in handy in various scenarios:
   * - For presentational/dummy components that simply render props, there is no need to try and render any other children.
   * - For components with deeply nested children components, a change in behavior of the children should not affect the
   *   behavior of the parent component to be tested.
   */
  describe('Shallow render testing', () => {
    it('renders list-items', () => {
      const items = ['one', 'two', 'three']
      const wrapper = shallow(<List items={items} />)

      //console.log(wrapper.debug());

      // Expect the wrapper object to be defined
      expect(wrapper.find('.container')).toBeDefined()
      expect(wrapper.find('.item')).toHaveLength(items.length)
    })

    it('renders a list item', () => {
      const items = ['Thor', 'Loki']
      const wrapper = shallow(<List items={items} />)

      //console.log(wrapper.debug());

      expect(
        wrapper.contains(
          <li key="Thor" className="item">
            Thor
          </li>
        )
      ).toBeTruthy()
    })

    it('renders correct text in item', () => {
      const items = ['John', 'James', 'Luke']
      const wrapper = shallow(<List items={items} />)

      //console.log(wrapper.debug());

      expect(wrapper.find('.item').get(0).props.children).toEqual('John')
      expect(wrapper.find('.item').get(1).props.children).toEqual('James')
      expect(wrapper.find('.item').get(2).props.children).toEqual('Luke')
    })
  })

  /**
   * DOM rendering
   * Mount enables us to perform a full render
   */
  describe('Full DOM render testing', () => {
    it('renders list-items', () => {
      const items = ['one', 'two', 'three']
      const wrapper = mount(<List items={items} />)

      //console.log(wrapper.debug())

      expect(wrapper.find('.container')).toBeDefined()
      expect(wrapper.find('.item')).toHaveLength(items.length)
    })
  })

  /**
   * Static render testing
   *
   * Statics rendering works in the same way as shallow and mount but instead of returning an instance of the rendered
   * output, it returns the rendered HMTL. It is built on top of Cheerio, a DOM manipulation and traversal API that
   * borrows the magic of jQuery and strips out everything that we hate about it.
   */
  describe('Static render testing', () => {
    it('renders list-items', () => {
      const items = ['one', 'two', 'three']
      const wrapper = renderer.create(<List items={items} />)

      // Expect the wrapper object to be defined
      expect(wrapper.find('.container')).toBeDefined()
      expect(wrapper.find('.item')).toHaveLength(items.length)
    })
  })
})
