import React from 'react';
import * as S from './noFollow.styled';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as FeelMyRhythmLogo } from '../../../assets/images/home/feelmyrhythmlogo.svg';

export default function Default() {
  const navigate = useNavigate();
  const handleSearchClick = () => {
    navigate('/home/searchuser');
  };

  return (
    <S.DefaultLayout>
      <S.StyledLogo>
        <FeelMyRhythmLogo />
      </S.StyledLogo>
      <S.SuggestContent>유저를 검색해 팔로우 해보세요!</S.SuggestContent>
      <S.Button onClick={handleSearchClick}>검색하기</S.Button>
    </S.DefaultLayout>
  );
}
