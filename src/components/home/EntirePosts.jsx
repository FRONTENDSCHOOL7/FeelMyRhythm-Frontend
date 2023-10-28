import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { showEntirePosts } from '../../apis/home/entirePosts';
import UserProfile from './UserProfile';
import * as S from './entireposts.styled';

export default function EntirePosts() {
  const { data, error } = useQuery({ queryFn: () => showEntirePosts(), queryKey: [''] });

  useEffect(() => {}, [data]);

  return (
    <S.DefaultLayout>
      {data &&
        Array.isArray(data.posts) &&
        data.posts.map((post, i) => String(post.image).split('🈳')[0] === 'ms7-3' && <UserProfile key={i} {...post} />)}
    </S.DefaultLayout>
  );
}
