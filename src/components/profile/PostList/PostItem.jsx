import React from 'react';
import * as S from './PostItem.styled';
import { useNavigate } from 'react-router-dom';
import UserProfile from '../../home/UserProfile';

export default function PostItem({ flag, post }) {
  const navigate = useNavigate();

  return (
    <S.PostBox $flag={flag} onClick={() => navigate('/post/' + post.id)}>
      {flag ? (
        <UserProfile key={post.author.username} {...post} />
      ) : (
        <S.albumImg src={String(post.image).split('🈳')[3]} />
      )}
    </S.PostBox>
  );
}
