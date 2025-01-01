import React, { useRef, useState } from 'react';
import * as S from './registerPage.styled';
import Title from '../../../components/sign/register/Title';
import ProfileImage from '../../../components/sign/register/ProfileImage';
import EmailInput from '../../../components/sign/register/EmailInput';
import PasswordInput from '../../../components/sign/register/PasswordInput';
import NickNameInput from './../../../components/sign/register/NickNameInput';
import IntroInput from './../../../components/sign/register/IntroInput';
import { useEmailRegister } from './../../../apis/sign/signAPI.js';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [nickname, setNickname] = useState('');
  const [intro, setIntro] = useState('');
  const [image, setImage] = useState('');

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordCheckRef = useRef(null);
  const nicknameRef = useRef(null);

  const [emailValidState, setEmailValidState] = useState('');
  const [passwordValidState, setPasswordValidState] = useState('');
  const [passwordCheckValidState, setPasswordCheckValidState] = useState('');
  const [nicknameValidState, setNicknameValidState] = useState('');

  const [isButtonState, setIsButtonState] = useState(false);

  const { mutate: emailRegisterMutate } = useEmailRegister();

  const onEmailRegister = (e) => {
    e.preventDefault();

    let form = new FormData();
    form.append('email', email);
    form.append('password', password);
    form.append('passwordCheck', passwordCheck);
    form.append('nickname', nickname);
    form.append('intro', intro);
    form.append('image', image);

    emailRegisterMutate({ path: '/user/emailregister', data: form });
  };

  return (
    <S.RegisterLayout>
      <Title />
      <ProfileImage setImage={setImage} />
      <EmailInput
        email={email}
        setEmail={setEmail}
        emailRef={emailRef}
        emailValidState={emailValidState}
        setEmailValidState={setEmailValidState}
      />
      <PasswordInput
        password={password}
        setPassword={setPassword}
        passwordRef={passwordRef}
        passwordValidState={passwordValidState}
        state='original'
      />
      <PasswordInput
        password={passwordCheck}
        setPassword={setPasswordCheck}
        passwordRef={passwordCheckRef}
        passwordValidState={passwordCheckValidState}
        state='check'
      />
      <NickNameInput
        nickname={nickname}
        setNickname={setNickname}
        nicknameRef={nicknameRef}
        nicknameValidState={nicknameValidState}
      />
      <IntroInput intro={intro} setIntro={setIntro} />
      <S.RegisterButton onClick={(e) => onEmailRegister(e)} valid={isButtonState === true ? 'done' : 'none'}>
        시작하기
      </S.RegisterButton>
    </S.RegisterLayout>
  );
}
