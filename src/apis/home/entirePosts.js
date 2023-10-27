import { api } from '../baseURL';

// 게시글보기
export const showEntirePosts = async () => {
  const { data } = await api.get('/post?limit=15&skip=0');
  return data;
};
