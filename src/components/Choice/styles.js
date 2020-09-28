import styled from 'styled-components'
import { Link } from 'react-router-dom'

// export const Container = styled(Link)`
//   height: 100vh;
//   width: 50%;

//   > img {
//     height: 100%;
//     width: 100%;
//     object-fit: cover;
//   }
// `
export const Container = styled.div`
  height: 100vh;
  width: 50%;
  position: relative;
  background: rgba(0, 0, 0);
  display: flex;
`

export const ImgContent = styled(Link)`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  opacity: 0.4;
  z-index: 10;
  transition: all 0.3s;

  ${Container}:hover & {
    opacity: 1;
  }
`

export const Image = styled.img`
  height: 100%;
  max-width: 100%;
  object-fit: cover;
  transition: all 0.3s;
  z-index: 5;

  ${Container}:hover & {
    transform: scale(1.1);
  }
`

export const Content = styled.div`
  position: absolute;
  left: 5%;
  right: 5%;
  top: 50%;
  z-index: 10;
  color: #ffffff;
  text-align: center;

  ${Container}:hover & {
    z-index: 6;
  }
`

export const Text = styled.h1`
  font-weight: 400;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  font-family: 'Tenor Sans', sans-serif;
  text-decoration: underline;
`
