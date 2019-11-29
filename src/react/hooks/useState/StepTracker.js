/**
 * @prettier
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from "react";

/**
 * StepTracker
 * @returns {*}
 * @constructor
 */
export default function StepTracker() {
  const [steps, setSteps] = useState(0);

  function increment() {
    setSteps(steps => steps + 1);
  }

  return (
    <div>
      Today you've taken {steps} steps!
      <br />
      <button onClick={increment}>I took another step</button>
    </div>
  );
}
