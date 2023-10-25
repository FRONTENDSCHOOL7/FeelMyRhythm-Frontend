import React from 'react';
import NavBar from '../../components/common/NavBar/NavBar';
import WriteComment from '../../components/write/comment/Comment';
import CommentWrite from '../../components/write/comment/CommentWrite';
import * as S from './WritePage.styled';

export default function WritePage() {
  return (
    <S.WriteLayout>
      <NavBar />
      <WriteComment />
      <CommentWrite />
    </S.WriteLayout>
  );
}
