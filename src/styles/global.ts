import { createGlobalStyle } from 'styled-components';

import fundoDetalhe from '../assets/fundoDetalhe.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    background: url(${fundoDetalhe}), linear-gradient(180deg, #1B1B1B 0%, #1B1B1B 100%) no-repeat;
    cursor: default;
    font-family: 'Hermes';

    min-height: 100%;
    height: 100vh;

    background-size: contain;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  #root {
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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