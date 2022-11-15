import React from 'react'
import styled from 'styled-components'
import { Box, P, Span } from '../../styles/components'

export const CFooter = styled.footer `
  display: flex;
  /* justify-content: center; */
  align-items: center;
  column-gap: 1rem;
  width: 100%;
  height: 70px;
  background: #333;
  padding: 2rem 1rem;
  color: #fff;
`

const Footer = () => {
  return (
    <CFooter>
      <Box>
        <P>Gabriel Cerqueira: <Span type='second'>RM 94260</Span></P>
        <P>João Pedro: <Span type='second'>RM 94260</Span></P>
      </Box>
      <Box>
        <P>Kauan Altino: <Span type='second'>RM 94260</Span></P>
        <P>Lucas: <Span type='second'>RM 94260</Span></P>
      </Box>
      {/* <P>&copy; Todos os direitos reservados ao Grupo 2 | 2022</P> */}
    </CFooter>
  )
}

export default Footer
