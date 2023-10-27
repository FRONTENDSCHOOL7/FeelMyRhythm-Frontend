import { api } from '../baseURL';

export const readFollowers = async (accountname) => {
  const { data } = await api.get('/profile/' + accountname + '/follower');
  return data;
};
