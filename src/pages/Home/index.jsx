import React from 'react'
import ParallaxBg from '../../components/ParallaxBg'
import Main from '../../components/Main'
import { Title } from './styles'

function App() {
  return (
    <div className='App'>
      <Title>Cocktails</Title>
      <ParallaxBg />
      <Main />
      <div style={{ height: '100vh' }}></div>
    </div>
  )
}

export default App
