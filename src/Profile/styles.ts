import styled, { css } from 'styled-components';
import { shade } from 'polished';

import containerImg from '../assets/container.png';
import containerAbertoImg from '../assets/containeraberto.webp';
import efeitoGeral from '../assets/fundoContainer.webp';
import cristais from '../assets/cristais.webp';

interface IProps {
  status: boolean;
  ativarImgPremio: boolean;
}

export const Container = styled.div`
  @media screen and (max-width: 768px) {
    width: 40vw;
  }

  @media screen and (max-width: 425px) {
    width: 60vw;
  }

  width: 30vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerLateral = styled.div`
  @media screen and (max-width: 1024px) {
    width: 12vw;
  }

  @media screen and (max-width: 768px) {
    width: 16vw;
  }

  @media screen and (max-width: 425px) {
    width: 30vw;
  }

  width: 10vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:first-child {
      text-shadow: 0.1vh 0.1vh 0.3vh #333;
      color: #ffff00;
      font-size: 1.4vh;
      margin-bottom: 1vh;
    }

    &:last-child {
      //background-color: green;
    }
  }

  #scroll {
    height: 30vh;
    max-height: 30vh;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    border: 0.1vh solid rgb(255, 255, 255, 0.15);
    border-radius: 0.4vh;

    overflow: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        background-color: rgb(196, 196, 196, 0.5);
        width: 0.5vw;
    }
       
    ::-webkit-scrollbar-thumb {
        background-color: rgb(196, 196, 196); 
        border-radius: 1vh;
    }

    #item {
      color: #00c4ff;
    }

    span {
      background-color: rgb(255, 255, 255, 0.15);
      width: 100%;
      padding-top: 1vh;
      padding-bottom: 1vh;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      p {
        margin-left: 0.7vw;
        margin-right: 0.7vw;
      }

      &:nth-child(2n + 2) {
        background-color: rgb(255, 255, 255, 0.10);
      }

      &:hover {
        background-color: rgb(255, 255, 255, 0.25);
      }

      p {
        text-shadow: 0.1vh 0.1vh 0.3vh #333;
        color: #fff;
        font-size: 1.6vh;
      }
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
  }
`;

export const Content = styled.div<IProps>`
  width: 100%;
  height: 30vh;
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

  @keyframes girar {
    0% {
      transform: rotate(0deg);
    }
    100%  {
      transform: rotate(360deg);
    }
  }

  #container {
    @media screen and (max-width: 1440px) {
      width: 40%;
      height: 18vh;
    }

    @media screen and (max-width: 1024px) {
      width: 60%;
      height: 18vh;
    }

    @media screen and (max-width: 768px) {
      width: 50%;
      height: 15vh;
    }

    width: 40%;
    height: 15vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-position: center;
    background-size: cover;

    background-image: url(${containerImg});

    ${props => props.status && css`
      @media screen and (max-width: 1440px) {
        width: 40%;
        height: 25vh;
      }

      @media screen and (max-width: 1024px) {
        width: 60%;
        height: 25vh;
      } 

      @media screen and (max-width: 768px) {
        width: 50%;
        height: 25vh;
      }

      animation: tremer 0.3s 2;

      width: 40%;
      height: 20vh;

      background-image: url(${containerAbertoImg});
    `}

    &::before {
      @media screen and (max-width: 1024px) {
        width: 24%;
        height: 30vh;
      }

      @media screen and (max-width: 768px) {
        width: 30%;
        height: 35vh;
      }

      @media screen and (max-width: 425px) {
        width: 45%;
        height: 36vh;
      }
      
      content: '';
      width: 15%;
      height: 35vh;

      position: absolute;
      display: none;

    ${props => props.status && props.ativarImgPremio && css`
      display: block;
      animation: girar 7s linear infinite;
    `}

      background-position: center;
      background-size: cover;

      background-image: url(${efeitoGeral});
    }

    &::after {
      @media screen and (max-width: 1024px) {
        width: 24%;
        height: 30vh;
      }

      @media screen and (max-width: 768px) {
        width: 30%;
        height: 35vh;
      }

      @media screen and (max-width: 425px) {
        width: 45%;
        height: 36vh;
      }

      content: '';
      width: 15%;
      height: 35vh;

      position: absolute;
      display: none;

    ${props => props.status && props.ativarImgPremio && css`
      display: block;
      animation: girar 9s linear infinite;
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
  }

  #premio {
    @media screen and (max-width: 768px) {
      width: 18%;
      height: 16vh;
    }

    @media screen and (max-width: 425px) {
      width: 25%;
      height: 15vh;
    }

    width: 10%;
    height: 12vh;
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
    margin-top: 18vh;
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
    border-radius: 0.2vh;
    text-shadow: 0.1vh 0.1vh 0.3vh #333;
    box-shadow: 0vh 0vh 0.1vh #333;
    z-index: 9999;

    &:hover {
      background-color: ${shade(0.03, "#6BB307")};
    }
  }
`;