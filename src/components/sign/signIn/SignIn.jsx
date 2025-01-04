import React, { useEffect, useRef, useState } from 'react';
import * as S from './signIn.styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { createLogin } from '../../../apis/sign/signInAPI';
import { useQueryClient } from '@tanstack/react-query';
import { useEmailLoginMutaion } from '../../../apis/sign/signAPI';

export default function SignIn() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const [userInfo, setUserInfo] = useState({ email: '', password: '' });

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [warningEmail, setWarningEmail] = useState('');
  const [warningPassword, setWarningPassword] = useState('');
  const [warningApiResult, setWarningApiResult] = useState('');

  const [isButtonState, setIsButtonState] = useState(false);

  const { mutate: emailLoginMutate } = useEmailLoginMutaion();

  // 이메일로 회원가입 Navigate
  const onNavigateSiginUp = () => {
    navigate('/signUp');
  };

  // 유저 정보 onChange
  const handleChangeUserInfo = (e) => {
    e.target.type === 'email' && setUserInfo({ ...userInfo, ...userInfo.user, email: e.target.value });
    e.target.type === 'password' && setUserInfo({ ...userInfo, password: e.target.value });
  };

  // 로그인 버튼
  const onSubmitLogin = (e) => {
    e.preventDefault();
    const { email, password } = userInfo;
    if (email === '') {
      emailRef.current.focus();
      setWarningEmail('이메일을 입력해주세요.');
      setWarningPassword('');
    } else if (password === '') {
      passwordRef.current.focus();
      setWarningEmail('');
      setWarningPassword('비밀번호를 입력해주세요');
    } else if (email !== '' && password !== '') {
      setWarningEmail('');
      setWarningPassword('');
      emailLoginMutate(
        { path: '/auth/emaillogin', data: userInfo },
        {
          onSuccess: () => {
            queryClient.invalidateQueries('userInfo');
            navigate('/home');
          },
          onError: ({ response }) => {
            setWarningApiResult(response.data.error);
          }
        }
      );
    }
  };

  // 유효성 검사에 따른 버튼 색상 변경
  useEffect(() => {
    if (userInfo.email !== '' && userInfo.password !== '') {
      setIsButtonState(true);
    } else {
      setIsButtonState(false);
    }
  }, [userInfo]);

  return (
    <S.SignInLayout>
      <S.Title>로그인</S.Title>

      <S.InputBox>
        <S.SubContent>이메일</S.SubContent>
        <S.Input
          type='email'
          placeholder='이메일 주소를 입력해주세요.'
          ref={emailRef}
          onChange={(e) => handleChangeUserInfo(e)}
        />
      </S.InputBox>
      <S.WarningContent>{warningEmail}</S.WarningContent>

      <S.InputBox>
        <S.SubContent>비밀번호</S.SubContent>
        <S.Input
          type='password'
          placeholder='비밀번호를 설정해 주세요.'
          ref={passwordRef}
          onChange={(e) => handleChangeUserInfo(e)}
        />
      </S.InputBox>
      <S.WarningContent>{warningPassword}</S.WarningContent>

      <S.Button
        valid={isButtonState === true ? 'done' : 'none'}
        onClick={(e) => {
          onSubmitLogin(e);
        }}>
        로그인
      </S.Button>
      <S.WarningContent>{warningApiResult}</S.WarningContent>

      <S.EmailSignUp onClick={onNavigateSiginUp}>이메일로 회원가입</S.EmailSignUp>
    </S.SignInLayout>
  );
}
