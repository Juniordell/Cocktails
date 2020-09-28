import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3a2929;
`

export const Button = styled(Link)`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: transparent;
  color: white;
  outline: none;
  margin: 20px;
  margin-left: 50px;
  text-decoration: none;
  cursor: pointer;
  padding: 10px 15px;
  border: 1px solid #ff8630;
  font-size: 16px;
  transition: 0.3s;

  &:hover {
    background: #ff8630;
    color: #1b1b1b;
  }
`
