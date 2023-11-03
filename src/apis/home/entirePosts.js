import { api } from '../baseURL';

// 게시글보기
export const showEntirePosts = async () => {
  const { data } = await api.get('/post?limit=700&skip=0');
  return data;
};
