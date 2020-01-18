/**
 * @prettier
 * @copyright (c) 2020 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Helper function to detect arrays
 */
const isArray = Array.isArray

/**
 * Comparision functions for strict equal arrays
 * @private
 * @param x
 * @returns {function(*): boolean}
 */
const equal = x => y => x === y // notice: triple equal

// noinspection EqualityComparisonWithCoercionJS
/**
 * Comparision function to loos equals
 * @param x
 * @returns {function(*): boolean}
 */
const looseEqual = x => y => x == y

/**
 * Comparision (arbitrary) function greater than
 * @private
 * @param x
 * @returns {function(*): boolean}
 */
const gt = x => y => x > y

/**
 * Comparision (arbitrary) function greater than
 * @private
 * @param x
 * @returns {function(*): boolean}
 */
const lt = x => y => y > x

/**
 * Generic arrayEquivalent procedure that is only concerned with stepping through the arrays.
 * From there, we'll build our other basic comparison functions like equal etc.
 *
 * arrayEquivalent takes comparison function, f, and two input arrays, xs and ys.
 * For the most part, all we do is call f (x) (y) for each element in the input arrays.
 * We return an early false if the length of the arrays is not equal
 *
 * @private
 * @param {function} f, comparision function
 * @returns {function(*): function(*): *}
 */
const arrayEquivalent = f => xs => ys => (xs.length === ys.length ? xs.every((x, i) => f(x)(ys[i])) : false)

/**
 * Generic deep version of arrayEquivalent.
 * @private
 * @param {Function} f - comparision function
 * @returns {function(*): function(*): *}
 */
const arrayDeepEquivalent = f =>
  arrayEquivalent(a => b => (isArray(a) && isArray(b) ? arrayDeepEquivalent(f)(a)(b) : f(a)(b)))

/**
 * arrayEqual can be defined with arrayEquivalent and a comparator function that
 * compares a to b using === (for strict equality) or any other comparision functions.
 * @type {function(*): function(*): *}
 */
export const arrayEqual = arrayEquivalent(equal)
export const arrayLooseEqual = arrayEquivalent(looseEqual)
export const arrayGt = arrayEquivalent(gt)
export const arrayLt = arrayEquivalent(lt)

// Comparing arrays with scalar values
//let x = [1,2,3];
//let y = [1,2,3];
//let z = ['1','2','3'];
//console.log('true? ', arrayEqual(x)(y));      //=> true
// (1 === 1) && (2 === 2) && (3 === 3)        //=> true
//console.log('false? ', arrayEqual(x)(z));     //=> false
// (1 === '1')                                //=> false
//console.log('true? ', arrayLooseEqual(x)(y)); //=> true
// (1 == '1') && (2 == '2') && (3 == '3')     //=> true


/**
 * arrayDeepEqual can be defined with arrayDeepEquivalent and a comparator function that
 * compares a to b using === (for strict equality) or any other comparision functions.
 * @type {function(*): function(*): *}
 */
export const arrayDeepEqual = arrayDeepEquivalent(equal)
export const arrayDeepGt = arrayDeepEquivalent(gt)
export const arrayDeepLt = arrayDeepEquivalent(lt)

// Comparing deep arrays with scalar values
//x = [1,[2,[3]]];
//y = [1,[2,['3']]];
//console.log('false? ', arrayDeepEqual(x)(y));       //=> false
// (1 === 1) && (2 === 2) && (3 === '3')            //=> false
//console.log('true? ', arrayDeepLooseEqual(x)(y));   //=> true
// (1 == 1) && (2 == 2) && (3 == '3')               //=> true
//console.log('true? ', arrayIdDeepEqual(x)(y));  //=> true
