# `useIntersection`

React sensor hook that tracks the changes in the intersection of a target element with an ancestor element or with a top-level document's viewport. Uses the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) and returns a [IntersectionObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry).

## Usage

```jsx
import * as React from 'react';
import { useIntersection } from 'react-use';

const IntersectBox = props => {
  const [setNode, entry] = useIntersection({
    root: domNode,
    rootMargin: '0px',
    threshold: buildThresholdArray()
  });

  return (
    <Box {...props} ref={setNode} ratio={entry.intersectionRatio}>
      entry: {entry}
    </Box>
  );
};
```

## Reference

```ts
useIntersection(
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverInit,
): IntersectionObserverEntry | null;
```
