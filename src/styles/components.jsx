import styled from "styled-components"
import colors from "./palette"

export const P = styled.p `
  color: ${({ type })  => colors(type) };
  font-size: ${ props => `${props.fontSize}px` };
  text-align: ${ props => props.textAlign };
  margin-top: ${ props => `${ props.mt }rem` };
  margin-right: ${ props => `${ props.mr }rem` };
  margin-bottom: ${ props => `${ props.mb }rem` };
  margin-left: ${ props => `${ props.ml }rem` };
`
export const H1 = styled.h1 `
  color: ${({ type })  => colors(type) };
  margin-top: ${ props => `${ props.mt }rem` };
  margin-right: ${ props => `${ props.mr }rem` };
  margin-bottom: ${ props => `${ props.mb }rem` };
  margin-left: ${ props => `${ props.ml }rem` };
  text-align: ${ props => props.textAlign };
`
export const H2 = styled.h2 `
  color: ${({ type })  => colors(type) };
  margin-top: ${ props => `${ props.mt }px` };
  margin-right: ${ props => `${ props.mr }px` };
  margin-bottom: ${ props => `${ props.mb }px` };
  margin-left: ${ props => `${ props.ml }px` };
`
export const H3 = styled.h3 `
  color: ${({ type })  => colors(type) };
  margin-top: ${ props => `${ props.mt }px` };
  margin-right: ${ props => `${ props.mr }px` };
  margin-bottom: ${ props => `${ props.mb }px` };
  margin-left: ${ props => `${ props.ml }px` };
  text-align: ${ props => props.textAlign };
`
export const H4 = styled.h4 `
  color: ${({ type })  => colors(type) };
`
export const H5 = styled.h5 `
  color: ${({ type })  => colors(type) };
`

export const Small = styled.small `
  color: ${({ type })  => colors(type) };
  font-size: ${ props => props.fontSize };
`
export const Box = styled.div `
  color: ${({ type })  => colors(type) };
  margin-top: ${ props => `${ props.mt }rem` };
  margin-right: ${ props => `${ props.mr }rem` };
  margin-bottom: ${ props => `${ props.mb }rem` };
  margin-left: ${ props => `${ props.ml }rem` };
  text-align: ${ props => props.textAlign };
`

export const Span = styled.span `
  color: ${({ type })  => colors(type) };
  margin-top: ${ props => `${ props.mt }rem` };
  margin-right: ${ props => `${ props.mr }rem` };
  margin-bottom: ${ props => `${ props.mb }rem` };
  margin-left: ${ props => `${ props.ml }rem` };
  text-align: ${ props => props.textAlign };
`

export const Img = styled.img `

`

export const CApp = styled.div `
  display: flex;
  flex-direction: column;
  min-height: calc( 100vh + 70px );
`

export const CMain = styled.main `
  flex: 1;
  position: relative;
  margin-top: 60px;
`

export const Title = styled.h1 `
  position: relative;
  font-family: 'Spectral SC', serif;
  color: #4F0222;
  line-height: 1;
  font-size: 3rem;
  margin: 0 0 1rem;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    left: -5px;
    bottom: 5px;
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: .2rem;
    background: #D9A511;
    z-index: -1;
  }
`

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
`

export const CGrid = styled.div `
  display: grid;
  grid-template-columns: repeat( 5, 1fr );
  width: 95%;
  height: 60%;
  gap: .5rem;
  padding: 1rem;

  @media (max-width: 1280px) {
    grid-template-columns: repeat( 4, 1fr );
  }
`

export const DivAlbum = styled.div `
  display: flex;
  justify-content: center;
  padding: .5rem;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    border: solid 2px #4F0222;
    border-radius: .4rem;
    padding: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
