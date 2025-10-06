import { createGlobalStyle } from 'styled-components'
import boldBerry from './utils/colors';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    color: ${boldBerry.primary}; /* Default text color */
    background-color: ${boldBerry.background}; 
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;