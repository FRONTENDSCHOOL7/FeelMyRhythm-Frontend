import React from 'react';
import * as S from './signUp.styled';
import {useNavigate} from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();

  const onMoveLocation = (location) => {
    navigate(`/${location}`);
  };

  return (
    <S.SignUpLayout>
      <S.Title>이메일로 회원가입</S.Title>
      <S.InputBox>
        <S.SubContent>이메일</S.SubContent>
        <S.Input type='email' placeholder='이메일 주소를 입력해주세요.' />
      </S.InputBox>
      <S.WarningContent>*이미 가입된 이메일 주소입니다.</S.WarningContent>
      <S.InputBox>
        <S.SubContent>비밀번호</S.SubContent>
        <S.Input type='password' placeholder='비밀번호를 설정해 주세요.' />
      </S.InputBox>
      <S.WarningContent>*비밀번호는 6자 이상이어야 합니다.</S.WarningContent>
      <S.Button
        onClick={() => {
          onMoveLocation('profilesetting');
        }}>
        다음
      </S.Button>
    </S.SignUpLayout>
  );
}
