//GET /post/:accountname/userpost
import { api } from '../baseURL';

export const readUserPost = async (accountname) => {
  const { data } = await api.get('/post/' + accountname + '/userpost');
  return data;
};
