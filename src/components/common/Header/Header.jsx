import React from 'react';
import * as S from './Header.styled';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import search from '../../../images/header/icon_search.svg';
import arrowLeft from '../../../images/header/icon-arrow-left.svg';

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  console.log(pathname);

  const handleSearchClick = () => {
    navigate('/home/search');
  };

  return (
    <S.HeaderLayout>
      {pathname === '/home' && (
        <>
          <S.HeaderTitle>감귤마켓 피드</S.HeaderTitle>
          <S.SearchImg src={search} onClick={handleSearchClick} />
        </>
      )}
      {pathname === '/write' && (
        <>
          <S.ArrowLeftImg src={arrowLeft} />
          <S.SaveBtn>저장</S.SaveBtn>
        </>
      )}
    </S.HeaderLayout>
  );
}
