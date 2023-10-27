import { api } from '../baseURL';

// 유저검색
export const searchUser = async (keyword) => {
  const { data } = await api.get(`/user/searchuser/?keyword=${keyword}`);
  return data;
};
