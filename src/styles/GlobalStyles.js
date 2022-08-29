import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyles = createGlobalStyle`
  ${normalize()};

  * { 
    font-family: 'Spoqa Han Sans Neo', 'sans-serif'; 
  }

  html {
    line-height: 1;
    font-size: min(2.67vw, 14px);  
    letter-spacing: -0.025em;
  }

  h1, h2, h3, h4, h5, h6, p {
  margin: 0;
  padding: 0;
  }

  li, ul, ol, dl {
    list-style: none;
    padding: 0;
    margin: 0;
  } 

  [data-rsbs-overlay] {
  max-width: 480px !important;
  margin: 0 auto !important;
  }
`;

export default GlobalStyles;
