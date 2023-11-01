import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}

@font-face {
    font-family: 'Orbit-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/Orbit-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

* {
  background-color:${({ theme }) => theme.bgColor};
  color:${({ theme }) => theme.textColor};
  box-sizing: border-box;
  font-family: 'Orbit-Regular';
}

body {
  display: flex;
  justify-content: center;
  line-height: normal;
  font-family: 'Orbit-Regular';
}

button {
  cursor: pointer;
}
`;
