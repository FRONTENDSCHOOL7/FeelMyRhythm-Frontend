import React from 'react';
import * as S from './Header.styled';
import search from '../../../images/header/icon_search.svg';

export default function Header() {
  return (
    <S.HeaderLayout>
      <S.HeaderTitle>감귤마켓 피드</S.HeaderTitle>
      <S.SearchImg src={search} />
    </S.HeaderLayout>
  );
}
