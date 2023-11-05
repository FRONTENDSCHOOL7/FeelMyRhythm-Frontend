import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { showEntirePosts } from '../../../apis/home/entirePosts';
import UserProfile from '../UserProfile';
import * as S from './yesFollow.styled';

export default function FollowingPosts({ emojiState }) {
  const { data, error } = useQuery({ queryFn: () => showEntirePosts(), queryKey: [''] });

  return (
    <S.Defaultlayout>
      {data?.posts?.map(
        (post, i) =>
          String(post.image).split('🈳')[0] === 'ms7-3' &&
          (emojiState === '전체' || emojiState === '선택' || String(post.image).split('🈳')[4] === emojiState) && (
            <UserProfile key={i} {...post} />
          )
      )}
    </S.Defaultlayout>
  );
}
