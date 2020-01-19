/**
 * @prettier
 * @copyright (c) 2020 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * @prettier
 * @copyright (c) 2020 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */
import Enumify from './enumify'

export class Color extends Enumify {
  static red = new Color()
  static orange = new Color()
  static yellow = new Color()
  static green = new Color()
  static blue = new Color()
  static purple = new Color()
  static _ = this.closeEnum()
}

/**
 * Enum values with instance properties
 */
export class Weekday extends Enumify {
  static monday = new Weekday(true);
  static tuesday = new Weekday(true);
  static wednesday = new Weekday(true);
  static thursday = new Weekday(true);
  static friday = new Weekday(true);
  static saturday = new Weekday(false);
  static sunday = new Weekday(false);
  static _ = this.closeEnum();
  constructor(isWorkDay) {
    super();
    this.isWorkDay = isWorkDay;
  }
}

/**
 * Downside of the enum pattern: Generally, we can’t refer to other enum values when creating an enum values (because
 * those other enum values may not exist yet). As a work-around, we can implement helpers externally, via functions
 */
/**
 * Helper function
 * @param weekday
 * @returns {Weekday}
 */
export function nextDay(weekday) {
  switch (weekday) {
    case Weekday.monday:
      return Weekday.tuesday;
    case Weekday.tuesday:
      return Weekday.wednesday;
    case Weekday.wednesday:
      return Weekday.thursday;
    case Weekday.thursday:
      return Weekday.friday;
    case Weekday.friday:
      return Weekday.saturday;
    case Weekday.saturday:
      return Weekday.sunday;
    case Weekday.sunday:
      return Weekday.monday;
    default:
      throw new Error();
  }
}
