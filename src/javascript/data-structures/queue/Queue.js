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
 * Queue class
 *
 * @public
 * @class
 */
class Queue {
  /**
   * Create a new queue instance
   * @param items
   */
  constructor(...items) {
    /**
     * Initialize the items in the queue
     *
     * @private
     * @type {*[]}
     */
    this[items] = []
    /**
     * Enqueuing the items passed in to the constructor
     */
    this.enqueue(...items)
  }

  /**
   * Push items to the queue
   *
   * @public
   * @param items
   * @returns {*}
   */
  enqueue(...items) {
    items.forEach(item => this[items].push(item))
    return this[items]
  }

  /**
   * Pull out the first item from the queue
   *
   * @public
   * @param count
   * @returns {*}
   */
  dequeue(count = 1) {
    this[items].splice(0, count)
    return this[items]
  }

  /**
   * Peek at the first item from the queue
   *
   * @public
   * @returns {*}
   */
  peek() {
    return this[items][0]
  }

  /**
   * Get the length of the queue
   *
   * @public
   * @returns {*}
   */
  size() {
    return this[items].length
  }

  /**
   * Find whether the queue is empty
   *
   * @public
   * @returns {boolean}
   */
  isEmpty() {
    return this[items].length === 0
  }
}

/**
 * How to use it.
 */
let my_queue = new Queue(1, 24, 4)
// [1, 24, 4]
my_queue.enqueue(23)
//[1, 24, 4, 23]
my_queue.enqueue(1, 2, 342)
//[1, 24, 4, 23, 1, 2, 342]
my_queue.dequeue()
//[24, 4, 23, 1, 2, 342]
my_queue.dequeue(3)
//[1, 2, 342]
my_queue.isEmpty()
// false
my_queue.size()
//3
