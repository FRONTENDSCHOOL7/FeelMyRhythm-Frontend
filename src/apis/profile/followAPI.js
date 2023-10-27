import { api } from '../baseURL';

export const followUser = async (accountname) => {
  const { data } = await api.post('/profile/' + accountname + '/follow');
  return data;
};
