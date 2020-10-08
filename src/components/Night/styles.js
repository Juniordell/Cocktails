import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Content = styled.div`
  height: 100vh;
  background: #251a1a;

  > h2 {
    color: white;
    margin: 0;
    display: flex;
    justify-content: space-between;

    > p {
      padding: 150px 0 0 180px;
      font-size: 40px;
    }

    > img {
      height: 45vh;
      width: 35%;
      margin-right: 100px;
      object-fit: cover;
      border-radius: 10px;
      position: absolute;
      top: 38%;
      left: 55%;
      z-index: -1;
    }
  }

  > button {
    background: transparent;
    outline: none;
    margin: 50px 0 0 180px;
    padding: 30px 40px;
    cursor: pointer;
    transition: 0.3s;
    border: 1px solid #ff8630;
    background: #ff8630;

    > :first-child {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI';
      color: #1b1b1b;
      text-decoration: none;
      transition: 0.3s;
      font-size: 18px;
      font-weight: 600;
      width: 100%;
      height: 100%;
    }

    &:hover {
      background: transparent;

      > :first-child {
        color: white;
      }
    }
  }
`

export const Footer = styled.div`
  height: 100vh;
`
