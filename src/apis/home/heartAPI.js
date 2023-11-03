import { async } from 'q';
import { api } from '../baseURL';

export const createHeart = async (postid) => {
  const { data } = await api.post(`/post/${postid}/heart`);
  return data;
};

export const createUnHeart = async (postid) => {
  const { data } = await api.delete(`/post/${postid}/unheart`);
  return data;
};

export const createBookMark = async (product) => {
  const { data } = await api.post(`/product`, product);
  return data;
};

export const deleteBookMark = async (id) => {
  const { data } = await api.delete(`/product/${id}`);
  return data;
};
