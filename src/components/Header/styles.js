import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Button = styled(Link)`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  background: transparent;
  color: white;
  outline: none;
  padding: 20px;
  cursor: pointer;
  border: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`
