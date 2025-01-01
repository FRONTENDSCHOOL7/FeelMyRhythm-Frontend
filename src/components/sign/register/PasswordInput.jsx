import React, { useState } from 'react';
import * as S from './passwordInput.styled';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

export default function PasswordInput({ password, setPassword, passwordRef, passwordValidState, state }) {
  const [passwordInputType, setPasswordInputType] = useState('password');

  const handleChangeUserInfo = (e) => {
    setPassword(e.target.value);
  };

  // 비밀번호 표시 여부
  const onClickPasswordVisible = (e) => {
    e.preventDefault();

    if (passwordInputType === 'password') setPasswordInputType('text');
    else if (passwordInputType === 'text') setPasswordInputType('password');
  };

  return (
    <>
      <S.InputBox>
        <S.SubContent>{state === 'original' ? '비밀번호' : '비밀번호 확인'}</S.SubContent>
        <S.CheckBox>
          <S.Input
            type={passwordInputType}
            placeholder={state === 'original' ? '비밀번호를 설정해 주세요.' : '설정한 비밀번호를 입력해주세요.'}
            ref={passwordRef}
            value={password}
            onChange={(e) => handleChangeUserInfo(e)}
          />
          <S.EyeButton onClick={(e) => onClickPasswordVisible(e)}>
            {passwordInputType === 'password' ? <BsEye /> : <BsEyeSlash />}
          </S.EyeButton>
        </S.CheckBox>
      </S.InputBox>
      <S.PasswordWarningContent>{passwordValidState}</S.PasswordWarningContent>
    </>
  );
}
