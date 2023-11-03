import React, { useEffect, useRef, useState } from 'react';
import * as S from './signUp.styled';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { createEmailValid } from '../../../apis/sign/signUpAPI';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';

export default function SignUp() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    user: { email: '', password: '', username: '', accountname: '', intro: '' }
  });
  const { email, password } = userInfo.user;

  const [EmailValid, setEmailValid] = useState('');
  const [emailValidState, setEmailValidState] = useState('');
  const emailRef = useRef(null);

  const [passwordValidState, setPasswordValidState] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState('password');
  const passwordRef = useRef(null);

  const [isButtonState, setIsButtonState] = useState(false);

  // 유저 정보 onChange
  const handleChangeUserInfo = (e) => {
    e.target.type === 'email' && setUserInfo({ ...userInfo, user: { ...userInfo.user, email: e.target.value } });
    (e.target.type === 'password' || e.target.type === 'text') &&
      setUserInfo({ ...userInfo, user: { ...userInfo.user, password: e.target.value } });
  };

  // 이메일 중복확인 API
  const { mutate: mutateEmailValid } = useMutation({
    mutationFn: createEmailValid,
    onSuccess: ({ message }) => {
      setEmailValidState(message);
      message === '사용 가능한 이메일 입니다.' && setEmailValid(email);
    },
    onError: ({ response }) => setEmailValidState(response.data.message)
  });

  // 이메일 중복확인 함수
  const handleClickEmailValid = (e) => {
    e.preventDefault();

    if (email === '' || email.includes('@') === false || email.includes('.') === false) {
      setEmailValidState('잘못된 이메일 형식입니다.');
      return;
    }

    const responseData = { user: { email } };
    mutateEmailValid(responseData);
  };

  // 이메일 중복확인 유효성 검사
  useEffect(() => {
    if (email !== '' && EmailValid === email) {
      setEmailValidState('사용 가능한 이메일 입니다.');
    }
    if (emailValidState === '사용 가능한 이메일 입니다.' && EmailValid !== email) {
      setEmailValidState('');
    }
  }, [userInfo]);

  // 비밀번호 유효성 검사
  useEffect(() => {
    const regpw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;

    if (!regpw.test(password) && password !== '') {
      setPasswordValidState('비밀번호는 8~16자의 영문, 숫자, 특수문자가 포함되어야 합니다.');
    }
    if (regpw.test(password) && password !== '') {
      setPasswordValidState('');
    }
    password === '' && setPasswordValidState('');
  }, [userInfo]);

  // 유효성 검사에 따른 버튼 색상 변경
  useEffect(() => {
    if (emailValidState === '사용 가능한 이메일 입니다.' && password !== '' && passwordValidState === '') {
      setIsButtonState(true);
    } else {
      setIsButtonState(false);
    }
  }, [userInfo, passwordValidState]);

  // 비밀번호 표시 여부
  const onClickPasswordVisible = (e) => {
    e.preventDefault();

    if (isPasswordVisible) {
      setPasswordInputType('password');
      setIsPasswordVisible(!isPasswordVisible);
    } else if (!isPasswordVisible) {
      setPasswordInputType('text');
      setIsPasswordVisible(!isPasswordVisible);
    }
  };

  // 다음 페이지
  const onSubmitNextStep = (e) => {
    e.preventDefault();

    if (emailValidState !== '사용 가능한 이메일 입니다.') emailRef.current.focus();
    else if (password === '' || passwordValidState !== '') passwordRef.current.focus();
    else {
      window.localStorage.setItem('loginInfo', JSON.stringify(userInfo));
      navigate('/profilesetting');
    }
  };

  return (
    <S.SignUpLayout onSubmit={(e) => onSubmitNextStep(e)}>
      <S.Title>이메일로 회원가입</S.Title>

      <S.InputBox>
        <S.SubContent>이메일</S.SubContent>
        <S.CheckBox>
          <S.Input
            type='email'
            placeholder='이메일 주소를 입력해주세요.'
            ref={emailRef}
            onChange={(e) => handleChangeUserInfo(e)}
          />
          <S.CheckEmailButton
            valid={emailValidState === '사용 가능한 이메일 입니다.' ? 'success' : 'none'}
            onClick={(e) => handleClickEmailValid(e)}>
            {emailValidState === '사용 가능한 이메일 입니다.' ? <AiOutlineCheck /> : '중복 확인'}
          </S.CheckEmailButton>
        </S.CheckBox>
      </S.InputBox>

      <S.EmailWarningContent valid={emailValidState}>{emailValidState}</S.EmailWarningContent>

      <S.InputBox>
        <S.SubContent>비밀번호</S.SubContent>
        <S.CheckBox>
          <S.Input
            type={passwordInputType}
            placeholder='비밀번호를 설정해 주세요.'
            ref={passwordRef}
            onChange={(e) => handleChangeUserInfo(e)}
          />
          <S.EyeButton onClick={(e) => onClickPasswordVisible(e)}>
            {isPasswordVisible ? <BsEye /> : <BsEyeSlash />}
          </S.EyeButton>
        </S.CheckBox>
      </S.InputBox>
      <S.PasswordWarningContent>{passwordValidState}</S.PasswordWarningContent>

      <S.NextButton valid={isButtonState === true ? 'done' : 'none'}>다음</S.NextButton>
    </S.SignUpLayout>
  );
}
