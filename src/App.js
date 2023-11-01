import Router from './router/Router';
import { useQuery } from '@tanstack/react-query';
import { readUserInfo } from './apis/profile/myInfoAPI';
import { useSetRecoilState } from 'recoil';
import { atomMyInfo } from './store/store';
import { GlobalStyle } from './assets/style/GlobalStyle.styled';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './assets/theme/theme';

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
      <ThemeProvider theme={lightTheme}>
        {/* <ThemeProvider theme={darkTheme}> */}
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
