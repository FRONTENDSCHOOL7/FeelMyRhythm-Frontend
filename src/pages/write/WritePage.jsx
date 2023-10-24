import React from 'react';
import Header from '../../components/common/Header/Header';
import WriteComment from '../../components/write/comment/Comment';
import CommentWrite from '../../components/write/comment/CommentWrite';
import * as S from './WritePage.styled';

export default function WritePage() {
  return (
    <S.WriteLayout>
      <Header />
      <WriteComment />
      <CommentWrite />
    </S.WriteLayout>
  );
}
