import React from 'react';
import * as S from './Post.styled';
import NavBar from '../../components/common/NavBar/NavBar';
import PostDetail from '../../components/post/PostDetail';

export default function Post() {
  return (
    <S.PostLayout>
      <NavBar />
      <PostDetail />
    </S.PostLayout>
  );
}
