import React from 'react';
import * as S from './randing.styled';
import logo from '../../images/randingPage/logo_main.svg';

export default function RandingPage() {
  return (
    <S.RandingPageLayout>
      <S.ImgBox>
        <S.LogoImg src={logo} />
      </S.ImgBox>
      <S.BottomBoxBox>
        <S.BottomBox>
          <S.KakaoBtn>카카오톡 계정으로 로그인</S.KakaoBtn>
          <S.GoogleBtn>구글 계정으로 로그인</S.GoogleBtn>
          <S.FacebookBtn>페이스북 계정으로 로그인</S.FacebookBtn>
        </S.BottomBox>
        <S.SignBox>
          <S.SignContent>이메일로 로그인</S.SignContent>
          <S.PipeContent>|</S.PipeContent>
          <S.SignContent>회원가입</S.SignContent>
        </S.SignBox>
      </S.BottomBoxBox>
    </S.RandingPageLayout>
  );
}
