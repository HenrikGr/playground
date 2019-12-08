/**
 * @prettier
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState,useEffect, useRef } from 'react'

import { FadeBox, WidthBox } from './Boxes'
//import useIntersection from '../../hooks/useIntersection/useIntersection'

const { format } = new Intl.NumberFormat('sv', { maximumFractionDigits: 2 })

// Build threshold array
function buildThresholdList(numSteps = 20) {
  let thresholds = []

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps
    thresholds.push(ratio)
  }

  thresholds.push(0)
  return thresholds
}

/**
 * Array of box component types
 * @type {*[]}
 */
const compToRender = [WidthBox, FadeBox]

/**
 * Box using intersection observer hook
 * @param props
 * @returns {*}
 * @constructor
 */
function IntersectBox(props) {
  // Ref to observe
  const targetRef = useRef(null)

  // state management for intersection information
  const [entry, updateEntry] = useState({})

  /**
   * Observer callback - deals with intersection data
   * @param entries
   */
  function handleIntersections(entries) {
    entries.forEach(entry => {
      // If intersecting pass intersecting data to handler function
      if (entry.isIntersecting) {
        console.log('handleIntersection')
        updateEntry(entry)
      }
    })
  }

  /**
   * React's built-in useEffect hook has a second argument called the "dependencies array" and it allows you
   * to optimize when React will call your effect callback. React will do a comparison between each of the
   * values (via Object.is) to determine whether your effect callback should be called.
   */
  useEffect(() => {

    /**
     * Create a new observer
     * @type {IntersectionObserver}
     */
    const observer = new IntersectionObserver(handleIntersections, {
        root: null,
        rootMargin: '0px',
        threshold: buildThresholdList()
      })

    // Start observe the target
    if (targetRef) {
      observer.observe(targetRef.current)
    }

    /**
     * Clean up the observer on un-mounting
     */
    return () => observer.disconnect()

  }, [targetRef])


  const Component = compToRender[props.boxType]

  return (
    <Component {...props} ref={targetRef} ratio={entry.intersectionRatio}>
      intersectionRatio: {format(entry.intersectionRatio)}
    </Component>
  )
}

export default IntersectBox
