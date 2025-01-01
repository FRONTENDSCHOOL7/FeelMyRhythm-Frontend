import { useMutation } from '@tanstack/react-query';
import { postAsync } from '../methods';

// 이메일 검증
export const useEmailValidMutation = () => {
  return useMutation({
    mutationKey: ['emailvalid'],
    mutationFn: ({ path, data }) => postAsync(path, data)
  });
};

export const useEmailRegister = () => {
  return useMutation({
    mutationKey: ['emailregister'],
    mutationFn: ({ path, data }) => postAsync(path, data)
  });
};
