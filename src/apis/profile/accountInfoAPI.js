import { api } from '../baseURL';

export const readAccountInfo = async (accountname) => {
  const { data } = await api.get('/profile/' + accountname);
  return data;
};
