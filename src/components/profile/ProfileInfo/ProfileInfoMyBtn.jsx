import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './ProfileInfo.styled';

export default function ProfileMyInfoBtn() {
  return (
    <>
      <Link to='/'>
        <S.LinkButton $width='120px'>프로필 수정</S.LinkButton>
      </Link>
    </>
  );
}
