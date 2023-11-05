import React from 'react';
import * as S from './default.styled';
import FMR404Logo from '../../assets/images/home/icon-404.png';
import { useNavigate } from 'react-router-dom';

export default function Default() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <S.DefaultLayout>
      <S.StyledLogo>
        <img src={FMR404Logo} alt='404 Logo' />
      </S.StyledLogo>
      <S.P> 페이지를 찾을 수 없습니다. :( </S.P>
      <S.Button onClick={handleBackClick}>이전 페이지</S.Button>
    </S.DefaultLayout>
  );
}
