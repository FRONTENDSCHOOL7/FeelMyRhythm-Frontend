import React from 'react';
import * as S from './signIn.styled';
import {useLocation, useNavigate} from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();

  const onMoveLocation = (location) => {
    navigate(`/${location}`);
  };

  return (
    <S.SignInLayout>
      <S.Title>로그인</S.Title>

      <S.InputBox>
        <S.SubContent>이메일</S.SubContent>
        <S.Input type='email' placeholder='이메일 주소를 입력해주세요.' />
      </S.InputBox>
      <S.WarningContent>*존재하지 않는 이메일입니다.</S.WarningContent>

      <S.InputBox>
        <S.SubContent>비밀번호</S.SubContent>
        <S.Input type='password' placeholder='비밀번호를 설정해 주세요.' />
      </S.InputBox>
      <S.WarningContent>*비밀번호가 일치하지 않습니다.</S.WarningContent>

      <S.Button
        onClick={() => {
          onMoveLocation('home');
        }}>
        로그인
      </S.Button>

      <S.EmailSignUp
        onClick={() => {
          onMoveLocation('signup');
        }}>
        이메일로 회원가입
      </S.EmailSignUp>
    </S.SignInLayout>
  );
}
