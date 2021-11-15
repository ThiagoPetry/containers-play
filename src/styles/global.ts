import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    background: linear-gradient(10deg, rgba(65, 72, 97, 0.3), rgba(65, 72, 97, 0.3)), linear-gradient(10deg, rgba(65, 72, 97, 0.97), rgba(65, 72, 97, 0.96));
    opacity: 0.95;
    cursor: default;
    font-family: 'Hermes';
  }

  #root {
    max-width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 425px) {
      flex-direction: column;
    }

    &::after {
      content: 'Desenvolvido por XxOufaGoldxX | Aplicação teste';
      width: auto;
      //background-color: rgb(255, 255, 255, 0.20);
      color: rgb(255, 255, 255, 0.15);
      font-size: 2vh;
      padding: 1vh;
      border-radius: 0.5vh;

      position: absolute;
      margin-top: -70vh;
    }
  }

  button {
    cursor: pointer;
  }

  ::placeholder {
    font-weight: bold;
    color: #c4c4c4;
  }

  ::-webkit-scrollbar {
    width: 0px;
  }
`;
