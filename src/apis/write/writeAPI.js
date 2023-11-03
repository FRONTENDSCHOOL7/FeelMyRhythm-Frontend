import { api } from '../baseURL';

// 게시글 생성
export const createPost = async (content) => {
  const { data } = await api.post('/post', content);
  return data;
};

// 게시글 수정
export const updatePost = async ({ id, postContent }) => {
  const { data } = await api.put(`/post/${id}`, postContent);
  return data;
};

// 게시글 삭제
export const deletePost = async (id) => {
  const { data } = await api.delete(`/post/${id}`);
  return data;
};
