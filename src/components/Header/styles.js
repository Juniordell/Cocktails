import styled from 'styled-components'

export const Container = styled.div`
  --padding-top: 100px;
  --padding-bottom: 120px;
  --heading-font-size: 32px;
  --content-width: 100%;
  &.transparent {
    --bg-color: transparent;
    --text-color: white;
  }
  &.white {
    --bg-color: #3694ff;
    --text-color: #104220;
  }
  &:first-child {
    --padding-top: 130px;
    --heading-font-size: 51px;
    @media (min-width: 1024px) {
      --heading-font-size: 71px;
      --content-width: 50%;
    }
  }
  position: relative;
`

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* background: var(--bg-color); */
  clip: rect(auto, auto, auto, auto);
`

export const Header = styled.header`
  z-index: 3;
  background: var(--bg-color);
  display: flex;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 16px 32px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

export const Button = styled.button`
  background: var(--bg-color);
  color: var(--text-color);
  outline: none;
  padding: 10px;
  cursor: pointer;
  border: none;
  padding-left: 60px;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`
