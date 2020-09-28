import React, { useEffect } from 'react'
import Header from '../Header'
import { useFetch } from '../../hooks/useFetch'

import { Container, Content, Footer } from './styles'

function Night() {
  const { data } = useFetch('lookup.php?i=11007')

  useEffect(() => {
    ;(async () => {
      console.log(data?.data.drinks[0].strDrinkThumb)
    })()
  }, [data])

  return (
    <Container>
      <Header />

      <Content>
        <h2>
          <p>
            The best drinks that <br /> you'll find!
          </p>
          <img src={data?.data.drinks[0].strDrinkThumb} alt='' />
        </h2>

        <button>See all drinks</button>
      </Content>
      <Footer></Footer>
    </Container>
  )
}

export default Night
