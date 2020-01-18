/**
 * LinkedList
 */

import LinkedListNode from './LinkedListNode'
import Comparator from '../../../modules/comparator/Comparator'
import invariant from '../../../modules/invariant'

/*
 * These symbols are used to represent properties that should not be part of
 * the public interface. You could also use ES2019 private fields, but those
 * are not yet widely available as of the time of my writing.
 */
const head = Symbol('head')
const size = Symbol('size')

/**
 * A linked list to store a linear collection of data.
 * @class
 */
export default class LinkedList {
  /**
   * Create a new instance of a LinkedList
   * @param compareFunction - a custom compare function
   */
  constructor(compareFunction) {
    /**
     * The head node in the list
     * @type {LinkedListNode}
     * @private
     */
    this[head] = null

    /**
     * The size of the linked list
     * @type {number}
     */
    this[size] = 0

    /**
     * A Comparator instance
     * @type {Comparator}
     * @private
     */
    this.comparator = new Comparator(compareFunction)
  }

  /**
   * Helper function to find index by data
   * @param {*} data - data to be found
   * @returns {number} index found
   * @private
   */
  indexOf(data) {
    let count = 0
    let currentNode = this[head]

    // iterate over the list
    while (currentNode != null) {

      // compare each node of the list with given value
      if (this.comparator.equal(currentNode.data, data)) {
        return count
      }

      count++
      currentNode = currentNode.next
    }

    // not found
    return -1
  }

  /**
   * Get the size of the linked list
   * @returns {number} number of nodes
   * @public
   */
  size() {
    return this[size]
  }

  /**
   * Add data to the end of the list
   * @param {*} data - data to be added
   * @public
   */
  append(data) {
    const node = new LinkedListNode(data)

    // if list is empty add to the head
    if (this[head] === null) {
      this[head] = node
    } else {

      // iterate to the end of the list
      let current = this[head]
      while (current.next) {
        current = current.next
      }

      // add a node to the end of the list
      current.next = node
    }

    this[size]++
  }

  /**
   * Retrieves the data in the given position in the list.
   * @param {number} index - position of the list
   * @returns {LinkedListNode} - found node
   * @public
   */
  get(index) {
    if( this[size] === 0) {
      invariant(index > -1 && index <= this[size], 'Not a valid index')
    } else {
      invariant(index > -1 && index < this[size], 'Not a valid index')
    }


    // iterate the list to find the node at index position
    let currentNode = this[head]
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next
    }

    return currentNode
  }

  /**
   * Insert node at the index position of the list
   * @param {*} value - node data to insert
   * @param {?number} index - position to insert node
   * @public
   */
  insertAt(value, index = 0) {
    invariant(
      index > -1 && index <= this[size],
      'You tried to insert a node at an invalid index'
    )

    let node = new LinkedListNode(value)

    // insert the node to the head
    if (index === 0) {
      node.next = this[head]
      this[head] = node
    } else {

      let previousNode = null
      let currentNode = this[head]

      // iterate the list to find position to insert
      for (let i = 0; i < index; i++) {
        previousNode = currentNode
        currentNode = currentNode.next
      }

      // insert the node
      node.next = currentNode
      previousNode.next = node
    }

    this[size]++
  }

  /**
   * Remove node by value
   * @param data
   */
  remove(data) {
    const index = this.indexOf(data)
    invariant(index > -1 && index < this[size], 'Not a valid index')
    this.removeFrom(index)
  }

  /**
   * Removes a node from a specified index
   * @param index
   * @public
   */
  removeFrom(index) {
    invariant(index > -1 && index < this[size], 'Not a valid index')

    if (index === 0) {
      let currNode = this[head]
      this[head] = currNode.next
    } else {
      // iterate the list to find position to remove
      let prevNode = null
      let currNode = this[head]

      for (let i = 0; i < index; i++) {
        prevNode = currNode
        currNode = currNode.next
      }

      // remove the node
      prevNode.next = currNode.next
    }

    this[size]--
  }

  /**
   * Clear the linked list
   * @public
   */
  clear() {
    this[head] = null
    this[size] = 0
  }

  /**
   * The default iterator for the class.
   * @returns {Iterator} An iterator for the class.
   */
  [Symbol.iterator]() {
    return this.values()
  }

  /**
   * Create an iterator that returns each node's data in the list.
   * @returns {Iterator} An iterator on the list.
   */
  *values() {
    /*
     * The `current` variable is used to iterate over the list nodes.
     * It starts out pointing to the head and is overwritten inside
     * of the loop below.
     */
    let currentNode = this[head]

    /*
     * As long as `current` is not `null`, there is a piece of data
     * to yield.
     */
    while (currentNode !== null) {
      yield currentNode.data
      currentNode = currentNode.next
    }
  }

}
