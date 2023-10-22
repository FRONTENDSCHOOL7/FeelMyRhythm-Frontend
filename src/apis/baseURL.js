import axios from 'axios';

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_API}`
});

// API 유저 토큰 인터셉터
api.interceptors.request.use((config) => {
  const accessToken = window.localStorage.getItem('accessToken');

  accessToken && (config.headers.Authorization = `Bearer ${accessToken}`);

  return config;
});
