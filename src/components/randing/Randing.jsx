import React from 'react';
import * as S from './randing.styled';
import logo from '../../images/randingPage/logo_main.svg';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { atomUserInfo } from '../../store/store';

export default function RandingPage() {
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(atomUserInfo);

  // navigate 및 회원정보 초기화
  const onMoveLocation = (location) => {
    if (location === 'signup') {
      setUserInfo({ user: { email: '', password: '', username: '', accountname: '', intro: '' } });
      navigate(`/${location}`);
    }
  };

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
          <S.SignContent onClick={() => onMoveLocation('signin')}>이메일로 로그인</S.SignContent>
          <S.PipeContent>|</S.PipeContent>
          <S.SignContent onClick={() => onMoveLocation('signup')}>회원가입</S.SignContent>
        </S.SignBox>
      </S.BottomBoxBox>
    </S.RandingPageLayout>
  );
}
