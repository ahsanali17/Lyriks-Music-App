import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, &::after {
    display: border-box;
  }

  html, body {
    height: 100%;
  }
`;

export default GlobalStyles;
