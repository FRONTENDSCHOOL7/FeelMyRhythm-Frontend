import Router from './router/Router';
import { useQuery } from '@tanstack/react-query';
import { readUserInfo } from './apis/profile/myInfoAPI';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { atomMyInfo, atomThemeChange } from './store/store';
import { GlobalStyle } from './assets/style/GlobalStyle.styled';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './assets/theme/theme';
import { useEffect, useState } from 'react';
import { useGetMyProfileQuery } from './apis/profile/profileAPI';

function App() {
  const setMyInfo = useSetRecoilState(atomMyInfo);
  const [theme, setTheme] = useState('light');
  const themeChange = useRecoilValue(atomThemeChange);

  const { data } = useGetMyProfileQuery('/user');

  useEffect(() => {
    if (data) {
      console.log('data', data);
      setMyInfo(data);
    }
  }, [data]);

  // const { data } = useQuery({
  //   queryFn: () =>
  //     readUserInfo()
  //       .then(({ user }) => {
  //         setMyInfo(user);
  //         return user;
  //       })
  //       .catch((error) => error),
  //   queryKey: ['userInfo']
  // });

  const localTheme = localStorage.getItem('theme');

  useEffect(() => {
    if (localTheme) setTheme(localTheme);
    else {
      localStorage.setItem('theme', 'light');
    }
  }, [themeChange]);

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
