import { useMutation } from '@tanstack/react-query';
import { api } from '../baseURL';
import { postAsync } from '../methods';

// 회원가입
// export const createUser = async (userInfo) => {
//   const { data } = await axios.post('https://api.mandarin.weniv.co.kr//user', userInfo);
//   return data;
// };

// 이미지 업로드
export const createImage = async (image) => {
  const { data } = await api.post('/image/uploadfiles', image, { headers: { 'Content-Type': 'multipart/form-data' } });
  return `https://api.mandarin.weniv.co.kr/${data[0].filename}`;
};

// 이메일 중복검사
export const useEmailValidMutation = () => {
  return useMutation({
    mutationKey: ['emailvalid'],
    mutationFn: ({ path, data }) => postAsync(path, data)
  });
};

// 이메일 중복검사
// export const createEmailValid = async (email) => {
//   const { data } = await api.post('/user/emailvalid', email);
//   return data;
// };

// 계정 중복검사
export const createAccountNameValid = async (accountName) => {
  const { data } = await api.post('/user/accountnamevalid', accountName);
  return data;
};

export const createUser = async (userInfo) => {
  const url = 'https://api.mandarin.weniv.co.kr/user';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
