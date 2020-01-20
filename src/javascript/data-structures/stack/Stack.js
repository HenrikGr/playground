/**
 * @prettier
 * @copyright (c) 2020 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * These symbols are used to represent properties that should not be part of
 * the public interface. You could also use ES2019 private fields, but those
 * are not yet widely available as of the time of my writing.
 */
const items = Symbol('items')

/**
 * Stack class
 *
 * @public
 * @class
 */
class Stack {
  /**
   * Create a new stack instance
   * @param items
   */
  constructor(...items) {
    /**
     * Initialize the items in the stack
     * @type {*[]}
     */
    this[items] = []

    /**
     * Push the items passed in to the constructor
     */
    if (items.length > 0)
      items.forEach(item => this[items].push(item))
  }

  /**
   * Push items to the stack
   *
   * @public
   * @param items
   * @returns {*}
   */
  push(...items) {
    items.forEach(item => this[items].push(item))
    return this[items]
  }

  /**
   * Pull out the topmost item (last item) from the stack
   *
   * @public
   * @param count
   * @returns {any[]|any}
   */
  pop(count = 0) {
    if (count === 0)
      return this[items].pop()
    else
      return this[items].splice(-count, count)
  }

  /**
   * Peek at the last item in the stack
   *
   * @public
   * @returns {*}
   */
  peek() {
    return this[items][this[items].length - 1]
  }

  /**
   * Get the number of items in the stack
   *
   * @public
   * @returns {*}
   */
  size() {
    return this[items].length
  }

  /**
   * Find whether the stack is empty
   *
   * @public
   * @returns {boolean}
   */
  isEmpty() {
    return this[items].length === 0
  }

  /**
   * Get the stack as an array
   *
   * @public
   * @returns {*}
   */
  toArray() {
    return this[items]
  }
}

/**
 * How to use
 */
let my_stack = new Stack(1, 24, 4)
// [1, 24, 4]
my_stack.push(23)
//[1, 24, 4, 23]
my_stack.push(1, 2, 342)
//[1, 24, 4, 23, 1, 2, 342]
my_stack.pop()
//[1, 24, 4, 23, 1, 2]
my_stack.pop(3)
//[1, 24, 4]
my_stack.isEmpty()
// false
my_stack.size()
//3
