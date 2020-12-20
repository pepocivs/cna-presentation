import { createGlobalStyle } from "styled-components";
import theme from "theme/";

// Global style
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'coda';
    src: local('coda'), url(/assets/fonts/Coda-Regular.ttf) format('truetype');
  }
  html {
    box-sizing: border-box;
    font-size: 14px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: ${theme.fonts.mainFont};
    line-height: 1.5;
    font-size: 15px;
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.white};
    color: ${({theme}) => theme.colors.dark};
  }
  a, a:visited, a:hover, a:active {
    text-decoration: none;
    color: inherit;
  }
  button, button:hover, button:focus {
    border: none;
    color: inherit;
    outline:0;
  }
  h3, h4 {
    border-bottom: 2px solid ${({theme}) => theme.colors.secondary_color};
  }
  .general-shadow {
    -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
    border-radius: 2px 2px 2px 2px;
    -moz-border-radius: 2px 2px 2px 2px;
    -webkit-border-radius: 2px 2px 2px 2px;
  }

  .directors-quote {
    font-style: oblique;
    color: #000000;
    font-weight: bold;
  }

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 0.95; }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 0.95; }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 0.95; }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 0.95; }
  }
`;

export default GlobalStyle;
