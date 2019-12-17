/**
 * Comparator class should be used to
 * @module Comparator
 */

/**
 * Comparator objects can be used to perform different common
 * checks such as equal, lessThan, greaterThan, lestThanOrEqual, etc.
 *
 * The comparator has the following methods;
 * - compare, either default comparator function or a custom
 * - equal
 * - lessThan
 * - greaterThan
 * - lessThanOrEqual
 * - greaterThanOrEqual
 * - reverse
 *
 * The default comparator function assumes values to be compared are of either string or number
 * For more complex data types, create a custom comparator function and pass it as an argument
 * when creating an object.
 * @class
 */
export default class Comparator {
  /**
   * @param {function(a: *, b: *)} [compareFunction] - Custom comparator function.
   * Use it if you want to compare more complex data types than strings or numbers.
   */
  constructor(compareFunction) {
    /**
     * Comparator function
     * @type {(function(*, *))|Comparator.defaultCompareFunction}
     * @private
     */
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  /**
   * Default comparison function. It assumes that "a" and "b" are strings or numbers.
   * @param {(string|number)} a
   * @param {(string|number)} b
   * @returns {number}
   */
  static defaultCompareFunction(a, b) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }

  /**
   * Checks if two variables are equal.
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  equal(a, b) {
    return this.compare(a, b) === 0;
  }

  /**
   * Checks if variable "a" is less than "b".
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  lessThan(a, b) {
    return this.compare(a, b) < 0;
  }

  /**
   * Checks if variable "a" is greater than "b".
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  greaterThan(a, b) {
    return this.compare(a, b) > 0;
  }

  /**
   * Checks if variable "a" is less than or equal to "b".
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  lessThanOrEqual(a, b) {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  /**
   * Checks if variable "a" is greater than or equal to "b".
   * @param {*} a
   * @param {*} b
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
