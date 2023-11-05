import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { showEntirePosts } from '../../apis/home/entirePosts';
import UserProfile from './UserProfile';
import * as S from './entirePosts.styled';

export default function EntirePosts({ emojiState }) {
  const { data, error, isPending } = useQuery({ queryFn: () => showEntirePosts(), queryKey: ['allPost'] });

  console.log(isPending);
  console.log(data);

  return (
    <S.DefaultLayout>
      {data?.posts?.map(
        (post, i) =>
          String(post.image).split('🈳')[0] === 'ms7-3' &&
          (emojiState === '전체' || emojiState === '선택' || String(post.image).split('🈳')[4] === emojiState) && (
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
