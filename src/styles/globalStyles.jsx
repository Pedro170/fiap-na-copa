import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
  body {
    min-height: 100vh;
    background: #FFFBFE;
    font-family: 'Roboto', sans-serif;
    color: #333;
    overflow-x: hidden;
  }
  
  a {
    color: #333;
  }

  img {
    display: block;
    max-width: 100%;
  }
`

export default GlobalStyles;