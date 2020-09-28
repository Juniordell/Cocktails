import React from 'react'

import { Container, HeaderWrapper, Header as Head, Button } from './styles'

function Header({ variant, style, children }) {
  return (
    <Container className={variant} style={style}>
      <HeaderWrapper>
        <Head>
          <button>Recipes</button>
          <Button>Receitas</Button>
        </Head>
      </HeaderWrapper>

      {children}
    </Container>
  )
}

export default Header
