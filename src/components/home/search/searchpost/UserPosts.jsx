import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { showEntirePosts } from '../../../../apis/home/entirePosts';
import UserProfile from '../../UserProfile';
import * as S from './userPosts.styled';

export default function EntirePosts({ searchResults }) {
  const { data, error } = useQuery({ queryFn: () => showEntirePosts(), queryKey: [''] });

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <S.DefaultLayout>
      {data?.posts
        .filter(
          (post) => post.content?.includes(searchResults) || String(post.image).split('🈳')[2]?.includes(searchResults)
        )
        .map((post, i) => String(post.image).split('🈳')[0] === 'ms7-3' && <UserProfile key={i} {...post} />)}
    </S.DefaultLayout>
  );
}
