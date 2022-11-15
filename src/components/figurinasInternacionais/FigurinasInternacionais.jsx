import React from 'react'
import { CGrid, Section } from '../../styles/components';
import Figurinha from '../figurinha/Figurinha';
import fra from '../../image/b-fra.png'
import por from '../../image/b-por.jpg'
import bel from '../../image/b-bel.png'


const selecoes = {
  belgica: [
    { nome: 'Dries Mertens', nasc: '6-5-1987', sigla: 'bel', foto: 'https://i.imgur.com/5KwPmRl.png' },
    { nome: 'Jérémy Doku', nasc: '27-5-2002', sigla: 'bel', foto: 'https://i.imgur.com/dQZBem7.png' },
    { nome: 'Eden Hazard', nasc: '7-1-1991', sigla: 'bel', foto: 'https://i.imgur.com/BCTRf1w.png' },
    { nome: 'Thomas Meunier', nasc: '12-9-1991', sigla: 'bel', foto: 'https://i.imgur.com/DNKIYXn.png' },
    { nome: 'Hans Vanaken', nasc: '24-8-1992', sigla: 'bel', foto: 'https://i.imgur.com/oGcp8tO.png' },
    { nome: 'Jason Denayer', nasc: '28-6-1995', sigla: 'bel', foto: 'https://i.imgur.com/YcZ8aXj.png' },
    { nome: 'Timothy Castagne', nasc: '5-12-1995', sigla: 'bel', foto: 'https://i.imgur.com/9ChgYLd.png' },
    { nome: 'Thorgan Hazard', nasc: '29-3-1993', sigla: 'bel', foto: 'https://i.imgur.com/NEC3LSo.png' },
    { nome: 'Thibaut Courtois', nasc: '11-5-1992', sigla: 'bel', foto: 'https://i.imgur.com/5rd3II0.png' },

    { nome: 'Simon Mignolet', nasc: '6-3-1988', sigla: 'bel', foto: 'https://i.imgur.com/zE1zulv.png' },
  ],

  franca: [
    { nome: 'Kingsley Coman', nasc: '13-6-1996', sigla: 'fra', foto: 'https://i.imgur.com/Ok3L2Be.png' },
    { nome: 'Antoine Griezmann', nasc: '21-3-1991', sigla: 'fra', foto: 'https://i.imgur.com/gPavpWx.png' },
    { nome: 'Paul Pogba', nasc: '15-3-1993', foto: 'https://i.imgur.com/Y7iL1dD.png' },
    { nome: 'Aurélien Tchouaméni', nasc: '27-1-2000', foto: 'https://i.imgur.com/rGWr8mO.png' },
    { nome: 'Kylian Mbappé', nasc: '20-12-1998', foto: 'https://i.imgur.com/em4JPre.png' },
    { nome: "N'Golo Kanté", nasc: '29-3-1991', foto: 'https://i.imgur.com/ZqGGbKr.png' },
    { nome: 'Benjamin Pavard', nasc: '28-3-1996', foto: 'https://i.imgur.com/Em9g0W4.png' },
    { nome: 'Christopher Nkunku', nasc: '14-11-1997', foto: 'https://i.imgur.com/QOucEUZ.png' },
    { nome: 'Presnel Kimpembe', nasc: '13-8-1995', foto: 'https://i.imgur.com/1Xqprnp.png' },
    { nome: 'Raphaël Varane', nasc: '25-4-1993', foto: 'https://i.imgur.com/qtLIgkx.png' },
  ],

  portugal: [
    { nome: 'Raphaël Guerreiro', nasc: '22-12-1993', foto: 'https://i.imgur.com/2XXTwDx.png' },
    { nome: 'Pepe', nasc: '26-2-1993', foto: 'https://i.imgur.com/SN6zQaQ.png' },
    { nome: 'Rúbens Dias', nasc: '14-5-1997', foto: 'https://i.imgur.com/WPBrLxV.png' },
    { nome: 'André Silva', nasc: '6-11-1995', foto: 'https://i.imgur.com/cZgl9rq.png' },
    { nome: 'Renato Sanches', nasc: '18-8-1997', foto: 'https://i.imgur.com/WRMNTXX.png' },
    { nome: 'João Moutinho', nasc: '8-9-1986', foto: 'https://i.imgur.com/JZlSch2.png' },
    { nome: 'Bruno Fernandes', nasc: '8-9-1994', foto: 'https://i.imgur.com/NlB5hhX.png' },
    { nome: 'Cristiano Ronaldo', nasc: '5-2-1985', foto: 'https://i.imgur.com/Pth5EwL.png' },
    { nome: 'Diogo Jota', nasc: '4-12-1996', foto: 'https://i.imgur.com/ykMA3oS.png' },
    { nome: 'Rui Patrício', nasc: '15-2-1988', foto: 'https://i.imgur.com/jYiL1uV.png' },
  ]
}

const FigurinasInternacionais = () => {
  return (
    <Section>
      <CGrid>
        {
          selecoes.belgica.map(( jogador, idx ) => (
            <Figurinha
              key={ idx }
              bandeira={ bel }
              sigla='bel'
              nomeJogador={ jogador.nome }
              nasc={ jogador.nasc }
              jogador={ jogador.foto }
            />
          ))
        }

        {
          selecoes.franca.map(( jogador, idx ) => (
            <Figurinha
              key={ idx }
              bandeira={ fra }
              sigla='fra'
              nomeJogador={ jogador.nome }
              nasc={ jogador.nasc }
              jogador={ jogador.foto }
            />
          ))
        }

        {
          selecoes.portugal.map(( jogador, idx ) => (
            <Figurinha
              key={ idx }
              bandeira={ por }
              sigla='fra'
              nomeJogador={ jogador.nome }
              nasc={ jogador.nasc }
              jogador={ jogador.foto }
            />
          ))
        }
      </CGrid>
    </Section>
  )
}

export default FigurinasInternacionais
