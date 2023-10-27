import { api } from '../baseURL';

export const unfollowUser = async (accountname) => {
  const { data } = await api.delete('/profile/' + accountname + '/unfollow');
  return data;
};
