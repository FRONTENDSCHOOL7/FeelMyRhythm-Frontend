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
  console.log(result);
  return result.data;
};

//댓글 삭제
export const commentDeleteAPI = async ({ id, commentId }) => {
  const result = await api.delete(`post/${id}/comments/${commentId}`);
  return result.data;
};

//댓글 신고
export const commentReportAPI = async (postid, commentid) => {
  const result = await api.post(`post/${postid}/comments/${commentid}/report`);
  return result.data.comment;
};
