import React from 'react'
import { Box, DivAlbum, H1, H2, Img, P } from '../../styles/components'
import alpc from '../../image/album-pac.png'
import figNacional from '../../image/fig_nacionais.png'
import figInter from '../../image/fig_internacionais.png'

const Home = () => {
  return (
    <DivAlbum>
      <Box style={{ border: 'none' }}>
        <H1 style={{ textAlign: 'center' }}>A febre de colecionar as figuras e o álbum da Copa</H1>
        <P>
          O primeiro registro de álbum de figurinhas colecionáveis no Brasil é da Copa de 1950, sediada aqui no nosso país. O álbum foi idealizado pela indústria de balas e chocolates A Americana Ltda. e os livretos contavam com duas versões: a vertical e a horizontal, com todas as seleções participantes.
        </P>

        <P>
          Os criadores do álbum tiveram a feliz ideia de atrelar o álbum de figurinhas ao que a empresa comercializava: balas. Ao invés de comprar pacotinhos com um número determinado de figurinhas, como é feito hoje, os cards vinham como brindes nas balas. Daí o nome “Balas Futebol! Craques do Campeonato Mundial de Futebol 1950 –  Brasil”.
        </P>

        <P>
          De quatro em quatro anos, seleções de futebol de diversos países do mundo se reúnem para disputar a Copa do Mundo de Futebol.
        </P>

        <P>
          A competição foi criada pelo francês Jules Rimet, em 1928, após ter assumido o comando da instituição mais importante do futebol mundial: a FIFA (Federation International Football Association).
        </P>

        <P>
          A primeira edição da Copa do Mundo foi realizada no Uruguai em 1930. Contou com a participação de apenas 13 seleções, que foram convidadas pela FIFA, sem disputa de eliminatórias, como acontece atualmente. A seleção uruguaia sagrou-se campeã e pôde ficar, por quatro anos, com a taça Jules Rimet.
        </P>

        <Box style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Img width={ 200 } src={ alpc } alt='Pacote de figurinha da copa' />
          <P>Albúm e Pacote de Figurinhas</P>
        </Box>
      </Box>

      <Box style={{ border: 'none' }}>
        <Box>
          <Img  src={ figNacional } alt='Pacote de figurinha da copa' />
          <H2 style={{ textAlign: 'center' }} mb={ 10 } type='second'>Figurinhas Nacionais</H2>
        </Box>

        <Box>
          <Img src={ figInter } alt='foto das figurinhas da copa' />
          <H2 style={{ textAlign: 'center' }} mb={ 10 } type='second'>Figurinhas Internacionais</H2>
        </Box>
      </Box>
    </DivAlbum>
  )
}

export default Home
