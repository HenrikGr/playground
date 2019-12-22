/**
 * LinkedListNode
 */

/**
 * Linked list data
 * @typedef {*} LinkedListNodeData
 */

/**
 * Represent a single node in a linked list.
 *
 * @example
 * const node = new LinkListNode(data)
 *
 * @class LinkedListNode
 */
export default class LinkedListNode {
  /**
   * Create a new instance of a LinkedListNode
   * @param {*} data - data to store
   */
  constructor(data) {
    /**
     * Arbitrary data stored in a node
     * @type {*}
     */
    this.data = data

    /**
     * A pointer to the next node in the LinkedList
     * @type {LinkedListNode}
     */
    this.next = null
  }

  /**
   * Get the node's value as string
   * @param {Function} [callback] - function to convert value to string
   * @returns {*|string} value of the node
   * @public
   */
  toValue(callback) {
    return callback ? callback(this.data) : `${this.data}`
  }
}
