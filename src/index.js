/**
 * @prettier
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//import App from './css-modules/App'
//import App from './styled-components/App';
//import MutationObserverDemo from './react/components/mutation-observer/MutationObserverDemo'
//import AnchorNavigation from './react/components/anchor-navigation/AnchorNavigation'
import IntersectionAnimation from './react/components/intersection-animation/IntersectionAnimation'

import * as serviceWorker from './serviceWorker'


ReactDOM.render(<IntersectionAnimation />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
