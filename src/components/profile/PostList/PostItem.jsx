import React from 'react';
import * as S from './PostItem.styled';
import UserProfile from '../../home/UserProfile';

export default function PostItem({ flag, post }) {
  return (
    <>
      <S.PostBox $flag={flag}>
        {flag ? (
          <UserProfile key={post.author.username} {...post} />
        ) : (
          <S.albumImg src={String(post.image).split('🈳')[3]} />
        )}
      </S.PostBox>
    </>
  );
}
