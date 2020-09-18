import React from 'react'
import { Parallax } from 'react-parallax'
import Header from '../../components/Header'

import { Container } from './styles'
import Beach from '../../assets/beach.jpg'

function ParallaxBg() {
  return (
    <Container>
      <Parallax
        bgImage={Beach}
        bgImageStyle={{
          zIndex: -1,
          WebkitMaskImage: 'linear-gradient(180deg, #000, #000, transparent)',
        }}
        strength={400}
        style={{ position: 'unset' }}
        contentClassName='parallaxContent'
      >
        <Header variant='transparent' style={{ height: '100%' }} />
      </Parallax>
    </Container>
  )
}

export default ParallaxBg
