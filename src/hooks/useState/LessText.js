import React, { useState } from "react";

/**
 * This component expects 2 props:
 * @param text - the text to display
 * @param maxLength - how many characters to show before "read more"
 * @returns {*}
 * @constructor
 */
export default function LessText({ text, maxLength }) {
  // Create a piece of state, and initialize it to `true`
  // `hidden` will hold the current value of the state,
  // and `setHidden` will let us change it
  const [hidden, setHidden] = useState(true);

  // If the text is short enough, don't bother with the
  // buttons
  if (text <= maxLength) {
    return <span>{text}</span>;
  }

  // Render the text (shortened or full-length) followed by
  // a link to expand/collapse it.
  // When a link is clicked, update the value of `hidden`,
  // which will trigger a re-render
  return (
    <div>
      {hidden ? `${text.substr(0, maxLength).trim()} ...` : text}
      {hidden ? (
        <div onClick={() => setHidden(false)}> read more</div>
      ) : (
        <div onClick={() => setHidden(true)}> read less</div>
      )}
    </div>
  );
}
