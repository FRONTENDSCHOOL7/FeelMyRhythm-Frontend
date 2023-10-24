import React from 'react';
import * as S from './PostItem.styled';

export default function PostItem({ flag }) {
  return (
    <S.PostBox $flag={flag}>
      <div></div>
    </S.PostBox>
  );
}
