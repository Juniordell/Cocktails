import React from 'react'

import { Container } from './styles'

function Choice({ img }) {
  return (
    <Container>
      <img src={img} alt='img' />
    </Container>
  )
}

export default Choice
