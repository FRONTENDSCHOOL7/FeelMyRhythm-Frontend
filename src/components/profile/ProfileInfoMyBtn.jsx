import React from 'react';
import * as S from './ProfileInfo.styled';

export default function ProfileMyInfoBtn() {
  return (
    <>
      <S.LinkButton $width='120px'>프로필 수정</S.LinkButton>
      <S.LinkButton $width='100px'>상품 등록</S.LinkButton>
    </>
  );
}
