import React from 'react'
import { useFetch } from '../../hooks/useFetch'

import { Container, ImageContent, Title } from './styles'

function Show() {
  const { data } = useFetch('filter.php?c=Cocktail')

  return (
    <Container>
      <Title>Content</Title>
      <ImageContent>
        <img
          style={{ width: '400px' }}
          src={data?.data.drinks[49].strDrinkThumb}
          alt=''
        />
      </ImageContent>
    </Container>
  )
}

export default Show
