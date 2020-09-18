import styled from 'styled-components'

export const Container = styled.div`
  height: 600px;

  & .parallaxContent {
    position: relative;
    height: 400px;

    &:first-child {
      height: 100%;
    }
  }
`
