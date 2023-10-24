import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  font-family: 'Spoqa Han Sans Neo';
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
