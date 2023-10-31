import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { showEntirePosts } from '../../apis/home/entirePosts';
import UserProfile from './UserProfile';
import * as S from './entirePosts.styled';

export default function EntirePosts() {
  const { data, error } = useQuery({ queryFn: () => showEntirePosts(), queryKey: [''] });

  console.log(data);

  return (
    <S.DefaultLayout>
      {data?.posts?.map(
        (post, i) =>
          String(post.image).split('🈳')[0] === 'ms7-3' && (
            <UserProfile
              key={i}
              author={post.author}
              content={post.content}
              image={post.image}
              createdAt={post.createdAt}
              comments={post.comments}
              heartCount={post.heartCount}
              id={post._id}
            />
          )
      )}
    </S.DefaultLayout>
  );
}
