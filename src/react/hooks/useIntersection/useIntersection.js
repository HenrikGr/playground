/**
 * @prettier
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect, useState } from 'react'

/**
 * Intersection Observer API hook built on React's useEffect hook
 *
 * @param targetRef
 * @param onIntersection
 * @param thresholds - Either a single number or an array of numbers which indicate at what percentage of
 * the target's visibility the observer's callback should be executed. If you only want to detect
 * when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to run
 * every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1].
 * The default is 0 (meaning as soon as even one pixel is visible, the callback will be run).
 * A value of 1.0 means that the threshold isn't considered passed until every pixel is visible.
 */
function useIntersection(targetRef, onIntersect, { thresholds = 0 }) {

  /**
   * Observer callback - deals with intersection data
   * @param entries
   */
  function handleIntersections(entries) {
    entries.forEach(entry =>{
      if (entry.isIntersecting) {
        onIntersect(entry)
      }
    })
  }

  /**
   * React's built-in useEffect hook has a second argument called the "dependencies array" and it allows you
   * to optimize when React will call your effect callback. React will do a comparison between each of the
   * values (via Object.is) to determine whether your effect callback should be called.
   * @param {Function} - callback function - the effect function
   * @param [Array] - dependency array
   */
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersections, {
        root: null,
        rootMargin: '0px',
        threshold: thresholds
      })

    if (targetRef) {
      observer.observe(targetRef.current)
    }

    /**
     * Clean up the observer on un-mounting
     */
    return () => observer.disconnect()

  }, [targetRef, thresholds])


}

export default useIntersection
