import React from 'react';
import * as S from './default.styled';
import { ReactComponent as Gamgul404Logo } from '../../images/home/icon-404.svg';
import { useNavigate } from 'react-router-dom';

export default function Default() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <S.DefaultLayout>
      <S.Styled>
        <Gamgul404Logo />
      </S.Styled>
      <S.P> 페이지를 찾을 수 없습니다. :( </S.P>
      <S.Button onClick={handleBackClick}>이전 페이지</S.Button>
    </S.DefaultLayout>
  );
}
