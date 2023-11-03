import { api } from '../baseURL';

export const readUserInfo = async () => {
  const { data } = await api.get('/user/myinfo', { timeout: 10000 });
  return data;
};

export const updateProfile = async (userInfo) => {
  const { data } = await api.put('/user', userInfo);
  return data;
};
