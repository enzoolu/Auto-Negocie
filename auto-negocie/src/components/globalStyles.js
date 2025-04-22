import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  img {
    max-width: 100%;
    display: block;
  };

  span {
    display: block;
  }

  .destaque {
    color: ${({ theme }) => theme.colors.verdeTitulos};
  }
`;

export default GlobalStyle;