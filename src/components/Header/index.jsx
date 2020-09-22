import React from 'react'

import { Container, Button } from './styles'

function Header({ variant, style, children }) {
  return (
    <Container className={variant} style={style}>
      <Button to='/recipes'>Recipes</Button>
      <Button>Recipes</Button>
      <Button>Recipes</Button>
    </Container>
  )
}

export default Header
