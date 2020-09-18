import React from 'react'
import Lottie from 'react-lottie'
import Header from '../../components/Header'

import { Container, AboutContent, Anime, FirstContent } from './styles'
import CocktailAnimation from '../../assets/cocktailAnimation.json'

function Main() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: CocktailAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Container>
      <Header variant='white'>
        <FirstContent>
          <AboutContent>
            <h1>
              Encontre os melhores coqueteis para impressionar qualquer um!
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
              fuga sint minima, recusandae tempore illum nemo error perspiciatis
              consequuntur ex fugiat pariatur consectetur accusantium ipsum
              doloremque hic quia! Corrupti, odit?
            </p>
          </AboutContent>
          <Anime>
            <Lottie height={275} width={400} options={defaultOptions} />
          </Anime>
        </FirstContent>
      </Header>
    </Container>
  )
}

export default Main
