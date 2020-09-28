import React from 'react'
import Choice from '../../components/Choice'
import NightDrink from '../../assets/images/night_drink.jpg'
import TropicalDrink from '../../assets/images/tropical_drink.jpg'

import { Container } from './styles'

function App() {
  return (
    <Container className='App'>
      <Choice img={TropicalDrink} choice='tropical' />
      <Choice img={NightDrink} choice='night' />
    </Container>
  )
}

export default App
