import React, { useState } from 'react'
import styled from 'styled-components'

import useCountInterval, { TIME_INTERVAL } from '../../hooks/useCountInterval/useCountInterval'
import useMutationObserver from '../../hooks/useMutationObserver/useMutationObserver'

const Layout = styled.section`
  display: flex;
  flex-direction: row;
  height: 100vh;
`

const Aside = styled.aside`
  text-align: left;
  flex: 0 0 500px;
  max-width: 500px;
  min-width: 500px;
  width: 500px;
  background: antiquewhite;
`

const Content = styled.main`
  width: 100%;
  padding: 16px;
  height: 100%;
`

const Title = styled.h1`
  padding: 16px;
`

const Text = styled.span`
  font-size: 1rem;
`

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

/**
 * Demo of the mutation-observer Web API
 * @returns {*}
 * @constructor
 */
function MutationObserverDemo() {
  const [isCounterActive, setIsCounterActive] = useState(false)
  const [isMutationObserverActive, setIsMutationObserverActive] = useState(false)
  const count = useCountInterval(isCounterActive)

  // Observe mutations by using the useMutationObserver hook
  useMutationObserver('observedNode', isMutationObserverActive, mutations => console.log('mutations', mutations))

  const handleStartCounterClick = () => {
    setIsCounterActive(true)
  }

  const handleStopCounterClick = () => {
    setIsCounterActive(false)
  }

  const handleStartMutationObserverClick = () => {
    setIsMutationObserverActive(true)
  }

  const handleStopMutationObserverClick = () => {
    setIsMutationObserverActive(false)
  }

  return (
      <Layout>
        <Aside>
          <Button onClick={isCounterActive ? handleStopCounterClick : handleStartCounterClick}>
            {isCounterActive ? 'Stop' : 'Start'} counter
          </Button>
          <Button
            onClick={
              isMutationObserverActive ? handleStopMutationObserverClick : handleStartMutationObserverClick
            }
          >
            {isMutationObserverActive ? 'Stop' : 'Start'} MutationObserver
          </Button>
          <Title>
            Counter is <Text>{isCounterActive ? 'on' : 'off'}</Text>
          </Title>
          <Title>
            MutationObserver is <Text>{isMutationObserverActive ? 'on' : 'off'}</Text>
          </Title>
        </Aside>
        <Content>
          <Title data-count={count} id="observedNode">
            Current count: {count}
          </Title>
          {isCounterActive && (
            <Text>
              Counter is now active! Its value and data- attribute will be incremented every{' '}
              {TIME_INTERVAL / 1000} seconds
            </Text>
          )}
          {isMutationObserverActive && (
            <Text>MutationObserver is now active! Open devtools and check the console</Text>
          )}
          {isMutationObserverActive && !isCounterActive && (
            <Text>You may want to start the counter in order to see console output</Text>
          )}
        </Content>
      </Layout>
  )
}

export default MutationObserverDemo
