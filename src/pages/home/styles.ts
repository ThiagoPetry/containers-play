import styled, { css } from 'styled-components';
import { shade } from 'polished';

import containerImg from '../../assets/container.webp';
import containerAbertoImg from '../../assets/containeraberto.webp';
import efeitoGeral from '../../assets/fundoContainer.webp';
import cristais from '../../assets/cristais.webp';
import fundoVbranco from '../../assets/fundoVbranco.svg';
import fundoVazul from '../../assets/fundoVazul.svg';
import fundoVamarelo from '../../assets/fundoVamarelo.svg';

interface IProps {
  status: boolean;
  ativarImgPremio: boolean;
}

interface ISpan {
  raridade: string;
}

export const Container = styled.div`
  width: 50vw;
  min-height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerLateral = styled.div`
  width: 60vw;
  height: 15vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    #niveis {
      width: 20vw;
      height: 2vh;

      border-radius: 0.4vh;

      background: linear-gradient(to left, rgb(255, 88, 69, 0.7), rgb(255, 215, 0, 0.7), rgb(148, 0, 211, 0.7), rgb(65, 105, 225, 0.7), rgb(50, 205, 50, 0.7), rgb(255, 255, 255, 0.7));
    
      &::after {
        content: 'INCOMUM';
        font-size: 2vh;
        color: rgb(255, 255, 255, 0.8);
        position: absolute;
        margin: -5.5vh 0 0 0;
      }

      &::before {
        content: 'EXÓTICO';
        font-size: 2vh;
        color: rgb(255, 255, 255, 0.8);
        position: absolute;
        margin: -5.5vh 0 0 15.6vw;
      }
    }

    &:first-child {
      text-shadow: 0.1vh 0.1vh 0.3vh #333;
      color: #fff;
      font-size: 1.4vh;
      margin-bottom: 1vh;
    }
  }

  #scroll {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;

    padding: 1vh;
    
    border: 0.1vh solid rgb(255, 255, 255, 0.15);
    background-color: rgb(255, 255, 255, 0.025);
    border-radius: 0.4vh;
    
    overflow: auto;
    overflow-y: hidden;

    ::-webkit-scrollbar {
        background-color: rgb(196, 196, 196, 0.5);
        height: 0.6vh;
    }
       
    ::-webkit-scrollbar-thumb {
        background-color: rgb(196, 196, 196); 
        border-radius: 1vh;
    }

    #item {
      color: #00c4ff;
    }
  }

  #info {
    height: 30vh;
    max-height: 30vh;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    p {
      color: #fff;
      font-weight: 100;
      font-size: 1.8vh;
      text-shadow: 0.1vh 0.1vh 0.3vh #333;

      strong {
        color: #B7FF00;
      }
    }

    #baixar {
      margin-top: 1vh;
    }
  }

  p {
    text-shadow: 0.1vh 0.1vh 0.3vh #333;
    color: #fff;
    font-size: 2vh;
  }
`;

export const Span = styled.span<ISpan>`

  ${props => props.raridade === "Comum" && css `
    background-color: rgb(255, 255, 255, 0.3); 

    &:hover {
      background-color: rgb(255, 255, 255, 0.2); 
    }
  `};

  ${props => props.raridade === "Incomum" && css `
    background-color: rgb(50, 205, 50, 0.4); 

    &:hover {
      background-color: rgb(50, 205, 50, 0.3); 
    }
  `};

  ${props => props.raridade === "Raro" && css `
    background-color: rgb(65, 105, 225, 0.4); 

    &:hover {
      background-color: rgb(65, 105, 225, 0.3); 
    }
  `};

  ${props => props.raridade === "Épico" && css `
    background-color: rgb(148, 0, 211, 0.4);
    
    &:hover {
      background-color: rgb(148, 0, 211, 0.3);
    }
  `};

  ${props => props.raridade === "Lendário" && css `
    background-color: rgb(255, 215, 0, 0.4);

    &:hover {
      background-color: rgb(255, 215, 0, 0.3);
    }
  `};

  ${props => props.raridade === "Exótico" && css `
    background-color: rgb(255, 88, 69, 0.4); 

    &:hover {
      background-color: rgb(255, 88, 69, 0.3); 
    }
  `};

  width: 8vw;
  min-width: 8vw;
  max-width: 8vw;

  padding: 1vh 0 1vh 0;
  margin: 0vh 1vh 0vh 0vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-left: 0.7vw;
    margin-right: 0.7vw;
  }

  /* &:nth-child(2n + 2) {
    background-color: rgb(255, 255, 255, 0.10);
  } */

  /* &:hover {
    background-color: rgb(255, 255, 255, 0.25);
  } */

  p {
    text-shadow: 0.1vh 0.1vh 0.3vh #333;
    color: #fff;
    font-size: 1.6vh;
  }
`;

export const Content = styled.div<IProps>`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @keyframes tremer {
    0% {
      margin-left: 30px;
    }
    20% {
      margin-left: -30px;
    }
    40%  {
      margin-left: 30px;
    }
    60%  {
      margin-left: -30px;
    }
    80%  {
      margin-left: 30px;
    }
    100%  {
      margin-left: -30px;
    }
  }

  @keyframes girarDireita {
    0% {
      transform: rotate(0deg);
    }
    100%  {
      transform: rotate(360deg);
    }
  }

  @keyframes girarEsquerda {
    0% {
      transform: rotate(360deg);
    }
    100%  {
      transform: rotate(0deg);
    }
  }

  #container {
    width: 40%;
    height: 32vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-size: cover;
    background-image: url(${containerImg});

    ${props => props.status && css`
      animation: tremer 0.3s 2;      
    `}

    ${props => props.status && props.ativarImgPremio && css`
      width: 40%;
      height: 36vh;
      background-image: url(${containerAbertoImg});
    `}

    &::before {     
      content: '';
      width: 20%;
      height: 35vh;
      position: absolute;
      display: none;

      ${props => props.status && props.ativarImgPremio && css`
        display: block;
        animation: girarDireita 22s linear infinite;
      `}

      background-position: center;
      background-size: cover;
      background-image: url(${efeitoGeral});
    }

    &::after {
      content: '';
      width: 20%;
      height: 35vh;
      position: absolute;
      display: none;

      ${props => props.status && props.ativarImgPremio && css`
        display: block;
        animation: girarEsquerda 22s linear infinite;
      `}

      background-position: center;
      background-size: cover;
      background-image: url(${efeitoGeral});
    }
  }

   #containerAberto {
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: '';
      width: 20%;
      height: 25vh;
      position: absolute;
      margin-top: -50vh;
      display: none;

      ${props => props.status && props.ativarImgPremio && css`
        display: block;
      `}

      background-position: center;
      background-size: cover;
      background-image: url(${fundoVbranco});
    }
  }

  #premio {
    width: 14%;
    height: 18vh;
    display: none;

    ${props => props.status && props.ativarImgPremio && css`
      display: block;
    `}

    position: absolute;
    background-position: center;
    background-size: cover;
    background-image: url(${cristais});
  }

  #texto {
    color: #fff;
    font-weight: 100;
    font-size: 2.8vh;
    text-shadow: 0.1vh 0.1vh 0.3vh #333;
    z-index: 999;
    margin-top: 26vh;
    position: absolute;
    display: none;

    ${props => props.status && css`
      display: block;
    `}
  }
`;

export const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  button {
    padding: 1.2vh 2.2vh 1.2vh 2.2vh;
    color: #fff;
    //border: 0.4vh solid rgb(136, 214, 7);
    border: 0;
    background-color: #6BB307;
    font-size: 2vh;
    font-weight: bold;
    border-radius: 0.4vh;
    text-shadow: 0.1vh 0.1vh 0.3vh #333;
    box-shadow: 0vh 0vh 0.1vh #333;
    z-index: 9999;

    &:hover {
      background-color: ${shade(0.09, "#6BB307")};
    }
  }
`;