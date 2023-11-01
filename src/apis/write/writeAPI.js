import { api } from '../baseURL';

export const createPost = async (content) => {
  const { data } = await api.post('/post', content);
  return data;
};

export const updatePost = async ({ id, postContent }) => {
  console.log('통신', id, postContent);
  const { data } = await api.put(`/post/${id}`, postContent);
  return data;
};
