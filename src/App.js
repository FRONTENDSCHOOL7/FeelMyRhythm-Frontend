import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Router from './router/Router';
import { useQuery } from '@tanstack/react-query';
import { readUserInfo } from './apis/profile/myInfoAPI';
import { useSetRecoilState } from 'recoil';
import { atomMyInfo } from './store/store';

const GlobalStyle = createGlobalStyle`
${reset}

body{
  display: flex;
  justify-content: center;
}

button{
  cursor: pointer;
}

@font-face {
    font-family: 'Spoqa Han Sans Neo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;

function App() {
  const setMyInfo = useSetRecoilState(atomMyInfo);

  const { data } = useQuery({
    queryFn: () =>
      readUserInfo()
        .then(({ user }) => {
          setMyInfo(user);
          return user;
        })
        .catch((error) => error),
    queryKey: ['userInfo']
  });

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
