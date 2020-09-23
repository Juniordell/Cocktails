import React from 'react'
import { useFetch } from '../../hooks/useFetch'

import { Container, Content, ImageContent, Title } from './styles'

function Show() {
  const { data } = useFetch('filter.php?c=Cocktail')

  return (
    <Container>
      <Content>
        <Title>Content</Title>
        <ImageContent>
          <img
            style={{ width: '400px' }}
            src={data?.data.drinks[49].strDrinkThumb}
            alt=''
          />
        </ImageContent>
      </Content>
    </Container>
  )
}

export default Show
