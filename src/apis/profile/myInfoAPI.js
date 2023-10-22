import { api } from '../baseURL';

// 로그인
export const readUserInfo = async () => {
  const { data } = await api.get('/user/myinfo');
  return data;
};
