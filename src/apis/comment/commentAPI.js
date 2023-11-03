import { api } from '../baseURL';

//댓글 작성
export const commentWriteAPI = async ({ postid, comment }) => {
  const response = await api.post(`/post/${postid}/comments`, {
    comment: { content: comment }
  });

  return response.data;
};

//댓글 목록
export const commentListAPI = async (postid) => {
  const result = await api.get(`/post/${postid}/comments`);
  return result.data;
};

//댓글 작성
// export const commentWriteAPI = async ({ postid, comment }) => {
//   console.log(postid);
//   console.log(comment);
//   const response = await api.post(`/post/${postid}/comments`, comment);

//   return response.data;
// };

// //댓글 목록
// export const commentListAPI = async (postid) => {
//   const result = await api.get(`/post/${postid}/comments`);
//   return result.data;
// };
