/**
 * LinkedListNode
 */

/**
 * Linked list node
 * @typedef {Object} LinkedListNode
 * @property {*} data - arbitrary data
 * @property {LinkedListNode} next - reference to the next node
 */

/**
 * Represent a single node in a linked list.
 *
 * @example
 * const node = new LinkListNode(data)
 *
 * @class
 */
export default class LinkedListNode {
  /**
   * Create a new instance of a LinkedListNode
   * @param {LinkedListNode.data} data - arbitrary data to store
   */
  constructor(data) {
    /**
     * Arbitrary data stored in a node
     * @type {LinkedListNode.data}
     */
    this.data = data

    /**
     * A pointer to the next node in the LinkedList
     * @type {LinkedListNode.next}
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
