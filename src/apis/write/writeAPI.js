import { api } from '../baseURL';

export const createPost = async (content) => {
  const { data } = await api.post('/post', content);
  return data;
};
