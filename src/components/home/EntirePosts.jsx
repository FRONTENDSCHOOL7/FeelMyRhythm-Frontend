import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { showEntirePosts } from '../../apis/home/entirePosts';
import UserProfile from './UserProfile';
import * as S from './entirePosts.styled';
import Loading from '../common/Loading/Loading';

export default function EntirePosts({ emojiState }) {
  let [loading, setLoading] = useState(false);
  const { data, error } = useQuery({ queryFn: () => showEntirePosts(), queryKey: ['allPost'] });

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(true);
    }, 1000);
  });

  if (data && loading)
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
  return <Loading />;
}
