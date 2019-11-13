import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset};
  
  html, body, #root {
    height: 100%;
  }
  
  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 16px;
  }
  
  p {
    line-height: 1.2;
  }
  
  @media screen and (max-width: 480px){
    html {
      font-size: 14px;
    }
  }
`;
