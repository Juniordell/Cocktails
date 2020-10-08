import React from 'react'
import Header from '../../components/Header'

import { Container, Content, Card } from './styles'

function NightRecipes() {
  return (
    <Container className='App'>
      <Header />

      <Content>
        <Card></Card>
      </Content>
    </Container>
  )
}

export default NightRecipes
