import { api } from '../baseURL';

export const readUserInfo = async () => {
  const { data } = await api.get('/user/myinfo', { timeout: 10000 });
  return data;
};
