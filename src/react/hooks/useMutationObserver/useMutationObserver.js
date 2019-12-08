/**
 * @prettier
 * @description Custom hook that using mutation-observer API
 *
 * mutation-observer is a Web API provided by modern browsers for
 * detecting changes in the DOM. With this API one can listen to
 * newly added or removed nodes, attribute changes, or make changes
 * in the text content of text nodes.
 *
 * Implementing mutation-observer into your app is rather easy.
 * You need to create a mutation-observer instance by passing it
 * a function that would be called every time a mutation has occurred
 *
 * The first argument of the function is a collection of all the
 * mutations which have occurred in a single batch. Each mutation
 * provides information about its type and the changes which have
 * occurred.
 *
 * var mutationObserver = new mutation-observer(function(mutations) {
 *   mutations.forEach(function(mutation) {
 *     console.log(mutation);
 *   });
 * });
 *
 * The created object has three methods:
 * 1. observer – starts listening for changes. Takes two arguments
 *  - the DOM node you want to observe and a
 *  - settings object.
 * 2. disconnect – stops listening for changes.
 * 3. takeRecords – returns the last batch of changes before the callback has been fired.
 *
 * @example
 * // Starts listening for changes in the root HTML element of the page.
 * mutationObserver.observe(document.documentElement, {
 *   attributes: true,
 *   characterData: true,
 *   childList: true,
 *   subtree: true,
 *   attributeOldValue: true,
 *   characterDataOldValue: true
 * });
 *
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect, useMemo } from 'react'

const observerConfig = {
  attributes: true,
  characterData: true,
  attributeOldValue: true,
  subtree: true
}

/**
 * Custom hook using the mutation-observer API
 * @param {String} elementId - element id to observe
 * @param {Boolean} isActive - a flag indicating if observing element is active
 * @param {Function} callback - callback function to run when element changed been observed
 */
const useMutationObserver = (elementId, isActive, callback) => {
  const observer = useMemo(() => new MutationObserver(callback), [callback])

  useEffect(() => {
    if (isActive) {
      const targetNode = document.getElementById(elementId)
      observer.observe(targetNode, observerConfig)
    } else {
      observer.disconnect()
    }

    return () => observer.disconnect()
  }, [elementId, isActive, observer])
}

export default useMutationObserver
