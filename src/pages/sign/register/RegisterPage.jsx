import React, { useState } from 'react';
import * as S from './registerPage.styled';
import Title from '../../../components/sign/register/Title';
import ProfileImage from '../../../components/sign/register/ProfileImage';
export default function RegisterPage() {
  const [image, setImage] = useState('');

  return (
    <S.RegisterLayout>
      <Title />
      <ProfileImage setImage={setImage} />
    </S.RegisterLayout>
  );
}
