/**
 * LinkedListNode class
 * @class
 */
export default class LinkedListNode {
  /**
   * LinkedListNode constructor
   * @param value
   * @param next
   */
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`
  }
}
