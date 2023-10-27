import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { showEntirePosts } from '../../apis/home/entirePosts';
import UserProfile from './UserProfile';
import * as S from './entireposts.styled';

export default function EntirePosts() {
  const { data, error } = useQuery({ queryFn: () => showEntirePosts(), queryKey: [''] });

  useEffect(() => {
    console.log('작동하고있니?!?!?!?!');
  }, [data]);

  return (
    <S.DefaultLayout>
      {data &&
        Array.isArray(data.posts) &&
        data.posts.map((post) => <UserProfile key={post.author.username} {...post} />)}
    </S.DefaultLayout>
  );
}
