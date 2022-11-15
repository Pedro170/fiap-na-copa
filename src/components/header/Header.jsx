import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import colors from '../../styles/palette'
import { Box, H2, H3, Span } from '../../styles/components'
import IconsAwesome from '../icons/IconAwesome'
import Button from '../forms/button/Button'

export const CHeader = styled.header `
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background: ${({ type }) => colors( type )};
  padding: 0 1rem;
  z-index: 1000;

  @media (max-width: 768px) {
    border-bottom: solid 2px #D9A511;
  }
`

export const Logo = styled.div `
  text-transform: uppercase;
  letter-spacing: 5px;
`

export const Nav = styled.nav `
  @media (max-width: 768px) {
    ul {
      position: absolute;
      display: block;
      top: 60px;
      left: 0px;
      width: 100%;
      height: 100vh;
      background: #4F0222;

      li {
        border-bottom: solid 2px #D9A511;
      }
    }
  }
`

export const Ul = styled.ul `
  display: flex;
  align-items: center;
  column-gap: .5rem;
`

const animeWidth = keyframes`
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
`

export const Li = styled.li `

  a {
    display: block;
    text-transform: uppercase;
    color: #D9A511;
    padding: .3rem .2rem;
    transition: .3s;
  }

  span {
    display: block;
    width: 0;
    height: 2px;
    border-radius: 5px;
    background: #D9A511;
  }

  &:hover span {
    width: 100%;
    animation: ${animeWidth} .8s;
  }
`

export const DivUser = styled.div `
  position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 2px #D9A511;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;
    &:hover {
      div {
        visibility: visible;
      }
    }

    i {
      color: #D9A511;
    }
`

export const Div = styled.div `
  position: absolute;
  top: 3.5rem;
  right: -10px;
  display: flex;
  flex-direction: column;
  width: 12.5rem;
  border-radius: .2rem;
  background: #4F0222;
  box-shadow: 0 5px 25px rgba(0, 0, 0, .1);
  padding: 10px 15px;
  visibility: hidden;
  transition: 1s;

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    right: 13px;
    width: 20px;
    height: 20px;
    background: #4F0222;
    transform: rotate(45deg);
  }

  button {
    &:hover, &:focus {
      box-shadow: 0 0 0 0;
    }
  }
`

export const BLogin = styled.button `
  a {
    border-radius: .2rem;
    background: #D9A511;
    font-size: 1rem;
    color: #4F0222;
    padding: .3rem 1rem;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    margin-left: .5rem;

    a {
      padding: .5rem 3rem;
    }
  }
`

export const BHamburger = styled.button `
  display: none;
  border: none;
  background: none;
  outline: none;

  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    /* background: #D9A511; */
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      width: 28px;
      height: 2px;
      background: #fff;
      box-shadow: 0 10px 0 #fff;
      transition: .2s;
      transform: translateY(-10px);
    }

    &::after {
      content: '';
      position: absolute;
      width: 28px;
      height: 2px;
      background: #fff;
      transition: .2s;
      transform: translateY(10px);
    }
  }

  @media (max-width: 768px) {
      display: block;
  }
`

const Header = () => {
  const [ active, setActive ] = React.useState( false )

  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.removeItem("usuario-validado")
    navigate("/home")
  }
  const usuario = sessionStorage.getItem('usuario-validado')
  
  return (
    <CHeader type="first">
      <Logo>
        <H2 type='second'>Fiap na Copa</H2>
      </Logo>

      <Nav active >
        <Ul>
          <Li>
            <Link to="/home">Home</Link>
            <Span></Span>
          </Li>

          <Li>
            <Link to="/figurinhas-nacionais">Figurinhas Nacionais</Link>
            <Span></Span>
          </Li>

          <Li>
            <Link to="/figurinhas-internacionais">Figurinhas Internacionais</Link>
            <Span></Span>
          </Li>

          {
            usuario 
              ? 
                <DivUser>
                  <IconsAwesome icon="user" />
                  <Div>
                    <H3 mb={10} style={{ color: '#ddd' }}>{ usuario }</H3>
                    <Box>
                      <Button 
                        text="Logout"
                        type='second' 
                        fontWeight='bold' 
                        w='100%' color='#4F0222' 
                        onClick={ logout }
                      />
                    </Box>
                  </Div>
                </DivUser>
              : 
                <BLogin style={{ border: 'none' }}>
                  <Link to="/login">Login</Link>
                </BLogin>
          }
        </Ul>
      </Nav>

      <BHamburger onClick={ () => setActive( !active ) }><Box></Box></BHamburger>
    </CHeader>
  )
}

export default Header
