import { api } from '../baseURL';

// 이미지 업로드
export const createImage = async (image) => {
  const { data } = await api.post('/image/uploadfiles', image, { headers: { 'Content-Type': 'multipart/form-data' } });
  return `https://api.mandarin.weniv.co.kr/${data[0].filename}`;
};

// 이메일 중복검사
export const createEmailValid = async (email) => {
  const { data } = await api.post('/user/emailvalid', email);
  return data;
};

// 계정 중복검사
export const createAccountNameValid = async (accountName) => {
  const { data } = await api.post('/user/accountnamevalid', accountName);
  return data;
};

// 회원가입
export const createUser = async (userInfo) => {
  const { data } = await api.post('/user', userInfo);
  return data;
};
