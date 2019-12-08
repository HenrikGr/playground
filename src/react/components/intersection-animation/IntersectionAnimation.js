/**
 * @prettier
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import IntersectBox from './IntersectBox'
import "./styles.css";

/**
 * Build an array with hex colors
 * @param quantity
 * @returns {string[]}
 */
const buildHexArray = quantity =>
  Array.from(Array(quantity).keys(), i =>
    Number((i + 1) * 100)
      .toString(16)
      .padStart(3, "0")
  );

/**
 * Intersection API Demo
 * @returns {*}
 * @constructor
 */
function IntersectionAnimation() {
  return (
    <div className="App">
      <h1>useIntersect Example</h1>
      <h2>Start scrolling to see some magic happen!</h2>
      {Array.from(Array(50).keys(), i => (
        <br key={i} />
      ))}
      {buildHexArray(1).map((n, i) => (
        <IntersectBox boxType={i % 2} key={n} backgroundColor={`#${n}`} />
      ))}
      {Array.from(Array(56).keys(), i => (
        <br key={i} />
      ))}
    </div>
  );
}

export default IntersectionAnimation
