import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
  font-family: 'Spoqa Han Sans Neo';
}

body {
  display: flex;
  justify-content: center;
  line-height: normal;
}

button {
  cursor: pointer;
}

@font-face {
    font-family: 'Spoqa Han Sans Neo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;
