import React from 'react';
import * as S from './PostItem.styled';
import UserProfile from '../../home/UserProfile';
import { useNavigate } from 'react-router-dom';

export default function PostItem({ flag, post }) {
  const navigate = useNavigate();
  return (
    <>
      <S.PostBox $flag={flag}>
        {flag ? (
          <UserProfile key={post.author.username} {...post} />
        ) : (
          <S.albumImg onClick={() => navigate('/post/' + post.id)} src={String(post.image).split('🈳')[3]} />
        )}
      </S.PostBox>
    </>
  );
}
