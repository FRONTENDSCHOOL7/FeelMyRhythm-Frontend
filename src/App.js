import Router from './router/Router';
import { useQuery } from '@tanstack/react-query';
import { readUserInfo } from './apis/profile/myInfoAPI';
import { useSetRecoilState } from 'recoil';
import { atomMyInfo } from './store/store';
import { GlobalStyle } from './assets/style/GlobalStyle.styled';

function App() {
  const setMyInfo = useSetRecoilState(atomMyInfo);

  const { data } = useQuery({
    queryFn: () =>
      readUserInfo()
        .then(({ user }) => {
          setMyInfo(user);
          console.log(user);
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
