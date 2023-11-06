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
@font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
* {
  box-sizing: border-box;
  font-family: 'Pretendard';
}

body {
  line-height: normal;
  font-family: 'Pretendard';
  background-color: ${({ theme }) => theme.BodyBgColor};
}

button {
  cursor: pointer;
}
`;
