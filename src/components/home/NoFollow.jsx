import React from 'react';
import * as S from './noFollow.styled';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as GamgulLogo } from '../../assets/images/home/symbol-logo-gray.svg';

export default function Default() {
  const navigate = useNavigate();
  const handleSearchClick = () => {
    navigate('/home/search');
  };

  return (
    <S.DefaultLayout>
      <S.StyledGamgulLogo>
        <GamgulLogo />
      </S.StyledGamgulLogo>
      <S.P>유저를 검색해 팔로우 해보세요!</S.P>
      <S.Button onClick={handleSearchClick}>검색하기</S.Button>
    </S.DefaultLayout>
  );
}
