import React from 'react'
import Lottie from 'react-lottie'

import { Container, Anime, Title } from './styles'
import drink from '../../assets/drink.json'

function Main() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: drink,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Container>
      <Title>Cocktails</Title>
      <Anime>
        <Lottie
          style={{ fill: 'darkcyan', marginRight: '30px' }}
          height={275}
          width={400}
          options={defaultOptions}
        />
      </Anime>
    </Container>
  )
}

export default Main
