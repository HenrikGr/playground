/**
 * @prettier
 * @copyright (c) 2020 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

export default class Enumify {
  //#################### Static
  static enumKeys
  static enumValues
  static closeEnum() {
    const enumKeys = []
    const enumValues = []
    // Traverse the enum entries
    for (const [key, value] of Object.entries(this)) {
      enumKeys.push(key)

      value.enumKey = key
      value.enumOrdinal = enumValues.length
      enumValues.push(value)
    }
    // Important: only add more static properties *after* processing the enum entries
    this.enumKeys = enumKeys
    this.enumValues = enumValues
    // TODO: prevent instantiation now. Freeze `this`?
  }

  /** Use case: parsing enum values */
  static enumValueOf(str) {
    const index = this.enumKeys.indexOf(str)
    if (index >= 0) {
      return this.enumValues[index]
    }
    return undefined
  }

  static [Symbol.iterator]() {
    return this.enumValues[Symbol.iterator]()
  }

  //#################### Instance
  enumKey
  enumOrdinal

  toString() {
    return this.constructor.name + '.' + this.enumKey
  }
}
