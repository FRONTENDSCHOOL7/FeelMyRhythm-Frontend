import React, { useRef, useState } from 'react';
import * as S from './registerPage.styled';
import Title from '../../../components/sign/register/Title';
import ProfileImage from '../../../components/sign/register/ProfileImage';
import EmailInput from '../../../components/sign/register/EmailInput';
import PasswordInput from '../../../components/sign/register/PasswordInput';
export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [emailValidState, setEmailValidState] = useState('');
  const [passwordValidState, setPasswordValidState] = useState('');

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
      />
    </S.RegisterLayout>
  );
}
