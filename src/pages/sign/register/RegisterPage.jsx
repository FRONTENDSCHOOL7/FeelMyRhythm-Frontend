import React, { useRef, useState } from 'react';
import * as S from './registerPage.styled';
import Title from '../../../components/sign/register/Title';
import ProfileImage from '../../../components/sign/register/ProfileImage';
import EmailInput from '../../../components/sign/register/EmailInput';
export default function RegisterPage() {
  const [image, setImage] = useState('');

  const [email, setEmail] = useState('');
  const emailRef = useRef(null);
  const [emailValidState, setEmailValidState] = useState('');

  return (
    <S.RegisterLayout>
      <Title />
      <ProfileImage setImage={setImage} />
      <EmailInput
        email={email}
        emailRef={emailRef}
        setEmail={setEmail}
        emailValidState={emailValidState}
        setEmailValidState={setEmailValidState}
      />
    </S.RegisterLayout>
  );
}
