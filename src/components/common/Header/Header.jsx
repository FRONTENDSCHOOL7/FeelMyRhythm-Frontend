import React from 'react';
import * as S from './header.styled';
import { useNavigate } from 'react-router-dom';
import search from '../../../images/header/icon_search.svg';

export default function Header() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/home/search');
  };
  return (
    <S.HeaderLayout>
      <S.HeaderTitle>감귤마켓 피드</S.HeaderTitle>
      <S.SearchImg src={search} onClick={handleSearchClick} />
    </S.HeaderLayout>
  );
}
