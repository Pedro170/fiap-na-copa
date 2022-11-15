import React from "react";
import { CGrid, Section } from "../../styles/components";
import Figurinha from "../figurinha/Figurinha";
import bra from "../../image/b-bra.png";

const jogadores = [
  { nome: 'Vinícius Jr', nasc: '12-7-2000', foto: 'https://i.imgur.com/1007Fcr.png' },
  { nome: 'Neymar Jr', nasc: '5-2-1992', foto: 'https://i.imgur.com/Tv0UAl8.png' },
  { nome: 'Antony', nasc: '24-2-2000', foto: 'https://i.imgur.com/0rzxcXl.png' },
  { nome: 'Gabriel Jesus', nasc: '3-4-1997', foto: 'https://i.imgur.com/8TX1P6b.png' },
  { nome: 'Casemiro', nasc: '23-2-1992', foto: 'https://i.imgur.com/mRcKLHi.png' },
  { nome: 'Élder Militão', nasc: '18-1-1998', foto: 'https://i.imgur.com/XPOOBbJ.png' },
  { nome: 'Thiago Silva', nasc: '22-9-1984', foto: 'https://i.imgur.com/pmcWfxD.png' },
  { nome: 'Raphinha', nasc: '14-12-1996', foto: 'https://i.imgur.com/l8MEObv.png' },
  { nome: 'Danilo', nasc: '15-7-1991', foto: 'https://i.imgur.com/KZkLCMc.png' },
  { nome: 'Ederson', nasc: '17-8-1993', foto: 'https://i.imgur.com/29p4tgH.png' },
]

const FigurinhasNacionais = () => {
  return (
    <Section>
      <CGrid>
        {
          jogadores.map(( jogador, idx ) => (
            <Figurinha
              key={ idx }
              jogador={ jogador.foto }
              bandeira={ bra }
              nomeJogador={ jogador.nome }
              nasc={ jogador.nasc }
            />
          ))
        }
      </CGrid>
    </Section>
  );
};

export default FigurinhasNacionais;
