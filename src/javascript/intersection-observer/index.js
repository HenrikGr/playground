/**
 * @prettier
 * @description
 *
 * The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target
 * element with an ancestor element or with a top-level document's viewport.
 *
 * The Intersection Observer API allows you to configure a callback that is called whenever one element, called the
 * target, intersects either the device viewport or a specified element; for the purpose of this API, this is called
 * the root element or root. Typically, you'll want to watch for intersection changes with regard to the element's
 * closest scrollable ancestor, or, if the element isn't a descendant of a scrollable element, the viewport. To watch
 * for intersection relative to the root element, specify null.
 *
 * Whether you're using the viewport or some other element as the root, the API works the same way, executing a
 * callback function you provide whenever the visibility of the target element changes so that it crosses desired
 * amounts of intersection with the root.
 *
 * The degree of intersection between the target element and its root is the intersection ratio. This is a
 * representation of the percentage of the target element which is visible as a value between 0.0 and 1.0.
 *
 *
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Callback function
 * Whenever the target meets a threshold specified for the IntersectionObserver, the callback
 * is invoked. The callback receives a list of IntersectionObserverEntry objects and the observer:
 *
 * Be aware that your callback is executed on the main thread. It should operate as quickly as possible;
 * if anything time-consuming needs to be done, use Window.requestIdleCallback().
 *
 * Also, note that if you specified the root option, the target must be a descendant of the root element.
 * @param entries
 * @param observer
 */
let callback = (entries, observer) => {
  entries.forEach(entry => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};

/**
 * Configuration settings for an observer
 *
 * - root: The element that is used as the viewport for checking visibility of the target. Must be
 * the ancestor of the target. Defaults to the browser viewport if not specified or if null.
 *
 * - rootMargin: Margin around the root. Can have values similar to the CSS margin property, e.g.
 * "10px 20px 30px 40px" (top, right, bottom, left). The values can be percentages. This set of
 * values serves to grow or shrink each side of the root element's bounding box before computing
 * intersections. Defaults to all zeros.
 *
 * - threshold: Either a single number or an array of numbers which indicate at what percentage of
 * the target's visibility the observer's callback should be executed. If you only want to detect
 * when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to run
 * every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1].
 * The default is 0 (meaning as soon as even one pixel is visible, the callback will be run).
 * A value of 1.0 means that the threshold isn't considered passed until every pixel is visible.
 *
 * @type {{root: Element, rootMargin: string, threshold: number}}
 */
let options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}

let observer = new IntersectionObserver(callback, options);


let target = document.querySelector('#listItem');
observer.observe(target);
