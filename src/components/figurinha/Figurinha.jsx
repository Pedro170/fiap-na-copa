import React from 'react'
import { Img, P, Small, Span } from '../../styles/components'
import { Bandeira, CFigurinha, DJogador, LogoCopa, BoxImg } from './figurinha.styles'
import logo from  '../../image/logo-peq.png'

const Figurinha = ({ jogador, bandeira, nomeJogador='Neymar jr', nasc='24-2-2000', sigla='Bra', pais='Brasil' }) => {
  return (
    <CFigurinha>
      <LogoCopa>
        <Img src={ logo } alt='Logo da copa' />
      </LogoCopa>

      <BoxImg>
        <Img src={ jogador } alt={`foto do ${ nomeJogador }`} />
      </BoxImg>

      <Bandeira>
        <b>{ sigla }</b>
        <Img height={40} src={ bandeira } alt={`bandeira do jogador ${ pais }`} />
      </Bandeira>

      <DJogador>
        <P><Span></Span>{ nomeJogador }<Span></Span></P>
        <Small>{ nasc }</Small>
      </DJogador>
    </CFigurinha>
  )
}

export default Figurinha
