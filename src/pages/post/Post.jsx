import React from 'react';
import * as S from './Post.styled';
import Header from '../../components/common/Header/Header';
import PostDetail from '../../components/post/PostDetail';

export default function Post() {
  return (
    <S.PostLayout>
      <Header />
      <PostDetail />
    </S.PostLayout>
  );
}
