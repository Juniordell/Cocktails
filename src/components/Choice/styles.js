import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  height: 100vh;
  width: 50%;

  > img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`
