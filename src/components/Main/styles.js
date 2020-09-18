import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin: -200px 30px 0;
`

export const FirstContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  flex-wrap: wrap;

  @media (max-width: 1160px) {
    justify-content: center;
    text-align: center;
  }
`

export const AboutContent = styled.div`
  width: 60%;

  @media (max-width: 1160px) {
    width: 100%;
  }

  > h1 {
    color: #ffbc40;
  }

  > p {
    color: #102b20;
  }
`

export const Anime = styled.div`
  @media (max-width: 1160px) {
    margin-top: 50px;
  }
`
