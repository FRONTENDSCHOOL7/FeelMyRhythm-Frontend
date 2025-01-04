import { useMutation } from '@tanstack/react-query';
import { postAsync } from '../methods';

// 이메일 검증
export const useEmailValidMutation = () => {
  return useMutation({
    mutationKey: ['emailvalid'],
    mutationFn: ({ path, data }) => postAsync(path, data)
  });
};

// 이메일 회원가입
export const useEmailRegister = () => {
  return useMutation({
    mutationKey: ['emailregister'],
    mutationFn: ({ path, data }) => postAsync(path, data)
  });
};

// 이메일 로그인
export const useEmailLoginMutaion = () => {
  return useMutation({
    mutationKey: ['emailLogin'],
    mutationFn: ({ path, data }) => postAsync(path, data)
  });
};
