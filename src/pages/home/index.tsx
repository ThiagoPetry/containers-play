import React, { useState, useEffect } from 'react';

import { Container, Content, Menu, ContainerLateral, Span } from './styles'

interface IPremio {
  item: string;
  quantidade: string;
  raridade: string;
}

interface IQuantidade {
  disponivel: number;
  atual: number;
}

const Profile: React.FC = () => {
  const [abrir, setAbrir] = useState(false);
  const [premio, setPremio] = useState<IPremio>();
  const [guardaPremio, setGuardaPremio] = useState<IPremio[]>([]);
  const [quantidade, setQuantidade] = useState<IQuantidade>({disponivel: 99999, atual: 0});
  const [ativarImgPremio, setAtivarImgPremio] = useState(false);

  useEffect(() => {
    setPremio({item: "", quantidade: "", raridade: ""});
    setAtivarImgPremio(false);

    if(abrir) {
      if(quantidade.disponivel > 0) {
        setTimeout(function() { 
          const qtdDisponivel = quantidade ? quantidade.disponivel - 1 : 0;
          const qtdAtual = quantidade ? 99999 - qtdDisponivel : 0;

          setQuantidade({disponivel: qtdDisponivel, atual: qtdAtual});

          const item = ["Cristais"];
          const cristais = [
            {
              "cristais": "3.500",
              "raridade": "Comum",
            },
            {
              "cristais": "3.500",
              "raridade": "Comum",
            },
            {
              "cristais": "3.500",
              "raridade": "Comum",
            },
            {
              "cristais": "3.500",
              "raridade": "Comum",
            },
            {
              "cristais": "3.500",
              "raridade": "Comum",
            },
            {
              "cristais": "10.000",
              "raridade": "Incomum",
            },
            {
              "cristais": "10.000",
              "raridade": "Incomum",
            },
            {
              "cristais": "10.000",
              "raridade": "Incomum",
            },
            {
              "cristais": "25.000",
              "raridade": "Raro",
            },
            {
              "cristais": "25.000",
              "raridade": "Raro",
            },
            {
              "cristais": "50.000",
              "raridade": "Épico",
            },
            {
              "cristais": "100.000",
              "raridade": "Lendário",
            },
            {
              "cristais": "125.000",
              "raridade": "Exótico",
            },
          ];

          const escolhe = Math.random() * (cristais.length - 1) + 0;

          setPremio({item: item[0], quantidade: cristais[Number(escolhe.toFixed(0))].cristais, raridade: cristais[Number(escolhe.toFixed(0))].raridade});
          setGuardaPremio([...guardaPremio, {item: item[0], quantidade: cristais[Number(escolhe.toFixed(0))].cristais, raridade: cristais[Number(escolhe.toFixed(0))].raridade}]);
          setAtivarImgPremio(true);
        }, 700);
      }
    }    
  },[abrir]);

  const reducer = (previousValue: any, currentValue: any) => previousValue + currentValue;
  const recebe = guardaPremio.map(a => Number(a.quantidade));

  return (
    <>
      <ContainerLateral>
        <div>
          <h1>HISTÓRICO DE ABERTURA</h1>
          <div id="niveis" />
        </div>
        <div id="scroll">
          {guardaPremio.length > 0 ? 
            guardaPremio.map((retorna, index) => (
              <Span key={index} raridade={retorna.raridade}>
                <p>{retorna.quantidade}</p>
                <p id="item">{retorna.item}</p>
              </Span>          
            )) : <p> </p>          
          }
        </div>
      </ContainerLateral>
      <Container>
        <Content status={abrir} ativarImgPremio={ativarImgPremio}>
          <div id="container"></div>
          <div id="containerAberto"></div>
          <div id="premio"></div>
          <div id="texto">{`${premio?.quantidade} ${premio?.item}`}</div>
        </Content>
        <Menu>
          {quantidade.disponivel > 0 ?
            <button onClick={() => setAbrir(!abrir)}>{abrir ? 'FECHAR' : 'ABRIR'}</button>
          : <button>INDISPONÍVEL</button>}
        </Menu>
      </Container>
      <ContainerLateral>
        <div id="scroll">
          <span>
            <h1>CONTAINERS</h1>
            <p>0x</p>
          </span>
          <span>
            <h1>CONTAINERS ABERTOS</h1>
            <p>0x</p>
          </span>
          <span>
            <h1>CRISTAIS</h1>
            <p>0x</p>
          </span>
        </div>
      </ContainerLateral>
      {/* <ContainerLateral>
        <div>
          <h1>INFORMAÇÕES</h1>
        </div>
        <div id="info">
          <p><strong>CONTAINERS:</strong>{` x${quantidade?.disponivel}`}</p>
          <p><strong>ABERTOS:</strong>{` x${quantidade?.atual}`}</p>
          <p id="baixar"><strong>CRISTAIS:</strong>{` x${recebe.length > 0 ? recebe.reduce(reducer) * 1000 : '0'}`}</p>
          <p><strong>SUPRIMENTOS:</strong>{` x${0}`}</p>
          <p><strong>ALTERAÇÕES:</strong>{` x${0}`}</p>
          <p><strong>CORES DE TIROS:</strong>{` x${0}`}</p>
          <p><strong>SKINS:</strong>{` x${0}`}</p>
        </div>
      </ContainerLateral> */}
    </>
  );
};

export default Profile;