import { api } from '../baseURL';

export const readFollowings = async (accountname) => {
  const { data } = await api.get('/profile/' + accountname + '/following');
  return data;
};
