/**
 * @prettier
 * @copyright (c) 2020 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * A Facade provide a unified interface to a set of interfaces in a subsystem.
 * A Facade defines a higher-level interface that makes the subsystem easier to use.
 *
 * @public
 * @class
 *
 * @example
 * The Mortgage object is the Facade in the sample code.
 *
 * It presents a simple interface to the client with only a single method: applyFor.
 * Eut underneath this simple API lies considerable complexity.
 */
class Mortgage {
  constructor(name) {
    this.name = name
  }

  applyFor(amount) {
    // access multiple subsystems...
    let result = "approved";
    if (!new Bank().verify(this.name, amount)) {
      result = "denied";
    } else if (!new Credit().get(this.name)) {
      result = "denied";
    } else if (!new Background().check(this.name)) {
      result = "denied";
    }
    return this.name + " has been " + result +
      " for a " + amount + " mortgage";
  }
}


let Bank = function() {
  this.verify = function(name, amount) {
    // complex logic ...
    return true;
  }
}

let Credit = function() {
  this.get = function(name) {
    // complex logic ...
    return true;
  }
}

let Background = function() {
  this.check = function(name) {
    // complex logic ...
    return true;
  }
}

function run() {
  let mortgage = new Mortgage("Joan Templeton");
  let result = mortgage.applyFor("$100,000");

  console.log(result)
}
