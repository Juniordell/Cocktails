import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background: #013620;
  width: 100%;
`

export const Content = styled.div`
  height: 100vh;
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  color: white;
`

export const ImageContent = styled.div`
  border-radius: 20px;
  border: 2px solid green;
  width: 400px;
  height: 400px;

  > img {
    border-radius: 20px;
  }
`
