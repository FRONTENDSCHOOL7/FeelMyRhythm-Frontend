import { api } from '../baseURL';

// 로그인
export const createLogin = async (userInfo) => {
  const { data } = await api.post('/user/login', userInfo);
  return data;
};
