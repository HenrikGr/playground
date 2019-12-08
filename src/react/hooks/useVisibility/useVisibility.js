/**
 * @prettier
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useEffect } from 'react'


function useVisibility(ref, isVisible, threshold) {

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.intersectionRatio === 1) {
          // Item is fully in view
          isVisible(entry)
        }
      }, {
        root: null,
        rootMargin: '0px',
        threshold: threshold,
      })

    if(ref.current) {
      observer.observe(ref.current)
    }
  }, [])
}
