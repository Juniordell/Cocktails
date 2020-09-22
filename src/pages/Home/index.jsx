import React from 'react'
import Main from '../../components/Main'
import Header from '../../components/Header'
import Show from '../../components/Show'

import { Container } from './styles'

function App() {
  return (
    <Container className='App'>
      <Header />
      <Main />
      <Show />
    </Container>
  )
}

export default App
