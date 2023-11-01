import React from 'react';
import * as S from './randing.styled';
import logo from '../../assets/images/randingPage/logo.png';
import { useNavigate } from 'react-router-dom';

export default function RandingPage() {
  const navigate = useNavigate();

  // navigate 및 회원정보 초기화
  const onMoveLocation = (location) => {
    navigate(`/${location}`);
  };

  return (
    <S.RandingPageLayout>
      <S.ImgBox>
        <S.LogoImg src={logo} />

        <S.Title>Feel My Rhythm</S.Title>
      </S.ImgBox>
      <S.BottomBoxBox>
        <S.BottomBox></S.BottomBox>
        <S.SignBox>
          <S.SignContent onClick={() => onMoveLocation('signin')}>이메일로 로그인</S.SignContent>
          <S.PipeContent>|</S.PipeContent>
          <S.SignContent onClick={() => onMoveLocation('signup')}>회원가입</S.SignContent>
        </S.SignBox>
      </S.BottomBoxBox>
    </S.RandingPageLayout>
  );
}
