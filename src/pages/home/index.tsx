import React, { useState, useEffect } from 'react';

import { Container, Content, Menu, ContainerLateral, Span, ContainerInfo } from './styles';

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

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
  const [containerSelecionado, setContainerSelecionado] = useState(true);

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
              "cristais": "25.000",
              "raridade": "Raro",
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
              "cristais": "25.000",
              "raridade": "Raro",
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
              "cristais": "25.000",
              "raridade": "Raro",
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
              "raridade": "??pico",
            },
            {
              "cristais": "50.000",
              "raridade": "??pico",
            },
            {
              "cristais": "50.000",
              "raridade": "??pico",
            },
            {
              "cristais": "50.000",
              "raridade": "??pico",
            },
            {
              "cristais": "50.000",
              "raridade": "??pico",
            },
            {
              "cristais": "50.000",
              "raridade": "??pico",
            },
            {
              "cristais": "100.000",
              "raridade": "Lend??rio",
            },
            {
              "cristais": "100.000",
              "raridade": "Lend??rio",
            },
            {
              "cristais": "100.000",
              "raridade": "Lend??rio",
            },
            {
              "cristais": "125.000",
              "raridade": "Ex??tico",
            },
            {
              "cristais": "125.000",
              "raridade": "Ex??tico",
            }
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
          <h1>HIST??RICO DE ABERTURA</h1>
          <div id="niveis" />
        </div>
        <div id="scroll">
          {guardaPremio.length > 0 ? 
            guardaPremio.map((retorna, index) => (
              <Span key={index} raridade={retorna.raridade}>
                <p>{retorna.quantidade}</p>
                <p id="item">{retorna.item}</p>
              </Span>          
            )) : <p>??</p>          
          }
        </div>
      </ContainerLateral>
      <Container>
        <Content status={abrir} ativarImgPremio={ativarImgPremio} containerSelecionado={containerSelecionado}>
          <div id="btnEsquerda" onClick={() => setContainerSelecionado(!containerSelecionado)}><IoIosArrowBack size={50}/></div>
          <div id="btnDireita" onClick={() => setContainerSelecionado(!containerSelecionado)}><IoIosArrowForward size={50}/></div>
          <div id="container"></div>
          <div id="containerAberto"></div>
          <div id="premio"></div>
          <div id="texto">{`${premio?.quantidade} ${premio?.item}`}</div>
        </Content>
        <Menu>
          {
            quantidade.disponivel > 0 ?
              <button onClick={() => setAbrir(!abrir)}>{abrir ? 'FECHAR' : 'ABRIR'}</button>
            : 
              <button>INDISPON??VEL</button>
          }
        </Menu>
      </Container>
      <ContainerInfo>
        <div id="info">
          <span>
            <h1>CONTAINERS</h1>
            <p>x{quantidade?.disponivel}</p>
          </span>
          <span>
            <h1>CONTAINERS ABERTOS</h1>
            <p>x{quantidade?.atual}</p>
          </span>
          <span>
            <h1>CRISTAIS</h1>
            <p>{recebe.length > 0 ? (recebe.reduce(reducer) * 1000).toLocaleString("pt-BR") : '0'}</p>
          </span>
          <span>
            <button>DETALHES</button>
          </span>
        </div>
      </ContainerInfo>
    </>
  );
};

export default Profile;