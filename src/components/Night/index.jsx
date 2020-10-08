import React, { useEffect } from 'react'
import Header from '../Header'
import { useFetch } from '../../hooks/useFetch'
import { Link } from 'react-router-dom'

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

        <button>
          <Link to='/night-recipes'>See all drinks</Link>
        </button>
      </Content>
      <Footer></Footer>
    </Container>
  )
}

export default Night
