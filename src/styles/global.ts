import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body{
    font-family: 'Josefin Sans', sans-serif;
    margin:0px;
    padding:0px;
    background-color: #312e38;
  }
  
  a{text-decoration-style: none;}

  textarea{
    font-family: 'Roboto Slab', serif;
  }
  input, textarea{
    
    border: 0;
    background: transparent;
    outline:0;
  }

  h1,h2,h3,h4{
    margin:0px;
  }
`;