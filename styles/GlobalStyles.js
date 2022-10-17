import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, &::after {
    display: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html, body, #__next {
    height: 100vh;
    width: 100%;
  }

  p, h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto Serif', serif;
    font-weight: 400;
  }

  ::-webkit-scrollbar { 
    display: none;
  }
`;

export default GlobalStyles;
