import React from 'react';
import * as S from './WritePage.styled';
import NavBar from '../../components/common/NavBar/NavBar';
import Write from '../../components/write/Write';

export default function WritePage() {
  return (
    <S.WritePageLayout>
      <NavBar />
      <Write />
    </S.WritePageLayout>
  );
}
