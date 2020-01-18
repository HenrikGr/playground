/**
 * @prettier
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */
const isProduction = process.env.NODE_ENV === 'production';
const prefix = 'Invariant failed';

/**
 * Throw an error if the condition fails
 * Strip out error messages for production
 * > Not providing an inline default argument for message as the result is smaller
 * @param condition
 * @param message
 */
export default function invariant(condition, message) {
  if (condition) {
    return;
  }
  // Condition not passed
  if (isProduction) {
    // In production we strip the message but still throw
    throw new Error(prefix);
  } else {
    // When not in production we allow the message to pass through
    // *This block will be removed in production builds*
    throw new Error(`${prefix}: ${message || ''}`);
  }
}
