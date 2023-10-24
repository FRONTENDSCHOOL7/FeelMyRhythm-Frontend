import React from 'react';
import * as S from './CommentWrite.styled';
import userImg from '../../../images/write/profile-img.png';

export default function CommentWrite() {
  return (
    <S.CommentWriteLayout>
      <S.UserImg src={userImg} />
      <S.CommentEdit>
        <S.BottomInput placeholder='댓글을 남겨보세요' />
        <S.PostBtn type='button'>게시</S.PostBtn>
      </S.CommentEdit>
    </S.CommentWriteLayout>
  );
}
