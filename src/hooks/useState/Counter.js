import React, { useState } from 'react';

/**
 * useState is a Hook. We call it inside a function component to add some local state to it.
 * React will preserve this state between re-renders.
 * useState returns a pair: the current state value and a function that lets you update it.
 * You can call this function from an event handler or somewhere else. It’s similar to this.setState in a class,
 * except it does not merge the old and new state together.
 * @returns {*}
 * @constructor
 */
export default function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}