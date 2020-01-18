/**
 * Comparator
 * @module Comparator
 */

/**
 * A comparator to perform common logical operations
 * comparing different values.
 *
 * To compare values, a static compare function is used
 * by default. The static compare function assumes values to
 * be compared are of either string or number type.
 *
 * For more complex comparision, provide a custom compare
 * function when creating a new comparator instance.
 * @class
 */
export default class Comparator {
  /**
   * Create a comparator object
   * @param [compareFunction] a custom compare function (optional)
   */
  constructor(compareFunction) {
    /**
     * Compare function
     * @type {*|Comparator.defaultCompareFunction}
     */
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  /**
   * Default comparison function that assumes
   * that "a" and "b" are strings or numbers.
   * @param {(string|number)} a - value to be compared
   * @param {(string|number)} b - value to be compared
   * @returns {number} 0 if equal, -1 if "a" is less than "b", otherwise 1
   */
  static defaultCompareFunction(a, b) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }

  /**
   * Checks if variable "a" is equal to "b".
   * @param {*} a - value to be compared
   * @param {*} b - value to be compared
   * @return {boolean}
   */
  equal(a, b) {
    return this.compare(a, b) === 0;
  }

  /**
   * Checks if variable "a" is less than "b".
   * @param {*} a - value to be compared
   * @param {*} b - value to be compared
   * @return {boolean}
   */
  lessThan(a, b) {
    return this.compare(a, b) < 0;
  }

  /**
   * Checks if variable "a" is greater than "b".
   * @param {*} a - value to be compared
   * @param {*} b - value to be compared
   * @return {boolean}
   */
  greaterThan(a, b) {
    return this.compare(a, b) > 0;
  }

  /**
   * Checks if variable "a" is less than or equal to "b".
   * @param {*} a - value to be compared
   * @param {*} b - value to be compared
   * @return {boolean}
   */
  lessThanOrEqual(a, b) {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  /**
   * Checks if variable "a" is greater than or equal to "b".
   * @param {*} a - value to be compared
   * @param {*} b - value to be compared
   * @return {boolean}
   */
  greaterThanOrEqual(a, b) {
    return this.greaterThan(a, b) || this.equal(a, b);
  }

  /**
   * Reverses the comparison order.
   */
  reverse() {
    const compareOriginal = this.compare;
    this.compare = (a, b) => compareOriginal(b, a);
  }
}
