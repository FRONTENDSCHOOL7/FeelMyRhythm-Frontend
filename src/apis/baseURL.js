import axios from 'axios';

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
  withCredentials: true
});

// // API 유저 토큰 인터셉터
// api.interceptors.request.use((config) => {
//   // localStorage에서 토큰 가져오기
//   const accessToken = window.localStorage.getItem('accessToken');

//   // token이 존재하는 경우 header에 토큰 넣어서 보내주기
//   accessToken && (config.headers.Authorization = `Bearer ${accessToken}`);

//   return config;
// });
