import styled from "styled-components";

export const CFigurinha = styled.div `
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
  /* width: 240px; */
  width: 100%;
  height: 300px;
  background:
    linear-gradient(to bottom, #51C0B1, #5F489D, #51C0B1)
  ;
  overflow: hidden;
`

export const LogoCopa = styled.div `
  position: absolute;
  top: 10px;
  left: 0;
  width: 80px;
`

export const BoxImg = styled.div `
  position: relative;
  width: 158px;
  position: absolute;
  img {
    top: 0;
    left: 0;
    object-fit: cover;
  }
`

export const Bandeira = styled( LogoCopa ) `
  left: auto;
  right: 15px;
  width: 60px;
  text-align: center;
  border: solid 2px #DEE9DD;

  b {
  display: block;
  width: 100%;
  background: #DEE9DD;
  color: #96213b;
  font-size: .9rem;
  text-transform: uppercase;
}
`
export const DJogador = styled.div `
  position: absolute;
  top: 240px;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    position: relative;
    padding: .4rem 2rem;
    background: #DEE9DD;
    box-shadow: 0px 4px 0px 0px #5c1a28;
    color: #5c1a28;
    text-transform: uppercase;
    font-weight: bold;

    &::before, &::after {
      content: '';
      position: absolute;
      left: -10px;
      top: 50%;
      transform: translateY(-50%);
      width: 10px;
      height: 5px;
      background: #DEE9DD;
      box-shadow: 0px 2px 0px 0px #5c1a28;
    }

    &::after {
      left: auto;
      right: -10px;
    }

    span {
      position: absolute;
      top: 50%;
      left: -4px;
      transform: translateY(-50%);
      width: 4px;
      height: 14px;
      background: #DEE9DD;
      box-shadow: 0px 2px 0px 0px #5c1a28;
      z-index: 1;

      &::before, &::after {
        content: '';
        position: absolute;
        top: -4px;
        left: -5px;
        width: 4px;
        height: 4px;
        background: #DEE9DD;
        box-shadow: 0px 2px 0px 0px #5c1a28;
      }

      &::after {
        top: auto;
        bottom: -4px;
      }

      &:nth-child(2) {
        left: auto;
        right: -4px;
      }

      &:nth-child(2)::before {
        left: auto;
        right: -4px;
      }

      &:nth-child(2)::after {
        left: auto;
        right: -4px;
      }
    }
  }

  small {
    position: relative;
    background: #96213b;
    padding: .1rem .6rem;
    color: #DEE9DD;
    z-index: 1;

    &::before, &::after {
      content: '';
      position: absolute;
      left: -6px;
      top: 50%;
      transform: translateY(-50%);
      width: 6px;
      height: 6px;
      background: #96213b;
    }

    &::after {
      left: auto;
      right: -6px;
    }
  }
`
