/**
 * @prettier
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import * as PropTypes from 'prop-types'
import styles from './list.module.css'

/**
 * Render a list of items
 * @param {Object} props - List of items
 * @returns {*}
 * @constructor
 */
function List(props) {
  const { items } = props

  if (!items || items.length === 0) {
    // No Items on the list, render an empty message
    return <div className={styles.empty}>No items in list</div>
  }

  return (
    <ul className={styles.container}>
      {items.map(item => (
        <li key={item} className={styles.item}>
          {item}
        </li>
      ))}
    </ul>
  )
}

List.propTypes = {
  items: PropTypes.array
}

List.defaultProps = {
  items: []
}

export default List
