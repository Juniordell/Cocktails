import React from 'react'

import { Container, ImgContent, Image, Content, Text } from './styles'

function Choice({ img, choice }) {
  return (
    <Container>
      <ImgContent to={choice === 'night' ? '/night' : '/tropical'}>
        <Image src={img} alt='img' />
      </ImgContent>

      <Content>
        <Text>{choice === 'night' ? 'Night Drinks' : 'Tropical Drinks'}</Text>
      </Content>
    </Container>
  )
}

export default Choice
