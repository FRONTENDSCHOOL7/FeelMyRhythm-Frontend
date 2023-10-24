import React from 'react';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import WriteComment from '../../components/write/comment'
import * as S from './Write.styled';

export default function WritePage() {
  return (
    <S.WriteLayout>
      <Header />
      <WriteComment />
      <Footer />
    </S.WriteLayout>
  );
}
