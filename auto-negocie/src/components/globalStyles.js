import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  body {
    font-family: 'Fira Sans', sans-serif !important;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  img {
    max-width: 100%;
    display: block;
  }

  span {
    display: block;
  }

  .destaque {
    color: ${({ theme }) => theme.colors.verdeTitulos};
  }
`;

export default GlobalStyle;