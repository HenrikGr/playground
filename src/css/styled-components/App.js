/**
 * @prettier
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

import React  from 'react'
import styled from 'styled-components'
import logo from './logo.svg'

const AppContainer = styled.div`
  text-align: center;
`

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const AppLogo = styled.img`
  height: 40vmin;
`

const AppIntro = styled.p`
  //font-size: large;
`

const AppLink = styled.a`
  color: #09d3ac;
`

function App() {

  return (
    <AppContainer>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <AppIntro>
          Edit <code>src/App.js</code> and save to reload.
        </AppIntro>
        <AppLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </AppLink>
      </AppHeader>
    </AppContainer>
  )
}

export default App
