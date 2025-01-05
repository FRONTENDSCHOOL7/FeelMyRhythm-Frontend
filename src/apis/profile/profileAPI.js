import { useQuery } from '@tanstack/react-query';
import { getAsync } from '../methods';

export const useGetMyProfileQuery = (path) => {
  return useQuery({
    queryKey: ['getMyProfile'],
    queryFn: () => getAsync(path)
  });
};
