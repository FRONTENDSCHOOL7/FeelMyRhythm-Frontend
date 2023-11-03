import { api } from '../baseURL';

export const readDetailPost = async (postid) => {
  const { data } = await api.get(`/post/${postid}`);
  return data;
};
